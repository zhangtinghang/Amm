<template>
  <section class="app-main">
      <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }  
}
</script>

<style scoped>
.app-main {
  /* 84 = navbar + tags-view = 50 +34 */
  min-height: calc(100vh - 21.5rem);
  position: relative;
  overflow: hidden;
}
</style>