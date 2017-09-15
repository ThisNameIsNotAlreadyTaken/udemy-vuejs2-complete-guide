<template>
  <div>
    <h1>Lunch Checker</h1>

    <div class="form-group" :class="{'has-success': touched && success, 'has-error': touched && !success}">
        <input type="text" placeholder="list comma separated dishes you usually have for lunch" class="form-control" v-model="items" @blur="touched = true">
    </div>
    <h4>Empty items aren't considered</h4>
    <div class="form-group">
        <button class="btn btn-default" @click="checkItems">Check If Too Much</button>
    </div>
    <div class="form-group message" :class="{'text-success': touched && success, 'text-danger': touched && !success}">
        {{ message }}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: '',
        message: '',
        touched: false,
        success: false
      };
    },
    methods: {
      checkItems() {
        this.touched = true;

        let itemsArray = (this.items || "").split(',').filter((i) => { return i; });

        this.message = !itemsArray.length ? "Please enter data first" : itemsArray.length > 3 ? "Too much!" : "Enjoy!";
        this.success = !!itemsArray.length;
      }
    }
  }
</script>

<style scoped>
  .message {
			font-size: 1.3em;
			font-weight: bold;
	}
</style>