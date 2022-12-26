import React from 'react'
import shopCartCss from './ShopCart.module.css'
import { Context } from '../../../App'
import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Meals from '../../Meals/Meals'
import Checkout from '../../Checkout/Checkout'
export default function ShopCart() {
  const { cart, clearCart } = useContext(Context)
  const hasItem = cart.totalCount > 0
  const [showCartDetail, setCartDetail] = useState(false)
  const [showCheckout, setCheckout] = useState(false)
  function closeCheckout() {
    setCheckout(false)
  }
  return (
    <div>
      <div
        className={`${shopCartCss.backdrop} ${showCartDetail ? '' : shopCartCss.hidden}`}
        onClick={() => {
          setCartDetail(false)
        }}
      ></div>
      <div className={`${shopCartCss.pop_cart} ${showCartDetail ? shopCartCss.popped : ''}`}>
        <div className={shopCartCss.cart_detail_top}>
          <span className={shopCartCss.top_left}>餐品详情</span>
          <span
            className={shopCartCss.top_right}
            onClick={() => {
              clearCart()
            }}
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            &nbsp;清空购物车
          </span>
        </div>
        {cart.totalCount ? <Meals foodList={cart.items} className={shopCartCss.cart_items}></Meals> : <div className={shopCartCss.no_item_notice}>您没有选择任何商品！</div>}
      </div>
      <div className={shopCartCss.shop_cart}>
        <div
          className={shopCartCss.shop_bag}
          onClick={() => {
            setCartDetail((prevShowStatus) => {
              return !prevShowStatus
            })
          }}
        >
          {hasItem ? <div className={shopCartCss.total_count}>{cart.totalCount}</div> : null}
        </div>
        <span className={`${shopCartCss.total_price} ${hasItem ? shopCartCss.has_item_price : shopCartCss.no_item_price}`}>{hasItem ? '￥' + cart.totalPrice : '未选购商品'}</span>
        <div
          className={`${hasItem ? shopCartCss.has_item_button : shopCartCss.no_item_button} ${shopCartCss.settle_button}`}
          onClick={() => {
            if (hasItem) {
              setCheckout(true)
            }
          }}
        >
          去结算
        </div>
      </div>
      {showCheckout ? <Checkout closeCheckout={closeCheckout}></Checkout> : null}
    </div>
  )
}
