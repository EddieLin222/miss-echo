<template>
    <PostDB />
    <div class="p-7 flex justify-between items-center">
        <div class="font-bold text-xl "> 新增文章</div>
        <q-btn
            @click="clickCreate()"
            text-color="black"
            label="送出"
        />
    </div>
    <div class="p-5 bg-grey-1 shadow-md mx-5">

        <div class="flex ">
            <q-select
                class="flex-1"
                v-model="categoryItem"
                :options="postStore.postCategoryArray"
                label="文章分類"
                option-label="postCategory_name"
            />

            <post-category-list-with-editor class="w-32" />
        </div>

    </div>
    <div class="p-5 shadow-md">
        <div class="font-bold text-lg mt-4 text-gray-600">文章標題</div>

        <q-input
            v-model="formData.title"
            outlined
        />

        <div class="font-bold text-lg mt-4 text-gray-600">相關文章標題</div>
        <q-input
            v-model="formData.nextPostTitle"
            outlined
        />

        <div class="font-bold text-lg mt-4 text-gray-600">相關文章連結</div>
        <q-input
            v-model="formData.nextPostLink"
            outlined
        />


        <e-image-uploader
            path="post"
            v-model="formData.img"
            name="文章主圖片"
        />


        <e-q-editor
            v-model="formData.intro"
            name="簡介編輯器"
        />
        <e-q-editor
            v-model="formData.content"
            name="內文編輯器"
        />
        <e-q-editor
            v-model="formData.epilogue"
            name="結語編輯器"
        />
    </div>
</template>

<script setup lang="ts">
import PostCategoryListWithEditor from '@/components/admin/post/PostCategoryListWithEditor.vue';

import { usePostStore } from '@/stores/post.store';
import { PostType, PostCategoryType } from '@/types/post.type';
import { ref, watchEffect } from 'vue';
import EImageUploader from '@/components/admin/elements/EImageUploader.vue'
import EQEditor from '@/components/admin/elements/EQEditor.vue';
import { db } from '@/common/firebase';
import { useNotify } from '@/composables/notify';

import { useRoute } from 'vue-router';
import { useRouteQuery } from '@vueuse/router';
import PostDB from '@/components/firestore/PostDB.vue';
import { cloneDeep } from 'lodash';
const category_id = useRouteQuery('category_id')

const route = useRoute()
const postDB = db().collection('Post');
const Notify = useNotify()
const postStore = usePostStore()
const formDefault = {
    category_id: '',
    title: '',
    date: '',
    img: '',
    intro: '',
    content: ``,
    epilogue: '',
    nextPostTitle: '',
    nextPostLink: ''
}
const formData = ref(cloneDeep(formDefault))

const categoryItem = ref<PostCategoryType>()
watchEffect(() => {
    if (category_id.value) {
        categoryItem.value = postStore.postCategoryArray?.find(pc => (pc.postCategory_id == category_id.value))
    }
})

watchEffect(() => {
    formData.value.category_id = categoryItem.value?.postCategory_id ?? ''
    formData.value.date = new Date().toLocaleString().split(' ')[0]
})
const resetForm = (form?: PostType) => {
    if (form) {
        formData.value = JSON.parse(JSON.stringify(form))
    } else {
        formData.value = JSON.parse(JSON.stringify(formDefault))
    }
}
const clickCreate = () => {
    postDB.add(formData.value).then(() => {
        Notify.handleSuccess("成功")
        resetForm()
    }).catch(error => {
        Notify.handleError("錯誤")
        console.log(error);
    })
}




</script>

<style scoped>
</style>