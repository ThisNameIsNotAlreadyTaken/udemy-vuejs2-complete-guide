<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        //props: ['name'], - no validation example
        /*props: {
            name: String,
        }, - validation simple*/
        props: {
            name: {
                type: String,
                default: "Default name",
                required: true
            },
            resetFn: Function,
            userAge: Number
        }, // validation with attributes
        methods: {
            switchName() {
                return this.name.split("").reverse().join("");
            },
            resetName() {
                this.$emit('nameWasReset', "Vasya");
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (data) => {
                debugger;
                this.userAge = data;
            });
        }
    }
</script>


<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
