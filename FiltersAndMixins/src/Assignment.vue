<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | reverse }}</p>
                <p>{{ text | withLength }}</p>
                <p>{{ reversedText }}</p>
                <p>{{ textWithLength }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { computedMixin } from './computedMixin';

    export default {
        data() {
            return {text: 'Default text'}
        },
        filters: {
            reverse(value) {
                return !value ? value : value.split("").reverse().join("");
            }
        },
        computed: {
            reversedText() {
                return this.text.split("").reverse().join("");
            }
        },
        mixins: [computedMixin]
    }
</script>