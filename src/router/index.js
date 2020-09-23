import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductRegist from '../pages/ProductRegist';
import MemberLookup from '../pages/MemberLookup';
import SellerModify from '../pages/SellerModify';
import Lookup from '../pages/Lookup';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/account/member'
    },
    {
      path: '/product/regist',
      name: 'ProductRegist',
      component: ProductRegist
    },
    {
      path: '/account/seller/modify',
      name: 'SellerModify',
      component: SellerModify
    },
    {
      path: '/account/:type',
      name: 'MemberLookup',
      component: MemberLookup
    },
    {
      path: '/:lookup',
      name: 'Lookup',
      component: Lookup
    }
  ]
});
