<template>
  <header class="banner">
      <div class='header-contain'>
          <a href="#">
              <header-icon iconSize='40'></header-icon>
          </a>
          <nav class="head-nav">
              <a href="#" class="head-item">首页</a>
              <a href="#" class="head-item">发现</a>
              <a href="#" class="head-item">话题 </a>
          </nav>
          <summary class="user-info">
              <!-- <div class="user-det">
                  <img src="../../assets/img/userico.jpg" alt="" class="user-img">
                  <span class="dropdown"></span>
              </div> -->
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
          
      }
  },
  components:{headerIcon}
}
</script>
<style lang="scss">
    .banner{
        padding-top: 5px;
        padding-bottom: 5px;
        box-shadow: 0px 0px 9px #888;
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
                cursor: pointer;
                justify-content: flex-end;
                .user-det{
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


