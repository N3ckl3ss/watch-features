<template>
   <vsa-list >
  <vsa-item   
    v-for="(feature, index) in accordionFetures"
    :key="index">
        <vsa-heading>
            {{feature.title}}
        </vsa-heading>
        <vsa-content>
            {{feature.content}}
        </vsa-content>
  </vsa-item>
</vsa-list>
</template>

<script>
export default {
    props: {
        accordionFetures:  {
      type: Array
    }
    },
    data() {
        return{
        }
    },
    methods: {
        
    }
}
</script>

<style>
</style>