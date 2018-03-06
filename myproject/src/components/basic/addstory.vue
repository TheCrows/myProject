<template>
  <div class="add-story">
      <el-row>
        <el-col :span="18" :offset="1">
          <div class="grid-content">
            <el-input v-model="input" placeholder="请输入标题" size="medium"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9" :offset="1">
          <div class="grid-content">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="medium"></el-date-picker>
          </div>
        </el-col>
        <el-col :span="9">
          <div class="grid-content">
            <el-input v-model="input" placeholder="请输入地点" size="medium"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18" :offset="1">
          <div class="grid-content">
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea3"></el-input>
          </div>
        </el-col>
        <el-col :span="2" :offset="1">
          <div class="grid-content">
              <el-button>提交</el-button>
          </div>
        </el-col>
      </el-row>
      




  </div>
</template>
<script>
  export default {
    name: 'addStory',
    data() {
      return {
        value1: '',
      }
    }
  }

</script>

<style lang="scss">
  .add-story {

    background: #efefef;
    border-radius: 5px;
    overflow: auto;
    padding-bottom: 15px;
    .el-row{
        margin-top: 15px;
    }
  }

</style>
