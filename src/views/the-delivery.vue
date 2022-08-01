<template>
  <div class="delivery">
    <Boxs></Boxs>
    <Intro></Intro>
    <Faq></Faq>
  </div>
</template>

<script setup lang="ts">
import Boxs from "../components/boxs/boxs.vue"
import Intro from "../components/intro/intro2.vue"
import Faq from "../components/faq/faq.vue"

import { ref } from 'vue';


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
</style>