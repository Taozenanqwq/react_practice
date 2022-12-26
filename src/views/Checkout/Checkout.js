import React from 'react'
import ReactDOM from 'react-dom'
import checkoutCss from './Checkout.module.css'
import CheckoutCart from './CheckoutCart/CheckoutCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { Context } from '../../App'
import Meals from '../Meals/Meals'
const checkoutRoot = document.getElementById('checkout-root')

export default function Checkout({ closeCheckout }) {
  const { cart } = useContext(Context)
  return ReactDOM.createPortal(
    <div className={checkoutCss.checkout_container}>
      <FontAwesomeIcon icon={faClose} className={checkoutCss.close} onClick={closeCheckout}></FontAwesomeIcon>
      <div className={checkoutCss.items_board}>
        <div className={checkoutCss.board_title}>餐品详情</div>
        <Meals foodList={cart.items} className={checkoutCss.meals_height}></Meals>
        <div className={checkoutCss.board_static}>
          合计
          <span className={checkoutCss.items_price}>￥{cart.totalPrice}</span>
        </div>
      </div>
      <CheckoutCart></CheckoutCart>
    </div>,
    checkoutRoot
  )
}
