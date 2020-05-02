import { ProductList } from './product-list.js'

const CART_KEY = 'cart-contents';

export class CartService {
  static addProduct(id) {
    ProductList.increaseQty(CART_KEY, id)
    ProductList.notify(CartService.LISTENERS)
  }

  static removeProduct(id) {
    ProductList.removeProduct(CART_KEY, id)
    ProductList.notify(CartService.LISTENERS)
  }

  static increaseQty(id) {
    ProductList.increaseQty(CART_KEY, id)
    ProductList.notify(CartService.LISTENERS)
  }

  static decreaseQty(id) {
    ProductList.decreaseQty(CART_KEY, id)
    ProductList.notify(CartService.LISTENERS)
  }

  static isProductInCart(id) {
    return ProductList.isProductInCart(CART_KEY, id)
  }

  static getNumberOfProducts() {
    return ProductList.getNumberOfProducts(CART_KEY)
  }

  static getItemQuantity(id) {
    return ProductList.getItemQuantity(CART_KEY, id)
  }

  static getCartContents() {
    return ProductList.getCartContents(CART_KEY)
  }

  static resetCart() {
    ProductList.resetList(CART_KEY)
    ProductList.notify(CartService.LISTENERS)
  }

  static registerCartListener(handler) {
    CartService.LISTENERS.push(handler);
  }
}

CartService.LISTENERS = [];