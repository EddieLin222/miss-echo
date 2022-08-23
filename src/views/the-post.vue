<template>
    <PostDB />

    <div
        v-if="currentPost"
        class="post"
    >
        <div class="post-container">
            <div class="title-block">
                <div class="category">{{ currentPost.category }}</div>
                <h1 class="title leading-8">{{ currentPost.title }}</h1>
                <div class="date">{{ currentPost.date }}</div>
            </div>
            <div class="fb-block">
                <div
                    class="fb-like"
                    data-href="https://developers.facebook.com/docs/plugins/s"
                    data-width=""
                    data-layout="standard"
                    data-action="like"
                    data-size="small"
                    data-share="true"
                    data-colorscheme="dark"
                ></div>
            </div>
            <div class="img-block">
                <img
                    :src="currentPost.img"
                    alt=""
                >
            </div>
            <div
                class="intro articleTextArea"
                v-html="currentPost.intro"
            ></div>

            <div
                class="content articleTextArea"
                v-html="currentPost.content"
            ></div>
            <div
                v-show="currentPost.epilogue"
                class="epilogue"
            >
                <div class="symbol-left">
                    <div class="dot">“</div>
                </div>
                <div class="symbol-right">
                    <div class="dot">”</div>
                </div>
                <div
                    class="articleTextArea"
                    v-html="currentPost.epilogue"
                ></div>
            </div>
            <div class="next"></div>
        </div>
    </div>
    <div
        v-else-if="currentPost === undefined"
        class="comming-soon"
    >
        <h4 class="title">查無此文章</h4>
        <img
            src="/logo/logo-footer.png"
            alt=""
        >
        <a
            class="btn"
            href="/"
        >返回首頁</a>
        <div class="block">
            <div class="social-block">
                <a
                    class="item"
                    href="https://www.facebook.com/misseco.tw"
                    target="_blank"
                >
                    <img src="/social/fb.svg">
                </a>
                <a
                    class="item"
                    href="https://www.instagram.com/misseco.tw/"
                    target="_blank"
                >
                    <img src="/social/ig.svg">
                </a>
                <a
                    class="item"
                    href="https://lin.ee/35kz9K7"
                    target="_blank"
                >
                    <img src="/social/line.svg">
                </a>
            </div>
            <div class="mail">misseco.tw@gmail.com</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePostStore } from '@/stores/post.store';
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router'
import PostDB from '@/components/firestore/PostDB.vue';
import { PostType } from '@/types/post.type';
import { useHead } from "@vueuse/head"


const route = useRoute()
const PostStore = usePostStore()
const currentPost = ref<PostType | null | undefined>(null)

watch(() => PostStore.postArray, () => {
    const title = route.params.postId
    currentPost.value = PostStore.postByTitle(title as string) as any
})

useHead({
    // Can be static or computed
    title: computed(() => {
        const title = currentPost.value?.title;
        if (currentPost.value?.title) {
            return title + '｜Miss Eco'
        }
        return 'Miss Eco'
    }),
    meta: [
        {
            property: `og:title`,
            content: computed(() => {
                const title = currentPost.value?.title;
                if (currentPost.value?.title) {
                    return title + '｜Miss Eco'
                }
                return 'Miss Eco'
            }),
        },
        {
            property: `og:type`,
            content: 'website',
        },
        {
            name: `description`,
            content: computed(() => {
                const text = currentPost.value?.intro ?? currentPost.value?.content ?? currentPost.value?.epilogue ?? ''
                const el = document.createElement("div");
                el.innerHTML = text
                return (el.textContent ?? '').replaceAll('\n', '').replaceAll(' ', '').replaceAll(/\u00a0/g, '')
            }),
        },
        {
            property: `og:image`,
            content: computed(() => {
                const img = currentPost.value?.img
                const text = currentPost.value?.content ?? currentPost.value?.intro ?? currentPost.value?.epilogue ?? ''
                const el = document.createElement("div");
                el.innerHTML = text
                const imgEl = el.querySelector('img') as HTMLImageElement
                if (img) {
                    return img
                } else if (imgEl) {
                    return imgEl.src
                }
                return 'https://missecotw.com/logo/logo.png'
            }),
        },
    ],
})

