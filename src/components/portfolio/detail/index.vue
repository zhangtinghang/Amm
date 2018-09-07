<template>
  <div class="self-enter-animate">
    <aside class="grid col-one-quarter mq2-col-one-third mq3-col-full">
      <h6>文章标题</h6>
      <p class="mbottom" v-text="articleData.title">
      </p>
      <h6>团队名称</h6>
      <p class="halfmbottom" v-text="articleData.team_name"></p>
  
      <h6>简介</h6>
      <ul class="halfmbottom">
        <li v-text="articleData.intro"></li>
      </ul>
  
      <h6>Technology</h6>
      <ul class="halfmbottom">
        <li v-for="(items, index) in technology" :key="index" v-text="items"></li>
      </ul>
  
      <h6>Links</h6>
      <ul class="mbottom">
        <li v-for="(linkItem, index) in links" :key="index">
          <a :href="linkItem.url" v-text="linkItem.name" target="_blank"></a> - <span v-text="linkItem.url"></span></li>
        <!-- <li v-text="articleData.links"></li> -->
      </ul>
  
      <h6>Testimonial</h6>
      <li v-for="(item, index) in testimonial" :key="index">
        <a :href="item.url" v-text="item.name" target="_blank"></a> - <span v-text="item.url"></span></li>
  
    </aside>
  
    <section class="grid col-three-quarters mq2-col-two-thirds mq3-col-full">
  
      <!-- <figure class="">
    			<a href="#" >
    			<img src="img/img.jpg" alt="" >
    			</a>
    			<figcaption>
    				<p>Lorem ipsum dolor set amet</p>
    			</figcaption>
    		</figure> -->
      
        <figure class="" v-html="articleData.content"></figure>
    </section>
  </div>
  <!--main-->
</template>

<script>
  export default {
    name: "portfolioDetail",
    data: function() {
      return {
        articleData: '',
        links: [],
        testimonial: [],
        technology: []
      }
    },
    mounted: function() {
      this.articleData = this.$route.params.obj;
      this.technology = this.articleData.technology.split(",");
  
      var links_name = this.articleData.links.name.split(",");
      var links_url = this.articleData.links.url.split(",");
      this.links = ArrToObj(links_name, links_url);
      //组合成对象
      var testimonial_name = this.articleData.testimonial.name.split(",");
      var testimonial_url = this.articleData.testimonial.url.split(",");
      this.testimonial = ArrToObj(testimonial_name, testimonial_url);
      // this.links = links.split(",");
      //如果没有数据 返回列表页 防止用户在当前页面刷新时，无数据报错
      if (!this.articleData) {
        this.$router.push({
          name: 'PortfolioList'
        })
      }
    }
  }
  
  function ArrToObj(arr1, arr2) {
    var Arr = [];
    for (var i = 0; i < arr1.length; i++) {
      var obj = {};
      obj.name = arr1[i];
      obj.url = arr2[i];
      Arr.push(obj);
    }
    return Arr;
  }
</script>

<style>
  .work-page figure {
    text-align: left;
  }
  
  /* .grid-wrap {
    margin-left: 0;
  } */
  
  
  /* .grid{
      margin-left: -3em;
    } */
</style>
