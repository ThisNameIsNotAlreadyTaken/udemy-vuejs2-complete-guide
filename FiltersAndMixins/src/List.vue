<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="(fruit, index) in filteredFruits" v-bind:key="index">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';

    export default {  
        mixins: [fruitMixin]
    }
</script>