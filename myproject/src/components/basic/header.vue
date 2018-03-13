<template>
  <header class="banner">
      <div class='header-contain'>
          <a href="#">
              <header-icon iconSize='40'></header-icon>
          </a>
          <nav class="head-nav">
              <router-link to='/' class="head-item">首页</router-link>
              <router-link to='/map' class="head-item">地图</router-link>
              <!-- <a class="head-item">发现</a> -->
          </nav>
          <summary class="user-info">
              
            <el-dropdown>
                <span class="el-dropdown-link user-det">
                    <img src="../../assets/img/userico.jpg" alt="" class="user-img">
                    <span class="dropdown"></span>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><i class="drop-ico fa fa-user-circle" aria-hidden="true"></i>我的主页</el-dropdown-item>
                    <el-dropdown-item><i class="drop-ico fa fa-cogs" aria-hidden="true"></i>设置</el-dropdown-item>
                    <el-dropdown-item><i class="drop-ico fa fa-sign-out" aria-hidden="true"></i>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

              
          </summary>
      </div>
  </header>
</template>
<script>
import headerIcon from './icon'
export default {
  name:'headerDiv',
  data(){
      return{
          isfixed:false
      }
  },
  mounted(){
      window.addEventListener('scroll', ()=>{
          if(!(document .documentElement.scrollTop ? document .documentElement.scrollTop : document .body.scrollTop)){
              this.isfixed=false
          }else{this.isfixed=true}
      })
  },
  components:{headerIcon}
}
</script>
<style lang="scss">
    .banner{
        padding-top: 5px;
        padding-bottom: 5px;
        box-shadow: 0px 0px 9px #888;
        width: 100%;
        position: fixed;
        top:0;
        z-index: 99;
        background: rgba(255, 255, 255, .85);
        .header-contain{
            width: 1000px;
            margin: 0 auto;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            .head-nav{
                display: flex;
                margin-left: 10px;
                .head-item{
                font-size: 15px;
                padding: 0 15px;
                :first-child{
                    padding-left: 0;
                    }
                }
            }
            .user-info{
                flex: 1;
                display: flex;
                justify-content: flex-end;
                .user-det{
                    cursor: pointer;
                    display: block;
                     .user-img{
                    height: 35px;
                    border-radius: 4px;
                    vertical-align: middle
                    }
                }
               
                
            }
        }
    }
</style>


