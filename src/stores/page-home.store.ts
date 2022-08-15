import { BannerType, IntroductionType, GrowType, PostType, PersonType } from '@/types/home.type'
import { defineStore } from 'pinia'

export const usePageHomeStore = defineStore('PageHome', {
    state: () => ({
        bannerData: <BannerType>{},
        intro:<IntroductionType>'',
        growNumberList: <GrowType[]>[],
        postList: <PostType[]>[],
        personList: <PersonType[]>[],
    }),

})