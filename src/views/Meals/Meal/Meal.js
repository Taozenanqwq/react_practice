import React from 'react'
import mealCss from './Meal.module.css'
import Counter from '@/views/UI/Counter/Counter'
export default function Meal({ item }) {
  return (
    <div className={mealCss.wrapper}>
      <img src={item.url} className={mealCss.pic} alt={item.name}></img>
      <div className={mealCss.info}>
        <div className={mealCss.title}>{item.name}</div>
        <div className={mealCss.desc}>{item.description}</div>
        <span className={mealCss.price}>￥{item.price}</span>
        <Counter className={mealCss.counter} item={item}></Counter>
      </div>
    </div>
  )
}
