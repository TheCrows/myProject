<template>
  <div>
    <div class="holder">
      <div id="myholder"></div>
    </div>
    
  </div>
</template>
<script>
let joint = require("jointjs");
// let $=require('jquery')
export default {
  data() {
    return {
      logicinfo:[]
    };
  },
  methods: {
    get_joint() {
      let _self=this
      let graph = new joint.dia.Graph();
      let paper = new joint.dia.Paper({
        el: document.getElementById("myholder"),
        width: (260*this.quenum+40)>1400?(260*this.quenum+40):1400,
        height: 500,
        model: graph,
        gridSize: 1,
        
        defaultLink: new joint.dia.Link({
          smooth: true,
          attrs: {
            ".marker-source": {
              fill: "#999",
              stroke: "#999",
              d: "M 10 0 L 0 5 L 10 10 z"
            },
            ".marker-target": {
              fill: "#999",
              stroke: "#dbdbdb",
              d: "M 10 0 L 0 5 L 10 10 z"
            },
            ".connection": {
              "fill-opacity": 0,
              stroke: "#999",
              d: "M 10 0 L 0 5 L 10 10 z"
            },
            ".connection-wrap": {
              "fill-opacity": 0,
              stroke: "#999",
              d: "M 10 0 L 0 5 L 10 10 z",
              "stroke-width": 0.2
            },
            '.marker-source':{
              d: '' 
            },
            ".marker-vertices": { "fill-opacity": 0 },
            ".marker-arrowheads": { "fill-opacity": 0 },
            ".tool-options": { "fill-opacity": 0 },
            ".tool-remove circle": { fill: "#eee" },
            ".tool-remove path": { fill: "#936969" }
          }
        }),
        validateConnection: validateConnect,
      });
      function validateConnect(
        cellViewS,
        magnetS,
        cellViewT,
        magnetT,
        end,
        linkView
      ) {
        // console.log(cellViewS.model.id.split("-")[0] , cellViewT.model.id.split("-")[0])
        if (linkView.model.attributes.source.port == "入口") {
          return false;
        }

        if (
          parseInt(cellViewS.model.id.split("-")[0])>parseInt(cellViewT.model.id.split("-")[0]) 
        ) {
          return false;
        }
        // Prevent linking from input ports.
        if (magnetS && magnetS.getAttribute("port-group") === "in") {
          return false;
        }
        // Prevent linking from output ports to input ports within one element.
        if (cellViewS === cellViewT) {
          // console.log('111')
          return false;
        }
        // Prevent linking to input ports.
        return magnetT && magnetT.getAttribute('port-group') === 'in';
        // return true;
      }
      let connect = function(sid, sourcePort, tid, targetPort) {
        var link = new joint.dia.Link({
          source: {
            id: sid,
            port: sourcePort
          },
          target: {
            id: tid,
            port: targetPort
          },
          smooth: true,
          attrs: {
            ".marker-source": {
              fill: "#999",
              stroke: "#999",
              d: "M 10 0 L 0 5 L 10 10 z"
            },
            ".marker-target": {
              fill: "#999",
              stroke: "#dbdbdb",
              d: "M 10 0 L 0 5 L 10 10 z"
            },
            ".connection": {
              "fill-opacity": 0,
              stroke: "#999",
              d: "M 10 0 L 0 5 L 10 10 z"
            },
            ".connection-wrap": {
              "fill-opacity": 0,
              stroke: "#999",
              d: "M 10 0 L 0 5 L 10 10 z",
              "stroke-width": 0.2
            },
            '.marker-source':{
              d: '' 
            },
            ".marker-vertices": { "fill-opacity": 0 },
            ".marker-arrowheads": { "fill-opacity": 0 },
            ".tool-options": { "fill-opacity": 0 },
            ".tool-remove circle": { fill: "#eee" },
            ".tool-remove path": { fill: "#936969" }
          },
          validateConnection: validateConnect
        });
        link.addTo(graph).reparent();
      };

      let Atomic = (id,index, name, sel) => {
        sel.unshift("默认跳转到");
        let cell = new joint.shapes.devs.Model({
          id:id,
          position: {
            x: 260 * index +40,
            y: 100
          },
          size: { width: 200, height: 40 * sel.length },
          attrs: {
            rect: {
              fill: "white",
              rx: 2,
              ry: 2,
              "stroke-width": 0.2,
              stroke: "#999"
            },
            ".label": {
              text: name,
              fill: "#555",
              "font-size": 16,
              "font-variant": "small-caps",
              "text-transform": "capitalize",
              "ref-x": 0.5,
              "ref-y": -30
            }
          },
          ports: {
            groups: {
              in: {
                attrs: {
                  ".port-body": {
                    fill: "#888",
                    r: 8,
                    "ref-y": 0,
                    "stroke-width": 0.2,
                    stroke: "#999"
                  },
                  ".port-label": { x: 0, "font-size": 12, fill: "#ccc" }
                }
              },
              out: {
                attrs: {
                  ".port-body": {
                    fill: "#fff",
                    r: 5,
                    "stroke-width": 0.2,
                    stroke: "#999",
                    "ref-y": 5
                  },
                  ".port-label": {
                    x: -200,
                    y: -200,
                    "font-size": 12,
                    fill: "#999"
                  }
                }
              }
            }
          },
          inPorts: ["入口"],
          outPorts: sel
        });
        //    cell.changeOutGroup({ position: 'right' });
        //    cell.changeInGroup({ position: 'top' });
        graph.addCells(cell);
      };
      // Atomic(1, 0, "啦啦啦", [1, 2, 3]);
      // connect("1-0", "默认跳转到", "1-1", "入口");
      let queslist=[]
      for(let i in this.logicinfo){
        let thispage=this.logicinfo[i].questions
        for (let pgs of thispage){
          queslist.push(pgs)
        }
      }
      for (let j in queslist){
        
          let optionarry=[]
          let thisques=queslist[j]
          // console.log(thisques)
          if(thisques.type=='radio'){
            // console.log(thisques.options)
            for(let option of thisques.options){
              optionarry.push(option.id+' : '+(option.value.length<8?option.value:(option.value.slice(0,7)+'...')))
            }
          }
          Atomic(j+'-'+thisques.id,j,thisques.question.length<8?thisques.question:(thisques.question.slice(0,7)+'...'),optionarry);
          // console.log(j+'-'+thisques.id)
        }
         
      for (let j in queslist){
        if(j==queslist.length-1){break}
          let thisques=queslist[j]
          if(thisques.type=='radio'){
            // console.log(thisques.options)
            for(let option of thisques.options){
              if(option.gotoNext){
                connect(j+'-'+thisques.id,option.id+' : '+(option.value.length<8?option.value:(option.value.slice(0,7)+'...')),findtarget(option.gotoNext)+'-'+option.gotoNext,"入口");
              }
            }
          }
          if(thisques.gotoNext){
            connect(j+'-'+thisques.id,'默认跳转到',findtarget(thisques.gotoNext)+'-'+thisques.gotoNext,"入口");
          }else{
            connect(j+'-'+thisques.id,'默认跳转到',(parseInt(j)+1)+'-'+queslist[parseInt(j)+1].id,"入口");
          }
          
        }
        function findtarget(id){
          for(let i in queslist){
            if(queslist[i].id==id){
              return i
            }
          }
        }
      graph.on("batch:stop", msg => {
        if(!msg.cell){
          return
        }
        // console.log(graph.getLinks())
        
        if (
          msg.cell &&
          msg.cell.attributes.type == "link" &&
          msg.batchName == "pointer" &&
          msg.cell.attributes.target.port != "入口"
        ) {
          msg.cell.remove();
          return
        }
        
        // if (msg.cell.attributes.source && !msg.cell.attributes.source.port) {
        //   // msg.cell.remove();
        //   return
        // }
        if (msg.cell.attributes.source && msg.cell.attributes.source.port=='入口') {
          msg.cell.remove();
          return
        }
        if (
          msg.cell &&
          msg.cell.attributes.type == "link" &&
          msg.batchName == "pointer"&&
          msg.cell.attributes.source.id
        ) {
          // console.log(graph.getConnectedLinks(graph.getCell(msg.cell.attributes.source.id)))
          let num=0,
              numm=0
          for(let link of graph.getConnectedLinks(graph.getCell(msg.cell.attributes.source.id))){
            // console.log(link.attributes.source.port)
            if(link.attributes.source.port!='默认跳转到'&&link.attributes.source.port==msg.cell.attributes.source.port){
              // console.log(link.attributes,num)
              num++
              if(num==2){
                msg.cell.remove();
                return
              }
            }
            
          }
          for(let blink of graph.getLinks()){
            if(blink.attributes.source.port=='默认跳转到'&&blink.attributes.source.id==msg.cell.attributes.source.id){
                numm++
                if(numm==2){
                  msg.cell.remove();
                return
                }
              }
          }

        }
        if(msg.cell &&msg.cell.attributes.type == "link" &&msg.batchName == "pointer"&&msg.cell.attributes.target.port == "入口"&&msg.cell.attributes.source.id){
          let targ=msg.cell.attributes
          // console.log(targ.source.id.split('-')[1],targ.source.port.split(":")[0],targ.target.id.split('-')[1])
          if(msg.cell.changed.vertices!==undefined){
            msg.cell.set('vertices', undefined)
            // msg.cell.get('vertices').remove()
            return
          }
        //   this.$http.post('/wenj/survey/question.do?m=saveRedirect',{ 
        //           wjId:this.$route.query.wjId,
        //           questionId:targ.source.id.split('-')[1],
        //           optionId:targ.source.port.split(":")[0]==='默认跳转到'?'':targ.source.port.split(":")[0],
        //           actionType:'goto',
        //           targetId:targ.target.id.split('-')[1]
        //       }).then((res) => {
        //         var data = res.data;
        //         if(data.code==0 ){
                  this.$message({
                  showClose: true,
                  message: '保存成功'+targ.source.id.split('-')[1]+(targ.source.port.split(":")[0]==='默认跳转到'?'':targ.source.port.split(":")[0])+targ.target.id.split('-')[1],
                  type: 'success'
                });
        }
      });
    graph.on('transition:start',(...msg)=>{
      // console.log(msg)
    })
    graph.on('remove', function(cell) { 
    // alert('New cell with id ' + cell.id + ' added to the graph.') 
    // console.log(cell)
    let targ=cell.attributes

    let num=0,
        numm=0
      for(let link of graph.getConnectedLinks(graph.getCell(targ.source.id))){
        if(link.attributes.source.port!='默认跳转到'&&link.attributes.source.port==cell.attributes.source.port){
          
              // num++
              // if(num==2){
                return
              // }
            }
        if(link.attributes.source.port=='默认跳转到'&&link.attributes.source.port==cell.attributes.source.port&&cell.attributes.target.id){
          }
      }
      for(let blink of graph.getLinks()){
        // console.log(blink.attributes.source.id,cell.attributes.source.id)
        if(cell.attributes.source.port=='默认跳转到'&&blink.attributes.source.id==cell.attributes.source.id&&blink.attributes.source.port=='默认跳转到'){
              return
        }
        
      }
    if(cell.attributes.source.port=='默认跳转到'&&cell.attributes.target.id){
      
      _self.$message({
            type: "info",
            message: "默认跳转不能删除"
          });
      connect(cell.attributes.source.id,'默认跳转到',cell.attributes.target.id,"入口");
      return
    }
    
    if(cell.attributes.source.port!='默认跳转到'&&cell.attributes.target.port=='入口'){
      // let targ=cell.attributes
      // console.log(this.$route.query.wjId)
      // console.log(targ.source.id.split('-')[1],targ.source.port.split(":")[0]==='默认跳转到'?'':targ.source.port.split(":")[0])
    //   _self.$http.post('/wenj/survey/question.do?m=deleteRedirect',{ 
    //               wjId:_self.$route.query.wjId,
    //               questionId:targ.source.id.split('-')[1],
    //               optionId:targ.source.port.split(":")[0]==='默认跳转到'?'':targ.source.port.split(":")[0],
    //               actionType:'goto'
    //           }).then((res) => {
    //             var data = res.data;
    //             if(data.code==0 ){
                  _self.$message({
                  showClose: true,
                  message: '删除成功'+targ.source.id.split('-')[1]+(targ.source.port.split(":")[0]==='默认跳转到'?'':targ.source.port.split(":")[0]),
                  type: 'success'
                });
    }
    })
    paper.on('link:disconnect',(...msg)=>{
      // console.log(111)
      if(!msg[0].model.attributes.source.id||!msg[0].model.attributes.target.id){
        if(msg[3].attributes.port.nodeValue!='入口'){
          connect(msg[2].model.id,msg[3].attributes.port.nodeValue,msg[0].model.attributes.target.id,'入口')
          msg[0].remove()
        }else{
          connect(msg[0].model.attributes.source.id,msg[0].model.attributes.source.port,msg[2].model.attributes.id,'入口')
          msg[0].remove()
        }
      }
    })
    }
  },
  mounted() {
    // console.log(this.logicinfo);
    let _self=this;
          this.logicinfo=[{"id":317,"questions":[{"gotoNext":"11","id":10,"options":[{"checked":false,"id":1479,"value":"qewr"},{"checked":false,"id":1480,"value":"qewt"},{"checked":false,"id":1481,"value":"qwetqwe"},{"checked":false,"id":1482,"value":"qewrqw"}],"order":9999,"pageId":317,"question":"ewtqer","require":"0","type":"radio"},{"gotoNext":"12","id":11,"options":[{"checked":false,"id":1483,"value":"tqew"},{"checked":false,"id":1484,"value":"qwetqwet"},{"checked":false,"id":1485,"value":"qewtqwet"},{"checked":false,"id":1486,"value":"qawetgqet"}],"order":9999,"pageId":317,"question":"qwerf","require":"0","type":"radio"},{"gotoNext":"13","id":12,"options":[{"checked":false,"id":1487,"value":"asfas"},{"checked":false,"id":1488,"value":"sdaf"},{"checked":false,"id":1489,"value":"asdf"}],"order":9999,"pageId":317,"question":"af","require":"0","type":"radio"},{"id":13,"options":[{"checked":false,"id":1490,"value":"adsf"}],"order":9999,"pageId":317,"question":"asdf","require":"0","type":"dropdown"},{"endLabel":"","id":14,"order":9999,"pageId":317,"question":"asd","require":"0","reversal":"0","scaleBeginNum":1,"scaleNum":5,"scaleType":"满意","startLabel":"","type":"scale"},{"id":15,"options":[{"checked":false,"id":1497,"value":"dfas"},{"checked":false,"id":1498,"value":"xzbc"},{"checked":false,"id":1499,"value":"qw"}],"order":9999,"pageId":317,"question":"asdf","require":"0","type":"radio"}],"name":"1"},{"id":340,"questions":[{"id":21,"options":[{"checked":false,"id":1510,"value":"zxvzxc"},{"checked":false,"id":1511,"value":"xzcv"},{"checked":false,"id":1512,"value":"xzv"}],"order":9999,"pageId":340,"question":"dxbvx","require":"0","type":"radio"},{"gotoNext":"23","id":22,"options":[{"checked":false,"id":1513,"value":"zxvzxv"},{"checked":false,"id":1514,"value":"bzxcb"},{"checked":false,"id":1515,"value":"zxcbz"}],"order":9999,"pageId":340,"question":"zxcvzx","require":"0","type":"radio"},{"endLabel":"","gotoNext":"24","id":23,"order":9999,"pageId":340,"question":"zxbz","require":"0","reversal":"0","scaleBeginNum":1,"scaleNum":5,"scaleType":"满意","startLabel":"","type":"scale"}],"name":"2"},{"id":341,"questions":[{"gotoNext":"25","id":24,"options":[{"checked":false,"id":1522,"value":"zxbc"},{"checked":false,"id":1523,"value":"zxcb"},{"checked":false,"id":1524,"value":"zxbc"}],"order":9999,"pageId":341,"question":"zxv","require":"0","type":"radio"}],"name":"3"},{"id":342,"questions":[{"gotoNext":"26","id":25,"options":[{"checked":false,"id":1525,"value":"zxbc"}],"order":9999,"pageId":342,"question":"zxb","require":"0","type":"checkbox"},{"id":26,"options":[{"checked":false,"id":1526,"value":"zxcbcb"},{"checked":false,"id":1527,"value":"zxbz"},{"checked":false,"id":1528,"value":"zxcbsgdsg"}],"order":9999,"pageId":342,"question":"zxbzxb","require":"0","type":"radio"}],"name":"4"}]
          //画图
          this.get_joint()
  },
  computed:{
    quenum(){
      let length=0
      for (let page of this.logicinfo){
        length+=page.questions.length
      }
      return length
    }
  }
};
</script>
<style lang="stylus" scoped>
#myholder {
  background: #eee;
}
.holder 
  width 1500px
  overflow-x auto
  overflow-y hidden
</style>
