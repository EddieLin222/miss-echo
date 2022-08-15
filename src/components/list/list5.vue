<template>
    <div class="list">
        <div class="img-block">
            <q-responsive :ratio="16/10">
                <img src="" alt=""/>
            </q-responsive>
        </div>
        <div class="content">
            <div class="title">{{props.list.title}}</div>
            <div class="intro">{{props.list.content}}</div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
interface Props {
    list?: any;
}
const props = withDefaults(defineProps<Props>(), {
    list: {
        img: '',
        link: '',
        title: '標題標題標題標題',
        content: '內文內文內文內文'
    }
});

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.list
    background-color: #d9d9d9
    display: flex
    flex-direction: column
    justify-content: center
    width: calc(33.3333% - 14px)
    .img-block
        width: 100%
        .q-responsive
            width: 100%
    .content
        background-color: #fff 
        padding: 10px
        display: flex
        flex-direction: column
        align-items: center
        .title
            font-size: 16px
            font-weight: 700
            margin-bottom: 5px
        .intro
            color: #888787

@media (max-width: 980px)
    .list
        width: calc(50% - 10px)
@media (max-width: 780px)
    .list
        width: 100%
        .content
            padding: 15px
            align-items: flex-start
</style>