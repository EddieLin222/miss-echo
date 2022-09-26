import { PostType, PostCategoryType } from '@/types/post.type'
import { defineStore } from 'pinia';
import { db } from '@/common/firebase';
import { useFirestore } from '@vueuse/firebase';
import { filter, find } from 'lodash';
import { Ref } from 'vue';


export const useFormStore = defineStore('form', {

    state: () => ({
        DB: db().collection('Form'),

    }),
    getters: {
        data(state){
            return  (useFirestore<any>(state.DB, [], { autoDispose: true })) as Ref
        },

        loaded(){
            return !!(this.data as unknown as Ref).value 
        },

        formSetting() {
            if (this.loaded) {
                return find((this.data as unknown as Ref).value , (o:any) => o.id == "Setting")
            }
             [];
        },
        forms() {
            if (this.loaded) {
                return filter((this.data as unknown as Ref).value , (o:any) => o.id !== "Setting")
            }

        },


    }
})