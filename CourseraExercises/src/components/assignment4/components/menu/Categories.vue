<template>
    <div class="row">
        <div class="col-sm-3 col-md-3 sidebar">
            <app-category-list></app-category-list>
        </div>
        <div class="col-sm-9 col-md-9 main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import CategoryList from './CategoryList.vue';

    export default {
        components: {
            appCategoryList: CategoryList
        }
    }
</script>

<style scoped>
    .sidebar {
        max-height: 100%;
        z-index: 1000;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: #f5f5f5;
        border-right: 1px solid #eee;
    }
</style>