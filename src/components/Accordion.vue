<template>
   <vsa-list >
  <vsa-item   
    v-for="(feature, index) in accordionFetures"
    :key="index"
    :on-heading-click="onHeadingClick"
    :force-active="isForced(index)">
        <vsa-heading >
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
            index: 0
        }
    },
    methods: {
         onHeadingClick(data) {
            this.index = data;
        },
        isForced(index) {
                return index === this.index
        },
    }
}
</script>

<style>
</style>