<template>
  <div class="home-page">
      <div class="home-main">
          <add-story></add-story>
      </div>
      <user-side></user-side>
      
  </div>
</template>
<script>
import userSide from './userSide'
import addStory from './addstory'
export default {
  name:'homePage',
  data(){
      return{

      }
  },
  components:{userSide,addStory}
}
</script>
<style lang="scss">
.home-main{
    width: 755px;
    margin-right: 25px;
    
}
    .home-page{
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-wrap: nowrap;
    }
</style>
