<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="7" >
          <Slider
          :fetures= "features[index]"/>
        </b-col>
         <b-col sm="5" >
          <Accordion
          :accordionFetures= "features"/>
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
      features: json,
      index: 0
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
