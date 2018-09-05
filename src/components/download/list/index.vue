<template>
  <div>
    <transition name="el-fade-in-linear">
      <article id="navteam" v-for="item in portList" :key="item._id">
        <h2><a href="#">{{item.title}}</a></h2>
        <p class="item-date"><span>下载日期：{{item.endTime | parseTime('{y}-{m}-{d}')}} ---- {{item.endTime | parseTime('{y}-{m}-{d}')}}</span><span>发布人：{{item.user.username}}</span>  <span>发布日期：{{item.updateTime | parseTime('{y}-{m}-{d} {h}:{i}')}}</span></p>
        <p>{{item.content}}</p>
        <p>下载地址：
          <router-link :to="item.links.url">{{item.links.name}}</router-link>
        </p>
      </article>
    </transition>
    <v-pagination class="download_page" :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
  </div>
</template>

<script>
  import {
    getList
  } from '@/api/download'
  import store from '@/store'
  import pagination from '@/component/pagination'
  import { parseTime } from '@/utils/index'
  import downBus from '@/utils/eventBus'
  export default {
    components: {
      'v-pagination': pagination
    },
    data: function() {
      return {
        portList: '',
        count: 0,
        nextNum: 2,
        preNum: 1,
        limit: 5,
        total: 5, // 记录总条数
        display: 5, // 每页显示条数
        current: 1, // 当前的页数
      }
    },
    filters:{
      parseTime:parseTime
    },
    created() {
      this.fetchData();
      var that = this;
      downBus.$on('downType',function(message){
        that.fetchData(null, message)
      })
    },
    methods: {
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
          that.portList = response.data;
          that.total = response.count;
          if (_id) {
            that.preNum = nextNum;
          }
        })
      },
      pagechange: function(currentPage) {
        this.currentFun(currentPage);
      },
      currentFun(val) {
        let that = this;
        that.nextNum = val;
        let _id = null;
        if (that.preNum < that.nextNum) {
          _id = that.blogData[that.blogData.length - 1]._id;
        } else {
          _id = that.blogData[0]._id;
        }
        that.fetchData(_id);
      },
    }
  }
</script>
<style scoped>
.item-date{
  display: flex;
  justify-content: space-between;
}
</style>
<style>
.download_page > ul{
  margin: 0;
  float: right;
}
</style>
