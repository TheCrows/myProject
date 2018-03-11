<template>
<div>
  <div class="add-btn" @click="showAddStory">{{ifshow ? '-' : '+'}}</div>
  <div class="add-story" v-show="ifshow">
      <el-row>
        <el-col :span="18" :offset="1">
          <div class="grid-content">
            <el-input v-model="commitData.title" placeholder="请输入标题" size="medium"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9" :offset="1">
          <div class="grid-content">
            <el-date-picker v-model="commitData.time" type="date" placeholder="选择日期" size="medium"></el-date-picker>
          </div>
        </el-col>
        <el-col :span="9">
          <div class="grid-content">
            <el-input v-model="commitData.place" placeholder="请输入地点" size="medium"></el-input>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="18" :offset="1">
          <div class="grid-content">
        <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          </div>
        </el-col>
        </el-row>

      <el-row>
        <el-col :span="18" :offset="1">
          <div class="grid-content">
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="commitData.article"></el-input>
          </div>
        </el-col>
        <el-col :span="2" :offset="1">
          <div class="grid-content">
              <el-button @click="addThisInfo">提交</el-button>
          </div>
        </el-col>
      </el-row>
  </div>
  </div>
</template>
<script>
  export default {
    name: 'addStory',
    data() {
      return {
        
        ifshow:false,
        dialogImageUrl: '',
        dialogVisible: false,
        commitData:{
                id:Symbol(),
                headurl: require("../../assets/img/userico.jpg"),
                name: 'TheCrows',
                title: '',
                time: '',
                place: '',
                article: ''
            }
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      showAddStory(){
        this.ifshow=!this.ifshow
      },
      addThisInfo(){
        this.$store.commit('addInfo',this.commitData)
      }
    }
  }

</script>

<style lang="scss">
  .add-btn{
    width: 725px;
    height: 40px;
    background: silver;
     border-radius: 5px;
     font-weight: 900;
     font-size: 30px;
     padding-left: 30px;
     cursor: pointer;
     user-select:none;
  }
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
