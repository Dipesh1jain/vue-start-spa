import { createRouter,createWebHashHistory } from "vue-router";
import PageViewer from './components/PageViewer.vue';
import CreatPage from './components/CreatePage.vue';


const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',component:PageViewer},
        {path:'/create',component:CreatPage},
    ]
});

export default router;