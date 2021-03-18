<template>
   <vsa-list >
  <vsa-item   
    v-for="(feature, index) in accordionFetures"
    :key="index"
    :force-active="isForced(index)"
    :on-heading-click="onHeadingClick">
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
    },
        imageIndex: Number,
         changeImg: Function
    },
    data() {
        return{
            index: this.imageIndex
        }
    },
    methods: {
        onHeadingClick(data) {
            console.log('Heading clicked', data);
            let index = -1;
            for(let key in data.list.$children) {
                if (data.list.$children[key]._uid === data.item._uid) {
                    index = key;
                    break;
                }
            }
            this.changeImg(index)
        },
        isForced(index) {
                return index === this.imageIndex
        },
    }
}
</script>

<style>
</style>