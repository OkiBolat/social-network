import React from 'react'
import s from './../Dialogs.module.css'

const Messages = (props) => {
  return (
    <div style={ { justifyContent:  props.number === 1 ? 'flex-start':'flex-end'}} className={s.message}>
      <span>{props.number}</span>
      {props.message}
    </div>
    )
}

export default Messages;