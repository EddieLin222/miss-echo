<template>
  <div class="title-block">
    <div class="bg"></div>
    <h4 class="title">{{props.title}}</h4>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
interface Props {
  title?: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: ''
});

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.title-block
  position: relative
  display: inline-block !important
  margin-bottom: 5px
  font-weight: 900
  font-family: 'Noto Serif TC', serif
  width: auto !important
  .bg
    background-color: #C8EEC8
    position: absolute
    width: 100%
    height: 50%
    bottom: 0
  .title
    position: relative
    font-size: 20px
    line-height: 20px
    letter-spacing: 1px

</style>