<template>
  <div class="info-card">
       <div class="card-head-img">
         <img :src=cardData.headurl alt="">
       </div>
       <div class="card-info">
         <h1>{{cardData.name}}</h1>
         <h2>{{cardData.title}}</h2>
         <h3><span>{{cardData.time}}</span> <span>{{cardData.place}}</span></h3>
         <p>{{cardData.article}}</p>

       </div>
  </div>
</template>
<script>
export default {
  name:'infocard',
  data(){
    return{
     
    }
   
  },
   props:['cardData']
}
</script>
<style lang="scss">
  .info-card{
    width: 100%;
    padding: 15px 0;
    background: #f3f3f3;
    margin-top: 20px;
    border-radius: 5px;
    display: flex;
    .card-head-img{
      margin-left: 20px;
      
      img{
        width: 50px;
        border-radius: 5px;
        vertical-align: middle
      }
    }
    .card-info{
      margin:0 10px; 
      h1{
        font-size: 16px;
        margin-bottom: 5px;
      }
      h2{
        font-size: 20px;
        margin-bottom: 3px;
        font-weight: 600;
      }
      h3{
        font-size: 10px;
        margin-bottom: 5px;
        color: rgb(138, 138, 138)
      }
    }
  }
</style>


