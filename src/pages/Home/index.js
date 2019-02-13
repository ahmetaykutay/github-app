// @flow

import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import type { Classes } from 'react-jss'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Page } from '../../containers'
import { Input, Button } from '../../components'
import actions from '../../store/actions'
import styles from './styles'

type DataType = {
  id: string | number,
  name: string,
  description: string
}

type PropsType = {
  classes: Classes<typeof styles>,
  searchType: Object,
  repositories: Array<DataType>,
  isInProgress: boolean,
  fetchOrgs: Function,
  fetchRepos: Function
}

type StateType = {
  searchText: string,
  searchedBefore: boolean
}

export class Home extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props)
    this.state = {
      searchText: '',
      searchedBefore: false
    }
  }

  search = () => {
    const { fetchRepos, searchType, fetchOrgs } = this.props
    const { searchText, searchedBefore } = this.state
    if (searchType.value === 'repos') fetchRepos(searchText)
    else fetchOrgs(searchText)

    if (!searchedBefore) this.setState({ searchedBefore: true })
  }

  renderSpinner() {
    const { classes } = this.props
    return (
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.spinner}
        size={24}
        thickness={4}
      />
    )
  }

  renderCard = (data: DataType) => {
    const { classes } = this.props
    return (
      <Card key={data.id} className={classes.card}>
        <CardContent>
          <Typography variant="h5">{data.name}</Typography>
          <Typography style={{ color: '#666' }} variant="body2">
            {data.description}
          </Typography>
        </CardContent>
      </Card>
    )
  }

  render() {
    const {
      classes, isInProgress, repositories, searchType
    } = this.props
    const { searchedBefore } = this.state

    return (
      <Page className={classes.home}>
        <div className={classes.gitIcon}>
          <i className="fab fa-github" />
        </div>
        <Typography component="h1" variant="h6" gutterBottom>
          {searchType.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {'Enter a username and we\'ll dox them right here in front of everyone.'}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Username
        </Typography>
        <Input
          onChange={searchText => this.setState({ searchText })}
          style={{ maxWidth: '400px', marginBottom: '30px' }}
        />
        <Button disabled={isInProgress} onClick={this.search}>
          {isInProgress ? this.renderSpinner() : 'Dox\'em'}
        </Button>
        <div className={classes.cardContainer}>
          {repositories.length === 0 && searchedBefore
            ? <p>no data found</p>
            : repositories.map(this.renderCard)}
        </div>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  repositories: state.github.repositories,
  isInProgress: state.github.isInProgress,
  searchType: state.github.searchType
})

const mapDispatchToProps = dispatch => ({
  fetchRepos: username => dispatch(actions.github.fetchRepos(username)),
  fetchOrgs: username => dispatch(actions.github.fetchOrgs(username))
})

export default injectSheet(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
)
