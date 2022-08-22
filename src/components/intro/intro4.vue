<template>
  <div class="intro">
    <Title title="理念初心"></Title>
    <div class="content-container">
        <div class="first-text">
            <img src="/background/text-bg.png" class="bg"/>
            <div class="word">
                {{props.introData.firstText}}
            </div>
        </div>
        <div class="intro-text" v-text="props.introData.introText"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from '../title/title-1.vue'
import { ref, onMounted } from 'vue';

interface Props {
  introData?: any;
}
const props = withDefaults(defineProps<Props>(), {
  introData: {
    firstText: '',
    introText: ''
  }
});

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.intro
    .content-container
        padding: 30px
        .first-text
            position: relative
            font-weight: 900
            margin-bottom: 10px
            display: inline-block
            padding: 5px 0px
            .bg
                position: absolute
                top: 0
                left: 50%
                transform: translateX(-50%)
                height: 100%
                width: 110%
                max-width: 110%
            .word
                position: relative
        .intro-text
            white-space: pre-line

@media (max-width: 780px)
    .intro
        .content-container
            padding: 0px
            .first-text
                margin-top: 20px
</style>