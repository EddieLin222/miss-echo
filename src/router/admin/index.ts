
import { RouteRecordRaw } from 'vue-router'
import { getRoutesMenu } from '../menu';
import posts from "./Post"
import PageSettings from './Page'
import form from "./Form"

const routeChildren = [
    posts,
    form,
    PageSettings,
];

const routes: RouteRecordRaw =
{
    name: 'admin',
    path: '/admin',
    meta: {
        title: '後台管理'
    },
    component: () => import('@/views/admin/LayoutMenu.vue'),
    children: routeChildren
};


export default { routes, routesMenu: getRoutesMenu(routes) }
