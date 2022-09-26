
import { RouteRecordRaw } from 'vue-router'
import { prefixRoutes } from '../menu'

const routes: RouteRecordRaw =
{
    name: 'Forms',
    path: 'Forms',
    meta: {
        title: '表單管理',
        icon: 'description',
        showInMenu: true
    },
    component: () => import('@/views/admin/Layout.vue'),

    redirect: {
        name: 'FormList',
    },
    children: [
        {
            name: 'FormList',
            path: 'list',
            meta: {
                title: '表單列表',
                icon: 'format_list_numbered',
                showInMenu: true
            },
            component: () => import('@/views/admin/FormList.vue'),
        },


    ]
};


export default routes




