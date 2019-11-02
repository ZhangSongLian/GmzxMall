import store from '../store'
import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/components/UserLogin'
import layout from '@/pages/Layout/index'
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Router)

  const Routers = [
      { 
        path: '/', 
        name: '首页', 
        meta: {page:true},
        component: layout,
        redirect: '/home',
        children: [
            { 
              path: 'home',
              component: (resolve) => require(['@/pages/home/Home.vue'], resolve),
              name: '首页' 
            }
        ]
    },

    {
      path: '/mall',
      name:"商城",
      component: layout,
      redirect:'/',
      children:[
        {
          path:'/',
          component: (resolve) => require(['@/pages/mall/Mall'], resolve),
          name:"商城"
        }

      ]
    },
    
    {
      path: '/cart',
      name:"购物车",
      component: layout,
      redirect:'/',
      children:[
        {
          path:'/',
          component: (resolve) => require(['@/pages/cart/shopCart'], resolve),
          name:"购物车"
        }
      ]   
    },
    {
      path: '/my',
      name:"个人中心",
      component: layout,
      redirect:'/',
      children:[
        {
          path:'/',
          component: (resolve) => require(['@/pages/my/My'], resolve),
          name:"个人中心"
        }
      ]   
     
    },

    {
      path: '/Article/:id',
      name:"文章详情",
      meta: {},
      component: (resolve) => require(['@/pages/Article/index'], resolve)
    },
    {
      path: '/detail/:id',
      name: '商品详情页',
      meta: {},
      component: (resolve) => require(['@/pages/detail/Detail'], resolve)
    },
    {
      path: '/SubDetails',
      name: '确定订单',
      meta: {},
      component: (resolve) => require(['@/pages/SubDetails/index'], resolve)
    },

    { 
      path: '/order', 
      name: '订单列表', 
      meta: { 
          login: true,
      },
      component: (resolve) => require(['@/pages/order/orderList'], resolve)
   },
   { 
    path: '/address', 
    name: '收货地址', 
    meta: { 
        login: true
    },
    component: (resolve) => require(['@/pages/address/index'], resolve)
  },
  { 
    path: '/Feedback', 
    name: '用户反馈', 
    meta: { 
        login: true,
    },
    component: (resolve) => require(['@/pages/Feedback/index'], resolve)
  }
   
  ]
  
 const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};
const router = new Router(RouterConfig);
// 	 导航守卫 beforeEnter 守卫
//  to: Route: 即将要进入的目标 路由对象
//	from: Route: 当前导航正要离开的路由
//	next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  //登录拦截
  // 通过在beforeEach钩子函数来判断是否登录
 router.beforeEach((to, from, next) => {
  if (to.meta.login) { //判断前往的界面是否需要登陆
    if (store.state.user.user.name) { // 是否已经登陆
        next()
    }else{
        Toast('请先登录');  
        store.state.user.isLogin = true  
    }
  }else{
     Toast.clear();
      next() 
  }
});

router.afterEach((to, from) => {
  window.document.title = to.name;
  window.scrollTo(0, 0);
});

export default router
