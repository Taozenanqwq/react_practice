import React from 'react'
import checkoutCartCss from './CheckoutCart.module.css'
import { useContext } from 'react'
import { Context } from '../../../App'
export default function CheckoutCart() {
  const { cart } = useContext(Context)
  return (
    <div className={checkoutCartCss.checkout_cart}>
      <span className={checkoutCartCss.checkout_price}>{'合计￥' + cart.totalPrice}</span>
      <div className={checkoutCartCss.checkout_pay}>去结算</div>
    </div>
  )
}
