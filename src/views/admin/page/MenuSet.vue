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


    <!-- 菜單介紹 -->
    <div class="p-3 border-b ">
        <div class="flex items-center gap-3">
            <div class="font-bold text-2xl">菜單介紹</div>
        </div>
        <div class="p-3 w-full ">


            <div class="mt-5 font-bold text-lg">標題</div>
            <q-input
                filled
                v-model="textArea.title"
            />
            <div class="mt-5 font-bold text-lg">內容</div>
            <q-input
                filled
                v-model="textArea.content"
                type="textarea"
            />
            <e-image-uploader
                path="page/menu"
                class="w-48"
                v-model="textArea.image"
                :name="`主圖片`"
            />
            <div class="mt-10 flex items-center gap-3">
                <div class="font-bold text-lg">列點</div>
                <div>
                    <q-btn
                        @click="addMenuListItem()"
                        round
                        color="primary"
                        icon="add"
                        size="sm"
                    />
                </div>
            </div>
            <div
                v-if="menuList.length == 0"
                class=" mt-1 p-3"
            >
                無資料
            </div>
            <template v-else>

                <div class="p-3 w-full bg-white">
               


                        <draggable
                            class="flex gap-3 ml-3 flex-nowrap flex-col"
                            v-model="menuList"
                            item-key="name"
                            handle=".handle"
                        >
                            <template #item="{ element, index }">

                                <div class="relative mt-1 w-[30vw] max-w-[500px]">

                                    <q-btn
                                        @click="removeMenuListItem(index)"
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
                                        第{{ index + 1 }}類菜單名稱
                                        <q-input
                                            debounce="1000"
                                            filled
                                            v-model="element.name"
                                        />
                                        <div class="mt-3 mb-2 flex items-center gap-3 bg-white w-full">
                                            <div class="font-bold text-lg">第{{ index + 1 }}類菜單列點</div>
                                            <div>
                                                <q-btn
                                                    @click="addMenuChildListItem(element['menu'])"
                                                    round
                                                    color="primary"
                                                    icon="add"
                                                    size="sm"
                                                />
                                            </div>
                                        </div>
                                        <q-scroll-area class="h-[30rem] w-[100vw]">
                                        <draggable
                                            class="flex gap-3 ml-10 flex-nowrap"
                                            v-model="element['menu']"
                                            item-key="img"
                                            handle=".handle"
                                        >
                                            <template #item="ChildListChildList">

                                                <div class="relative mt-1 w-[30vw] max-w-[500px]">

                                                    <q-btn
                                                        @click="removeMenuChildListItem(element['menu'],ChildListChildList.index)"
                                                        class="absolute right-0 -top-[1px]"
                                                        color="red"
                                                        size="xs"
                                                        icon="close"
                                                        round
                                                    >
                                                        <q-tooltip>刪除第{{ ChildListChildList.index + 1 }}項</q-tooltip>
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
                                                        第{{ ChildListChildList.index + 1 }}像連結
                                                    </div>
                                                    <q-input
                                                        filled
                                                        v-model="ChildListChildList.element.link"
                                                    />

                                                    <e-image-uploader
                                                        path="page/menu"
                                                        class="w-48"
                                                        v-model="ChildListChildList.element.img"
                                                        :name="`第${ChildListChildList.index + 1}項圖片`"
                                                    />

                                                </div>
                                            </template>
                                        </draggable>
                                    </q-scroll-area>

                                    </div>


                                </div>
                            </template>
                        </draggable>

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
import { BannerAreaType, MenuListItem, MenuItem } from "@/types/menu.type";

const Notify = useNotify()
const adminStore = useAdminStore()

// DB
const PageHomeDB = db().collection('Page').doc('Menu')
const PageHomeData = ref((useFirestore(PageHomeDB)) as any)
const TimeNote = ref<Array<any | null>>((useFirestore(PageHomeDB.collection('TimeNote').orderBy('timestamp', 'desc').limit(1))) as any)
watchEffect(() => {
    if (PageHomeData.value) {
        textArea.value = PageHomeData.value.textArea
        menuList.value = PageHomeData.value.menuList ?? []

    }
})

const preSaveData = computed(() => {
    if (PageHomeData.value === null || PageHomeData.value) {
        return {
            textArea: textArea.value,
            menuList: menuList.value,
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



// 標題內文
const TextAreaDefault: BannerAreaType = {
    title: '',
    content: '',
    image: ''
}
const textArea = ref<BannerAreaType>(TextAreaDefault)




// 菜單類
const MenuItemDefault: MenuListItem = {
    name: '',
    menu: []
}
const menuList = ref<MenuListItem[]>([])
const addMenuListItem = () => {
    menuList.value.push(cloneDeep(MenuItemDefault))
}
const removeMenuListItem = async (index: number) => {
    try {
        // await removeStorage(menuList.value[index].img)
        menuList.value.splice(index, 1)
        Notify.handleSuccess('刪除成功')
    } catch (error) {
        console.log(error);
    }
}



// 菜單子類
const MenuChildItemDefault: MenuItem = {
    img: '',
    link: ''
}
const menuChildList = ref<MenuItem[]>([])
const addMenuChildListItem = (childArray: MenuItem[]) => {
    childArray.push(cloneDeep(MenuChildItemDefault))
}
const removeMenuChildListItem = async (childArray: any, index: number) => {
    console.log("🚀 ~ file: MenuSet.vue ~ line 303 ~ removeMenuChildListItem ~ childArray", childArray)
    try {
        await removeStorage(childArray[index].img)
        childArray.splice(index, 1)
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