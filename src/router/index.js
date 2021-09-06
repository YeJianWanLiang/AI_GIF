import VueRouter from 'vue-router'

import AI_Upload from '../views/AI_Upload.vue'
import AI_Display from "../views/AI_Display.vue"

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'AI_Upload',
            component: AI_Upload,
            meta: {
                title: '图像处理平台-AI抠图',
            },
        },
        {
            path: '/AI_Display',
            name: 'AI_Display',
            component: AI_Display,
            meta: {
                title: '图像处理平台-AI抠图',
            },
        },
    ]
});

// router.afterEach((to) => {
//     document.title = to.meta.title;
// })
export default router