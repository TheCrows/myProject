<template>
  <div class="user-side">
    <div class="user-side-head">
        <img src="../../assets/img/userico.jpg" alt="">
        <span class="big-username">TheCrows</span>
        <span class="my-bio">这里是我的签名</span></br>
        <div class="side-butt"></div>
        <el-button>修改信息</el-button>
        <el-button>我的关注</el-button>


    </div> 
  </div>
</template>
<script>
export default {
  name:'userSide',
  data(){
      return{
          
      }
  }
}
</script>
<style lang="scss">
    .user-side{
      width: 220px;
        .user-side-head{
            img{
                width: 100%;
                border-radius: 5px;
                vertical-align: middle
            }
        .big-username{
            font-size: 30px;
            display: block;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .my-bio{
            color: #aaa;
        }
        .side-butt{
            margin-top: 25px;
        }
      }
      
    }

</style>
