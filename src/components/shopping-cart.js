const CART_KEY = 'cart-contents';

export class ShoppingCart {
  static addProduct(id) {
    var curContents = ShoppingCart.getCartContents();

    if (ShoppingCart.isProductInCart(id)) {
      var currentQty = curContents[id]
      curContents[id] = currentQty + 1
    } else {
      curContents[id] = 1
    }

    ShoppingCart.setCartContents(curContents);
  }

  static removeProduct(id) {
    var curContents = ShoppingCart.getCartContents();

    if (ShoppingCart.isProductInCart(id)) {
      delete curContents[id]
    }

    ShoppingCart.setCartContents(curContents);
  }

  static increaseQty(id) {
    if (ShoppingCart.isProductInCart(id)) {
      ShoppingCart.addProduct(id);
    }
  }

  static decreaseQty(id) {
    var curContents = ShoppingCart.getCartContents();

    if (ShoppingCart.isProductInCart(id)) {
      var currentQty = curContents[id]
      curContents[id] = currentQty - 1

      if (curContents[id] == 0) {
        delete curContents[id]
      }
    }
    ShoppingCart.setCartContents(curContents);
  }

  static isProductInCart(id) {
    var curContents = ShoppingCart.getCartContents();
    return (curContents[id] != undefined);
  }

  static getNumberOfProducts() {
    var curContents = ShoppingCart.getCartContents();
    var totalQty = 0;
    Object.keys(curContents).map(function (key) {
      totalQty = totalQty + curContents[key];
    });
    console.log(totalQty)
    return totalQty
  }

  static getItemQuantity(id) {
    var curContents = ShoppingCart.getCartContents();
    var qty = 0;
    if (ShoppingCart.isProductInCart(id)) {
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
    ShoppingCart.LISTENERS.forEach((curListener) => {
      curListener.forceUpdate();
    });
  }

  static resetCart() {
    window.sessionStorage.removeItem(CART_KEY);

    // Notify our listeners
    ShoppingCart.LISTENERS.forEach((curListener) => {
      curListener.forceUpdate();
    });
  }

  static registerCartListener(handler) {
    ShoppingCart.LISTENERS.push(handler);
  }
}

ShoppingCart.LISTENERS = [];