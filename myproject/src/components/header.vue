<template>
  <div class="header">
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content">羌云皓</div></el-col>
        <el-col :span="2" v-for="nav in navs" :key="nav.tKey"><div class="grid-content">{{nav.title}}</div></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name:'headerDiv',
  data(){
      return{
          navs:[
              {title:'页面一',tKey:Symbol()},
              {title:'页面二',tKey:Symbol()},
              {title:'页面三',tKey:Symbol()},
          ]
      }
  }
}
</script>
<style lang="scss">
    .header{
        background:rgba(215, 224, 224, 0.411)
    }
</style>


