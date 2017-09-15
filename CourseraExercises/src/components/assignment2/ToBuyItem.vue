<template>
    <li>
        Buy {{ item.quantity }} {{ item.name }}
        <button class="btn btn-default" @click="moveToBought(index)">
            <span class="glyphicon glyphicon-ok"></span> Bought
        </button>
    </li>
</template>

<script>
    export default {
        props: ['item', 'index'],
        methods: {
            moveToBought(index) {
                this.$emit('buyClick', index);
            }
        }
    }
</script>

<style scoped>
  li {
    margin-bottom: 7px;
    font-size: 1.2em;
  }

  li > button {
    margin-left: 6px;
  }

  button > span {
    color: green;
  }
</style>