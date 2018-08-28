<template>
  <!-- 博文列表 -->
  <div>
    <Aside />
    <div class="figure-box">
      <figure v-for="item in portList" :key="item._id" class="grid col-one-quarter mq2-col-one-half">
        <router-link :to="{name:'PortfolioDetail',params:{obj:item}}">
          <img v-lazy="img_port+item.cover" alt="图片不见了，很尴尬，哈哈">
          <span class="zoom"></span>
        </router-link>
        <figcaption>
          <router-link class="arrow" v-text="item.title" :to="{name:'PortfolioDetail',params:{obj:item}}"></router-link>
          <!-- <a href="javascript:;" class="arrow"  v-text="item.title"></a> -->
          <p v-text="item.intro"></p>
        </figcaption>
      </figure>
    </div>
    <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
  </div>
</template>

<script>
  import {
    getList
  } from '@/api/portfolio'
  import store from '@/store'
  import Aside from '../component/menu'
  import pagination from '@/component/pagination'
  export default {
    name: "portfoliolist",
    components: {
      Aside,
      'v-pagination': pagination
    },
    data: function() {
      return {
        img_port: "http://localhost:3000",
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
      this.fetchData()
    },
    methods: {
      fetchData(_id) {
        let that = this;
        let limit = that.limit;
        let token = store.getters.token;
        let id = _id || null;
        let preNum = that.preNum;
        let nextNum = that.nextNum;
        nextNum = parseInt(that.nextNum);
        preNum = parseInt(that.preNum);
        getList(id, preNum, nextNum, limit, token).then(response => {
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
</style>

