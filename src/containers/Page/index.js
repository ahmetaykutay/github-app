// @flow

import * as React from 'react'
import injectSheet from 'react-jss'
import type { Classes } from 'react-jss'
import styles from './styles'

type PropsType = {
  classes: Classes<typeof styles>,
  children: ?React.Node,
  className: string
}

const Page = (props: PropsType) => {
  const { classes, children, className } = props
  const wrapperClass = [classes.wrapper, className].join(' ')

  return <div className={wrapperClass}>{children}</div>
}

export default injectSheet(styles)(Page)
