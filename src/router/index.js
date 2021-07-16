// 路由表

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // 404頁面
  {
    path: '/:pathMatch(.*)*',
    // name: '',
    component: () => import('../views/NotFound.vue'),
  },
  // 對應app.vue router-link to="path名稱"
  // 前台主頁面Front路由
  {
    path: '/',
    // name: '',
    component: () => import('../views/Front.vue'),
    // 巢狀路由children
    children: [
      // 前台產品列表頁面Products路由 若path為空值 直接顯示在父層的router-view
      {
        path: 'index',
        // name: '',
        component: () => import('../views/Front/Index.vue'),
      },
      // 前台產品列表頁面Products路由
      {
        path: 'products',
        // name: '',
        component: () => import('../views/Front/Products.vue'),
      },
      // 前台單一產品列表頁面Product動態路由
      {
        path: 'product/:id',
        // name: '',
        component: () => import('../views/Front/Product.vue'),
      },
      // 前台產品列表頁面discount路由
      {
        path: 'discount',
        // name: '',
        component: () => import('../views/Front/Discount.vue'),
      },
      // 前台產品列表頁面Shope路由
      {
        path: 'shop',
        // name: '',
        component: () => import('../views/Front/Shop.vue'),
      },
      {
        path: 'login',
        // name: '',
        component: () => import('../views/Front/Login.vue'),
      },
      {
        path: 'cart',
        // name: '',
        component: () => import('../views/Front/Cart.vue'),
      },
    ],
  },
  // --後台--
  // 後台Dashboard主頁面路由
  {
    path: '/dashboard',
    // name: '',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '/order-products',
        // name: '',
        component: () => import('../views/admin/OrderProducts.vue'),
      },
      {
        path: '/product-management',
        // name: '',
        component: () => import('../views/admin/ProductManagement.vue'),
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
