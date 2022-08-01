<template>
  <div class="book">
    <div class="book-container">
        <div class="img-shape">
            <img src="/book/book_left.png" alt="">
        </div>
        <div class="img-shape">
            <img src="/book/book_right.png" alt="">
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
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
.book
    padding: 30px 20% 100px 20%
    background-color: #FFFBED
    .book-container
        display: flex
        width: 100%
        gap: 20%
        .img-shape
            flex: 1
            border-radius: 50%
            overflow: hidden
            img
                min-height: 100%
                min-width: 100%
</style>