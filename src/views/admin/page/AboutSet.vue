<template>
    <q-page-sticky
        @click="handleSave()"
        position="top-right"
        :offset="[18, 18]"
        class="z-10"
    >
        <div class="text-right ">
            <q-btn
                :color="isDifferent ? 'negative' : 'secondary'"
                :label="isDifferent ? '未儲存' : '已儲存'"
            >
                <q-tooltip v-if="TimeNote && TimeNote?.length > 0"> 上次存檔時間：{{ TimeNote[0].time }}，更新人：{{
                        TimeNote[0].adminName
                }}</q-tooltip>
            </q-btn>

        </div>

    </q-page-sticky>
    <!-- 封面 -->
    <div class="p-3 border-b ">
        <div class="font-bold text-2xl">封面</div>
        <div class="px-3 w-full flex justify-between">
            <e-image-uploader
                path="home/banner"
                class="w-[49%]"
                v-model="bannerData.webImg"
                :name="`電腦版圖片`"
            />
            <e-image-uploader
                path="home/banner"
                class="w-[49%]"
                v-model="bannerData.mobileImg"
                :name="`手機版圖片`"
            />

        </div>

    </div>

    <!-- 理念初心 -->
    <div class="p-3 border-b ">
        <div class="flex items-center gap-3">
            <div class="font-bold text-2xl">理念初心</div>

        </div>

        <div class="p-3 w-[63vw] max-w-[1000px]">
            <q-input
                label="短語"
                filled
                v-model="introData.firstText"
            />
            <q-input
                class="mt-2"
                label="內文"
                filled
                v-model="introData.introText"
                type="textarea"
            />

        </div>




    </div>

    <!-- 精選文案 -->
    <div class="p-3 border-b ">
        <div class="flex items-center gap-3">
            <div class="font-bold text-2xl">精選文案</div>
        </div>
        <div class="p-3 w-full ">


            <div class="mt-3 flex items-center gap-3">
                <div class="font-bold text-lg">列點</div>
                <div>
                    <q-btn
                        @click="addPostListItem()"
                        round
                        color="primary"
                        icon="add"
                        size="sm"
                    />
                </div>
            </div>
            <div
                v-if="postList.length == 0"
                class=" mt-1 p-3"
            >
                無資料
            </div>
            <template v-else>

                <div class="p-3 w-full overflow-y-auto">
                    <q-scroll-area class="h-[30rem] max-w-[100vw]">


                        <draggable
                            class="flex gap-3 ml-3 flex-nowrap"
                            v-model="postList"
                            item-key="index"
                            handle=".handle"
                        >
                            <template #item="{ element, index }">

                                <div class="relative mt-1 w-[30vw] max-w-[500px]">

                                    <q-btn
                                        @click="removePostListItem(index)"
                                        class="absolute right-0 -top-[1px]"
                                        color="red"
                                        size="xs"
                                        icon="close"
                                        round
                                    >
                                        <q-tooltip>刪除第{{ index + 1 }}項</q-tooltip>
                                    </q-btn>



                                    <div class="font-bold text-lg">
                                        <q-btn
                                            class="handle -mt-2"
                                            size="xs"
                                            icon="drag_handle"
                                            round
                                        >
                                            <q-tooltip>拖曳移動</q-tooltip>
                                        </q-btn>
                                        第{{ index + 1 }}項標題
                                    </div>
                                    <q-input
                                        filled
                                        v-model="element.title"
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}項內文</div>
                                    <q-input
                                        type="textarea"
                                        filled
                                        v-model="element.content"
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}項連結</div>
                                    <q-input
                                        filled
                                        v-model="element.link"
                                    />
                                    <e-image-uploader
                                        path="home/post"
                                        class="w-48"
                                        v-model="element.img"
                                        :name="`第${index + 1}點圖片`"
                                    />
                                </div>
                            </template>
                        </draggable>

                    </q-scroll-area>

                </div>


            </template>
        </div>



    </div>
    <!-- 影音故事 -->
    <div class="p-3 border-b ">
        <div class="flex items-center gap-3">
            <div class="font-bold text-2xl">影音故事</div>
        </div>
        <div class="p-3 w-full ">


            <div class="mt-3 flex items-center gap-3">
                <div class="font-bold text-lg">列點</div>
                <div>
                    <q-btn
                        @click="addStoryListItem()"
                        round
                        color="primary"
                        icon="add"
                        size="sm"
                    />
                </div>
            </div>
            <div
                v-if="storyList.length == 0"
                class=" mt-1 p-3"
            >
                無資料
            </div>
            <template v-else>

                <div class="p-3 w-full overflow-y-auto">
                    <q-scroll-area class="h-[30rem] max-w-[100vw]">


                        <draggable
                            class="flex gap-3 ml-3 flex-nowrap"
                            v-model="storyList"
                            item-key="index"
                            handle=".handle"
                        >
                            <template #item="{ element, index }">

                                <div class="relative mt-1 w-[30vw] max-w-[500px]">

                                    <q-btn
                                        @click="removeStoryListItem(index)"
                                        class="absolute right-0 -top-[1px]"
                                        color="red"
                                        size="xs"
                                        icon="close"
                                        round
                                    >
                                        <q-tooltip>刪除第{{ index + 1 }}項</q-tooltip>
                                    </q-btn>



                                    <div class="font-bold text-lg">
                                        <q-btn
                                            class="handle -mt-2"
                                            size="xs"
                                            icon="drag_handle"
                                            round
                                        >
                                            <q-tooltip>拖曳移動</q-tooltip>
                                        </q-btn>
                                        第{{ index + 1 }}項標題
                                    </div>
                                    <q-input
                                        filled
                                        v-model="element.text"
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}項連結</div>
                                    <q-input
                                        filled
                                        v-model="element.link"
                                    />
                                    <e-image-uploader
                                        path="home/about"
                                        class="w-48"
                                        v-model="element.img"
                                        :name="`第${index + 1}項圖片`"
                                    />
                                </div>
                            </template>
                        </draggable>

                    </q-scroll-area>

                </div>


            </template>
        </div>



    </div>


