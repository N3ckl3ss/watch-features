<template>
  <div id="app" >
    <b-container class="bv-row" fluid >
      <b-row cols-sm="2">
        <b-col sm="6" >
          <Slider id="slider"
          :fetures= "features[index]"
          :imageIndex = "index"
          :nextRow = "changeImg"/>
        </b-col>
        <b-col  sm="6"  >
          <Accordion 
          :accordionFetures= "features"
          :imageIndex= "index"
          :changeImg="changeImg"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Slider from './components/Slider.vue'
import Accordion from './components/Accordion.vue'
import json from './assets/data2.json'

export default {
  name: 'App',
  components: {
    Slider,
    Accordion
  },
  data(){
    return{
      //Gives the value of the basic json call
      features: json,
      //The Index that is connectid to both components
      index: 0
    }
  },
  methods: {
    //The method rewrites the index of both the Accordion and the Slider component
    changeImg(imageIndex) {
    //Needs to be a number so I just "prased" it
      this.index = parseInt(imageIndex)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:left;
  color: #2c3e50;
  background-color: rgb(25,25,25);
  height: 100%;
}

#slider {
  background-image: linear-gradient(rgb(18,18,18), white, rgb(18,18,18));
}
</style>
