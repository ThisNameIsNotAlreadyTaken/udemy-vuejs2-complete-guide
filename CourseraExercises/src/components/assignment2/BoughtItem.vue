<template>
    <li>
        Bought {{ item.quantity }} {{ item.name }}
    </li>
</template>

<script>
    export default {
        props: ['item']
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
</style>