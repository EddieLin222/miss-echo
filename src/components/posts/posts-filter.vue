<template>
    <div class="posts">
        <Title title="所有文章"></Title>
        <div class="tags">
            <div class="tag" v-for="(tag, index) in tags" :key="index" @click="toggleTag(tag.value)" :class="{active: selectTag === tag.value}">
                {{tag.name}}
            </div>
        </div>
        <div class="list-container">
            <TransitionGroup name="posts">
                <div class="post" v-for="(post, index) in filterPosts" :key="index">
                    <div class="left">
                        <q-responsive :ratio="1"></q-responsive>
                    </div>
                    <div class="right">
                        <div class="title">{{post.title}}</div>
                        <div class="content">{{post.content}}</div>
                        <div class="bottom">
                            <div class="date">{{post.date}}</div>
                            <div class="more">
                                閱讀更多
                                <q-icon name="arrow_circle_right"></q-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>
<script setup lang="ts">
import Title from '../title/title-1.vue'
import { ref, onMounted, computed } from 'vue';

const selectTag = ref(0)

const tags = ref([
    {
        name: 'All',
        value: 0
    },
    {
        name: 'Miss碎碎念',
        value: 1
    },
    {
        name: '永續日常',
        value: 2
    },
    {
        name: '健康意識',
        value: 3
    },
    {
        name: '活動花絮',
        value: 4
    }
])

const list = ref([
    {
        img: '',
        link: '',
        date: '2022/05/30',
        title: '機場搭防疫計程車我們付費，文章標題第二列-1',
        content: '現在只要預訂「台北市的防疫旅館」您的計程車費我來出！內文現在只要預訂「台北市的防疫旅館」您的計程車費我來出！內文',
        tag: 1
    },
    {
        img: '',
        link: '',
        date: '2022/05/30',
        title: '機場搭防疫計程車我們付費，文章標題第二列-2',
        content: '現在只要預訂「台北市的防疫旅館」您的計程車費我來出！內文現在只要預訂「台北市的防疫旅館」您的計程車費我來出！內文',
        tag: 2
    },
    {
        img: '',
        link: '',
        date: '2022/05/30',
        title: '機場搭防疫計程車我們付費，文章標題第二列-3',
        content: '現在只要預訂「台北市的防疫旅館」您的計程車費我來出！內文現在只要預訂「台北市的防疫旅館」您的計程車費我來出！內文',
        tag: 3
    }
])

const filterPosts = computed(()=>{
    if(selectTag.value === 0) {
        return list.value
    }else{
        const result = list.value.filter(e=>e.tag === selectTag.value)
        return result
    }
})

const toggleTag = (value: any) => {
    selectTag.value = value
}
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
.posts-enter-active, .posts-leave-active
  transition: all .5s ease

.posts-enter-from, .posts-leave-to
  opacity: 0

// .posts-leave-active
//   position: absolute
.posts
    margin-top: 80px
    .tags
        margin-top: 20px
        display: flex
        border-bottom: solid 2px #000
        gap: 10px
        .tag
            transition-duration: .5s
            cursor: pointer
            padding: 5px 10px
            font-size: 16px
            &:hover
            //   background-color: #C8EEC8
              background-color: #000
              color: #C8EEC8
    .list-container
        display: flex
        flex-wrap: wrap
        margin-top: 20px
        gap: 30px
        .post
            width: calc(50% - 15px)
            display: flex
            gap: 20px
            .left
                width: 35%
                .q-responsive
                    background-color: #D9D9D9
            .right
                display: flex
                flex-direction: column
                justify-content: space-between
                gap: 10px
                width: calc(65% - 20px)
                .title
                    font-size: 18px
                    font-weight: 700
                .content
                    display: -webkit-box
                    -webkit-box-orient: vertical
                    -webkit-line-clamp: 3
                    overflow: hidden
                .bottom
                    display: flex
                    justify-content: space-between
                    .more
                        color: #78A780
                        font-size: 16px
.active
    // background-color: #C8EEC8
    background-color: #000
    color: #C8EEC8
</style>