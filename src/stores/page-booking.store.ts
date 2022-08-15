import { ServiceDataType, ServiceIntroType, CompanyType } from '@/types/booking.type'
import { defineStore } from 'pinia'

export const usePageHomeStore = defineStore('PageHome', {
    state: () => ({
        serviceData: <ServiceDataType>{},
        serviceIntro: <ServiceIntroType[]>[],
        companyList: <CompanyType[]>[],
    }),

})