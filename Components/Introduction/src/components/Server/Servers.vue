<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="server in servers" v-bind:key="server.id" @click="showDetails(server)">
                Server #{{ server.id }} status={{ server.status }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        data() {
            return {
                servers: [
                    { id: 1, status: 'Normal' },
                    { id: 2, status: 'Critical' },
                    { id: 3, status: 'Unknown' },
                    { id: 4, status: 'Normal' }
                ]
            };
        },
        methods: {
            showDetails(server) {
                eventBus.$emit('onDetailsShow', server);
            }
        }
    }
</script>


<style scoped>
    div {
        border: 1px solid blue;
    }

    li {
        cursor: pointer;
    }

    li:hover {
        background-color: lightgrey;
    }
</style>
