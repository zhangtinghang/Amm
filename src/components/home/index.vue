<template>
  <div class="home-page main">
	<section class="grid-wrap" >
		<header class="grid col-full">
			<hr>
			<p class="fleft">Home / 主页</p>
			<!-- <a href="about.html" class="arrow fright">see more infos / 查看更多消息</a> -->
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

	<!-- <section class="grid-wrap" >
		<header class="grid col-full">
			<hr>
			<p class="fleft">Home / 最新动态</p>
			<a href="about.html" class="arrow fright">see more infos / 查看更多消息</a>
		</header>
		<div class="slider grid col-one-collapse mq2-col-full">
			<el-collapse accordion class="collapse-list">
				<el-collapse-item title="反馈 Feedback">
					<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
					<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
				</el-collapse-item>
				<el-collapse-item title="效率 Efficiency">
					<div>简化流程：设计简洁直观的操作流程；</div>
					<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
					<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
				</el-collapse-item>
				<el-collapse-item title="可控 Controllability">
					<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
					<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
				</el-collapse-item>
			</el-collapse>
		</div>
	</section> -->
	
	<!-- <div class="copyrights">Collect from <a href="http://www.cssmoban.com/" >免费网站模板</a></div> -->
	<section class="services grid-wrap">
		<header class="grid col-full">
			<hr>
			<p class="fleft">Department / 部门</p>
			<!-- <a href="services.html" class="arrow fright">see more infos / 查看更多资料</a> -->
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

.collapse-list:last-child{
	border-bottom: none;
}
</style>


