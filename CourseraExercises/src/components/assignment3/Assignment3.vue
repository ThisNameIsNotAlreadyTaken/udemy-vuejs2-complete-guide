<template>
  <div>
    <h1>Narrow Down Your Chinese Menu Choice</h1>

    <div class="form-group">
        <input type="text" placeholder="search term" class="form-control" v-model="searchTerm">
    </div>
    <div class="form-group narrow-button">
        <button class="btn btn-primary" @click="searchItems">Narrow It Down For Me!</button>
    </div>

    <app-loader :visible="isLoading"></app-loader>

    <div class="clearfix"></div>

    <div class="alert alert-danger" role="alert" v-if="isNothingFound">
        Nothing found
    </div>

    <app-found-list :items="items"></app-found-list>  
  </div>
</template>

<script>
  import FoundList from './FoundList.vue';
  import Loader from './Loader.vue';
  import Store from './store';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        searchTerm: '',
        isLoading: false,
        isNothingFound: false
      }
    },
    computed: {
      ...mapGetters(['items'])
    },
    methods: {
      ...mapActions(['asyncUpdateItems']),
      searchItems() {
        if (!this.searchTerm) {
            this.isNothingFound = true;
            return;
        } else {
            this.isNothingFound = false;
        }

        this.isLoading = true;

        const self = this;

        this.asyncUpdateItems({ searchTerm: this.searchTerm, callback: (items) => {
            self.isNothingFound = !items.length;
            self.isLoading = false;
        }});
      }
    },
    components: {
      appFoundList: FoundList,
      appLoader: Loader
    },
    store: Store
  }
</script>

<style scoped>
  h1 {
    margin-bottom: 30px;
  }

  input[type="text"] {
    width: 200px;
    float: left;
  }

  .narrow-button {
    float: left;
    margin-left: 10px;
  }
</style>