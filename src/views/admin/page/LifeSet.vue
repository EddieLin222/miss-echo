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
    <!-- <div class="p-3 border-b ">
        <div class="font-bold text-2xl">封面</div>
        <div class="px-3 w-full flex justify-between">
            <e-image-uploader
                path="page/life"
                class="w-[49%]"
                v-model="bannerData.webImg"
                :name="`電腦版圖片`"
            />
            <e-image-uploader
                path="page/life"
                class="w-[49%]"
                v-model="bannerData.mobileImg"
                :name="`手機版圖片`"
            />

        </div>

    </div> -->
    <!-- Podcast -->
    <div class="p-3 border-b ">
        <div class="flex items-center gap-3">
            <div class="font-bold text-2xl">Podcast</div>
        </div>
        <div class="p-3 w-[63vw] max-w-[1000px]">

            <e-image-uploader
                path="page/life"
                class="w-[30%] mb-3"
                v-model="podcastData.mainImg"
                :name="`介紹Podcast`"
            />
            <q-input

                label="簡介"
                filled
                v-model="podcastData.intro"
            />

        </div>
        <div class="p-3 w-full ">
            <div class="mt-3 flex items-center gap-3">
                <div class="font-bold text-lg">集數列表</div>
                <div>
                    <q-btn
                        @click="addPodcastItem()"
                        round
                        color="primary"
                        icon="add"
                        size="sm"
                    />
                </div>
            </div>
            <div
                v-if="podcastData.lists.length == 0"
                class=" mt-1 p-3"
            >
                無資料
            </div>
            <template v-else>

                <div class="p-3 w-full overflow-y-auto">
                    <q-scroll-area class="h-[30rem] max-w-[100vw]">


                        <draggable
                            class="flex gap-3 ml-3 flex-nowrap"
                            v-model="podcastData.lists"
                            item-key="index"
                            handle=".handle"
                        >
                            <template #item="{ element, index }">

                                <div class="relative mt-1 w-[30vw] max-w-[500px]">

                                    <q-btn
                                        @click="removePodcastItem(index)"
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
                                        第{{ index + 1 }}集標題
                                    </div>
                                    <q-input
                                        filled
                                        v-model="element.title"
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}集時間</div>
                                    <q-input
                                        filled
                                        v-model="element.date"
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}集連結</div>
                                    <q-input
                                        filled
                                        v-model="element.link"
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}集介紹</div>
                                    <q-input
                                        filled
                                        v-model="element.content"
                                        type="textarea"
                                    />

                                </div>
                            </template>
                        </draggable>

                    </q-scroll-area>

                </div>


            </template>
        </div>



    </div>
    <!-- Youtube -->
    <div class="p-3 border-b ">
        <div class="flex items-center gap-3">
            <div class="font-bold text-2xl">Youtube</div>
        </div>
        <div class="p-3 w-full ">


            <div class="mt-3 flex items-center gap-3">
                <div class="font-bold text-lg">列點</div>
                <div>
                    <q-btn
                        @click="addYoutubeListItem()"
                        round
                        color="primary"
                        icon="add"
                        size="sm"
                    />
                </div>
            </div>
            <div
                v-if="youtubeList.length == 0"
                class=" mt-1 p-3"
            >
                無資料
            </div>
            <template v-else>

                <div class="p-3 w-full overflow-y-auto">
                    <q-scroll-area class="h-[30rem] max-w-[100vw]">


                        <draggable
                            class="flex gap-3 ml-3 flex-nowrap"
                            v-model="youtubeList"
                            item-key="index"
                            handle=".handle"
                        >
                            <template #item="{ element, index }">

                                <div class="relative mt-1 w-[30vw] max-w-[500px]">

                                    <q-btn
                                        @click="removeYoutubeListItem(index)"
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
                                        第{{ index + 1 }}項崁入連結
                                    </div>
                                    <q-input
                                        filled
                                        v-model="element.iframeLink"
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}項觀看次數</div>
                                    <q-input
                                        filled
                                        v-model="element.watchTimes"
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}項發布時間</div>
                                    <q-date
                                        v-model="element.date"
                                        landscape
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}項標題</div>
                                    <q-input
                                        v-model="element.title"
                                        filled
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}項發布人</div>
                                    <q-input
                                        v-model="element.person"
                                        filled
                                    />

                                </div>
                            </template>
                        </draggable>

                    </q-scroll-area>

                </div>


            </template>
        </div>



    </div>


        <!-- 綠色沙龍 -->
    <div class="p-3 border-b ">
        <div class="flex items-center gap-3">
            <div class="font-bold text-2xl">綠色沙龍</div>

        </div>

        <div class="p-3 w-[63vw] max-w-[1000px]">
            <q-input
                label="標題"
                filled
                v-model="salonData.title"
            />
            <q-input
                class="mt-2"
                label="內文"
                filled
                v-model="salonData.intro"
                type="textarea"
            />
              <e-image-uploader
                path="page/life"
                class="w-[30%] mb-3"
                v-model="salonData.img"
                :name="`圖片`"
            />
            <q-input
                label="連結"
                filled
                v-model="salonData.link"
            />

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
import { BannerType, PodcastItemType, PodcastType, SalonType, YoutubeType } from '@/types/life.type';

const Notify = useNotify()
const adminStore = useAdminStore()

// DB
const PageHomeDB = db().collection('Page').doc('Life')
const PageHomeData = ref((useFirestore(PageHomeDB)) as any)
const TimeNote = ref<Array<any | null>>((useFirestore(PageHomeDB.collection('TimeNote').orderBy('timestamp', 'desc').limit(1))) as any)
watchEffect(() => {
    if (PageHomeData.value) {
        bannerData.value = PageHomeData.value.bannerData
        podcastData.value = PageHomeData.value.podcastData
        youtubeList.value = PageHomeData.value.youtubeData
        salonData.value = PageHomeData.value.salonData

    }
})

const preSaveData = computed(() => {
    if (PageHomeData.value === null || PageHomeData.value) {
        return {
            bannerData: bannerData.value,
            podcastData: podcastData.value,
            youtubeData: youtubeList.value,
            salonData: salonData.value,
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
//  Podcast
const PodcastItemDefault: PodcastItemType = {
    title: "",
    date: "",
    link: "",
    content: "",
}
const podcastData = ref<PodcastType>({
    mainImg: '',
    intro: '',
    lists: []
})
const addPodcastItem = () => {
    podcastData.value.lists.push(cloneDeep(PodcastItemDefault))
}
const removePodcastItem = async (index: number) => {
    try {
        podcastData.value.lists.splice(index, 1)
        Notify.handleSuccess('刪除成功')
    } catch (error) {
        console.log(error);
    }
}


//  Youtube 
const YoutubeItemDefault: YoutubeType = {
    iframeLink: '',
    watchTimes: '',
    date: '',
    title: '',
    person: '',
}
const youtubeList = ref<YoutubeType[]>([])
const addYoutubeListItem = () => {
    youtubeList.value.push(cloneDeep(YoutubeItemDefault))
}
const removeYoutubeListItem = async (index: number) => {
    try {
        youtubeList.value.splice(index, 1)
        Notify.handleSuccess('刪除成功')
    } catch (error) {
        console.log(error);
    }
}

// 綠色沙龍
const SalonDefault: SalonType = {
    img: "",
    title: "",
    intro: "",
    link: "",
}
const salonData = ref<SalonType>(cloneDeep(SalonDefault))

</script>

<style scoped>
:deep() .q-editor__content a {
    @apply text-[#00A29A]
}
</style>