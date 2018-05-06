<template>
  <div class="typecss">
    <div class="container" v-show="viewState===1">
      <div class="titles">
        <div v-for="(level,index) in pagedata.levels" class="title" >
          <input type="text" v-model="pagedata.levels[index]" v-focus='level'>
          <i v-if='index==pagedata.levels.length-1&&index!=0' class="remove_option" @click="remove(index)">×</i>
        </div>
        <div class="title addtitle" @click="addtitle">添加标题</div>
      </div>
      <div class="maindatas">
        <div v-for="(level,index) in pagedata.levels" class="maindata">
          <!-- {{pagedata.groups[index][levelrec[index]][2].length}} -->
          <!-- {{levelrec[index]}} -->
          <chainedpart1 v-show="typeof(levelrec[index]) == 'object'" :reqarry='levelrec[index]' @changenow='changesel($event,index)' @update='updatasel($event,index)' :ifshow='false' :thisnow='nowrec[index]'></chainedpart1>
          <div class="lastip" v-show="typeof(levelrec[index]) != 'object'">请选择上一级选项</div>
        </div>
      </div>
      <el-button type="text" @click="totext">批量修改 (点这里！！！)</el-button>
    </div>
    <div class="container" v-show="viewState===0">
      <div class="titles">
        <div v-for="(level,index) in pagedata.levels" class="title" >
          {{pagedata.levels[index]}}
        </div>
      </div>
      <div class="maindatas">
        <div v-for="(level,index) in pagedata.levels" class="maindata">
          <!-- {{pagedata.groups[index][levelrec[index]][2].length}} -->
          <!-- {{levelrec[index]}} -->
          <!-- {{levelrec[1]}} -->
          <chainedpart1 v-show="typeof(levelrec[index]) == 'object'" :reqarry='levelrec[index]' @changenow='changesel($event,index)' @update='updatasel($event,index)' :ifshow='true' :thisnow='nowrec[index]'></chainedpart1>
        </div>
      </div>
      
    </div>

    <el-dialog title="批量修改" :visible.sync="dialogVisible" :close-on-click-modal='false'>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        :rows='25'
        v-model="textarea">
      </el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="toarr">确 定</el-button>
      </div>
    </el-dialog>
<el-button @click="viewState = 0;console.log(pagedata)" v-show="viewState">提 交</el-button>
<el-button @click="viewState = 1" v-show="!viewState">修 改</el-button>
  </div>
