import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home, NotFound } from '../../pages'
import Navbar from '../Navbar'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notfound" component={NotFound} />
            <Redirect to="/notfound" />
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}

export default App
