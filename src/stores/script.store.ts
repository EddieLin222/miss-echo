import { PostType, PostCategoryType } from '@/types/post.type'
import { defineStore } from 'pinia';
import { db } from '@/common/firebase';
import { useFirestore } from '@vueuse/firebase';
import { Ref } from 'vue';


export const useScriptStore = defineStore('script', {

    state: () => ({
        DB: db().collection('Page').doc('Script'),
        TimeNodeDB: db().collection('Page').doc('Script').collection('TimeNote')

    }),
    getters: {
        datum(state){
            return  (useFirestore<any>(state.DB, {}, { autoDispose: false })) as Ref
        },
    }
})