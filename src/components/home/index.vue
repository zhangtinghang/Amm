<template>
  <div class="home-page main">
	<section class="grid-wrap" >
		<header class="grid col-full">
			<hr>
			<p class="fleft">Home / 主页</p>
			<a href="about.html" class="arrow fright">see more infos / 查看更多消息</a>
		</header>

		<div class="grid col-one-half mq2-col-full">
			<h1>移动创新俱乐部 <br>
				Mobile innovation</h1>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit.
			</p>
		</div>

		<!-- 首页轮播图模块，维护可直接添加或者删除。
			后期可做成遍历本地轮播图文件，达到动态渲染目的。
		-->
		   <div class="slider grid col-one-half mq2-col-full">
        <div class="flexslider">
          <div class="slides">
            <keep-alive>
              <slide></slide>
            </keep-alive>
          </div>
        </div>
		   </div>

		 </section>
	<!-- <div class="copyrights">Collect from <a href="http://www.cssmoban.com/" >免费网站模板</a></div> -->
	<section class="services grid-wrap">
		<header class="grid col-full">
			<hr>
			<p class="fleft">Department / 部门</p>
			<a href="services.html" class="arrow fright">see more infos / 查看更多资料</a>
		</header>

		<article class="grid col-one-third mq3-col-full">
			<aside>01</aside>
			<h5>Android development / 安卓开发</h5>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.</p>
		</article>

		<article class="grid col-one-third mq3-col-full">
			<aside>02</aside>
			<h5>Web development / web开发</h5>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.</p>
		</article>

		<article class="grid col-one-third mq3-col-full">
			<aside>03</aside>
			<h5>Python development / python 开发</h5>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.</p>
		</article>
		<article class="grid col-one-third mq3-col-full">
			<aside>04</aside>
			<h5>games development / 游戏开发</h5>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.</p>
		</article>
		<article class="grid col-one-third mq3-col-full">
			<aside>05</aside>
			<h5>UI design / UI设计</h5>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.</p>
		</article>
		<article class="grid col-one-third mq3-col-full">
			<aside>06</aside>
			<h5>open / 开拓</h5>
			<p>未完待续。。。期待你的加入，期待你的开拓！</p>
		</article>
	</section>

<section class="works grid-wrap">
	<header class="grid col-full">
			<hr>
			<p class="fleft">Portfolio / 作品集</p>
			<a href="works.html" class="arrow fright">see more infos / 查看更多作品</a>
		</header>

			<!-- <figure class="grid col-one-quarter mq2-col-one-half">
				<a href="work1.html">
				<img src="img/img.jpg" alt="">
				<span class="zoom"></span>
				</a>
				<figcaption>
					<a href="work1.html" class="arrow">Project page!</a>
					<p>Lorem ipsum dolor set amet</p>
				</figcaption>
			</figure> -->
      <articleList></articleList>
	</section>
	</div> <!--main-->
</template>
<script>
import slide from "../slide/index";
import articleList from "@/components/article/index";
export default {
  name: "home",
  components: {
    slide,
    articleList
  }
};
</script>

<style scoped>
.flexslider .slides > .slide{
  display: block !important;
}
</style>


