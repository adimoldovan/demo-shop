import React, { Component } from 'react';
import './css/App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Products from './components/products'
import Product from './components/product'
import Help from './components/help'
import Login from './components/login'
import Notfound from './components/notfound'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import Account from './components/account'
import Wishlist from './components/wishlist'
import Cart from './components/cart';
import CheckoutInfo from './components/checkout-info';
import CheckoutSummary from './components/checkout-summary';
import CheckoutComplete from './components/checkout-complete';
import { Container } from 'react-bootstrap'


export default class App extends Component {
  render() {
    return (
      <Container fluid>
        <AppHeader />
        <HashRouter basename='/demo-shop'>
          <Switch>
            <Route exact path={'/'} component={Products} />
            <Route path={'/login'} component={Login} />
            <Route path={'/products'} component={Products} />
            <Route path={'/product/:id'} component={Product} />
            <Route path={'/help'} component={Help} />
            <Route path={'/account'} component={Account} />
            <Route path={'/wishlist'} component={Wishlist} />
            <Route path={'/cart'} component={Cart} />
            <Route path={'/checkout-info'} component={CheckoutInfo} />
            <Route path={'/checkout-summary'} component={CheckoutSummary} />
            <Route path={'/checkout-complete'} component={CheckoutComplete} />
            <Route component={Notfound} />
          </Switch>
        </HashRouter>
        <AppFooter />
      </Container>
    )
  }
}