<template>
<div class="slider" >
   <img :src="fetures.image_url" >
   <input type="range" class="custom-range" min="0" max="5" id="range" v-model="imageIndex"  @input="onClick">
</div>
</template>

<script>
export default {
    props:{
       fetures: Object,
       nextRow: Function,
       imageIndex: Number
    },
    data(){
       return{
         value:this.imageIndex
       }
    },
methods:{
   onClick(){
       this.nextRow(parseInt(this.imageIndex));
   }
}
}
</script>

<style>
img{
   width: 70%;
   height: 70%;
   position: relative;
   top: 20%;
   left: 15%;
   color: white;
 }
.slider{
   height: 657px;
}
 #range{
   width: 50%;
   position: absolute;
   opacity: 0.5;
   top: 90%;
   left: 50%;
   transform: translate(-50%, -50%);
 }
 </style>