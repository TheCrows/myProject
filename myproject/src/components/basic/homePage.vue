<template>
  <div class="home-page">
      <div class="home-main">
          <add-story></add-story>
        <info-card v-for="data in infoCardData" :key="data.id" :cardData=data></info-card>
      </div>
      <user-side></user-side>
      <!-- <div class="mask"></div> -->
  </div>
</template>
<script>
import userSide from './userSide'
import addStory from './addstory'
import infoCard from './infoCard'
export default {
  name:'homePage',
  data(){
      return{
          
      }
  },
  computed:{
      infoCardData(){
          return this.$store.state.infoCardData
      }
  },
  components:{userSide,addStory,infoCard}
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
    .mask{
        height: 100%;
        width: 100%;
        position: fixed;
        background: rgba(180, 180, 180, 0.342);
        left: 0;
        top: 0;
        z-index: 100;
    }
</style>
