<template>
    <QRouterLink class="list" :to="props.list.link">
        <div class="img-block">
            <q-responsive :ratio="16/10">
                <img :src="props.list.img" alt=""/>
            </q-responsive>
        </div>
        <div class="content">
            <div class="title">{{props.list.title}}</div>
            <div class="intro">{{props.list.content}}</div>
        </div>
    </QRouterLink>
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
        title: '',
        content: ''
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
    justify-content: flex-start
    width: calc(33.3333% - 10px)
    margin-right: 15px
    margin-bottom: 30px
    .img-block
        width: 100%
        .q-responsive
            width: 100%
            img
                min-width: 100%
                min-height: 100%
                object-fit: cover
    .content
        background-color: #fff 
        padding: 10px
        display: flex
        flex-direction: column
        align-items: center
        flex: 1
        .title
            font-size: 16px
            font-weight: 700
            margin-bottom: 5px
        .intro
            color: #888787
.list:nth-child(3n+3)
    margin-right: 0px

@media (max-width: 980px)
    .list
        width: calc(50% - 8px)
    .list:nth-child(even)
        margin-right: 0px
    .list:nth-child(3n+3)
        margin-right: 15px
@media (max-width: 780px)
    .list
        width: 100%
        .content
            padding: 15px
            align-items: flex-start
    .list
        margin-right: 0px
    .list:nth-child(3n+3)
        margin-right: 0px
</style>