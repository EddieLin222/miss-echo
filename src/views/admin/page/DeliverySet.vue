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


    <!-- 外送種類 -->
    <div class="p-3 border-b ">
        <div class="flex items-center gap-3">
            <div class="font-bold text-2xl">外送種類</div>
        </div>
        <div class="p-3 w-full ">


            <div class="mt-3 flex items-center gap-3">
                <div class="font-bold text-lg">列點</div>
                <div>
                    <q-btn
                        @click="addPromotionListItem()"
                        round
                        color="primary"
                        icon="add"
                        size="sm"
                    />
                </div>
            </div>
            <div
                v-if="promotionList.length == 0"
                class=" mt-1 p-3"
            >
                無資料
            </div>
            <template v-else>

                <div class="p-3 w-full overflow-y-auto">
                    <q-scroll-area class="h-[30rem] max-w-[100vw]">


                        <draggable
                            class="flex gap-3 ml-3 flex-nowrap"
                            v-model="promotionList"
                            item-key="index"
                            handle=".handle"
                        >
                            <template #item="{ element, index }">

                                <div class="relative mt-1 w-[30vw] max-w-[500px]">

                                    <q-btn
                                        @click="removePromotionListItem(index)"
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
                                        第{{ index + 1 }}項連結
                                    </div>
                                    <q-input
                                        filled
                                        v-model="element.link"
                                    />
                                    <e-image-uploader
                                        path="page/delivery"
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
    <!-- 永續健康餐點 -->
    <div class="p-3 border-b ">
        <div class="flex items-center gap-3">
            <div class="font-bold text-2xl">永續健康餐點</div>
        </div>
        <div class="p-3 w-full ">

            <div class="mt-5 font-bold text-lg">簡介</div>
            <q-input
                filled
                v-model="alwaysIntroduction"
            />
            <div class="mt-3 flex items-center gap-3">
                <div class="font-bold text-lg">列點</div>
                <div>
                    <q-btn
                        @click="addAlwaysListItem()"
                        round
                        color="primary"
                        icon="add"
                        size="sm"
                    />
                </div>
            </div>
            <div
                v-if="alwaysList.length == 0"
                class=" mt-1 p-3"
            >
                無資料
            </div>
            <template v-else>

                <div class="p-3 w-full overflow-y-auto">
                    <q-scroll-area class="h-[30rem] max-w-[100vw]">


                        <draggable
                            class="flex gap-3 ml-3 flex-nowrap"
                            v-model="alwaysList"
                            item-key="index"
                            handle=".handle"
                        >
                            <template #item="{ element, index }">

                                <div class="relative mt-1 w-[30vw] max-w-[500px]">

                                    <q-btn
                                        @click="removeAlwaysListItem(index)"
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
                                    </div>

                                    <e-image-uploader
                                        path="page/delivery"
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
    <!-- 訂餐流程 -->
    <div class="p-3 border-b ">
        <div class="flex items-center gap-3">
            <div class="font-bold text-2xl">訂餐流程</div>
        </div>
        <div class="p-3 w-full ">


            <div class="mt-3 flex items-center gap-3">
                <div class="font-bold text-lg">列點</div>
                <div>
                    <q-btn
                        @click="addStepListItem()"
                        round
                        color="primary"
                        icon="add"
                        size="sm"
                    />
                </div>
            </div>
            <div
                v-if="stepList.length == 0"
                class=" mt-1 p-3"
            >
                無資料
            </div>
            <template v-else>

                <div class="p-3 w-full overflow-y-auto">
                    <q-scroll-area class="h-[30rem] max-w-[100vw]">


                        <draggable
                            class="flex gap-3 ml-3 flex-nowrap"
                            v-model="stepList"
                            item-key="index"
                            handle=".handle"
                        >
                            <template #item="{ element, index }">

                                <div class="relative mt-1 w-[30vw] max-w-[500px]">

                                    <q-btn
                                        @click="removeStepListItem(index)"
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
                                        第{{ index + 1 }}項簡介
                                    </div>
                                    <q-input
                                        type="textarea"
                                        filled
                                        v-model="element.intro"
                                    />
                                    <e-image-uploader
                                        path="page/delivery"
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
    <!-- 常見問題 -->
    <div class="p-3 border-b ">
        <div class="flex items-center gap-3">
            <div class="font-bold text-2xl">常見問題</div>
        </div>
        <div class="p-3 w-full ">


            <div class="mt-3 flex items-center gap-3">
                <div class="font-bold text-lg">列點</div>
                <div>
                    <q-btn
                        @click="addFaqListItem()"
                        round
                        color="primary"
                        icon="add"
                        size="sm"
                    />
                </div>
            </div>
            <div
                v-if="faqList.length == 0"
                class=" mt-1 p-3"
            >
                無資料
            </div>
            <template v-else>

                <div class="p-3 w-full overflow-y-auto">
                    <q-scroll-area class="h-[30rem] max-w-[100vw]">


                        <draggable
                            class="flex gap-3 ml-3 flex-nowrap"
                            v-model="faqList"
                            item-key="index"
                            handle=".handle"
                        >
                            <template #item="{ element, index }">

                                <div class="relative mt-1 w-[30vw] max-w-[500px]">

                                    <q-btn
                                        @click="removeFaqListItem(index)"
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
                                        第{{ index + 1 }}項預設閉合
                                    </div>
                                    <q-toggle
                                        :label="element.open?'開':'關'"
                   
                                        v-model="element.open"
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}項問題</div>
                                    <q-input
                                        filled
                                        v-model="element.title"
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}項回答</div>
                                    <q-editor
                                        v-model="element.intro"
                                        min-height="10rem"
                                        :toolbar="[
                                            ['bold', 'italic', 'strike', 'underline'],
                                            ['link'],
                                        ]"
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
import { AlwaysIntroduction, AlwaysType, FaqType, PromotionType, StepType } from "@/types/delivery.type";

