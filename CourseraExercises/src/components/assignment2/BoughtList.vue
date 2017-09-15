<template>
    <div class="col-md-6">
        <h2>Already Bought:</h2>
        <ul>
            <app-bought-item v-for="(item, index) in items" :key="index" :item="item" :index="index"></app-bought-item>
        </ul>
        <div v-if="!items.length" class="emptyMessage">Nothing bought yet.</div>
    </div>
</template>

<script>
    import BoughtItem from './BoughtItem.vue';

    export default {
        props: ['items'],
        components: {
            appBoughtItem: BoughtItem
        }
    }
</script>

<style scoped>
  .emptyMessage {
    font-weight: bold;
    color: red;
    font-size: 1.2em;
  }  
</style>