import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles.js'

const Page = props => {
  const { classes, children } = props
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  )
}

export default injectSheet(styles)(Page)
