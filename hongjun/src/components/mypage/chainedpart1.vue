<template>
  <div class="chainlist">
      
      <ul>
          <!-- {{now}} -->
        <li v-if="listdata.length>0" v-for="(sel,index) in listdata" :style="{background:index==now&&state==1?'#58a6e7':'#fff'}">
            <input type="text" v-model="sel[1]" :style="{color:index==now&&state==1?'#fff':'#111'}" v-focus='[index,nowfocus,state,fstate]' @blur="inputBlur(index)">
            <i class="remove_option" @click="remove(index)">×</i>
            <i class="right_arrow" v-show="state!=2"></i>
            <div class="select_layer" @click="chooseSel(index)" v-show="(ifshow)?true:(index!=now||state==0)"></div>
        </li>

        <li v-show="!ifshow" class="new" @click="addsel">新建选项</li>
      </ul>
  </div>
</template>
<script>
export default {
    data(){
        return{
            listdata:[],
            now:'',
            state:0,//当前状态,0:初始状态,1:选中状态
            nowfocus:'',
           fstate:0,

        }
    },
    created(){
        if(this.reqarry instanceof Array){
            this.listdata=[...this.reqarry]
        }else{
            this.listdata=[]
        }
        this.$emit('changenow',['',''])
        
    },
    // updated(){
    //     this.listdata=[...this.reqarry]
    // },
    watch:{
        now(newv,oldv){
            
            if(newv===''){
                this.$emit('changenow',['',[]])
                return
                }
            this.$emit('changenow',[this.now,this.listdata[this.now][2]])
        },
        reqarry(){
            // this.now=''
            // this.state=0
            this.fstate=0
            if(this.reqarry instanceof Array){
            this.listdata=[...this.reqarry]
            }else{
                this.listdata=[]
            }
            
        },
        thisnow(nv,ov){
            if(nv===''){
                // console.log(nv);
                this.now=nv
                this.state=0
            }
        }
    },
    methods:{
        chooseSel(index){
            this.state=1
            this.now=index
        },
        addsel(){
            this.listdata.push(['',''])
            this.nowfocus=this.listdata.length-1
            this.state=1
            this.now=this.listdata.length-1
            this.fstate=1
            // this.newindex=this.listdata.length-1
            // this.$emit('changenow',['',[]])
        },
        inputBlur(msg){
            if(this.listdata[msg][1]==''&&msg==this.listdata.length-1&&!this.listdata[msg][2]){
                this.listdata.pop()
                this.state=0
                this.now=''

            }else{
                
                
                this.$emit('update',this.listdata)
            }
        },
        remove(msg){
            this.listdata.splice(msg,1)
            this.$emit('update',this.listdata)
            this.state=0
            this.now=''
            this.$emit('changenow',['',[]])
        }
    },
    directives: {
        focus: {
            inserted: function (el,value) {
                if(value.value[2]==1&&value.value[0]===value.value[1]&&value.value[3]==1){
                    el.focus()
                }
            }
        }
    },
    props:['reqarry','ifshow','thisnow']
}
</script>
<style lang="stylus" scoped>
.chainlist
    width 159px
    border solid 1px #c5c5c5
.chainlist ul
    padding 0
    margin 0
.chainlist li
    list-style:none
    height 29px
    width 159px
    line-height 29px
    overflow hidden
    position relative
    & .remove_option
        display none
        position: absolute;
        color: #333;
        top: 0;
        right: 5px;
        font-style: normal;
        font-size: 16px;
        cursor: pointer;
    & .right_arrow
        width: 0;
        height: 0;
        display: inline-block;
        border: 4px solid transparent;
        border-left-width: 6px;
        border-left-color: #777;
        position: absolute;
        top: 10px;
        right: 2px;

    & .select_layer
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background: #999;
        opacity: 0;
        
.select_layer:hover
    opacity: .1 !important;
.chainlist li .remove_option 
    &:hover
        display block
    &:hover ~.right_arrow
        display none
.chainlist li input
    border none
    height 30px
    width 151px
    padding 0 4px
    background transparent
    &:focus
        color #111 !important
        outline: 1px solid #58a6e7;
        background #fff
    &:hover ~.remove_option
        display block
    &:hover ~.right_arrow
        display none
.chainlist .new
    width 155px
    padding-left 4px
    font-size 13px
    cursor pointer
    border-top solid 1px #c5c5c5
    background-color #e7e7e7
</style>