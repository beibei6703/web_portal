import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: () => import("@/page/home"),
    children: [{
        path: "/",
        redirect: 'index'
      },
      {
        path: "index",
        component: () => import("@/page/index"),
        children: [{
            path: "/index",
            redirect: 'commonuse'
          },
          {
            path: "commonuse",
            name: "Commonuse",
            component: () => import("@/page/commonuse"),
          },
          {
            path: "business",
            name: "Business",
            component: () => import("@/page/business"),
          },
          {
            path: "worksystem",
            name: "Worksystem",
            component: () => import("@/page/worksystem"),
          }
        ]
      },
      {
        path: "container",
        component: () => import("@/components/container"),
        children: [{
          path: "/container",
          redirect: 'it'
          // component:()=> import ("@/page/it")
        }, {
          path: "it",
          name: 'IT',
          component: () => import("@/page/it")
        }, {
          path: "brand",
          name: 'Brand',
          component: () => import("@/page/brand")
        }, {
          path: "hrinfo",
          name: 'hrinfo',
          component: () => import("@/page/hrinfo")
        }]
      },
      {
        path: "default",
        name: "Default",
        component: () => import("@/components/default")
      }
    ]
  }]
})
