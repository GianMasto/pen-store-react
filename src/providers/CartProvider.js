import { useContext, useState } from "react"
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
      throw new Error(`No existe item con id ${item.id}`)
    }
    setCart(cart.fitler(item => item.id !== id))
  }

  function clear() {
    setCart([])
  }

  function isInCart(id) {
    cart.some(item => item.id === id)
  }

  return <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
    {children}
  </CartContext.Provider>
}