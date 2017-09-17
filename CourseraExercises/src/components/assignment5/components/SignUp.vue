<template>
    <div class="container" v-if="items && items.length">
        <h1 class="text-center">Please provide your information to sign up.</h1><br>
        <div class="alert alert-success" v-if="isSaved">
            <strong>Success!</strong> Your information has been saved! <router-link :to="{ name: 'myinfo' }">My info page</router-link> is now available!
        </div>
        <form class="form-horizontal" @submit="onSubmit">
            <app-form-input :$v="$v.info.firstName" @input="info.firstName = $event" :config="{ name: 'First name', value: info.firstName, 
                errorText: 'First name field is required' }"></app-form-input>
            <app-form-input :$v="$v.info.lastName" @input="info.lastName = $event" :config="{ name: 'Last name', value: info.lastName, 
                errorText: 'Last name field is required' }"></app-form-input>
            <app-form-input :$v="$v.info.email" @input="info.email = $event" :config="{ name: 'Email', value: info.email, 
                errorText: 'Must be a valid email address: handle@domain format' }"></app-form-input>
            <app-form-input :$v="$v.info.phone" @input="info.phone = $event" :config="{ name: 'Phone', value: info.phone, 
                errorText: 'Phone must be in the format ###-###-####.', placeholder: 'Phone ###-###-####' }"></app-form-input>
            <app-form-input :$v="$v.info.favoriteDishNumber" @input="info.favoriteDishNumber = $event" :config="{ name: 'Favorite dish number', value: info.favoriteDishNumber, 
                errorText: 'No such menu number exists' }"></app-form-input>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10 col-md-1">
                    <button type="submit" :disabled="$v.$invalid" class="btn btn-default" :class="{'btn-success': !$v.$invalid, 'btn-danger': $v.$invalid}">Sign Up</button>
                </div>
                <div class="col-md-9">
                    <app-menu-item v-if="info.favoriteItem" :item="info.favoriteItem"></app-menu-item>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import FormInput from './FormInput.vue';
    import MenuItem from './MenuItem.vue';
    import { mapGetters, mapActions } from 'vuex';
    import { required, email } from 'vuelidate/lib/validators';

    export default {
        data(){
            return {
                info: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    favoriteDishNumber: '',
                    favoriteItem: null
                },
                isSaved: false
            }
        },
        computed: {
            ...mapGetters(['items'])
        },
        methods: {
            ...mapActions(['setInfo', 'asyncFetchItems']),
            onSubmit(e){
                e.preventDefault();
                const self = this;
                this.setInfo({ data: this.info, callback: () => {
                    self.isSaved = true;
                }});
            }
        },
        validations: {
            info: {
                firstName: {
                    required
                },
                lastName: {
                    required
                },
                email: {
                    required,
                    email
                },
                phone: {
                    required,
                    phone(val) {
                        return /([0-9]{3})-([0-9]{3})-([0-9]{4})/.test(val);
                    }
                },
                favoriteDishNumber: {
                    required,
                    existingItem(val) {
                        var item = val ? this.items.find(function (item) { return item.short_name.toLowerCase() === val.toLowerCase(); }) : null;
                        this.info.favoriteItem = item;
                        return !!item;
                    }
                }
            }
        },
        components: {
            appMenuItem: MenuItem,
            appFormInput: FormInput
        },
        created() {
            if (!this.items || !this.items.length) {
                this.asyncFetchItems();
            }
        }
    }
</script>