<template>
  <div class="blog-page main grid-wrap">
    <div class="blogLeft grid col-three-quarters mq2-col-two-thirds mq3-col-full">
      <header class="grid col-full">
        <hr>
        <router-link :to="{ name: 'Bloglist'}">
          <p class="fleft">Blog / 博文</p>
        </router-link>
      </header>
      <router-view></router-view>
    </div>
    <Aside></Aside>
  </div>
</template>
<script>
import blogList from './list/index'
import Aside from './compenont/aside/index'
export default {
  data: function () {
    return {
      blogData: [],
      blogId: '',
      count: []
    }
  },
  components: {
    blogList,
    Aside
  }
}
</script>

<style scoped>
.blogLeft{
  overflow:auto;
}
</style>


