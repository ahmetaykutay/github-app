// @flow

import React from 'react'
import injectSheet from 'react-jss'
import type { Classes } from 'react-jss'
import { Page } from '../../containers'
import styles from './styles'

type PropsType = {
  classes: Classes<typeof styles>,
}

const About = (props: PropsType) => {
  const { classes } = props
  return (
    <Page className={classes.page}>
      <p>This is a small demo app </p>
    </Page>
  )
}

export default injectSheet(styles)(About)
