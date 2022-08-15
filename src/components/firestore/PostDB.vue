<template>
    <div class="hidden">POSTDB</div>
</template>

<script setup lang="ts">
import { db } from '@/common/firebase';
import { useFirestore } from '@vueuse/firebase/useFirestore'
import { usePostStore } from '@/stores/post.store';
import { PostCategoryType, PostType } from '@/types/post.type';
import { ref, watchEffect } from 'vue';
import { find, findIndex } from 'lodash';



const postStore = usePostStore()
const postSettingDB = db().collection('Post');
const postsData = ref<Array<PostCategoryType | PostType>>((useFirestore(postSettingDB)) as any)

watchEffect(()=>{
    if (postsData.value) {
        const postsSettingIndex = findIndex(postsData.value, ['id', "Setting"])
        const postsSettingData = postsData.value[postsSettingIndex] as unknown as { postCategoryArray: PostCategoryType[] }        
        postStore.postCategoryArray = (postsSettingData.postCategoryArray) 
        postsData.value.splice(postsSettingIndex, 1)
        postsData.value = (postsData.value as Array<any>).map((item) => ({ post_id: item.id, ...item }))
        postStore.postArray = postsData.value as PostType[]
        
    } 
})
</script>

<style scoped>
</style>