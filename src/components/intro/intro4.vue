<template>
  <div class="intro">
    <Title title="理念初心"></Title>
    <div class="content-container">
        <div class="first-text">
            <img src="/background/text-bg.png" class="bg"/>
            <div class="word">
                {{data.firstText}}
            </div>
        </div>
        <div class="intro-text" v-text="data.introText"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from '../title/title-1.vue'
import { ref, onMounted } from 'vue';

const data = {
    firstText: 'Helping people help themselves Helping people help themselves',
    introText: '內文內文內文內文內文內文內文\n\n內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文'
}
// interface Props {
//   title?: string;
// }
// const props = withDefaults(defineProps<Props>(), {
//   title: ''
// });

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