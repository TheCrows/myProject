<template>
  <div>
    <div class="contain">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="逻辑" name="logic">
            <logic></logic>
        </el-tab-pane>
        <el-tab-pane label="跳转" name="jump">
            <jump></jump>
        </el-tab-pane>
        <el-tab-pane label="一棵树" name="tree">
            <fathertree></fathertree>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import logic from '@/components/mypage/logic'
import jump from '@/components/mypage/jump'
import fathertree from '@/components/mypage/fathertree'
export default {
  components:{logic,jump,fathertree},
  data() {
      return {
        activeName: 'logic'
      };
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    }
}
</script>

<style lang="stylus" scoped>
.contain
    height 100%
    width 100%
    overflow auto
    padding 15px 60px
</style>
