<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
        <div v-if="server">
            <p>Server id: {{ server.id }}</p>
            <p>Server status: {{ server.status }}</p>
            <button @click="setStatusToNormal">Set status to normal</button>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        data() {
            return { server: null }
        },
        methods: {
            setStatusToNormal() {
                this.server.status = 'Normal';
            }
        },
        created() {
            eventBus.$on('onDetailsShow', (data) => {
                this.server = data;
            });
        }
    }
</script>


<style scoped>
    div {
        border: 1px solid red;
    }
</style>
