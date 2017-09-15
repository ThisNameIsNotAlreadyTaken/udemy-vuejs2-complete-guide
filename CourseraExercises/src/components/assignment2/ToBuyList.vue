<template>
    <!-- To Buy List -->
    <div class="col-md-6">
        <h2>To Buy:</h2>
        <ul>
            <app-to-buy-item v-for="(item, index) in items" :key="index" :item="item" :index="index" @buyClick="$emit('buyClick')"></app-to-buy-item>
        </ul>
        <div v-if="!items.length" class="emptyMessage">Everything is bought!</div>
    </div>
</template>

<script>
    import ToBuyItem from './ToBuyItem.vue';

    export default {
        props: ['items'],
        components: {
            appToBuyItem: ToBuyItem
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