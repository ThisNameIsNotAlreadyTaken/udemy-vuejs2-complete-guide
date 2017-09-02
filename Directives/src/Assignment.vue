<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives exercise</h1>
                <button v-myon="clicked">Click me</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            clicked() {
                alert('Clicked');
            }
        },
        directives: {
            'myon': {
                bind(el, binding, vnode) {
                    el.addEventListener('click', () => {
                        binding.value();
                    });
                }
            }
        }
    }
</script>