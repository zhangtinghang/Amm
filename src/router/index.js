
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/components/layout/layout'
export default new Router({
  routes: [
    // { path: '/404', component: _import('errorPage/404'), hidden: true },
    // { path: '/401', component: _import('errorPage/401'), hidden: true },
    {
      path: '/',
      name: 'Main',
      component: Layout,
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/components/home/index')
        }
      ]
    },
    {
      path: '/blog',
      component: Layout,
      children: [
        {
          path: '/blog',
          component: () => import('@/components/blog/index'),
          redirect: '/blog/list',
          children:[
            {
              path: 'list',
              name: 'Bloglist',
              component: () => import('@/components/blog/list/index'),
            },
            {
              path: 'detail',
              name: 'BlogDetail',
              component: () => import('@/components/blog/detail/index'),
              props: { userName: 'mapbar_front'}
              // meta: { title: 'editArticle', noCache: true }
              // hidden: true
            }
          ]
        }
      ]
      // children: [
      //   {
      //     path: 'blog/list',
      //     name: 'blogList',
      //     component: () => import('@/components/blog/index')
      //   },
        // {
        //   path: 'blogDetail',
        //   name: 'BlogDetail',
        //   component: () => import('@/components/blog/detail/index')
        // }
      // ]
    },
    {
      path: '/portfolio',
      component: Layout,
      children: [
        {
          path: '/portfolio',
          component: () => import('@/components/portfolio/index'),
          redirect: '/portfolio/list',
          children:[
            {
              path: 'list',
              name: 'PortfolioList',
              component: () => import('@/components/portfolio/list/index'),
            },
            {
              path: 'detail',
              name: 'PortfolioDetail',
              component: () => import('@/components/portfolio/detail/index'),
              // props: { userName: 'mapbar_front'}
              // meta: { title: 'editArticle', noCache: true }
              // hidden: true
            }
          ]
        }
      ]
    },
    {
      path: '/download',
      name: 'download',
      component: Layout,
      redirect: '/download',
      children: [
        {
          path: '/download',
          name: 'Download',
          component: () => import('@/components/download/index')
        }
      ]
    },
    {
      path: '/login',
      component: Layout,
      name:'login',
      redirect: '/login',
      children: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/components/login/index')
        }
      ]
    },
    {
      path: '/self',
      component: Layout,
      name:'self',
      redirect: '/self',
      children: [
        {
          path: '/self',
          name: 'Self',
          component: () => import('@/components/self/index')
        }
      ]
    }
  ]
})
