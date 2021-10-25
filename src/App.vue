<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ShoppingBasket :mockData="foodObjects"/>
  </div>
</template>

<script>
import ShoppingBasket from './components/ShoppingBasket.vue'

export default {
  name: 'App',
  components: {
    ShoppingBasket
  },
  data(){
    return{
      foodObjects: {}
    }

  },
  methods:{
    retrieveData(){
    //mock api call
      this.foodObjects = {
         0: {
            "id": "Tomato",
            "price": 2
          },
           1:{"id": "Burger",
            "price": 5
          },
           2:{"id":"Fish",
            "price": 10
          }
    }

   }
  },
  mounted() {
    this.retrieveData()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
