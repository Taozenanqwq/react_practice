import Meals from './views/Meals/Meals'
import Filter from './views/Filter/Filter'
import ShopCart from './views/cart/ShopCart/ShopCart'
import { data } from '@/mock/index'
import { useState } from 'react'
import React from 'react'

export const Context = React.createContext()

export const App = () => {
  const { foodList: foods } = data
  const [foodList, setFoodList] = useState(foods)
  const [cart, setCart] = useState({
    items: [],
    totalCount: 0,
    totalPrice: 0
  })
  const addItemHandler = (item) => {
    const newCart = { ...cart }
    if (newCart.items.indexOf(item) === -1) {
      newCart.items.push(item)
      item.count = 1
    } else {
      item.count++
    }
    newCart.totalCount += 1
    newCart.totalPrice += item.price
    setCart(newCart)
  }
  const subItemHandler = (item) => {
    const newCart = { ...cart }
    item.count--
    if (item.count === 0) {
      newCart.items.splice(newCart.items.indexOf(item), 1)
    }
    newCart.totalCount -= 1
    newCart.totalPrice -= item.price
    setCart(newCart)
  }
  const clearCart = () => {
    const newCart = {}
    newCart.items = []
    newCart.totalCount = 0
    newCart.totalPrice = 0
    setCart(newCart)
    setFoodList(
      foods.map((item) => {
        item.count = 0
        return item
      })
    )
  }
  const filterFoodList = (val) => {
    setFoodList(
      foods.filter((item) => {
        return item.name.includes(val)
      })
    )
  }
  const resetFoodList = () => {
    setFoodList(foods)
  }
  return (
    <Context.Provider
      value={{
        addItemHandler,
        subItemHandler,
        cart,
        clearCart
      }}
    >
      <div>
        <Filter resetFoodList={resetFoodList} filterFoodList={filterFoodList}></Filter>
        <Meals foodList={foodList}></Meals>
        <ShopCart cart={cart}></ShopCart>
      </div>
    </Context.Provider>
  )
}
