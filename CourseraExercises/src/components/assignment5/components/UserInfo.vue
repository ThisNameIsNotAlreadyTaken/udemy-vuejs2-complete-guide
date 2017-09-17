<template>
    <div>
        <div v-if="info">
            <div class="col-md-offset-1 col-md-8 col-lg-offset-2 col-lg-6">
                <div>
                    <div class="col-sm-12">
                        <div class="col-xs-12 col-sm-8">
                            <h1>{{ info.firstName }} {{ info.lastName }}</h1>
                            <p><strong>Email: </strong> {{ info.email }} </p>
                            <p><strong>Phone: </strong> {{ info.phone }} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 divider text-center col-md-offset-2">
                <app-menu-item :item="info.favoriteItem"></app-menu-item>
            </div>
        </div>
        <div v-else>
            <h1 class="text-center">Not Signed Up Yet. <router-link :to="{ name: 'signup'}">Sign up Now!</router-link></h1><br>
        </div>
    </div>
</template>

<script>
    import MenuItem from './MenuItem.vue';
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters(['info'])
        },
        components: {
            appMenuItem: MenuItem
        }
    }
</script>