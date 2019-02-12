// @flow

import React from 'react'
import injectSheet from 'react-jss'
import type { Classes } from 'react-jss'
import styles from './styles'


type PropsType = {
  classes: Classes<typeof styles>,
  style?: Object,
  onChange: Function
}

const Input = (props: PropsType) => {
  const { classes, style, onChange } = props
  return <input style={style} className={classes.input} onChange={e => onChange(e.currentTarget.value)} />
}

Input.defaultProps = {
  style: null
}

export default injectSheet(styles)(Input)
