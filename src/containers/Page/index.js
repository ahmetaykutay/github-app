import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles.js'

const Page = props => {
  const { classes, children, className } = props
  const wrapperClass = [classes.wrapper, className].join(' ')

  return (
    <div className={wrapperClass}>
      {children}
    </div>
  )
}

export default injectSheet(styles)(Page)
