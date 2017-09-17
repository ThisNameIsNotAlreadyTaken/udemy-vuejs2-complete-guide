<template>
    <div class="loading-indicator" v-if="visible">
        <img src="https://thisnameisnotalreadytaken.github.io/coursera-angularjs/module5-solution/images/spinner.svg">
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                visible: 'isLoading'
            })
        }
    }
</script>

<style scoped>
    .loading-indicator {
        display: block;
        width: 70px;
        position: fixed;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 40%;
        z-index: 100;
        background-color: #FFF;
    }

    .loading-indicator img {
        width: 70px;
        background-color: #FFF;
    }
</style>