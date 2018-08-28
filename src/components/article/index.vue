<template>
  	<figure class="grid col-one-quarter mq2-col-one-half">
        <a href="javascript:;" @click="comeDetail(id)" :id="id">
        <img :src="img_port+cover" alt="图片不见了，很尴尬，哈哈">
        <span class="zoom"></span>
        </a>
        <figcaption>
            <a href="javascript:;" class="arrow" @click="comeDetail(id)" v-text="title" :id="id"></a>
            <p v-text="intro"></p>
        </figcaption>
    </figure>
</template>
<script>
export default {
  data: function () {
    return {
      img_port: ''
    }
  },
  created: function(){
    this.img_port = img_port
  },
  methods: {
    comeDetail: function(id){
      console.log(id)
      this.$emit('articleId',id);
    }
  }
}
</script>

