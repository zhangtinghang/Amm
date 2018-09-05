<template>
    <!-- 侧边栏 -->
    <aside class="grid col-one-quarter mq2-col-full">
        <p class="mbottom">作品集XXXXX我我发顺丰萨福克拉法基阿发解放路费</p>
        <menu>
            <a class="arrow buttonactive" @click="toggleBtn(null)">All</a><br>
            <a class="arrow" @click="toggleBtn(0)">Android design</a><br>
            <a class="arrow" @click="toggleBtn(1)">Web design</a><br>
            <a class="arrow" @click="toggleBtn(2)">Python design</a><br>
            <a class="arrow" @click="toggleBtn(3)">Games design</a><br>
            <a class="arrow" @click="toggleBtn(4)">UI design</a><br>
        </menu>
    </aside>
</template>
<script>
import portBus from '@/utils/eventBus'
export default {
    methods:{
		toggleBtn:function(val){
			portBus.$emit("portType",val);
		}
	}
}
</script>

