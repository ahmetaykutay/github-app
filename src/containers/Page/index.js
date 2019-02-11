// @flow

import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles.js'

type PropsType = {
  classes: mixed
}

const Page = (props: PropsType) => {
  const { classes, children, className } = props
  const wrapperClass = [classes.wrapper, className].join(' ')

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  )
}

export default injectSheet(styles)(Page)
