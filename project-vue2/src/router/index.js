import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
            ishide: true,
            component: () => import("@/components/Login.vue")
        },
        {
            path: '/login',
            name: "login",
            ishide: true,
            component: () => import("@/components/Login.vue")
        },
        {
            path: '/home',
            name: "学生管理",
            redirect: "/home/student",
            iconClass: '',
            component: () => import('@/components/Home.vue'), //路由懒加载
            //component: resolve => require(['@/components/Home.vue'], resolve) //异步加载
            children: [
                {
                    path: '/home/student',
                    name: '学生列表',
                    component: () => import('@/components/students/StudentList')
                },
                {
                    path: '/home/info',
                    name: '信息列表',
                    component: () => import('@/components/students/InfoList')
                },
                {
                    path: '/home/infos',
                    name: '信息管理',
                    component: () => import('@/components/students/InfoLists')
                },
                {
                    path: '/home/work',
                    name: '作业列表',
                    component: () => import('@/components/students/WorkList')
                },
                {
                    path: '/home/works',
                    name: '作业管理',
                    component: () => import('@/components/students/WorkMent')
                }
            ]
        },
        {
            path: '/home',
            name: "数据管理",
            redirect: "/home/dataview",
            iconClass: '',
            component: () => import('@/components/Home.vue'), //路由懒加载
            //component: resolve => require(['@/components/Home.vue'], resolve) //异步加载
            children: [
                {
                    path: '/home/dataview',
                    name: '数据概览',
                    component: () => import('@/components/dataAnalysis/DataView')
                },
                {
                    path: '/home/mapview',
                    name: '地图概览',
                    component: () => import('@/components/dataAnalysis/MapView')
                },
                {
                    path: '/home/scoreview',
                    name: '旅游地图',
                    component: () => import('@/components/dataAnalysis/ScoreView')
                },
                {
                    path: '/home/travelview',
                    name: '分数地图',
                    component: () => import('@/components/dataAnalysis/TravelView')
                }
            ]
        },
        {
            path: '/users',
            name: "用户中心",
            iconClass: '',
            component: () => import('@/components/Home.vue'), //路由懒加载
            children: [
                {
                    path: '/users/user',
                    name: '权限管理',
                    component: () => import('@/components/users/Users')
                }
            ]
        },
        {
            path: '*',
            name: 'NotFound',
            ishide: true,
            component: () => import('@/components/NotFound.vue') //路由懒加载
        }
    ],
    mode: 'history'
})