const Notify = useNotify()
const adminStore = useAdminStore()

// DB
const PageHomeDB = db().collection('Page').doc('Delivery')
const PageHomeData = ref((useFirestore(PageHomeDB)) as any)
const TimeNote = ref<Array<any | null>>((useFirestore(PageHomeDB.collection('TimeNote').orderBy('timestamp', 'desc').limit(1))) as any)
watchEffect(() => {
    if (PageHomeData.value) {
        promotionList.value = PageHomeData.value.promotionList
        alwaysIntroduction.value = PageHomeData.value.alwaysIntroduction
        alwaysList.value = PageHomeData.value.alwaysList
        stepList.value = PageHomeData.value.stepList??[]
        faqList.value = PageHomeData.value.faqList??[]

    }
})

const preSaveData = computed(() => {
    if (PageHomeData.value === null || PageHomeData.value) {
        return {
            promotionList: promotionList.value,
            alwaysIntroduction: alwaysIntroduction.value,
            alwaysList: alwaysList.value,
            stepList: stepList.value,
            faqList: faqList.value,
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



// 外送種類
const PromotionDefault: PromotionType = {
    img: '',
    link: ''
}
const promotionList = ref<PromotionType[]>([])
const addPromotionListItem = () => {
    promotionList.value.push(cloneDeep(PromotionDefault))
}
const removePromotionListItem = async (index: number) => {
    try {
        await removeStorage(promotionList.value[index].img)
        promotionList.value.splice(index, 1)
        Notify.handleSuccess('刪除成功')
    } catch (error) {
        console.log(error);
    }
}


//  永續健康餐點 
const alwaysIntroduction = ref<AlwaysIntroduction>('')
const AlwaysListItemDefault: AlwaysType = {
    img: '',
}
const alwaysList = ref<AlwaysType[]>([])
const addAlwaysListItem = () => {
    alwaysList.value.push(cloneDeep(AlwaysListItemDefault))
}
const removeAlwaysListItem = async (index: number) => {
    try {
        await removeStorage(alwaysList.value[index].img)
        alwaysList.value.splice(index, 1)
        Notify.handleSuccess('刪除成功')
    } catch (error) {
        console.log(error);
    }
}

//  訂餐流程 
const StepListItemDefault: StepType = {
    img: '',
    intro: ''
}
const stepList = ref<StepType[]>([])
const addStepListItem = () => {
    stepList.value.push(cloneDeep(StepListItemDefault))
}
const removeStepListItem = async (index: number) => {
    try {
        await removeStorage(stepList.value[index].img)
        stepList.value.splice(index, 1)
        Notify.handleSuccess('刪除成功')
    } catch (error) {
        console.log(error);
    }
}


//  常見問題 
const FaqListItemDefault: FaqType = {
    title: '',
    intro: '',
    open: false,
}
const faqList = ref<FaqType[]>([])
const addFaqListItem = () => {
    faqList.value.push(cloneDeep(FaqListItemDefault))
}
const removeFaqListItem = async (index: number) => {
    try {
        faqList.value.splice(index, 1)
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