</template>
<script>
import chainedpart1 from '@/components/mypage/chainedpart1'
export default {
  props:{
    // options:{
    //   type:Array,
    //   required:true
    // },

  },
  data(){
      return{
          dialogVisible:false,
          textarea:'',
          viewState: 1,
          pagedata: {
            "levels":["省","市","区"],
            "groups":[["2-Qc","江苏省",[["3-zR","苏州",[["4-Fy","苏州一区",null],["5-Pu","苏州二区",null]]],["6-04","常州",null]]],["7-Eq","台湾省",[["8-dY","台湾一市",[["9-Dl","台湾一区",null]]],["6-99","儿州",null]]],["10-v3","四川省",null]]
            // levels:[''],
            // groups:[]
          },
          levelrec:[],
          nowrec:[],
          console:console
      }
  },
  created(){

    // if(this.options.length==0){
    //   this.viewState=0;
    // }

    this.levelrec=[...this.pagedata.levels]
    this.levelrec[0]=this.pagedata.groups

    
    
    // this.pagedata.options=this.options
  },
  methods:{
      getValues(){
        let outdata=JSON.parse(JSON.stringify(this.pagedata) ) 
        this.traverse(outdata.groups)
        return outdata
      },
      setState: function (state) {
        //设置当前预览状态1为编辑状态，0为预览状态
        this.viewState = state;
      },
      checkPass(){
        // if(!this.viewState){
        //   this.viewState=true
        //   return
        // }
        let passValidate=false
        for(let lev of this.pagedata.levels){
          if(lev===''){
            this.$message({
              message: '存在未填写的标题',
              type: 'warning'
            });
            passValidate=false
          }else{
            this.levelrec=[...this.pagedata.levels]
            this.levelrec[0]=this.pagedata.groups
            passValidate=true
          }
        }
        // this.viewState=false
        return passValidate
      },


      addtitle(){
        this.pagedata.levels.push('')
        this.levelrec.push('')
      },
      changesel(msg,index){
        this.nowrec[index]=msg[0]
        for(let i=index+1;i<this.nowrec.length;i++){
          this.nowrec[i]=''
        }
        if(msg[0]===''){
          this.$set(this.levelrec,index+1,'')
        }else{
          this.$set(this.levelrec,index+1,msg[1]?msg[1]:[])
        }
        
        for(let i=index+2;i<this.levelrec.length;i++){
          this.$set(this.levelrec,i,'')
        }
      },
      updatasel(msg,index){
        if(index==0){
        this.pagedata.groups=msg
        this.$set(this.levelrec,index,msg)
        return
        }
        this.$set(this.levelrec,index,msg)
        // this.levelrec[index]=msg
        // let parid=this.levelrec[index-1][this.nowrec[index-1]][0]
        // let ddd=this.traverse(this.pagedata.groups,msg)
        let target=''
        let nr=this.nowrec
        let temp=this.pagedata.groups;
        
        let cal=function(obj,index,step=0){
          if(step==index-1){
            obj[nr[step]][2]=msg;
            return;
          }
        obj=obj[nr[step]][2];
        step++;
        cal(obj,index,step);
      }
      
      cal(this.pagedata.groups,index,0);

      },
      remove(index){
        this.$confirm('此操作将删除整列数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.pagedata.levels.pop()
          this.levelrec.pop()
          this.removeData(this.pagedata.groups,this.pagedata.levels.length)
          this.levelrec=[...this.pagedata.levels]
          this.levelrec[0]=this.pagedata.groups
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
      },
      removeData(arr,deep,level=0){
        level++
        if(level/2==deep){
          arr[2]=null
        }
          for (let a in arr) {
            if (typeof(arr[a]) == "object") {  
            this.removeData(arr[a],deep,level); //递归遍历 
            }
            
          }
      },
      traverse(arr,bus=arr) {
        for (let a in arr) {
          if (typeof(arr[a]) == "object") {  
          this.traverse(arr[a]); //递归遍历 
          }else if(a==0){
            bus[0]=''
          }
        }  
      },
      totext(){
        
        this.textarea=''
        for (let i of this.pagedata.levels){
          this.textarea+=i+' '
        }
        this.textarea+="\n"
        this.dialogVisible = true
        let arr = this.pagedata.groups
        let cal =(arr,level=0)=>{
          level++
          for (let a in arr) {
            if (typeof(arr[a]) == "object") {  
            cal(arr[a],level); //递归遍历 
            }else if(a==1){
              for (let i=0;i<level/2-1;i++){
                this.textarea+='+'
              }
              this.textarea+=arr[a]+"\n"
            }
            
          }
        }
        cal(arr)
      },
      toarr(){
        let step1=this.textarea.replace(/(^\s*)|(\s*$)/g,"").split('\n')
        let levs= step1.splice(0,1)[0].replace(/(^\s*)|(\s*$)/g,"").split(' ')
        
        // for(let i in step1){
        //   step1[i]=[step1[i].split('+').length-1,step1[i].replace(/(^\+*)/g,"")]
        // }
        var index=0;
        // var arr=step1;
        let array=[],
            deep=0,
            temp=array,
            lastd=-1
        //找呀找呀找指针
        var find=(arr,deep,level=0)=>{
          if((level)/2==deep){
            temp=arr
          }
          level++
            let a=arr.length-1
            if (typeof(arr[a]) == "object") {  
            find(arr[a],deep,level); //递归遍历 
            }
        }
        
        for (let arr of step1){
          arr=[arr.split('+').length-1,arr.replace(/(^\+*)/g,"")]
          //验证
          if(arr[0]>lastd+1){
            alert(`${arr[1]} 处出错`)
            return
          }
          if(arr[0]>levs.length-1){
            alert('标题层级不对')
            return
          }
          lastd=arr[0]
          //赋值 启动
          if(arr[0]==deep){
            temp.push(['',arr[1]])
          }
          if(arr[0]>deep){
            temp=temp[temp.length-1][2]=[]
            temp.push(['',arr[1]])
            deep++
          }
          if(arr[0]<deep){
             deep=arr[0]
            find(array,deep)
            temp.push(['',arr[1]])
          }
        }
        this.pagedata.levels=levs
        this.pagedata.groups=array
        this.levelrec=[...this.pagedata.levels]
        this.levelrec[0]=this.pagedata.groups
        this.dialogVisible = false

      }
  },
  watch:{
    // 'pagedata.levels':function(newv,oldv){
    //     if(newv.length>oldv.length){
    //       this.levelrec.push('')
          
    //     }else{
    //       this.levelrec.pop()
    //     }
    // },
    // nowrec:{
    //   handler(newv,oldv){
    //   },
    //   deep:true
    // }
    
  },
  components:{chainedpart1},
  directives: {
        focus: {
            inserted(el,value) {
              if(value.value==='')
                    el.focus()
            }
        }
  }
}
</script>
<style lang="stylus" scoped>
.typecss
  padding-left 100px
.container
  overflow-x auto
  padding-bottom 10px
.container .titles 
  margin 10px 0
  white-space: nowrap;
  & .title
    display: inline-block;
    position: relative;
    margin-right: 10px;
    width 161px
  & input  
    padding: 7px 6px;
    border: 1px solid #ddd;
    width: 147px;
  & .addtitle
    display: inline-block;
    width: 150px;
    border: 1px solid #ddd;
    color: #666;
    padding: 3px 5px;
    cursor: pointer;
    font-size 13px
    line-height: 23px;
.container .maindatas
  margin 10px 0
  white-space: nowrap;
  position: relative;
  display flex
  & .maindata
    display: inline-block;
    position: relative;
    margin-right: 10px;
  & .lastip
    width 161px
.container .titles .title input
  &:hover ~.remove_option
    display block
.remove_option
  display none
  position: absolute;
  color: #333;
  top: 4px;
  right: 5px;
  font-style: normal;
  font-size: 16px;
  cursor: pointer;
  &:hover
    display block
</style>