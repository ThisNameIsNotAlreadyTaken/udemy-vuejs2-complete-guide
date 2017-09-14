<template>
  <div class="col-sm-6 col-md-4">
      <div class="panel-info panel">
        <div class="panel-heading">
          <h1 class="panel-title">
            {{ stock.name }}
            <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
          </h1>
        </div>
        <div class="panel-body">
          <div class="pull-left">
            <input type="number" v-model="quantity" class="form-control" placeholder="Quantity">
          </div>
          <div class="pull-right">
            <button :disabled="insufficientQuantity || parseFloat(quantity) <= 0 || !Number.isInteger(parseFloat(quantity))" class="btn btn-success" @click="sellStock">
              {{ insufficientQuantity ? 'Not enought Stocks' : 'Sell' }}
              </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
      props: ['stock'],
      data() {
        return {
          quantity: 0
        }
      },
      computed: {
        insufficientQuantity() {
          return this.quantity > this.stock.quantity;
        }
      },
      methods: {
        ...mapActions({
          placeSellOrder: 'sellStock'
        }),
        sellStock() {
          const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.quantity
          };

          this.placeSellOrder(order);  
          this.quantity = 0;
        }
      }
  }
</script>
