import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './src/App';
import { router } from './src/router';
import store from './src/store';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
  VeeValidate
}).$mount('#root');
