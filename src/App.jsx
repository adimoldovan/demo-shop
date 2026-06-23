import React, { Component } from 'react';
import './css/App.css';
import { Route, Routes, HashRouter } from 'react-router-dom';
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
        <HashRouter>
          <Routes>
            <Route path={'/'} element={<Products />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/products'} element={<Products />} />
            <Route path={'/product/:id'} element={<Product />} />
            <Route path={'/help'} element={<Help />} />
            <Route path={'/account'} element={<Account />} />
            <Route path={'/wishlist'} element={<Wishlist />} />
            <Route path={'/cart'} element={<Cart />} />
            <Route path={'/checkout-info'} element={<CheckoutInfo />} />
            <Route path={'/checkout-summary'} element={<CheckoutSummary />} />
            <Route path={'/checkout-complete'} element={<CheckoutComplete />} />
            <Route path={'*'} element={<Notfound />} />
          </Routes>
        </HashRouter>
        <AppFooter />
      </Container>
    )
  }
}