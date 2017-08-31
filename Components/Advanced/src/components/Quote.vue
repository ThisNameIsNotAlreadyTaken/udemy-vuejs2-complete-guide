<template>
  <div>
      <div class="title">
          <slot name="title"></slot>
          <span style="color: #ccc;"><slot name="subtitle">The Subtitle</slot></span>
      </div>
      <hr>
      <div>
          <slot></slot>
      </div>
  </div>
</template>

<script>
    export default {

    }
</script>


<style scoped>
    div {
        border: 1px solid grey;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: auto;
        text-align: center;
    }
</style>