<template>
  <div class="col-sm-6 col-md-4">
      <div class="panel-success panel">
        <div class="panel-heading">
          <h1 class="panel-title">
            {{ stock.name }}
            <small>(Price: {{ stock.price }})</small>
          </h1>
        </div>
        <div class="panel-body">
          <div class="pull-left">
            <input type="number" v-model="quantity" class="form-control" placeholder="Quantity">
          </div>
          <div class="pull-right">
            <button :disabled="insufficientFunds || parseFloat(quantity) <= 0 || !Number.isInteger(parseFloat(quantity))" class="btn btn-success" @click="buyStock">
              {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
              </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
      props: ['stock'],
      data() {
        return {
          quantity: 0
        }
      },
      computed: {
        funds() {
          return this.$store.getters.funds;
        },
        insufficientFunds() {
          return parseFloat(this.quantity) * this.stock.price > this.funds;
        }
      },
      methods: {
        buyStock() {
          const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: parseFloat(this.quantity)
          };

          this.$store.dispatch('buyStock', order);

          this.quantity = 0;
        }
      }
  }
</script>
