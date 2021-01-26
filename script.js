new Vue({
  el: '#app',
  data: {
    flavor: 'Morango',
    amount: 0,
  }, methods: {
    add() {
      console.log("Added")
      this.amount++
    },
    decrease() {
      console.log("Decreased")
      this.amount--
    }
  }
})