</script>

<style scoped lang="sass">
.post
    background-color: #FFFBED
    padding: 40px 20%
    display: flex
    justify-content: center
    .post-container
        max-width: 980px
        .title-block
            .category
                color: #9C9C9C
                display: none
            .title
                font-size: 20px
                font-weight: 700
                margin-bottom: 2px 
            .date
                color: #9C9C9C
        .fb-block
            filter: grayscale(80%)
            margin: 20px 0px 10px 0px
            display: none
            .fb-like
                filter: hue-rotate(290deg)
                // filter: saturate(40%)
        img
            margin-bottom: 25px 
        .intro
            color: #749279
            border-left: solid 5px #749279
            padding-left: 10px
            margin-bottom: 20px
            line-height: 25px
        .content
            line-height: 25px
            margin-bottom: 40px
        .epilogue
            line-height: 25px
            border-top: solid 1px #78A780
            border-bottom: solid 1px #78A780
            padding: 20px 30px
            position: relative
        
            .symbol-left
                position: absolute
                top: 0
                left: 0
                background-color: #FFFBED
                display: flex
                align-items: center
                transform: translateY(-50%)
                padding: 0px 0px
                .dot
                    width: 100%
                    height: 100%
                    font-size: 50px
                    transform: translate(-30px, 10px)
                    color: #78A780
            .symbol-right
                position: absolute
                bottom: 0
                right: 0
                background-color: #FFFBED
                display: flex
                align-items: center
                transform: translateY(50%)
                padding: 0px 10px
                .dot
                    width: 100%
                    height: 100%
                    font-size: 50px
                    transform: translate(30px, 10px)
                    color: #78A780
@media (max-width: 992px)
    .post
        padding: 40px 10%

.comming-soon
    width: 100%
    height: calc(100vh - 100px)
    background-color: #FFFBED
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    // background-color: #DDEFE0
    .title
        font-size: 40px
        font-weight: 900
        margin-bottom: 40px
        margin-top: 40px
    img
        width: 200px
        margin-bottom: 40px
    .btn
        background-color: #778D7E
        border-radius: 30px
        padding: 6px 35px
        font-weight: 700
        color: #fff
        font-size: 16px
        letter-spacing: 1px
        margin-bottom: 50px
    .block
        display: flex
        flex-direction: column
        align-items: center
        .mail
            font-size: 16px
            color: #778D7E
            display: none
        .social-block
            display: flex
            justify-content: center
            margin-bottom: 10px
            .item
                border-radius: 30px
                width: 40px
                height: 40px
                margin: 0px 10px
@media (max-width: 480px)
    .comming-soon
        .title
            font-size: 32px

</style>

<style scoped >
:deep() .articleTextArea a {
    @apply text-[#78A780] cursor-pointer
}


:deep() .articleTextArea ul {
    padding: revert;
    @apply list-disc
}

:deep() .articleTextArea ul li {
    @apply list-disc
}



:deep() .articleTextArea ol {
    list-style-type: decimal;
    padding: revert;
}

:deep() .articleTextArea ol li {
    list-style-type: decimal;
}

:deep() .articleTextArea blockquote {
    background: #C8EEC8;
    border-left: 10px solid #78A780;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
}

:deep() .articleTextArea blockquote:before {
    color: #78A780;
    content: ',,';
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: 0.2em;
    letter-spacing: -6px;
    font-family: Arial, Helvetica, sans-serif;
}


:deep() .articleTextArea h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
}

:deep() .articleTextArea h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;

}

:deep() .articleTextArea h3 {
    font-size: 1.5rem;
    line-height: 2rem;
}

:deep() .articleTextArea h4 {
    font-size: 1.25rem;
    line-height: 1.75rem;
}

:deep() .articleTextArea h5 {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

:deep() .articleTextArea h6 {
    font-size: 0.75rem;
    line-height: 1rem;
}

:deep() .articleTextArea pre {
    overflow: auto;
}

:deep() .articleTextArea pre>code {
    display: block;
    padding: 1rem;
    word-wrap: normal;
}
</style>
