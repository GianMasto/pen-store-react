import { useState } from "react"
import CartContext from "../context/CartContext"

export default function CartProvider({defaultValue = [], children}) {
  const [cart, setCart] = useState(defaultValue)

  function addItem(item, quantity) {
    if(isInCart(item.id)) {
      throw new Error(`Ya existe item con id ${item.id}`)
    }
    setCart([...cart, {item, quantity}])
  }

  function removeItem(id) {
    if(!isInCart(id)) {
      throw new Error(`No existe item con id ${id}`)
    }

    setCart(cart.filter(({item}) => item.id !== id))
  }

  function clear() {
    setCart([])
  }

  function isInCart(id) {
    return cart.some(({item}) => item.id === id)
  }

  function getTotalPrice(){
    let totalPrice = 0;
    cart.forEach(({quantity, item}) => totalPrice = totalPrice + (item.price * quantity))
    return totalPrice
  }

  
  function getItemsAmount(){
    let itemsAmount = 0;
    cart.forEach(({quantity}) => itemsAmount = itemsAmount + quantity)
    return itemsAmount
  }



  return <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, getTotalPrice, getItemsAmount}}>
    {children}
  </CartContext.Provider>
}