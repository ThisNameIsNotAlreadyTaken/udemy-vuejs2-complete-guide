import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import store from './store/store';
import VueResource from 'vue-resource';

Vue.use(VueRouter);

Vue.filter('currency', (value) => {
  return `$${value.toLocaleString()}`;
});

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-41573.firebaseio.com/';

const router = new VueRouter({
  routes: routes,
  mode: 'history' // default: 'hash'
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});