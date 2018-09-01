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
                        {{isLogin ? '欢迎您：'+username :'Login/登录'}}
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
        data: function() {
            return {
                isLogin: getToken() ? true : false,
                username: store.getters.name
            }
        }
    }
</script>

<style scoped>
    .router-link-active {
        color: #0078CF;
    }
</style>
