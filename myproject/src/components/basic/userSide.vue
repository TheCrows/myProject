<template>
  <div class="user-side"  :class="{'user-fixed':isfixed}">
    <div class="user-side-head">
        9999
    </div> 
    <div class="user-side-info">
        9999
    </div>   
  </div>
</template>
<script>
export default {
  name:'userSide',
  data(){
      return{
          isfixed:false
      }
  },
  mounted(){
      window.addEventListener('scroll', ()=>{
          if((document .documentElement.scrollTop ? document .documentElement.scrollTop : document .body.scrollTop)<=850){
              this.isfixed=false
          }else{this.isfixed=true}
      })
  },
}
</script>
<style lang="scss">
    .user-side{
      width: 270px;

      .user-side-head{
        height: 800px;
        background: rgb(165, 91, 91);
      }
      .user-side-info{
        height: 1000px;
        background: rgb(91, 132, 165);
      }
    }
    .user-fixed{
      position: fixed;
      top: -745px;
      right: 0px;
      z-index: 98;
    }
</style>
