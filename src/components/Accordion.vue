<template>
<div id ="accrdion">
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
</div>
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
.vsa-list{
    --vsa-text-color: white;
    --vsa-border-style: none;
    --vsa-bg-color: rgb(25,25,25); 
    --vsa-highlight-color: rgb(214,214,214);
    --vsa-max-width: 650px;
    --vsa-default-icon-size: 0.5;
    --vsa-heading-padding: 1rem 1rem;
    --vsa-content-padding: 0.5rem 3rem;
    position: absolute;
    top: 5%;
}
</style>