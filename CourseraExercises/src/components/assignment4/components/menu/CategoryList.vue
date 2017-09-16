<template>
   <ul class="nav nav-sidebar">
       <router-link v-for="(item, index) in items" :key="index" tag="li" active-class="active" :to="{ name: 'itemList', params: { id: item.short_name }}">
           <a style="cursor: pointer">{{ item.name }}</a>
       </router-link>
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                items: 'categories'
            })
        },
        methods: {
            ...mapActions(['asyncFetchCategories'])
        },
        created() {
            if (!this.items || !this.items.length) {
                this.asyncFetchCategories();
            }
        }
    }
</script>

<style scoped>
    .nav-sidebar > .active > a, .nav-sidebar > .active > a:hover, .nav-sidebar > .active > a:focus {
        color: #fff;
        background-color: #428bca;
    }   
</style>