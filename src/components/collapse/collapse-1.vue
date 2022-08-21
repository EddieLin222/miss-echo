<template>
    <div class="collapse">
        <div class="block">
            <div
                class="item"
                v-for="(list, index) in props.faqData"
                :key="index"
                @click="list.open = !list.open"
            >
                <div class="item-title">
                    <h4>{{ list.title }}</h4>
                    <span class="material-icons">
                        expand_more
                    </span>
                </div>
                <div
                    class="item-content"
                    :ref="(el) => { setCollapse(index, el) }"
                    :style="
                        list.open ? `height:${collapseHeight[index]}px` : 'height:0px'
                    "
                >
                    <div
                        class="text"
                        v-html="list.intro"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

// const collapseHeight = ref<any>(0);
const collapseRefs = ref<any[]>([]);
const collapseHeight = ref<any[]>([]);
const setCollapse = (index: number, el: any) => {
    if (el) {
        collapseRefs.value[index] = (el)
    }
}


watch(() => collapseRefs.value.length, () => {
    collapseRefs.value.forEach((e, i) => {
        const _height = collapseRefs.value[i].style.height
        collapseRefs.value[i].style.height = "auto"
        collapseHeight.value[i] = (collapseRefs.value[i].offsetHeight)
        collapseRefs.value[i].style.height = _height

    })
    console.log(collapseHeight)
})
interface Props {
    faqData?: any;
}
const props = defineProps<Props>();

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
  font-weight: 700
  margin-top: 15px
  .title
    font-size: 28px
  .block
    width: 100%
    .item-title
        color: #000
        padding: 5px
        display: flex
        justify-content: space-between
        align-items: center
        border-radius: 2px
        border-bottom: solid 2px #78A780
        h4
            margin-right: 20px
            pointer-events: none
            font-size: 16px 
            font-weight: 400
        .button
            width: 30px
            height: 30px
            background-color: #000
            border-radius: 3px
            transition-duration: .5s
        .material-icons
            font-size: 24px
            color: #78A780
    .item-content
        overflow: hidden
        transition-duration: .5s
        // background-color: #eee
        .text
            padding: 20px 10px
            font-weight: 400
            :deep() a
                color: #78A780
</style>