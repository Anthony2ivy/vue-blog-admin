import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../pages/homePage'
import newBlogPage from '../pages/newBlogPage'
import blogsPage from '../pages/blogsPage'
import loginPage from '../pages/loginPage'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: 'login'
    },
    {
      path: '/home',
      name: 'home',
      component: homePage
    },
    {
      path: '/newBlog',
      name: 'newBlog',
      component: newBlogPage
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: blogsPage
    },
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
  ]
})
