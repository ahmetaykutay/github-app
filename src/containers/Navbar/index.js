// @flow

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import type { Classes } from 'react-jss'
import { withRouter } from 'react-router-dom'
import type { RouterHistory } from 'react-router-dom'
import { actions } from '../../store'
import styles from './styles'
import routes from '../../routes'


type PropsType = {
  classes: Classes<typeof styles>,
  setSearchType: Function,
  history: RouterHistory
}

const searchTypes = [
  {
    label: 'Search Repos',
    value: 'repos',
    title: 'Let\'s search some Github repos',
    functionName: 'getRepos'
  },
  {
    label: 'Search Organizations',
    value: 'orgs',
    title: 'Let\'s get some Github orgs',
    functionName: 'getUserData'
  }
]

const ButtonAppBar = (props: PropsType) => {
  const {
    classes, setSearchType, history
  } = props
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      <AppBar style={{ backgroundColor: '#363636' }} position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            position="fixed"
          >
            <a
              className={classes.linkActive}
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          </IconButton>
          <div className={classes.menu}>
            {
              routes.map(r => (
                <Typography onClick={() => history.push(r.path)} className={classes.menuItem} variant="h6" color="inherit">
                  {r.name}
                </Typography>
              ))
            }
          </div>
          {searchTypes.map((m, i) => {
            const className = activeIndex === i ? classes.linkActive : classes.link
            return (
              <Button
                onClick={() => {
                  setActiveIndex(i)
                  setSearchType(m)
                }}
                key={m.value}
                className={className}
                color="inherit"
              >
                {m.label}
              </Button>
            )
          })}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setSearchType: searchby => dispatch(actions.github.setSearchType(searchby))
})

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(withRouter(ButtonAppBar))
)
