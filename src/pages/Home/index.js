// @flow

import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Typography from '@material-ui/core/Typography'
import { Page } from '../../containers'
import { Input, Button } from '../../components'
import styles from './styles.js'
import type { Classes } from 'react-jss'

type PropsType = {
  classes: Classes<typeof styles>
}

export class Home extends Component<PropsType> {
  render() {
    const { classes } = this.props

    return (
      <Page className={classes.home}>
        <div className={classes.gitIcon}>
          <i className="fab fa-github" />
        </div>
        <Typography component="h1" variant="h6" gutterBottom>
          Let's search some Github repos
        </Typography>
        <Typography variant="body1" gutterBottom>
          Enter a username and we'll dox them right here in front of everyone.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Username
        </Typography>
        <Input style={{ maxWidth: '400px', marginBottom: '30px' }} />
        <Button onClick={() => console.log('button click')} title="Dox'em" />
      </Page>
    )
  }
}

export default injectSheet(styles)(Home)
