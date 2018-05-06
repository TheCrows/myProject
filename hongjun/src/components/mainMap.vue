<template>
  <div id='map'>
      <div class="mapnav">
          <el-button @click="showall">全部</el-button>
          <el-button @click="showplace">地点</el-button>
          <el-button @click="showpath">路线</el-button>
          <el-button @click="showwar">战役</el-button>
      </div>
      <div class="steps" v-show="warshow">
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color='#d8d8d8'
            text-color='#d01c1c'
            active-text-color='#ce6363' 
            @select="showthiswar"
            >
            <el-menu-item v-for="(wardata,index) in pointdata.war" :index="wardata.name">
               <i class="el-icon-location-outline"></i>
                <span slot="title">{{wardata.name}}</span>
            </el-menu-item>
            </el-menu>
    </div>
      <div id="allmap"></div>
  </div>
</template>
<script>
import BMap from 'BMap'
import BMapLib from 'BMapLib'
import pointdata from '@/assets/pointdata.js'
import flagicon from '@/assets/flag.png'
export default {
  data(){
      return{
          map:'',
          curve:'',
          points:[],
          warshow:false,
          pointdata:pointdata
      }
  },
  mounted(){
      this.bulidMap()
  },
  methods:{
      bulidMap(){
          let map = new BMap.Map('allmap')
        this.map=map
        
        map.centerAndZoom(new BMap.Point(110.161549,31.649069),7)
        map.setMapStyle({style:'midnight'});
        // map.disableDragging();
        map.disableDoubleClickZoom()
        
        let myIcon = new BMap.Icon(flagicon, new BMap.Size(40,40));
        myIcon.imageSize=new BMap.Size(30,30)
        let points=[]
        // this.points=points
        for(let path of pointdata.paths){
            let point=new BMap.Point(...path.xy)
            let content=path
            this.addpoint(point,myIcon,content)
            points.push(point)
        }
        var curve = new BMapLib.CurveLine(points, {strokeColor:"#fff", strokeWeight:3, strokeOpacity:0.5}); //创建弧线对象
        this.curve=curve
	    map.addOverlay(curve); //添加到地图中
      },
      addpoint(point,icon,content){
          let marker = new BMap.Marker(point,{icon:icon})  // 创建标注
          this.points.push(marker)
          var sContent =
            `<h4 style='margin:0 0 5px 0;padding:0.2em 0'>${content.name}</h4>
                <img style='float:right;margin:4px' id='imgDemo' src='${require("@/assets/hjpics/"+content.ico)}' width='139' height='104'/>
                <p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>${content.info}</p> 
                </div>`
          this.map.addOverlay(marker)              // 将标注添加到地图中
          var label = new BMap.Label(content.name,{offset:new BMap.Size(30,0)});
          label.setStyle({border: '1px solid rgb(241, 221, 221)',
                padding:'5px',
                'border-radius': '8px',
                    'font-weight': 900,
                        opacity: '.8'
          })
	        marker.setLabel(label);
          marker.addEventListener("click",function(e){
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象 
            this.map.openInfoWindow(infoWindow,point); //开启信息窗口
            // document.getElementById('imgDemo').onload = function (){
            //     infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
            // }
            }
        );
        
      },
      showplace(){
          this.map.centerAndZoom(new BMap.Point(110.161549,31.649069),7)
          this.warshow=false
          this.curve.hide()
          for(let poi of this.points){
              poi.show()
          }
      },
      showpath(){
          this.map.centerAndZoom(new BMap.Point(110.161549,31.649069),7)
          this.warshow=false
          this.curve.show()
          for(let poi of this.points){
              poi.hide()
          }
      },
      showall(){
          this.map.centerAndZoom(new BMap.Point(110.161549,31.649069),7)
          this.warshow=false
           this.curve.show()
          for(let poi of this.points){
              poi.show()
          }
      },
      showwar(){
          this.map.centerAndZoom(new BMap.Point(110.161549,31.649069),7)
          this.warshow=true
           this.curve.hide()
          for(let poi of this.points){
              poi.hide()
          }
      },
      showthiswar(index){
          for(let poi of this.points){
              if(poi.getLabel().content==index){
                this.map.centerAndZoom(new BMap.Point(poi.getPosition().lng,poi.getPosition().lat),7)
                poi.show()
              }else{
                  poi.hide()
              }
              
              
          }
      }

  }
}
</script>
<style lang="stylus" scoped>
#allmap
    height 100%;
    width 100%
    position absolute
    z-index 2
#map
    height 100%
    width 100%
    position relative
.mapnav
    position absolute
    z-index 5
    padding 10px
.steps
    height 500px
    position absolute
    z-index 5
    top 70px
    left 15px
</style>

