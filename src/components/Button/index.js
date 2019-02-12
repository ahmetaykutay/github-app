// @flow

import React from 'react'
import Button from '@material-ui/core/Button'
import injectSheet from 'react-jss'
import styles from './styles.js'
import type { Classes } from 'react-jss'
import type { Node } from 'react'

type PropsType = {
  classes: Classes<typeof styles>,
  style?: Object,
  title?: string,
  children?: string | number | Node,
  onClick: Function,
  disabled?: boolean
}

const CustomButton = (props: PropsType) => {
  const { classes, title, children, style, onClick, disabled } = props
  const content = title ? title : children

  return (
    <Button
      variant="contained"
      color="primary"
      disableRipple
      className={classes.button}
      style={style}
      onClick={disabled ? () => {} : onClick}
    >
      {content}
    </Button>
  )
}

CustomButton.defaultProps = {
  title: null,
  style: null,
  children: null,
  disabled: false
}

export default injectSheet(styles)(CustomButton)
