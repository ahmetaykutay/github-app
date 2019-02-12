// @flow

import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import type { Classes } from 'react-jss'
import { Page } from '../../containers'
import { Input, Button } from '../../components'
import actions from '../../store/actions'
import styles from './styles.js'

type PropsType = {
  classes: Classes<typeof styles>
}

export class Home extends Component<PropsType> {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }

  search = () => {
    const { fetchRepos } = this.props
    const { searchText } = this.state
    fetchRepos(searchText)
  }

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
        <Input
          onChange={searchText => this.setState({ searchText })}
          style={{ maxWidth: '400px', marginBottom: '30px' }}
        />
        <Button onClick={this.search} title="Dox'em" />
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  repositories: state.github.repositories
})

const mapDispatchToProps = dispatch => ({
  fetchRepos: username => dispatch(actions.github.fetchRepos(username))
})

export default injectSheet(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
)
