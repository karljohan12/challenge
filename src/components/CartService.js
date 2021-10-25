export default class CartService {
    //Future improvements:
    //Encrypt all localstorage to prevent altering by user
    //Check if browser supports localstorage, else use alternative implementation (typeof(Storage) !== "undefined")

    LocalCart = []

    //Should update prices in case price changes and local price is outdated
    cartInit(){
        if (localStorage.getItem("cart") !== null) {
            this.LocalCart = JSON.parse(localStorage.getItem("cart"))
        }
    }

    cartItem(id, quantity, price) {
        this.id = id
        this.quantity = quantity
        this.price = price
    }

    getItem() {
        if (localStorage.getItem("cart") === null) {
            localStorage.setItem("cart", "")
            return []
        } else {
            return JSON.parse(localStorage.getItem("cart"))
        }
    }

    addItem(itemId, price) {
        let local = this.getItem()
        if (local.filter(element => element.id === itemId).length > 0) {
            this.incrementItem(itemId)
        } else {
            local.push(new this.cartItem(itemId, 1, price))
            localStorage.setItem("cart", JSON.stringify(local))
            this.LocalCart = local
        }
    }

    findIndex(itemId, local){
        return local.findIndex((element) => element.id === itemId)
    }

    incrementItem(itemId) {
        let local = this.getItem()
        let index = this.findIndex(itemId, local)
        local[index].quantity += 1
        localStorage.setItem("cart", JSON.stringify(local))
        this.LocalCart = local
    }

    decrementItem(itemId) {
        let local = this.getItem()
        let index = this.findIndex(itemId, local)
        if (local[index].quantity === 1) {
            this.removeItem(itemId)
        } else {
            local[index].quantity -= 1
            localStorage.setItem("cart", JSON.stringify(local))
            this.LocalCart = local
        }
    }

    removeItem(itemId) {
        let local = this.getItem()
        let index = this.findIndex(itemId, local)
        local.splice(index,1)
        localStorage.setItem("cart", JSON.stringify(local))
        this.LocalCart = local
    }

    totalPrice(){
        return this.LocalCart.reduce(function(prev, cur){
            return prev + cur.price * cur.quantity
        }, 0)
    }

    removeAll(){
        localStorage.removeItem("cart")
        this.LocalCart = []
    }
}