</template>

<script setup lang="ts">
import { db, removeStorage } from '@/common/firebase';
import EImageUploader from '@/components/admin/elements/EImageUploader.vue'
import { useNotify } from '@/composables/notify';
import { useAdminStore } from '@/stores/admin.store';
import { useFirestore } from '@vueuse/firebase/useFirestore';
import { cloneDeep, isEmpty } from 'lodash';
import md5 from 'md5';
import { computed, ref, watchEffect } from 'vue';
import draggable from 'vuedraggable'
import { BannerType, IntroType, PostType, StoryType } from '@/types/about.type';

const Notify = useNotify()
const adminStore = useAdminStore()

// DB
const PageHomeDB = db().collection('Page').doc('About')
const PageHomeData = ref((useFirestore(PageHomeDB)) as any)
const TimeNote = ref<Array<any | null>>((useFirestore(PageHomeDB.collection('TimeNote').orderBy('timestamp', 'desc').limit(1))) as any)
watchEffect(() => {
    if (PageHomeData.value) {
        bannerData.value = PageHomeData.value.bannerData
        introData.value = PageHomeData.value.introData
        postList.value = PageHomeData.value.postList
        storyList.value = PageHomeData.value.storyList

    }
})

const preSaveData = computed(() => {
    if (PageHomeData.value === null || PageHomeData.value) {
        return {
            bannerData: bannerData.value,
            introData: introData.value,
            postList: postList.value,
            storyList: storyList.value,
        }
    }
    return {}
})

const dataDefaultMd5 = ref("")
const preSaveDataMd5 = computed(() => {
    if (!isEmpty(preSaveData.value)) {
        const _md5 = md5(JSON.stringify(preSaveData.value))
        if (dataDefaultMd5.value == "") dataDefaultMd5.value = _md5
        return _md5
    }
    return ""
})
const isDifferent = computed(() => PageHomeData.value === null || (dataDefaultMd5.value !== preSaveDataMd5.value))

const handleSave = () => {
    if (!isDifferent.value) return;
    PageHomeDB.collection('TimeNote').add({
        timestamp: (new Date).getTime(),
        time: (new Date).toLocaleString(),
        adminName: adminStore.userName

    })
    PageHomeDB.set(preSaveData.value).then(() => {
        Notify.handleSuccess("成功")
        dataDefaultMd5.value = preSaveDataMd5.value

    }).catch(error => {
        Notify.handleError("錯誤")
        console.log(error);
    })
}


// 封面
const BannerDefault: BannerType = {
    webImg: "",
    mobileImg: "",
}
const bannerData = ref<BannerType>(cloneDeep(BannerDefault))

// 理念初心
const IntroDefault: IntroType = {
    firstText: '',
    introText: '',
}
const introData = ref<IntroType>(cloneDeep(IntroDefault))

//  點滴紀錄 
const PostListItemDefault: PostType = {
    title: "",
    img: "",
    link: "",
    content: "",
}
const postList = ref<PostType[]>([])
const addPostListItem = () => {
    postList.value.push(cloneDeep(PostListItemDefault))
}
const removePostListItem = async (index: number) => {
    try {
        await removeStorage(postList.value[index].img)
        postList.value.splice(index, 1)
        Notify.handleSuccess('刪除成功')
    } catch (error) {
        console.log(error);
    }
}


//  影音故事 
const StoryListItemDefault: StoryType = {
    img: "",
    link: "",
    text: "",
}
const storyList = ref<StoryType[]>([])
const addStoryListItem = () => {
    storyList.value.push(cloneDeep(StoryListItemDefault))
}
const removeStoryListItem = async (index: number) => {
    try {
        await removeStorage(storyList.value[index].img)
        storyList.value.splice(index, 1)
        Notify.handleSuccess('刪除成功')
    } catch (error) {
        console.log(error);
    }
}

</script>

<style scoped>
:deep() .q-editor__content a {
    @apply text-[#00A29A]
}
</style>