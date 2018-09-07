<template>
    <div class="container">
        <navbar></navbar>
        <app-main></app-main>
        <footbar></footbar>
    </div>
    <!-- <router-view/> -->
</template>

<script>
    import {
        Navbar,
        AppMain,
        Footbar
    } from './component'
    export default {
        name: "laylout",
        components: {
            Navbar,
            AppMain,
            Footbar
        },
    };
</script>
<style>
.container{
    padding:0 !important;
}
</style>