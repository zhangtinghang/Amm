<template>
    <header id="navtop">
        <a href="javascript:;" class="logo fleft">
            <img src="@/assets/logo.png" alt="Designa Studio">
        </a>
    
        <nav class="fright">
            <ul>
                <li>
                    <router-link to="/home" exact>
                        Home / 主页
                    </router-link>
                </li>
            </ul>
            <ul>
                <li>
                    <router-link to="/blog">
                        Blog / 博文
                    </router-link>
                </li>
            </ul>
            <ul>
                <li>
                    <router-link to="/portfolio">
                        Portfolio / 作品集
                    </router-link>
                </li>
            </ul>
            <ul>
                <li>
                    <router-link to="/download">
                        Download / 下载
                    </router-link>
                </li>
            </ul>
            <ul>
                <li>
                    <router-link to="/login">
                        {{loginObj ? '欢迎您：'+usernameObj :'Login/登录'}}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    import {
        getToken
    } from '@/utils/auth' // 验权
    import store from '@/store'
    export default {
        name: 'Navbar',
        computed:{
            loginObj(){
                return store.getters.token? true : false
            },
            usernameObj(){
                return store.getters.name
            } 
        }
    }
</script>

<style scoped>
    .router-link-active {
        color: #0078CF;
    }
</style>
