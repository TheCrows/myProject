<template>
  <div id='map'>
      <div id="allmap"></div>
  </div>
</template>
<script>
import BMap from 'BMap'
import pointdata from '@/assets/pointdata.js'
import flagicon from '@/assets/flag.png'
export default {
  data(){
      return{

      }
  },
  mounted(){
      this.bulidMap()
  },
  methods:{
      bulidMap(){
        let map = new BMap.Map('allmap')
        map.centerAndZoom(new BMap.Point(110.161549,33.649069),6.5)

        
        let myIcon = new BMap.Icon(flagicon, new BMap.Size(40,40));
        myIcon.imageSize=new BMap.Size(40,40)
        for(let path of pointdata.paths){
            let point=new BMap.Point(...path.xy)
            this.addpoint(point,myIcon,map)
        }
        
      },
      addpoint(point,icon,map){
          let marker = new BMap.Marker(point,{icon:icon})  // 创建标注
          map.addOverlay(marker)              // 将标注添加到地图中
      },
  }
}
</script>
<style lang="stylus" scoped>
#allmap
    height 100%
#map
    height 100%
</style>

