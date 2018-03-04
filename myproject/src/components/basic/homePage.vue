<template>
  <div class="home-page">
      <div style='width:730px; height:3000px'>111</div>
      <user-side></user-side>
      
  </div>
</template>
<script>
import userSide from './userSide'
export default {
  name:'homePage',
  data(){
      return{

      }
  },
  components:{userSide}
}
</script>
<style lang="scss">
    .home-page{
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-wrap: nowrap;
    }
</style>
