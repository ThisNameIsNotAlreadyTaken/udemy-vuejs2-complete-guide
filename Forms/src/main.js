import Vue from 'vue';
import App from './App.vue';
import Assignment from './Assignment.vue';

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#assignment',
  render: h => h(Assignment)
})