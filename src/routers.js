import BookShopForm1 from "./components/BookShopForms/BookShopForm1.vue";
import BookShopForm2 from "./components/BookShopForms/BookShopForm2.vue";
import BookShopForm3 from "./components/BookShopForms/BookShopForm3.vue";
import BookShopForm4 from "./components/BookShopForms/BookShopForm4.vue";
import BookShopForm5 from "./components/BookShopForms/BookShopForm5.vue";
import BookShopForm6 from "./components/BookShopForms/BookShopForm6.vue";
import BookShopForm7 from "./components/BookShopForms/BookShopForm7.vue";
import BookShopForm8 from "./components/BookShopForms/BookShopForm8.vue";
import BookShopForm9 from "./components/BookShopForms/BookShopForm9.vue";

import TaskPage from "./components/PractiseTask/TaskPage.vue";
import VuexTasks from "./components/PractiseTask/VuexTasks.vue";

import { createRouter,createWebHistory} from "vue-router";

const routes=[
    {
        name:"BookShopForm1",
        component: BookShopForm1,
        path: "/form1",
    },
    {
        name:"BookShopForm2",
        component: BookShopForm2,
        path: "/form2",
    },

    {
        name:"BookShopForm3",
        component: BookShopForm3,
        path: "/form3",
    },

    {
        name:"BookShopForm4",
        component: BookShopForm4,
        path: "/form4",
    },  
    {
        name:"BookShopForm5",
        component: BookShopForm5,
        path: "/form5",
    },  
    {
        name:"BookShopForm6",
        component: BookShopForm6,
        path: "/form6",
    },    
    {
        name:"BookShopForm7",
        component: BookShopForm7,
        path: "/form7",
    }, 
    {
        name:"BookShopForm8",
        component: BookShopForm8,
        path: "/form8",
    }, 
    {
        name:"BookShopForm9",
        component: BookShopForm9,
        path: "/form9",
    },   
{
    name:"TaskPage",
    component: TaskPage,
    path: "/task1",
},  
{
    name:"VuexTasks",
    component: VuexTasks,
    path: "/task2",
},

];

const router=createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
//Now regiter router on main.js file
//after load the router in app.vue file