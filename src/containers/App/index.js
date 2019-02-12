import React from 'react'
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom'
import { NotFound } from '../../pages'
import Navbar from '../Navbar'
import routes from '../../routes'
import './App.css'

const App = () => (
  <BrowserRouter basename="/">
    <>
      <Navbar />
      <Switch>
        {routes.map(r => (
          <Route
            key={r.path}
            exact={r.exact}
            path={r.path}
            component={r.component}
          />
        ))}
        <Route path="/notfound" component={NotFound} />
        <Redirect to="/notfound" />
      </Switch>
    </>
  </BrowserRouter>
)

export default App
