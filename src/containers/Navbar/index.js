// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import type { Classes } from 'react-jss'

const styles = {
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 'auto',
    fontSize: '28px',
  },
  link: {
    color: '#ccc'
  },
  linkActive: {
    color: '#fff'
  }
}

type PropsType = {
  classes: Classes<typeof styles>,
}

const ButtonAppBar = (props: PropTypes) => {
  const { classes } = props

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
            <a className={classes.linkActive} href="https://github.com/" target="_blank">
              <i className="fab fa-github" />
            </a>
          </IconButton>
          <Button className={classes.link} color="inherit">
            Search Repos
          </Button>
          <Button className={classes.link} color="inherit">
            Search Organizations
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
