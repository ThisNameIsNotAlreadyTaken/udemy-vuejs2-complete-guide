<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
                <component :is="selectedComponent">
                    <p>Default Content</p>
                </component>
               <!--<appQuote>
                   <h2 slot="title">The Quote</h2>
                   <p>A wonderfull quote!</p>
               </appQuote>-->
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedColorComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedColorComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedColorComponent = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="selectedColorComponent">
                    <p slot="red">I'am red</p>
                    <p slot="green">I'am green</p>
                    <p slot="blue">I'am blue</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                quoteTitle: "The Quote",
                selectedComponent: "appQuote",
                selectedColorComponent: "appBlue"
            };
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New,
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>