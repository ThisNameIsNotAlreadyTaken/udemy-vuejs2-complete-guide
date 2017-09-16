<template>
  <div>
    <app-spinner></app-spinner>
    <app-header></app-header>
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Spinner from './components/Spinner.vue';
  import Store from './store';

  export default {
    components: {
      appHeader: Header,
      appSpinner: Spinner
    },
    store: Store 
  }
</script>