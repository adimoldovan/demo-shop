export class ProductList {
  static removeProduct(storageKey, id) {
    var curContents = ProductList.getCartContents(storageKey);

    if (ProductList.isProductInCart(storageKey, id)) {
      delete curContents[id]
    }

    ProductList.setCartContents(storageKey, curContents);
  }

  static increaseQty(storageKey, id) {
    var curContents = ProductList.getCartContents(storageKey);

    if (ProductList.isProductInCart(storageKey, id)) {
      var currentQty = curContents[id]
      curContents[id] = currentQty + 1
    } else {
      curContents[id] = 1
    }

    ProductList.setCartContents(storageKey, curContents);
  }

  static decreaseQty(storageKey, id) {
    var curContents = ProductList.getCartContents(storageKey);

    if (ProductList.isProductInCart(storageKey, id)) {
      var currentQty = curContents[id]
      curContents[id] = currentQty - 1

      if (curContents[id] === 0) {
        delete curContents[id]
      }
    }
    ProductList.setCartContents(storageKey, curContents);
  }

  static isProductInCart(storageKey, id) {
    var curContents = ProductList.getCartContents(storageKey);
    var isInList = false;
    if (curContents[id] !== undefined) {
      isInList = true;
    }
    // console.log("Product " + id + " already in " + storageKey + ": " + isInList)
    return isInList;
  }

  static getNumberOfProducts(storageKey) {
    var curContents = ProductList.getCartContents(storageKey);
    var totalQty = 0;
    Object.keys(curContents).forEach(function (key) {
      totalQty = totalQty + curContents[key];
    });
    // console.log("Products in " + storageKey + ": " + totalQty)
    return totalQty
  }

  static getItemQuantity(storageKey, id) {
    var curContents = ProductList.getCartContents(storageKey);
    var qty = 0;
    if (ProductList.isProductInCart(storageKey, id)) {
      qty = curContents[id];
    }

    console.log("Qty for product " + id + ": " + qty)
    return qty;
  }

  static getCartContents(storageKey) {
    var curContents = window.sessionStorage.getItem(storageKey);

    if (curContents == null) {
      curContents = {};
    } else {
      curContents = JSON.parse(curContents);
    }

    return curContents;
  }

  static setCartContents(storageKey, newContents) {
    window.sessionStorage.setItem(storageKey, JSON.stringify(newContents));
  }

  static resetList(storageKey) {
    window.sessionStorage.removeItem(storageKey);
  }

  static notify(listeners) {
    listeners.forEach((curListener) => {
      curListener.forceUpdate();
    });
  }
}
