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
    <!-- Head & Body -->
    <div  class="p-3 border-b ">
        <div class="font-bold text-2xl">Head & Body</div>
        <div class="px-3 w-full flex justify-between">
            <q-input class="w-full min-h-[50vh]" v-model="scriptData.text" type="textarea"/>
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
import { useScriptStore } from '@/stores/script.store';

const scriptStore = useScriptStore()

const Notify = useNotify()
const adminStore = useAdminStore()







// DB
const PageHomeDB = scriptStore.DB
const PageHomeData = ref((useFirestore(PageHomeDB)) as any)
const TimeNote = ref<Array<any | null>>((useFirestore(PageHomeDB.collection('TimeNote').orderBy('timestamp', 'desc').limit(1))) as any)
watchEffect(() => {
    if (PageHomeData.value) {
        scriptData.value = PageHomeData.value.scriptData
    }
})

const preSaveData = computed(() => {
    if (PageHomeData.value === null || PageHomeData.value) {
        return {
            scriptData: scriptData.value,
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



// Script
interface scriptType {
    text:string;
}

const ScriptDefault: scriptType = {
    text: "",
}
const scriptData = ref<scriptType>(cloneDeep(ScriptDefault))






</script>

<style scoped>
:deep() .q-editor__content a {
    @apply text-[#00A29A]
}
</style>