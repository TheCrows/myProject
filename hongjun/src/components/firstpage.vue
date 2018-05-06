<template>
  <div class="firpage" :style="firpagestyle">
    <img src="@/assets/title.png" alt="" class="title">
    <span class="sectitle">人类历史上的伟大奇迹</span>

    <div class="block">
      <el-carousel height="100%">
        <el-carousel-item>
          <img src="@/assets/tit1.jpg" width="100%" alt="" srcset="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/tit2.jpg" width="100%" alt="" srcset="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/tit3.jpg" width="100%" alt="" srcset="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
// let Swiper=require('swiper')
// import Swiper from 'swiper'
export default {
  data(){
    return{
      firpagestyle:{
        // background:'url(' + require('../assets/tit1.jpg') + ')',
        // 'background-repeat': 'no-repeat',
        // 'background-size': 'cover',
        // 'background-position':'center'
        }
    }
  },
  created(){
    // setTimeout(() => {
    //   this.$router.push('map')
    // }, 6000);
  }
}
</script>
<style lang="css" scoped>
.firpage {
  position :relative;
  overflow: hidden;
  
} 
  
.title{
  position :absolute;
  animation: titletrans 3s;
  top :100px;
  left :50%;
  width :500px;
  margin-left :-250px;
  animation-fill-mode:forwards;
  z-index: 2;
}    
.sectitle{
  font-size: 26px;
  font-weight: 900;
  position: absolute;
  right: 30%;
  opacity: 0;
  top :450px;
  animation: secondtrans 2s;
  animation-delay:2s;
  animation-fill-mode:forwards;
  z-index: 2;
  color: #fff
}

@keyframes titletrans
  {
  from {
    opacity: 0;
    top :50px;
    left :50%;
    width :800px;
    margin-left :-400px
  }
  to {
    opacity: 1;
    top :100px;
    left :50%;
    width :500px;
    margin-left :-250px
  }
}
@keyframes secondtrans
  {
  from {
    opacity: 0;
    top :450px;
  }
  to {
    opacity: 1;
    top :390px;
  }
}
  

.block{
  height: 100%;
  width: 100%;
  z-index: 0
}
.el-carousel{
  height: 100%;
}

</style>


