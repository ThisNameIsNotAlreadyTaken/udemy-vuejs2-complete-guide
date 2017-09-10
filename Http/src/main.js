import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-f4b25.firebaseio.com';

// Interceptors example
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method === 'POST') {
    request.method = 'PUT';
  }
  // Response interceptors example
  next((response) => {
    response.json = () => { return { messages: response.body }};
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});