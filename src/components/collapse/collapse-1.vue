<template>
  <div class="collapse">
    <div class="title">{{ listData.title }}</div>
    <div class="block">
        <div class="item" v-for="(list, index) in listData.items" :key="index" @click="() => toggleOpen(index)">
            <div class="item-title">
                <h4>{{list.title}}</h4>
                <!-- <span class="button"></span> -->
                <!-- <span class="material-icons">
                    sync_alt
                </span> -->
                <!-- <span class="material-icons">
                    arrow_right_alt
                </span> -->
                <!-- <span class="material-icons">
                    upgrade
                </span> -->
                <span class="material-icons">
                    swap_horiz
                </span>
            </div>
            <div class="item-content" :ref="setCollapse">
                <div class="text">
                    {{list.intro}}
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

// const collapseHeight = ref<any>(0);
let collapseRefs: any[]= [];
let collapseHeight: any[] = [];
const setCollapse = (el: any) => {
    if(el){
       collapseRefs.push(el) 
    }
}
const listData = {
  title: "Cool Title .",
  items: [
    {
      title: 'Cool Item',
      intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      open: false
    },
    {
      title: 'Cool Item',
      intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      open: false
    },
    {
      title: 'Cool Item',
      intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      open: false
    },
    {
      title: 'Cool Item',
      intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      open: false
    }
  ]
}
const toggleOpen = (index: any) => {
    listData.items.map((list, i) => {
        if(index === i) {
            list.open = !list.open
            if(list.open){
                collapseRefs[i].style.height = `${collapseHeight[i]}px`
            }else{
                collapseRefs[i].style.height = '0px'
            }
            
        }
    })
}
onMounted(() => {
    collapseRefs.forEach((e, i)=>{
        collapseHeight.push(collapseRefs[i].offsetHeight)
    })
    collapseRefs.forEach(e=>{
        e.style.height = '0px'
    })
    console.log(collapseHeight)
})
// interface Props {
//   label?: string;
// }
// const props = withDefaults(defineProps<Props>(), {
//   label: '',
// });

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.collapse
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  padding: 60px 10%
  font-weight: 900
  background-color: #f2f2f2
  .title
    font-size: 28px
  .block
    width: 90%
    margin-top: 25px
    .item-title
        background-color: #B6E1E3
        color: #000
        padding: 5px 15px
        display: flex
        justify-content: space-between
        align-items: center
        border-radius: 2px
        border: solid 1px #f4f4f4
        h4
            margin-right: 20px
            pointer-events: none
            font-size: 16px 
        .button
            width: 30px
            height: 30px
            background-color: #000
            border-radius: 3px
            transition-duration: .5s
        .material-icons
            font-size: 24px
            transform: rotate(90deg)
    .item-content
        overflow: hidden
        transition-duration: .5s
        // background-color: #eee
        .text
            padding: 20px 10px
</style>