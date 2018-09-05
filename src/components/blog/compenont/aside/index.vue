<template>
      <!-- 右侧状态栏 -->
    <aside class="grid col-one-quarter mq2-col-one-third mq3-col-full blog-sidebar">

			<div class="widget">
				<input id="search" type="search" name="search" value="Type and hit enter to search" >
			</div>
<!--
			<div class="widget">
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.</p>
			</div> -->

			<!--
				 热门文章
				后期可优化
			-->
			<!-- <div class="widget">
			<h2>Popular Posts</h2>
			<ul>
				<li><a href="#" title="">Nullam porttitor elementum ligula</a></li>
				<li><a href="#" title="">Vestibulum interdum</a></li>
				<li><a href="#" title="">Quisque venenatis ante sit amet dolor</a></li>
				<li><a href="#" title="">Aliquam adipiscing libero vitae leo</a></li>
				<li><a href="#" title="">Sed accumsan quam ac tellus</a></li>
			</ul>
			</div> -->

			<div class="widget">
			<h2>Categories</h2>
			<ul>
				<li @click="toggleBtn(null)"><a href="javascript:;">All / 全部</a></li>
			 	<li @click="toggleBtn(0)"><a href="javascript:;">Android / 安卓</a></li>
				<li @click="toggleBtn(1)"><a href="javascript:;">Web / 前端</a></li>
				<li @click="toggleBtn(2)"><a href="javascript:;">Python / Python</a></li>
				<li @click="toggleBtn(3)"><a href="javascript:;">Games / 游戏</a></li>
				<li @click="toggleBtn(4)"><a href="javascript:;">UI / 美工</a></li>
				<li @click="toggleBtn(5)"><a href="javascript:;">Other / 其他</a></li>
			</ul>
			</div>

			<div class="widget">
			<h2>Meta</h2>
			<ul>
				<li><a href="">Entries (RSS)</a></li>
				<li><a href="">Comments (RSS)</a></li>
			</ul>
			</div>
		</aside>
</template>
<script>
import store from '@/store'
import blogBus from '@/utils/eventBus'
export default {
	data:function(){
		return {}
	},
	methods:{
		toggleBtn:function(val){
			blogBus.$emit("blogType",val);
		}
	}
}
</script>

