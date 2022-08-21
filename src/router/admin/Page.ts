
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw =
{
    name: 'Pages',
    path: 'Pages',
    meta: {
        title: '站點管理',
        icon: 'auto_awesome_mosaic',
        showInMenu: true
    },
    component: () => import('@/views/admin/Layout.vue'),

    redirect: {
        name: 'HomeSet',
    },
    children: [
        {
            name: 'HomeSet',
            path: 'sethome',
            meta: {
                title: '首頁設定',
                icon: 'home',
                showInMenu: true
            },
            component: () => import('@/views/admin/page/HomeSet.vue'),
        },
        {
            name: 'BookingSet',
            path: 'setbooking',
            meta: {
                title: '訂餐設定',
                icon: 'home',
                showInMenu: true
            },
            component: () => import('@/views/admin/page/BookingSet.vue'),
        },
        {
            name: 'DeliverySet',
            path: 'setdelivery',
            meta: {
                title: '外送設定',
                icon: 'home',
                showInMenu: true
            },
            component: () => import('@/views/admin/page/DeliverySet.vue'),
        },
       
       
        {
            name: 'AdminSet',
            path: 'setAdmin',
            meta: {
                title: '管理員設定',
                icon: 'admin_panel_settings',
                showInMenu: true
            },
            component: () => import('@/views/admin/page/AdminSet.vue'),
        },
         

    ]
};


export default routes




