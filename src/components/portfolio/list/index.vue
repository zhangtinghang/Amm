<template>
  <!-- 博文列表 -->
  <div>
    <Aside />
    <noContent v-if="total == 0"></noContent>
    <div v-if="total != 0" class="figure-box">
      <transition name="el-fade-in-linear">
      <figure v-for="item in portList" :key="item._id" class="grid col-one-quarter mq2-col-one-half">
        <router-link :to="{name:'PortfolioDetail',params:{obj:item}}">
              <img v-lazy="img_port+item.cover" alt="图片不见了，很尴尬，哈哈" class="item-cover">
        </router-link>
        <figcaption>
          <router-link class="arrow" v-text="item.title" :to="{name:'PortfolioDetail',params:{obj:item}}"></router-link>
          <!-- <a href="javascript:;" class="arrow"  v-text="item.title"></a> -->
          <p v-text="item.intro"></p>
        </figcaption>
      </figure>
      </transition>
    </div>
    <v-pagination v-if="total != 0" class="portfolio_page" :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
  </div>
</template>

<script>
  import {
    getList
  } from '@/api/portfolio'
  import store from '@/store'
  import Aside from '../component/menu'
  import pagination from '@/component/pagination'
  import portBus from '@/utils/eventBus'
  import noContent from '@/component/noContent'
  export default {
    name: "portfoliolist",
    components: {
      Aside,
      'v-pagination': pagination,
      'noContent': noContent
    },
    data: function() {
      return {
        img_port: process.env.STATIC_PORT,
        portList: '',
        count: 0,
        nextNum: 2,
        preNum: 1,
        limit: 5,
        total: 5, // 记录总条数
        display: 5, // 每页显示条数
        current: 1, // 当前的页数s
      }
    },
    created() {
      let that = this;
      that.fetchData(),
      portBus.$on('portType',function(message){
        that.fetchData(null, message)
    })
    },
    methods: {
      fetchData(_id, categoryType) {
        let that = this;
        let limit = that.limit;
        let token = store.getters.token;
        let id = _id || null;
        let category = categoryType || null;
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
.figure-box:after{
  content:'';
  height:0;
  clear: both;
  display: block;
  visibility: hidden;
}
.figure-box{
  margin-bottom: 20px;
}
figure > a {
    display: block;
    height: 100%;
    height: 180px;
    overflow: hidden;
    position: relative;
    border-top: 1px solid #DDD;
    padding-top: 1em;
}

.item-cover {
  position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	margin:auto;
}


</style>
<style>
.portfolio_page > ul{
  float: right;
  margin: 0;
}
</style>

