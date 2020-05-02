
import { ProductList } from './product-list.js'

const CART_KEY = 'wishlist-contents';

export class WishlistService {
  static addProduct(id) {
    ProductList.addProduct(CART_KEY, id)
    ProductList.notify(WishlistService.LISTENERS)
  }

  static removeProduct(id) {
    ProductList.removeProduct(CART_KEY, id)
    ProductList.notify(WishlistService.LISTENERS)
  }

  static isProductInCart(id) {
    return ProductList.isProductInCart(CART_KEY, id)
  }

  static getNumberOfProducts() {
    return ProductList.getNumberOfProducts(CART_KEY)
  }

  static getProducts() {
    return ProductList.getCartContents(CART_KEY)
  }

  static resetList() {
    ProductList.resetList(CART_KEY)
    ProductList.notify(WishlistService.LISTENERS)
  }

  static registerCartListener(handler) {
    WishlistService.LISTENERS.push(handler);
  }
}

WishlistService.LISTENERS = [];