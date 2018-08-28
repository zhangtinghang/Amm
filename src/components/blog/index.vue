<template>
  <div class="blog-page main grid-wrap">
    <div class="blogLeft">
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
  },
   created() {
    // this.$http.post(ajax_port+"/public/blog/getBlog",{
    //   limit:5,
    //   skip:0
    // }).then(response => {
    //   response = response.data;
    //   if(response.success == true){
    //     this.blogData = response.data.data;
    //     let count = response.data.count;
    //     this.count = splitStr(count);
    //   }
    // });
  },
  // methods:{
    // blogTap: function(id){
    //   var data = selectData(this.blogData,id);
    //   this.$router.push({ name: 'BlogDetail', params:{'blogData':data}})
    // }
  // }
}

// function selectData(Arr,id){
//   for(var i=0;i<Arr.length;i++){
//     if(Arr[i]._id == id){
//       return Arr[i];
//     }
//   }
// }

// function splitStr(count){
//   var arr = [];
//   var num =Math.ceil( count/10);
//   for(var i=0;i<num;i++){
//     arr.push(i+1)
//   }
//   return arr;
// }
</script>

<style scoped>

</style>


