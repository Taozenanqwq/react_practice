import React, { Fragment, useContext } from 'react'
import CounterCss from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Context } from '@/App'
export default function Counter(props) {
  const ctx = useContext(Context)
  return (
    <div className={`${CounterCss.counter} ${props.className}`}>
      {props.item.count && props.item.count > 0 ? (
        <Fragment>
          <FontAwesomeIcon
            icon={faMinus}
            className={CounterCss.sub}
            onClick={() => {
              ctx.subItemHandler(props.item)
            }}
          ></FontAwesomeIcon>
          <span className={CounterCss.countvalue}>{props.item.count}</span>
        </Fragment>
      ) : null}
      <FontAwesomeIcon
        icon={faPlus}
        className={CounterCss.add}
        onClick={() => {
          ctx.addItemHandler(props.item)
        }}
      ></FontAwesomeIcon>
    </div>
  )
}
