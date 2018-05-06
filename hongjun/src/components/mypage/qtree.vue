<template>
  <el-submenu :index="list.id+''" >
    
      <template slot="title">
        <div >
          <el-checkbox v-model="list.checked" @change='nodecheck'>{{list.text}}</el-checkbox>
        </div>
      </template>
      <component v-for="(listchild,cindex) in list.children" :is="listchild.children.length==0?'el-menu-item':'qtree'" :index="listchild.id+''" :list='listchild' @checknode='nodecheck'>
        <el-checkbox v-model="listchild.checked" @change='nodecheck'>{{listchild.text}}</el-checkbox>
      </component>
    </el-submenu>

</template>
<script>
export default {
  name:'qtree',
  data() {
    return {

    };
  },
  methods:{
    nodecheck(msg){
      this.$emit('checknode',msg)
    }
  },
  props:['list']
};
</script>



