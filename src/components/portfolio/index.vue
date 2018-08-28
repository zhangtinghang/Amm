<template>
  <div class="works-page main grid-wrap">
    <div class="blogLeft">
      <header class="grid col-full">
        <hr>
        <router-link :to="{ name: 'PortfolioList'}">
          <p class="fleft">Portfolio / 作品集</p>
        </router-link>
      </header>
        <router-view></router-view>
      </div>
    </div>
</template>
<script>

export default {
  name: "portfolio",
  data: function () {
    return {
      articleData: '',
      articleId: ''
    }
  }
}
</script>
