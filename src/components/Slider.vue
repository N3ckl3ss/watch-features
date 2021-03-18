<template>
<div class="slider">
   <img v-for="(image, index) in fetures " 
   :key="index"
   src="{{image.image_url}}">
</div>
</template>

<script>
export default {
    props:{
       fetures:  {
        type: Array
       }
    }
}
</script>

<style>
    
</style>