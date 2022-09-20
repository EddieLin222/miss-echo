
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
            name: 'ScriptSet',
            path: 'setscript',
            meta: {
                title: '腳本設定',
                icon: 'home',
                showInMenu: true
            },
            component: () => import('@/views/admin/page/ScriptSet.vue'),
        },
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
            name: 'DeliverySet',
            path: 'setdelivery',
            meta: {
                title: '環保外送設定',
                icon: 'home',
                showInMenu: true
            },
            component: () => import('@/views/admin/page/DeliverySet.vue'),
        },
        {
            name: 'BookingSet',
            path: 'setbooking',
            meta: {
                title: '活動訂餐設定',
                icon: 'home',
                showInMenu: true
            },
            component: () => import('@/views/admin/page/BookingSet.vue'),
        },
        {
            name: 'LifeSet',
            path: 'setlife',
            meta: {
                title: '意識生活設定',
                icon: 'home',
                showInMenu: true
            },
            component: () => import('@/views/admin/page/LifeSet.vue'),
        },
        {
            name: 'AboutSet',
            path: 'setabout',
            meta: {
                title: '關於我們設定',
                icon: 'home',
                showInMenu: true
            },
            component: () => import('@/views/admin/page/AboutSet.vue'),
        },
        {
            name: 'JournalSet',
            path: 'setjournal',
            meta: {
                title: '永續日記設定',
                icon: 'home',
                showInMenu: true
            },
            component: () => import('@/views/admin/page/JournalSet.vue'),
        },
        {
            name: 'MenuSet',
            path: 'setmenu',
            meta: {
                title: '菜單介紹設定',
                icon: 'home',
                showInMenu: true
            },
            component: () => import('@/views/admin/page/MenuSet.vue'),
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




