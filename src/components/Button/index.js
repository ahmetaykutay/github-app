// @flow

import React from 'react'
import Button from '@material-ui/core/Button'
import injectSheet from 'react-jss'
import styles from './styles.js'

type PropsType = {
  classes: Classes<typeof styles>,
  style?: Object,
  title?: string,
  children?: string | number | React.Node,
  onClick: Function
}

const CustomButton = (props: PropsType) => {
  const { classes, title, children, style, onClick } = props
  const content = title ? title : children

  return (
    <Button
      variant="contained"
      color="primary"
      disableRipple
      className={classes.button}
      style={style}
      onClick={onClick}
    >
      {content}
    </Button>
  )
}

CustomButton.defaultProps = {
  title: null,
  style: null,
  children: null
}

export default injectSheet(styles)(CustomButton)
