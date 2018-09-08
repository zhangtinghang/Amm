<template>

<div class="list-item">
    <!-- 正文部分 -->
    <transition appear name="el-zoom-in-top">
    <section v-loading="loading">
      <noContent v-if="total == 0"></noContent>
      
        <article v-if="total != 0" class="post" v-for="item in blogData" :key="item._id">
          <h2><router-link :to="{name:'BlogDetail',params:{obj:item}}">{{ item.title }}</router-link></h2>		
          <div class="meta">
            <p>Posted on <span class="time">{{item.updateTime | timeString}}</span> by <a href="#" class="fn"><span v-if="item.user" v-text="item.user.username"></span><span v-else>未知</span></a> in <a href="#" class="cat">{{item.category | category}}</a>
            <!-- with <a href="#" class="comments-link">42 comments</a>. -->
            </p>
          </div>
          <div class="entry">
            <p v-text="item.intro">文章内容</p>
          </div>
          <footer>
            <router-link :to="{name:'BlogDetail',params:{obj:item}}" class="more-link">Continue reading…</router-link>
          </footer>
        </article>
      <v-pagination v-if="total != 0" class="list_page" :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
		</section>
    </transition>
    
</div>

</template>
<script>
import { getList } from '@/api/blog'
import store from '@/store'
import pagination from '../compenont/pagination'
import { seleSwitch } from '@/utils/index'
import blogBus from '@/utils/eventBus'
import noContent from '@/component/noContent'
export default {
  data: function () {
    return {
      blogData:'',
      count:0,
      nextNum:2,
      preNum:1,
      limit:5,
      total: 5,     // 记录总条数
      display: 5,   // 每页显示条数
      current: 1,   // 当前的页数
      loading: true,
    }
  },
  created() {
    var that = this;
    this.fetchData();
    blogBus.$on('blogType',function(message){
      that.fetchData(null, message)
    })
  },
  components:{
    'v-pagination': pagination,
    'noContent': noContent
  },
  methods:{
    //请求数据
    fetchData(_id, categoryType) {
      let that = this;
      let limit = that.limit;
      let token = store.getters.token;
      let id = _id || null;
      let category = categoryType;
      let preNum = that.preNum;
      let nextNum = that.nextNum;
      nextNum = parseInt(that.nextNum);
      preNum = parseInt(that.preNum);
      getList(id, preNum, nextNum, limit, token, category).then(response => {
        that.blogData = response.data;
        that.total = response.count;
        that.loading = false;
        if(_id){
          that.preNum = nextNum;
        }
      })
    },
    pagechange:function(currentPage){
       this.currentFun(currentPage);
     },
    currentFun(val){
      let that = this;
      that.nextNum = val;
      let _id = null;
      if(that.preNum < that.nextNum){
        _id = that.blogData[that.blogData.length-1]._id;        
      }else{
        _id = that.blogData[0]._id;
      }
      that.fetchData(_id);
    },
  },
  filters:{
    category:function(value){
       return seleSwitch(value);
    },
    timeString(time) {
      const date2 = new Date(time);
      // var localeString = date2.toLocaleString();
      return date2.toLocaleString();
      console.log(date2.toLocaleString())
    }
  },
  beforeLeave: function(el){
    console.log('将要离开动画',el)
  }
}
</script>
<style scoped>
.pagination{
  width: 100% !important;
}

.list-item{
  padding-left:3em;
}
</style>
<style>
.list_page > ul{
  margin:0;
}
</style>
