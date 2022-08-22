<template>
    <div class="list">
        <div class="item" v-for="(item, index) in props.list" :key="index">
            <div class="title-block">
                <div class="date">{{item.date}}</div>
                <div class="title">{{item.title}}</div>
            </div>
            <div class="content">
                <p>{{item.content}}</p>
            </div>
            <QRouterLink class="play" :to="item.link">
                <q-icon name="arrow_drop_down"></q-icon>
                播放
            </QRouterLink>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
interface Props {
    list?: any;
}
const props = withDefaults(defineProps<Props>(), {
    list: [
        {
            date: '',
            title: '',
            content: '',
            link: ''
        }
    ]
});

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.list
    background-color: #FFFBED
    display: flex
    flex-direction: column
    margin-top: 30px
    .item
        border-bottom: solid 1px #A9A9A9
        margin-bottom: 15px
        padding: 15px 0px

        .title-block
            .date
                color: #888787
                font-weight: 500
                margin-bottom: 3px
            .title
                font-size: 18px
                font-weight: 700
        .content
            color: #888787
            margin: 20px 0px
        .play
            display: inline-flex
            align-items: center
            padding: 2px 15px
            border-radius: 30px
            background-color: #DDEFE0
            color: #749279
            font-weight: 700
            .q-icon
                transform: rotate(-90deg)
                font-size: 30px
                width: 10px
                height: 25px
                margin-right: 5px
    .item:last-child
        margin-bottom: 0px 

</style>