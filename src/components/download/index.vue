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
					<li><a href="javascript:;" class="arrow" @click="toggleBtn(null)">All / 全部</a></li>
					<li><a href="javascript:;" class="arrow" @click="toggleBtn(0)">Android / 安卓</a></li>
					<li><a href="javascript:;" class="arrow" @click="toggleBtn(1)">Web / 前端</a></li>
					<li><a href="javascript:;" class="arrow" @click="toggleBtn(2)">UI / 美工</a></li>
					<li><a href="javascript:;" class="arrow" @click="toggleBtn(3)">Game / 游戏</a></li>
					<li><a href="javascript:;" class="arrow" @click="toggleBtn(4)">Python / Python</a></li>
					<li><a href="javascript:;" class="arrow" @click="toggleBtn(5)">Other / 其他</a></li>
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
import downBus from '@/utils/eventBus'
export default {
  name: "download",
  components: {
		downList
	},
	methods:{
		toggleBtn:function(val){
			downBus.$emit("downType",val);
		}
	}
}
</script>
