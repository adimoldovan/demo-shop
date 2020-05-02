const CART_KEY = 'cart-contents';

export class CartService {
  static addProduct(id) {
    var curContents = CartService.getCartContents();

    if (CartService.isProductInCart(id)) {
      var currentQty = curContents[id]
      curContents[id] = currentQty + 1
    } else {
      curContents[id] = 1
    }

    CartService.setCartContents(curContents);
  }

  static removeProduct(id) {
    var curContents = CartService.getCartContents();

    if (CartService.isProductInCart(id)) {
      delete curContents[id]
    }

    CartService.setCartContents(curContents);
  }

  static increaseQty(id) {
    if (CartService.isProductInCart(id)) {
      CartService.addProduct(id);
    }
  }

  static decreaseQty(id) {
    var curContents = CartService.getCartContents();

    if (CartService.isProductInCart(id)) {
      var currentQty = curContents[id]
      curContents[id] = currentQty - 1

      if (curContents[id] == 0) {
        delete curContents[id]
      }
    }
    CartService.setCartContents(curContents);
  }

  static isProductInCart(id) {
    var curContents = CartService.getCartContents();
    return (curContents[id] != undefined);
  }

  static getNumberOfProducts() {
    var curContents = CartService.getCartContents();
    var totalQty = 0;
    Object.keys(curContents).map(function (key) {
      totalQty = totalQty + curContents[key];
    });
    console.log(totalQty)
    return totalQty
  }

  static getItemQuantity(id) {
    var curContents = CartService.getCartContents();
    var qty = 0;
    if (CartService.isProductInCart(id)) {
      qty = curContents[id];
    }

    console.log("Qty for product " + id + ": " + qty)
    return qty;
  }

  static getCartContents() {
    var curContents = window.sessionStorage.getItem(CART_KEY);

    if (curContents == null) {
      curContents = {};
    } else {
      curContents = JSON.parse(curContents);
    }

    return curContents;
  }

  static setCartContents(newContents) {
    window.sessionStorage.setItem(CART_KEY, JSON.stringify(newContents));

    // Notify our listeners
    CartService.LISTENERS.forEach((curListener) => {
      curListener.forceUpdate();
    });
  }

  static resetCart() {
    window.sessionStorage.removeItem(CART_KEY);

    // Notify our listeners
    CartService.LISTENERS.forEach((curListener) => {
      curListener.forceUpdate();
    });
  }

  static registerCartListener(handler) {
    CartService.LISTENERS.push(handler);
  }
}

CartService.LISTENERS = [];