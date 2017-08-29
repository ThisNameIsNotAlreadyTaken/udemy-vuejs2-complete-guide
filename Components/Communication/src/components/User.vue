<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>Name is {{ name }}</p>
        <p>Age is {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" @nameWasReset="onNameReset" :resetFn="resetFn" :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageWasEdited="onAgeEdit"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return { name: 'Vasya', age: 27 };
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeName() {
                this.name = "Changed name";
            },
            onNameReset(event) {
                this.name = event;
            },
            onAgeEdit(event) {
                this.age = event;
            },
            resetFn() {
                this.name = "Vasya";
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
