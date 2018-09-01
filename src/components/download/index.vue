<template>
  <div class="about-page main grid-wrap">

		<header class="grid col-full">
		<hr>
			<p class="fleft">Download</p>
		</header>
		<aside class="grid col-one-quarter mq2-col-full">
			<p class="mbottom">实验室内部文件下载。</p>
			<!-- 暂时感觉无需分类，暂定如此 -->
			<menu>
				<ul>
					<li><a href="#" class="arrow">Open / 公开/</a></li>
					<li><a href="#" class="arrow">Match / 比赛</a></li>
					<li><a href="#" class="arrow">Android / 安卓</a></li>
					<li><a href="#" class="arrow">Web / 前端/</a></li>
					<li><a href="#" class="arrow">UI / 美工</a></li>
					<li><a href="#" class="arrow">Game / 游戏</a></li>
					<li><a href="#" class="arrow">Python / Python</a></li>
				</ul>
			</menu>
		</aside>

		<section class="grid col-three-quarters mq2-col-full">
			<img src="../../assets/team.jpg" alt="" >

			<!-- 下载列表 -->
      <downList></downList>
		</section>

	</div> <!--main-->
</template>
<script>
import downList from './list/index'
export default {
  name: "download",
  components: {
		downList
	}
}
</script>
