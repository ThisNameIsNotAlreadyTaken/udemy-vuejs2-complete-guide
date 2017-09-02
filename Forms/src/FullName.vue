<template>
    <div class="form-group">
        <h2>FullName</h2>
        <label for="firstName">First name</label>
        <input type="text" id="firstName" class="form-control" v-model="firstName">
        <label for="lastName">Last name</label>
        <input type="text" id="firstName" class="form-control" v-model="lastName">
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data() {
            return {
                firstName: '',
                lastName: ''
            };
        },
        computed: {
            fullName() {
                return `${this.firstName} ${this.lastName}`;
            }
        },
        watch: {
            fullName(val) {
                this.$emit('input', val);
            }
        }
    }
</script>