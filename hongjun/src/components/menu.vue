<template>
  <div class="mainm">
    <ul>
      <li is='router-link' v-for="list in listdata" class="mainlist" :to="list.rout">
        <img :src="list.icon" alt="" height="30px" width="30px">
        <span>{{list.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      listdata:[
        {
          name:'首页',
          rout:'/firstpage',
          icon:require('../assets/firstpage.png')
        },{
          name:'地图',
          rout:'/map',
          icon:require('../assets/map.png')
        },{
          name:'纪实',
          rout:'/book',
          icon:require('../assets/book.png')
        },{
          name:'我的',
          rout:'/mypage',
          icon:require('../assets/book.png')
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .mainm
    background: #999
    
    & ul
      width 100%
  .mainlist
    display flex
    height 75px
    width 100%
    justify-content center
    flex-direction: column;
    align-items center
    cursor pointer
    &:hover
      background #acacac
    & span  
      display block
      color #fff
      margin-top 5px
      font-size 13px
  

  
</style>

