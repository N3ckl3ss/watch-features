<template>
<div class="slider">
   <img :src="fetures.image_url" @click="onClick()">
</div>
</template>

<script>
export default {
    props:{
       fetures: Object,
       nextRow: Function
    },
methods:{
   onClick(){
      this.nextRow()
   }
}
}
</script>

<style>
    
</style>