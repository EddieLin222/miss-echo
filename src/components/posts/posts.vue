<template>
    <div class="posts">
        <Title title="點滴紀錄"></Title>
        <div class="list-container">
            <List v-for="(item, index) in list" :key="index" :list="item"></List>
        </div>
    </div>
</template>
<script setup lang="ts">
import Title from '../title/title-1.vue'
import List from '../list/list5.vue'
import { ref, onMounted } from 'vue';

const list = [
    {
        img: '',
        link: '',
        title: '標題標題標題標題',
        content: '內文內文內文內文'
    },
    {
        img: '',
        link: '',
        title: '標題標題標題標題',
        content: '內文內文內文內文'
    },
    {
        img: '',
        link: '',
        title: '標題標題標題標題',
        content: '內文內文內文內文'
    },
    {
        img: '',
        link: '',
        title: '標題標題標題標題',
        content: '內文內文內文內文'
    },
    {
        img: '',
        link: '',
        title: '標題標題標題標題',
        content: '內文內文內文內文'
    },
    {
        img: '',
        link: '',
        title: '標題標題標題標題',
        content: '內文內文內文內文'
    }
]
// interface Props {
//     list?: any;
// }
// const props = withDefaults(defineProps<Props>(), {
//     list: [
//         {
//             content: '',
//             link: '',
//             img: ''
//         }
//     ]
// });

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.posts
    .list-container
        display: flex
        flex-wrap: wrap
        gap: 20px
        margin-top: 20px
</style>