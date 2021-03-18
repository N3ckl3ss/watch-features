<template>
<div class="slider" >
   <img :src="fetures.image_url" >
   <!-- Couldn't do the specifick slider in the design but I hope this is suficiant!-->
   <input type="range" class="custom-range" min="0" max="5" id="range" v-model="imageIndex"  @input="onClick">
</div>
</template>

<script>
export default {
    props:{
       fetures: Object,
       //the function used to sand back values to the parent and through it the other childe
       nextRow: Function,
       imageIndex: Number
    },
    data(){
       return{
         value:this.imageIndex
       }
    },
methods:{
   //Gets value of slider
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
   /* Didn't changed with any other type so this is just forcing the container height*/
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