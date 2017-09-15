<template>
    <table class="table table-striped" v-if="items.length">
        <thead>
            <tr>
                <th>Name</th>
                <th>Short Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.short_name}}</td>
                <td>{{item.description}}</td>
                <td>
                    <button class="btn btn-default" @click="removeItem(index)">
                        <span class="glyphicon glyphicon-remove text-danger"></span> Don't want this one!
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: ['items'],
        methods: {
            ...mapActions({
                removeItemAction: 'removeItem'
            }),
            removeItem(index) {
                this.removeItemAction(index);
            }
        }
    }
</script>