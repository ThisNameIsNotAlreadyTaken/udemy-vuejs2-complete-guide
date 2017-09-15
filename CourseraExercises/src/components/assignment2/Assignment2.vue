<template>
  <div>
    <h1>Shopping List Check Off</h1>
    <div class="row">
        <app-to-buy-list :items="items" @buyClick="moveToBought"></app-to-buy-list>
        <app-bought-list :items="boughtItems"></app-bought-list>
    </div>
  </div>
</template>

<script>
  import ToBuyList from './ToBuyList.vue';
  import BoughtList from './BoughtList.vue';
  import Data from './data';
  import _ from 'lodash';

  export default {
    data() {
      return {
        items: [],
        boughtItems: []
      }
    },
    components: {
      appToBuyList: ToBuyList,
      appBoughtList: BoughtList
    },
    methods: {
      moveToBought(index) {
        this.boughtItems.push(this.items.splice(index, 1)[0]);
      }
    },
    beforeMount() {
      this.items = _.clone(Data);
      this.boughtItems = [];
    }
  }
</script>