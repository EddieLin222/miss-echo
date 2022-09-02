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
    <!-- 服務簡介 -->
    <div class="p-3 border-b ">
        <div class="font-bold text-2xl">服務簡介</div>
        <div class="mt-5 font-bold text-lg">簡介</div>
        <q-input
            filled
            v-model="serviceData.introduction"
        />
        <div class="px-3 w-full flex ">
            <e-image-uploader
                v-if="serviceData"
                path="home/booking"
                class="w-[30%]"
                v-model="serviceData.partner.img"
                :name="`企業夥伴`"
            />
            <e-image-uploader
                v-if="serviceData"
                path="home/booking"
                class="w-[30%] mx-[3%]"
                v-model="serviceData.event.img"
                :name="`活動累積`"
            />
              <e-image-uploader
                v-if="serviceData"
                path="home/booking"
                class="w-[30%]"
                v-model="serviceData.reduce.img"
                :name="`減少減碳`"
            />
        </div>
    </div>



    <!-- 服務介紹 -->
    <div class="p-3 border-b ">
        <div class="flex items-center gap-3">
            <div class="font-bold text-2xl">服務介紹</div>
        </div>
        <div class="p-3 w-full ">


            <div class="mt-3 flex items-center gap-3">
                <div class="font-bold text-lg">列點</div>
                <div>
                    <q-btn
                        @click="addServiceIntroListItem()"
                        round
                        color="primary"
                        icon="add"
                        size="sm"
                    />
                </div>
            </div>
            <div
                v-if="serviceIntroList.length == 0"
                class=" mt-1 p-3"
            >
                無資料
            </div>
            <template v-else>

                <div class="p-3 w-full overflow-y-auto">
                    <q-scroll-area class="h-[30rem] max-w-[100vw]">


                        <draggable
                            class="flex gap-3 ml-3 flex-nowrap"
                            v-model="serviceIntroList"
                            item-key="index"
                            handle=".handle"
                        >
                            <template #item="{ element, index }">

                                <div class="relative mt-1 w-[30vw] max-w-[500px]">

                                    <q-btn
                                        @click="removeServiceIntroListItem(index)"
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
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}項連結</div>
                                    <q-input
                                        filled
                                        v-model="element.link"
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}項內文</div>
                                    <q-input
                                        filled
                                        v-model="element.content"
                                    />

                                    <e-image-uploader
                                        path="home/booking"
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
    <!-- 企業好評 -->
    <div class="p-3 border-b ">
        <div class="flex items-center gap-3">
            <div class="font-bold text-2xl">企業好評</div>
        </div>
        <div class="p-3 w-full ">


            <div class="mt-3 flex items-center gap-3">
                <div class="font-bold text-lg">列點</div>
                <div>
                    <q-btn
                        @click="addCompanyListItem()"
                        round
                        color="primary"
                        icon="add"
                        size="sm"
                    />
                </div>
            </div>
            <div
                v-if="companyList.length == 0"
                class=" mt-1 p-3"
            >
                無資料
            </div>
            <template v-else>

                <div class="p-3 w-full overflow-y-auto">
                    <q-scroll-area class="h-[30rem] max-w-[100vw]">


                        <draggable
                            class="flex gap-3 ml-3 flex-nowrap"
                            v-model="companyList"
                            item-key="index"
                            handle=".handle"
                        >
                            <template #item="{ element, index }">

                                <div class="relative mt-1 w-[30vw] max-w-[500px]">

                                    <q-btn
                                        @click="removeCompanyListItem(index)"
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
                                        第{{ index + 1 }}項企業名稱
                                    </div>
                                    <q-input
                                        filled
                                        v-model="element.name"
                                    />
                                    <div class="mt-5 font-bold text-lg">第{{ index + 1 }}項推薦文字</div>
                                    <q-input
                                        filled
                                        v-model="element.text"
                                    />
                                    <e-image-uploader
                                        path="home/booking"
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
import { ServiceDataType, ServiceIntroType, CompanyType } from '@/types/booking.type'

const Notify = useNotify()
const adminStore = useAdminStore()

// DB
const PageHomeDB = db().collection('Page').doc('Booking')
const PageHomeData = ref((useFirestore(PageHomeDB)) as any)
const TimeNote = ref<Array<any | null>>((useFirestore(PageHomeDB.collection('TimeNote').orderBy('timestamp', 'desc').limit(1))) as any)
watchEffect(() => {
    if (PageHomeData.value) {
        serviceData.value = PageHomeData.value.serviceData
        serviceIntroList.value = PageHomeData.value.serviceIntro
        companyList.value = PageHomeData.value.companyList

    }
})

const preSaveData = computed(() => {
    if (PageHomeData.value === null || PageHomeData.value) {
        return {
            serviceData: serviceData.value,
            serviceIntro: serviceIntroList.value,
            companyList: companyList.value,
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


// 服務簡介
const ServiceDataDefault: ServiceDataType = {
    introduction: '',
    partner: {
        img: '',
        info: ''
    },
    event: {
        img: '',
        info: ''
    },
    reduce: {
        img: '',
        info: ''
    },
}
const serviceData = ref<ServiceDataType>(cloneDeep(ServiceDataDefault))

// 服務介紹
const ServiceIntroDefault: ServiceIntroType = {
    title: '',
    content: '',
    img: '',
    link: ''
}
const serviceIntroList = ref<ServiceIntroType[]>([])
const addServiceIntroListItem = () => {
    serviceIntroList.value.push(cloneDeep(ServiceIntroDefault))
}
const removeServiceIntroListItem = async (index: number) => {
    try {
        await removeStorage(serviceIntroList.value[index].img)
        serviceIntroList.value.splice(index, 1)
        Notify.handleSuccess('刪除成功')
    } catch (error) {
        console.log(error);
    }
}


//  企業好評 
const CompanyListItemDefault: CompanyType = {
    img: '',
    name: '',
    text: ''
}
const companyList = ref<CompanyType[]>([])
const addCompanyListItem = () => {
    companyList.value.push(cloneDeep(CompanyListItemDefault))
}
const removeCompanyListItem = async (index: number) => {
    try {
        await removeStorage(companyList.value[index].img)
        companyList.value.splice(index, 1)
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