import Vue from 'vue';
import App from './App.vue';
import Assignment from './Assignment.vue';

Vue.filter('toLowercase', (value) => {
  return value.toLowerCase();
});

Vue.filter('withLength', (value) => {
  let length = !value ? 0 : value.length;

  return `${value} (${length})`;
})

Vue.mixin({
  created() {
    console.log('Global mixin - created hook');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#assignment',
  render: h => h(Assignment)
})