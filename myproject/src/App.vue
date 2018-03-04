<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <headerDiv></headerDiv>
    <div class="application-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerDiv from './components/basic/header'
export default {
  name: 'App',
  components:{
    headerDiv
  }
}
</script>

<style lang='scss'>
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }
    body { background:#fff; color:#555; font-size:14px; font-family: Verdana, Arial, Helvetica, sans-serif; }
    td,th,caption { font-size:14px; }
    h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
    address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
    a { color:#555; text-decoration:none; }
    a:hover { text-decoration:underline; }
    img { border:none; }
    ol,ul,li { list-style:none; }
    input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif; }
    table { border-collapse:collapse; }
    html {overflow-y: scroll;}
    .clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
    .clearfix { *zoom:1; }
    .dropdown{
      display: inline-block;
      width: 0;
      height: 0;
      vertical-align: -4px;
      content: "";
      border: 5px solid;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }

    .drop-ico{
     margin-right: 10px;
    }
    .app{
      overflow: auto
    }
    .application-main{
      width:1000px;
      margin: 55px auto 0 auto;
      
    }
</style>
