<template>
  <div>
      <h3>New Quote</h3>
      <button @click="counter++">Inc1</button>
      {{ counter }}
  </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0
            }
        },
        deactivated() {
            console.log("Deactivated");
        },
        activated() {
            console.log("Activated");
        }
    }
</script>