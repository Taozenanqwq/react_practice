import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import filterClass from './Filter.module.css'
export default function Filter({ filterFoodList, resetFoodList }) {
  return (
    <div className={filterClass.filter_wrapper}>
      <FontAwesomeIcon icon={faSearch} className={filterClass.search}></FontAwesomeIcon>
      <input
        className={filterClass.search_input}
        placeholder="请输入关键字"
        onInput={(e) => {
          const searchContent = e.target.value
          if (searchContent) {
            filterFoodList(searchContent)
          } else {
            resetFoodList()
          }
        }}
      ></input>
    </div>
  )
}
