<template>
    <div class="posts">
        <Title title="所有文章"></Title>
        <div class="tags">
            <div class="tag" v-for="(tag, index) in props.postsData.tags" :key="index" @click="toggleTag(tag.value)" :class="{active: selectTag === tag.value}">
                {{tag.name}}
            </div>
        </div>
        <div class="list-container">
            <TransitionGroup name="posts">
                <div class="post" v-for="(post, index) in filterPosts" :key="index">
                    <QRouterLink class="left" :to="post.link">
                        <q-responsive :ratio="1">
                            <img :src="post.img" alt="">
                        </q-responsive>
                    </QRouterLink>
                    <div class="right">
                        <div class="title">{{post.title}}</div>
                        <div class="content">{{post.content}}</div>
                        <div class="bottom">
                            <div class="date">{{post.date}}</div>
                            <QRouterLink class="more" :to="post.link">
                                閱讀更多
                                <q-icon name="arrow_circle_right"></q-icon>
                            </QRouterLink>
                        </div>
                    </div>
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>
<script setup lang="ts">
import Title from '../title/title-1.vue'
import { ref, computed } from 'vue';

const selectTag = ref(0)

const filterPosts = computed(()=>{
    if(selectTag.value === 0) {
        return props.postsData.posts
    }else{
        const result = props.postsData.posts.filter((e: { tag: number; })=>e.tag === selectTag.value)
        return result
    }
})

const toggleTag = (value: any) => {
    selectTag.value = value
}

interface Props {
    postsData?: any;
}
const props = withDefaults(defineProps<Props>(), {
    postsData: {
        tags: [
            {
                name: '',
                value: 0
            },
        ],
        posts: [
            {
                img: '',
                link: '',
                date: '',
                title: '',
                content: '',
                tag: 1
            }
        ]
    }
});

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
        border-bottom: solid 2px #d9d9d9
        gap: 10px
        flex-wrap: wrap
        padding: 5px 0px
        .tag
            transition-duration: .5s
            cursor: pointer
            padding: 5px 10px
            font-size: 16px
            white-space: nowrap
            &:hover
              background-color: #d9d9d9
              color: #000
    .list-container
        display: flex
        flex-wrap: wrap
        margin-top: 20px
        // gap: 40px
        .post
            width: calc(50% - 20px)
            display: flex
            margin-right: 40px
            margin-bottom: 40px
            .left
                width: 35%
                margin-right: 20px
                .q-responsive
                    width: 100%
                    background-color: #D9D9D9
                    img
                        object-fit: cover
                        min-height: 100%
                        min-width: 100%
            .right
                display: flex
                flex-direction: column
                justify-content: space-between
                width: calc(65% - 20px)
                .title
                    font-size: 18px
                    font-weight: 700
                .content
                    display: -webkit-box
                    -webkit-box-orient: vertical
                    -webkit-line-clamp: 3
                    overflow: hidden
                    color: #696969
                    margin: 15px 0px
                .bottom
                    display: flex
                    justify-content: space-between
                    .more
                        color: #78A780
                        font-size: 16px
        .post:nth-child(even)
            margin-right: 0px
.active
    // background-color: #C8EEC8
    background-color: #d9d9d9
    color: #000

@media (max-width: 1300px)
    .posts
        .list-container
            .post
                width: 100%
                margin-right: 0px
                .right
                    justify-content: center

@media (max-width: 625px)
    .posts
        .list-container
            gap: 60px
            .post
                flex-direction: column
                .left
                    width: 100%
                .right
                    width: 100%

</style>