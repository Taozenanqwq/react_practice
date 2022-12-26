import React from 'react'
import Meal from './Meal/Meal'
import MealsCss from './Meals.module.css'
/**
 * 食物列表组件
 */
export default function Meals(props) {
  const { foodList } = props
  return (
    <div className={`${MealsCss.items} ${props.className}`}>
      {foodList?.map((item, index) => (
        <Meal item={item} key={item.id}></Meal>
      ))}
    </div>
  )
}
