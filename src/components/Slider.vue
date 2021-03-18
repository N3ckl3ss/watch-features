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
      let index = parseInt(this.imageIndex)
       this.nextRow(index);
   }
}
}
</script>

<style>
    
</style>