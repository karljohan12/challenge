<template>

  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="card" style="width: 18rem;">
          <div class="card-header">
            Cart
          </div>
          <ul class="list-group list-group-flush" v-if="this.CartService.LocalCart.length>0">
            <li v-for="item in this.CartService.LocalCart" :key="item" class="list-group-item">
              <div>
                {{ item.quantity }} x
                {{ item.id }}
              </div>
              <div>
                <button class="btn btn-primary btn-sm" style="margin: 2px" v-on:click="remove(item.id)">Remove</button>
                <button class="btn btn-primary btn-sm" style="margin: 2px" v-on:click="increment(item.id)">+</button>
                <button class="btn btn-primary btn-sm" style="margin: 2px" v-on:click="decrement(item.id)">-</button>
              </div>
            </li>
            <li style="margin: 10px">
              Total price: {{ this.CartService.totalPrice() }}
            </li>
            <li style="margin: 10px">
              <button v-on:click="removeAll" class="btn btn-primary">Remove everything from cart</button>
            </li>
          </ul>
          <ul class="list-group list-group-flush" v-else>
            <li style="margin: 10px">
              Your cart is empty
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="row">
          <div v-for="item in mockData" :key="item">
            <div class="col-lg-3">
              <div class="card" style="width: 13.5rem;">
                <div class="card-body">
                  <h5 class="card-title">{{ item.id }}</h5>
                  <p class="card-text">price: {{ item.price }}</p>
                  <button v-on:click="add(item.id, item.price)" class="btn btn-primary">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartService from "@/components/CartService";

export default {
  name: 'ShoppingBasket',
  props: {
    mockData: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      CartService: new CartService()
    };
  },
  methods: {
    add(item, price) {
      this.CartService.addItem(item, price)
    },
    increment(item) {
      this.CartService.incrementItem(item)
    },
    decrement(item) {
      this.CartService.decrementItem(item)
    },
    remove(item) {
      this.CartService.removeItem(item)
    },
    removeAll() {
      this.CartService.removeAll()
    }
  },
  mounted() {
    this.CartService.cartInit()
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
