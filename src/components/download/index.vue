<template>
  <div class="about-page main grid-wrap">

		<header class="grid col-full">
		<hr>
			<p class="fleft">Download</p>
		</header>
		<aside class="grid col-one-quarter mq2-col-full">
			<p class="mbottom">实验室内部文件下载。</p>
			<!-- 暂时感觉无需分类，暂定如此 -->
			<!-- <menu>
				<ul>
					<li><a href="#navteam" class="arrow">Our team</a></li>
					<li><a href="#navphilo" class="arrow">Our philosophy</a></li>
					<li><a href="#navplace" class="arrow">Our place</a></li>
					<li><a href="#navother" class="arrow">Our lorem</a></li>
				</ul>
			</menu> -->
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
