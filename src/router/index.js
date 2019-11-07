import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/views/login'

import Home from '@/views/home'

import Welcome from '@/views/welcome'

import NotFound from '@/views/404'

import local from '@/utils/local'

import Article from '@/views/article'

import Image from '@/views/image'

import Publish from '@/views/publish'

import Comment from '@/views/comment'

import Setting from '@/views/setting'

import Fans from '@/views/fans'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/', component: Welcome
        },
        {
          path: '/article', component: Article
        },
        {
          path: '/image', component: Image
        },
        {
          path: '/publish', component: Publish
        },
        {
          path: '/comment', component: Comment
        },
        {
          path: '/setting', component: Setting
        },
        {
          path: '/fans', component: Fans
        }
      ]
    },
    { path: '*', component: NotFound }]
})

router.beforeEach((to, from, next) => {
  const user = local.getUser()
  if (user && user.token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
