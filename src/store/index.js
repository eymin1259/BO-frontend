import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import adminStore from './modules/adminStore';
import orderStore from './modules/orderStore';
import refundStore from './modules/refundStore';
import orderCancelStore from './modules/orderCancelStore';
import prodManageStore from './modules/prodManageStore';
import qnaStore from './modules/qnaStore';
import reviewStore from './modules/reviewStore';

const store = new Vuex.Store({
  modules: {
    adminStore,
    orderStore,
    refundStore,
    orderCancelStore,
    prodManageStore,
    qnaStore,
    reviewStore
  }
});

export default store;
