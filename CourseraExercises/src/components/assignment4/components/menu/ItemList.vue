<template>
    <div v-if="data && category && !isLoading">
        <h1 class="page-header">{{ category.name }}</h1>
        <span class="text-muted">{{ category.special_instructions }}</span>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.price_large }}</td>
                        <td>{{ item.description }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                data: 'items',
                isLoading: 'isLoading'
            }),
            category() {
                return this.data.category;
            },
            items() {
                return this.data.menu_items;
            }
        },
        methods: {
            ...mapActions(['asyncFetchItems'])
        },
        beforeRouteEnter(to, from, next) {
            next(vm => vm.asyncFetchItems(to.params.id));
        },
        beforeRouteUpdate(to, from, next) {
            this.asyncFetchItems(to.params.id);
            next();
        }
    }
</script>