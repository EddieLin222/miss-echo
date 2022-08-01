<template>
  <div class="custom-block">
    <Title :title="props.title"></Title>
    <div class="number-info">
        <div class="number-grow" ref="numberGrow" :data-time="time" :data-value="number">
            {{props.number}}
        </div>
        <div class="unit">{{props.unit}}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from '../title/title-1.vue'
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  time?: number,
  number?: number,
  title?: string,
  unit?: string
}
const props = withDefaults(defineProps<Props>(), {
  time: 1.5,
  number: 5000,
  title: '',
  unit: ''
});

const numberGrow = ref(null)

const growEffect = (ele:any) => {
    let step = (props.number * 10) / (props.time * 1000)
    let current = 0
    let start = 0
    let t:any = setInterval(function(){
        start += step
        if(start > props.number) {
            clearInterval(t);
            start = props.number
            t = null
        }
        if(current === start) {
            return
        }
        current = start
        ele.innerHTML = current.toFixed(0).toString() + '+'
    }, 10)
}
onMounted(()=>{
    ScrollTrigger.create({
        trigger: ".number-info",
        start: "top 70%",
        onEnter: () => {
            console.log('start')
            growEffect(numberGrow.value)
        }
    });
})

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.custom-block
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    flex: 1
    margin-bottom: 30px
    .number-info
        display: flex
        align-items: flex-end
        width: 100%
        display: flex
        justify-content: center
        margin: 20px 0px 5px 0px
        .number-grow
            color: #78A780
            font-family: 'Archivo Black', sans-serif
            display: flex
            justify-content: center
            align-items: center
            font-size: 50px
            line-height: 36px
            margin: 0px 25px
            
</style>