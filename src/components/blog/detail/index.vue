<template>
	<div>
		<section class="grid col-three-quarters mq2-col-two-thirds mq3-col-full">
				<article class="post post-single">
					<h2><a href="#" class="post-title" v-text="blogData.title"></a></h2>
					<div class="meta">
						<p>Posted on <span class="time">{{blogData.updateTime | timeString}}</span> by <a href="#" class="fn"><span v-if="blogData.user" v-text="blogData.user.username"></span><span v-else>未知</span></a> in <a href="#" class="cat">{{blogData.category | category}}</a>
            <!-- with <a href="#" class="comments-link">42 comments</a>. -->
            </p>
					</div>
					<div class="entry" >
						<p v-html="blogData.blog">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Donec porttitor ligula eu dolor. Maecenas vitae nulla consequat libero cursus venenatis. Nam magna enim, accumsan eu, blandit sed, blandit a, eros.</p>
          </div>
				</article>
		</section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      blogData: ''
    }
  },
  // created:function(){
  //   console.log();
  //   this.blogData = this.$route.params.obj;
  // },
  mounted: function(){
    this.blogData = this.$route.params.obj;
    //如果没有数据 返回列表页 防止用户在当前页面刷新时，无数据报错
    if(!this.blogData){
      this.$router.push({ name: 'blogList'})
    }
  },
  computed:{
    articleContent:function () {

    }
  },
  filters:{
    category:function(value){
      switch (value) {
        case 0:
          value = 'android / 安卓'
          break;
        case 1:
          value = 'web / 前端开发'
          break;
        case 2:
          value = 'python /python开发'
          break;
        case 3:
          value = 'games / 游戏'
          break;
        case 4:
          value = 'UI / UI设计'
          break;
        default:
          value = 'other / 其他'
          break;
      }
       return value;
    },
    timeString(time) {
      const date2 = new Date(time);
      // var localeString = date2.toLocaleString();
      return date2.toLocaleString();
      console.log(date2.toLocaleString())
    }
  }
}
</script>
<style scoped>
.entry{
  text-align: left;
}

</style>


