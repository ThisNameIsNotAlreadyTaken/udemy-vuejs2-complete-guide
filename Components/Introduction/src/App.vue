<template>
<div class="container">
        <cmp-header></cmp-header>
        <hr>
        <div class="row">
            <servers></servers>
            <server-details></server-details>
        </div>
        <hr>
        <cmp-footer></cmp-footer>
    </div>  
</template>

<script>
  import Header from './components/Shared/Header.vue';
  import Footer from './components/Shared/Footer.vue';
  import Servers from './components/Server/Servers.vue';
  import ServerDetails from './components/Server/ServerDetails.vue';  

  export default {
        components: {
            'cmp-header': Header,
            'cmp-footer': Footer,
            'servers': Servers,
            'server-details': ServerDetails
        }
    }
</script>

<style>
</style>