// @flow

import React, { Component } from 'react'
import injectSheet from 'react-jss'
import { Page } from '../../containers'
import styles from './styles.js'
import type { Classes } from 'react-jss'


type PropsType = {
  classes: Classes<typeof styles>,
}

export class Home extends Component<PropsType> {
  render() {
    const { classes } = this.props

    return (
      <Page className={classes.home}>
        <div className={classes.gitIcon}><i className="fab fa-github" /></div>
      </Page>
    )
  }
}

export default injectSheet(styles)(Home)
