import React, { Component } from 'react';
import './css/App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Products from './components/products'
import Product from './components/product'
import Contact from './components/contact'
import Login from './components/login'
import Notfound from './components/notfound'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <BrowserRouter basename='/demo-shop'>
          <Switch>
            <Route exact path={'/'} component={Products} />
            <Route path={'/login'} component={Login} />
            <Route path={'/products'} component={Products} />
            <Route path={'/product/:id'} component={Product} />
            <Route path={'/contact'} component={Contact} />
            <Route component={Notfound} />
          </Switch>
        </BrowserRouter>
        <AppFooter />
      </div>
    )
  }
}