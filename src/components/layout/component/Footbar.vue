<template>
    <!-- 底部导航栏 -->
        <div class="divide-top">
            <footer class="grid-wrap">
                <ul class="grid col-one-third social">
                    
                    <li><a target="_blank" href="http://nsu.edu.cn">Chengdu Neusoft University</a></li>
                    <li><a target="_blank" href="javascript:;">Github</a></li>
                    <li><a target="_blank" href="javascript:;">Wechat</a></li>
                    <li><a href="javascript:;">&copy 2017-{{nowTime}} 移动MM All Rights Reserved</a></li>
                </ul>
                <div class="up grid col-one-third ">
                    <a href="#navtop" title="Go back up">&uarr;</a>
                </div>
    
                <nav class="grid col-one-third ">
                    <ul>
                        <li><router-link to="/home" exact>Home</router-link></li>
                        <li><router-link to="/blog">Blog</router-link></li>
                        <li><router-link to="/portfolio">Portolio</router-link></li>
                        <li><router-link to="/download">Download</router-link></li>
                        <div><a target="_blank" href="http://www.miibeian.gov.cn">蜀ICP备18017868号</a></div>
                    </ul>
                </nav>
            </footer>
        </div>
</template>
<script>
export default {
    name:'Footbar',
    data(){
        return {
            nowTime:new Date().getFullYear()
        }
    }
}
</script>
<style scoped>
footer{
    margin-bottom: 0;
}
</style>


