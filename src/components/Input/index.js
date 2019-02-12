// @flow

import React from 'react'
import injectSheet from 'react-jss'
import type { Classes } from 'react-jss'
import styles from './styles'


type PropsType = {
  classes: Classes<typeof styles>,
  style?: Object,
  onChange: Function,
  placeholder?: string
}

const Input = (props: PropsType) => {
  const {
    classes, style, onChange, placeholder
  } = props
  return (
    <input
      placeholder={placeholder}
      style={style}
      className={classes.input}
      onChange={e => onChange(e.currentTarget.value)}
    />
  )
}

Input.defaultProps = {
  style: null,
  placeholder: ''
}

export default injectSheet(styles)(Input)
