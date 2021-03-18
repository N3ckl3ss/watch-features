<template>
  <div id="app">
    <Slider>
    <Accordion>
  </div>
</template>

<script>
import Slider from './components/Slider.vue'
import Accordion from './components/Accordion.vue'

export default {
  name: 'App',
  components: {
    Slider,
    Accordion
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
