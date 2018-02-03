<template>
<div id="table">
{{msg}}
</div>    
</template>
<script>
import change from "./js/change.js"
  export default {
      name:"table",
       data(){
           return{
               msg:"8888"
           }
       },
       mounted(){
           this.go();
       },
       methods:{
           go(){
               new change();
               console.log(1111);
           }
       }
  }
</script>
<style>
*{
    margin:0;
    padding:0;
    list-style:none;
}
body{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    bottom:0;
}
.wrap{
    width:100%;
    height:340px;
    overflow:hidden;
}
ol{
    display:flex;
    width:100%;

}
ol li{
    width:30%;
    text-align:center;
    line-height:35 px;
    border-radius:30px;
}
ul{
    width:100%;
    height:300px;
}
ul li{
     width:100%;   
     height:300px;
     text-align:center;
}
</style>