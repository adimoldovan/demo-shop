(this["webpackJsonpdemo-shop"]=this["webpackJsonpdemo-shop"]||[]).push([[0],{50:function(e){e.exports=JSON.parse('[{"name":"Refined Frozen Mouse","desc":"Vero quia nesciunt laborum velit. Et in ipsum quia harum nihil aliquid officiis. Porro ea officia corporis.","price":9.99,"image_url":"0001.jpg"},{"name":"Awesome Granite Chips","desc":"Omnis excepturi laudantium et minima dignissimos exercitationem. Ut sed rerum fugit repellat. Libero ea reiciendis labore maxime illum consectetur quae alias impedit.","price":15.99,"image_url":"0002.jpg"},{"name":"Incredible Concrete Hat","desc":"Asperiores est error. Eum dicta totam. Aut minima laboriosam reiciendis enim unde voluptatem. Asperiores possimus nobis repellendus molestiae impedit. Eveniet corporis quasi qui quibusdam id repudiandae. Quas quis temporibus vitae hic.","price":7.99,"image_url":"0004.jpg"},{"name":"Awesome Metal Chair","desc":"Adipisci velit optio dolorem minima ex. Dolorem magni dignissimos nemo impedit. Aperiam consequatur nisi. Tempora consequatur sint soluta.","price":15.99,"image_url":"0005.jpg"},{"name":"Practical Wooden Bacon","desc":"Qui veniam laboriosam quia sequi ab. Dolorem eveniet est eveniet. Et quia eius ipsam blanditiis ea voluptatibus. Sequi doloremque inventore autem. Voluptatum est ipsam magnam officiis voluptatum quae quas rem. Odio non aliquam aut autem at omnis in aut ut.","price":29.99,"image_url":"0006.jpg"},{"name":"Awesome Soft Shirt","desc":"Qui veniam laboriosam quia sequi ab. Dolorem eveniet est eveniet. Et quia eius ipsam blanditiis ea voluptatibus. Sequi doloremque inventore autem. Voluptatum est ipsam magnam officiis voluptatum quae quas rem. Odio non aliquam aut autem at omnis in aut ut.","price":29.99,"image_url":"0006.jpg"},{"name":"Practical Wooden Bacon","desc":"Qui veniam laboriosam quia sequi ab. Dolorem eveniet est eveniet. Et quia eius ipsam blanditiis ea voluptatibus. Sequi doloremque inventore autem. Voluptatum est ipsam magnam officiis voluptatum quae quas rem. Odio non aliquam aut autem at omnis in aut ut.","price":1.99,"image_url":"0006.jpg"},{"name":"Practical Metal Mouse","desc":"Qui veniam laboriosam quia sequi ab. Dolorem eveniet est eveniet. Et quia eius ipsam blanditiis ea voluptatibus. Sequi doloremque inventore autem. Voluptatum est ipsam magnam officiis voluptatum quae quas rem. Odio non aliquam aut autem at omnis in aut ut.","price":9.99,"image_url":"0006.jpg"},{"name":"Licensed Steel Gloves","desc":"Qui veniam laboriosam quia sequi ab. Dolorem eveniet est eveniet. Et quia eius ipsam blanditiis ea voluptatibus. Sequi doloremque inventore autem. Voluptatum est ipsam magnam officiis voluptatum quae quas rem. Odio non aliquam aut autem at omnis in aut ut.","price":14.99,"image_url":"0006.jpg"},{"name":"Gorgeous Soft Pizza","desc":"Qui veniam laboriosam quia sequi ab. Dolorem eveniet est eveniet. Et quia eius ipsam blanditiis ea voluptatibus. Sequi doloremque inventore autem. Voluptatum est ipsam magnam officiis voluptatum quae quas rem. Odio non aliquam aut autem at omnis in aut ut.","price":19.99,"image_url":"0006.jpg"}]')},62:function(e,t,a){e.exports=a(77)},67:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),l=a.n(i),o=a(6),s=a(7),c=a(9),u=a(8),m=(a(67),a(58)),d=a(26),h=a(12),E=a(50),p=function e(){Object(o.a)(this,e)};(p.ITEMS=E).forEach((function(e,t){e.id=t})),p.ITEMS_NAME_AZ=p.ITEMS.slice().sort((function(e,t){return e.name.localeCompare(t.name)})),p.ITEMS_NAME_ZA=p.ITEMS_NAME_AZ.slice().reverse(),p.ITEMS_PRICE_LOHI=p.ITEMS.slice().sort((function(e,t){return e.price-t.price})),p.ITEMS_PRICE_HILO=p.ITEMS_PRICE_LOHI.slice().reverse();var v=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"verifyCredentials",value:function(t,a){return!(e.VALID_USERNAMES.indexOf(t)<0)&&(a===e.VALID_PASSWORD&&(e.isLockedOutUser(t)?(console.log("User is locked"),!0):(window.sessionStorage.setItem(f,t),!0)))}},{key:"getLoggedInUser",value:function(){var e=window.sessionStorage.getItem(f);return console.log("Loggedin user: "+e),e}},{key:"isLockedOutUser",value:function(e){return e===g}},{key:"isProblemUser",value:function(){return window.sessionStorage.getItem(f)===b}},{key:"isPerformanceGlitchUser",value:function(){return window.sessionStorage.getItem(f)===y}},{key:"resetSession",value:function(){window.sessionStorage.removeItem(f)}},{key:"registerListener",value:function(t){e.LISTENERS.push(t)}},{key:"notify",value:function(){e.LISTENERS.forEach((function(e){e.forceUpdate()}))}}]),e}(),f="session-username",b="beetle",y="turtle",g="locked";v.VALID_USERNAMES=["dino",b,y,g],v.VALID_PASSWORD="choochoo",v.LISTENERS=[];var C=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"removeProduct",value:function(t,a){var n=e.getCartContents(t);e.isProductInCart(t,a)&&delete n[a],e.setCartContents(t,n)}},{key:"increaseQty",value:function(t,a){var n=e.getCartContents(t);if(e.isProductInCart(t,a)){var r=n[a];n[a]=r+1}else n[a]=1;e.setCartContents(t,n)}},{key:"decreaseQty",value:function(t,a){var n=e.getCartContents(t);if(e.isProductInCart(t,a)){var r=n[a];n[a]=r-1,0===n[a]&&delete n[a]}e.setCartContents(t,n)}},{key:"isProductInCart",value:function(t,a){var n=!1;return void 0!==e.getCartContents(t)[a]&&(n=!0),n}},{key:"getNumberOfProducts",value:function(t){var a=e.getCartContents(t),n=0;return Object.keys(a).forEach((function(e){n+=a[e]})),n}},{key:"getItemQuantity",value:function(t,a){var n=e.getCartContents(t),r=0;return e.isProductInCart(t,a)&&(r=n[a]),console.log("Qty for product "+a+": "+r),r}},{key:"getCartContents",value:function(e){var t=window.sessionStorage.getItem(e);return t=null==t?{}:JSON.parse(t)}},{key:"setCartContents",value:function(e,t){window.sessionStorage.setItem(e,JSON.stringify(t))}},{key:"resetList",value:function(e){window.sessionStorage.removeItem(e)}},{key:"notify",value:function(e){e.forEach((function(e){e.forceUpdate()}))}}]),e}(),O="cart-contents",k=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"addProduct",value:function(t){C.increaseQty(O,t),C.notify(e.LISTENERS)}},{key:"removeProduct",value:function(t){C.removeProduct(O,t),C.notify(e.LISTENERS)}},{key:"increaseQty",value:function(t){C.increaseQty(O,t),C.notify(e.LISTENERS)}},{key:"decreaseQty",value:function(t){C.decreaseQty(O,t),C.notify(e.LISTENERS)}},{key:"isProductInCart",value:function(e){return C.isProductInCart(O,e)}},{key:"getNumberOfProducts",value:function(){return C.getNumberOfProducts(O)}},{key:"getItemQuantity",value:function(e){return C.getItemQuantity(O,e)}},{key:"getCartContents",value:function(){return C.getCartContents(O)}},{key:"resetCart",value:function(){C.resetList(O),C.notify(e.LISTENERS)}},{key:"registerCartListener",value:function(t){e.LISTENERS.push(t)}}]),e}();k.LISTENERS=[];var S=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"addProduct",value:function(t){C.isProductInCart("wishlist-contents",t)||C.increaseQty("wishlist-contents",t),C.notify(e.LISTENERS)}},{key:"removeProduct",value:function(t){C.removeProduct("wishlist-contents",t),C.notify(e.LISTENERS)}},{key:"isProductInCart",value:function(e){return C.isProductInCart("wishlist-contents",e)}},{key:"getNumberOfProducts",value:function(){return C.getNumberOfProducts("wishlist-contents")}},{key:"getProducts",value:function(){return C.getCartContents("wishlist-contents")}},{key:"resetList",value:function(){C.resetList("wishlist-contents"),C.notify(e.LISTENERS)}},{key:"registerCartListener",value:function(t){e.LISTENERS.push(t)}}]),e}();S.LISTENERS=[];var j=a(79),N=a(52),I=a(87),P=a(10),w=a(11),L=(a(41),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={product:p.ITEMS[e.id],itemInWishlist:S.isProductInCart(e.id),isWishlist:e.isWishlist},n.state.product.id=e.id,n}return Object(s.a)(a,[{key:"addToCart",value:function(){v.isProblemUser()&&this.state.product.id%2===1||k.addProduct(this.state.product.id)}},{key:"addToWishlist",value:function(){S.addProduct(this.state.product.id),this.setState({itemInWishlist:!0})}},{key:"removeFromWishlist",value:function(){S.removeProduct(this.state.product.id),this.setState({itemInWishlist:!1})}},{key:"render",value:function(){var e=this,t="#/product/".concat(this.state.product.id),a=this.state.product.desc.substr(0,50),n=r.a.createElement(j.a,{variant:"link",bottom:"true",onClick:function(){return e.addToWishlist()}},r.a.createElement(P.a,{icon:w.e,size:"2x",color:"#1551d1e3"}));return!0===this.state.itemInWishlist&&(n=r.a.createElement(j.a,{variant:"link",bottom:"true",onClick:function(){return e.removeFromWishlist()}},r.a.createElement(P.a,{icon:w.f,size:"2x",color:"#1551d1e3"}))),r.a.createElement(N.a,null,r.a.createElement(I.a,{style:{marginBottom:"20px"}},r.a.createElement(I.a.Img,{top:"true",width:"100%","data-src":"holder.js/100px150",alt:this.state.product.name}),r.a.createElement(I.a.Body,{className:"text-center"},r.a.createElement(I.a.Link,{href:t},this.state.product.name),r.a.createElement(I.a.Text,null,a)),r.a.createElement(I.a.Footer,{className:"text-muted text-center"},r.a.createElement(I.a.Text,null,"$",r.a.createElement("span",{style:{fontWeight:"bold",fontSize:"16px"}},this.state.product.price)),r.a.createElement(j.a,{variant:"link",onClick:function(){return e.addToCart()}},r.a.createElement(P.a,{icon:w.c,size:"2x",color:"#3aa755e3"})),n,r.a.createElement(I.a.Text,null,r.a.createElement("small",null,"in stock")))))}}]),a}(r.a.Component)),x=a(80),_=a(81),T=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={title:e.page_title},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(x.a,null,r.a.createElement(_.a,null,r.a.createElement(N.a,null,r.a.createElement("div",{className:"subheader-container"},r.a.createElement("h1",null,r.a.createElement("small",{className:"text-muted"},this.state.title))),r.a.createElement("hr",null))))}}]),a}(r.a.Component),q=a(84),A=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={inventoryList:p.ITEMS_NAME_AZ},n.sortByOption=n.sortByOption.bind(Object(h.a)(n)),n.sortNameAZ=n.sortNameAZ.bind(Object(h.a)(n)),n.sortNameZA=n.sortNameZA.bind(Object(h.a)(n)),n.sortPriceLoHi=n.sortPriceLoHi.bind(Object(h.a)(n)),n.sortPriceHiLo=n.sortPriceHiLo.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"sortByOption",value:function(e){if(console.log(e),!v.isProblemUser())switch(e.target.value){case"az":this.setState({inventoryList:p.ITEMS_NAME_AZ});break;case"za":this.setState({inventoryList:p.ITEMS_NAME_ZA});break;case"hilo":this.setState({inventoryList:p.ITEMS_PRICE_HILO});break;case"lohi":this.setState({inventoryList:p.ITEMS_PRICE_LOHI});break;default:this.setState({inventoryList:p.ITEMS_NAME_AZ})}}},{key:"sortNameAZ",value:function(){v.isProblemUser()&&this.setState({inventoryList:p.ITEMS_NAME_AZ})}},{key:"sortNameZA",value:function(){v.isProblemUser()&&this.setState({inventoryList:p.ITEMS_NAME_ZA})}},{key:"sortPriceLoHi",value:function(){v.isProblemUser()&&this.setState({inventoryList:p.ITEMS_PRICE_LOHI})}},{key:"sortPriceHiLo",value:function(){v.isProblemUser()&&this.setState({inventoryList:p.ITEMS_PRICE_HILO})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{page_title:"Products"}),r.a.createElement(x.a,null,r.a.createElement(_.a,{className:"justify-content-end"},r.a.createElement(q.a,{inline:!0},r.a.createElement(N.a,{md:"auto"},r.a.createElement(q.a.Control,{size:"sm",type:"text",placeholder:"Search",className:"mr-auto"}),r.a.createElement(j.a,{size:"sm",variant:"light",style:{marginLeft:"5px"}},"Search")),r.a.createElement(N.a,{md:"auto"},r.a.createElement(q.a.Control,{className:"sort-products-select",size:"sm",as:"select",onChange:this.sortByOption},r.a.createElement("option",{value:"az",onClick:this.sortNameAZ},"Sort by name (A to Z)"),r.a.createElement("option",{value:"za",onClick:this.sortNameZA},"Sort by name (Z to A)"),r.a.createElement("option",{value:"lohi",onClick:this.sortPriceLoHi},"Sort by price (low to high)"),r.a.createElement("option",{value:"hilo",onClick:this.sortPriceHiLo},"Sort by price (high to low)"))))),r.a.createElement(_.a,{xs:1,sm:2,md:2,lg:3,xl:4},this.state.inventoryList.map((function(e){return r.a.createElement(L,{key:e.id,id:e.id,isWishlist:!1})})))))}}]),a}(n.Component),M=a(82),R=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(o.a)(this,a);var r=(n=t.call(this,e)).props.match.params;return r.id>=0&&p.ITEMS.length>r.id?n.item=p.ITEMS[r.id]:n.item={name:"PRODUCT NOT FOUND",desc:"-",price:"-"},n.item.id=r.id,n.state={itemInWishlist:S.isProductInCart(n.item.id)},n}return Object(s.a)(a,[{key:"addToCart",value:function(){k.addProduct(this.item.id)}},{key:"addToWishlist",value:function(){S.addProduct(this.item.id),this.setState({itemInWishlist:!0})}},{key:"removeFromWishlist",value:function(){S.removeProduct(this.item.id),this.setState({itemInWishlist:!1})}},{key:"render",value:function(){var e=this,t=r.a.createElement(j.a,{variant:"link",bottom:"true",onClick:function(){return e.addToWishlist()}},r.a.createElement(P.a,{icon:w.e,size:"3x",color:"#1551d1e3"}));return!0===this.state.itemInWishlist&&(t=r.a.createElement(j.a,{variant:"link",bottom:"true",onClick:function(){return e.removeFromWishlist()}},r.a.createElement(P.a,{icon:w.f,size:"3x",color:"#1551d1e3"}))),r.a.createElement("div",null,r.a.createElement(T,{page_title:this.item.name}),r.a.createElement(x.a,null,r.a.createElement(_.a,null,r.a.createElement(N.a,{className:"col col-lg-4"},r.a.createElement(M.a,{src:"holder.js/100px250"})),r.a.createElement(N.a,null,r.a.createElement("p",null,this.item.desc)),r.a.createElement(N.a,{className:"col col-lg-2 text-center"},r.a.createElement("p",{style:{fontWeight:"bold",fontSize:"24px"}},this.item.price," EUR"),r.a.createElement(j.a,{variant:"link",onClick:function(){return e.addToCart()}},r.a.createElement(P.a,{icon:w.c,size:"3x",color:"#3aa755e3"})),t,r.a.createElement("p",null,r.a.createElement("small",null,"in stock"))))))}}]),a}(r.a.Component),U=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{page_title:"Help"}))}}]),a}(r.a.Component),W=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",error:""},n.listener=e.listener,n.handlePassChange=n.handlePassChange.bind(Object(h.a)(n)),n.handleUserChange=n.handleUserChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){return e.preventDefault(),this.state.username?this.state.password?v.verifyCredentials(this.state.username,this.state.password)?v.isLockedOutUser(this.state.username)?this.setState({error:"The user has been locked out."}):(window.location.href="#/products",this.listener.setModalShow(!1),""):this.setState({error:"Incorrect username or password!"}):this.setState({error:"Please fill in the password!"}):this.setState({error:"Please fill in the username!"})}},{key:"handleUserChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePassChange",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"login_wrapper"},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},this.state.error&&r.a.createElement("p",{className:"error","data-test":"error"},r.a.createElement(P.a,{icon:w.d})," ",this.state.error),r.a.createElement("input",{type:"text",className:"form_input","data-test":"username",id:"user-name",placeholder:"Username",value:this.state.username,onChange:this.handleUserChange,autoCorrect:"off",autoCapitalize:"none"}),r.a.createElement("input",{type:"password",className:"form_input","data-test":"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.handlePassChange,autoCorrect:"off",autoCapitalize:"none"}),r.a.createElement(j.a,{variant:"primary",type:"submit"},r.a.createElement(P.a,{icon:w.l})," Login"))))}}]),a}(n.Component),Q=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{page_title:"Whoops! Content not found!"}))}}]),a}(r.a.Component),H=a(86),z=a(85),D=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),n=t.call(this,e),k.registerCartListener(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e="",t=k.getNumberOfProducts();return t>0&&(e=r.a.createElement("span",{className:"fa-layers-counter shopping_cart_badge"},t)),r.a.createElement("a",{href:"#/cart",className:"shopping-cart-icon fa-layers fa-fw"},r.a.createElement(P.a,{icon:w.k}),e)}}]),a}(n.Component),F=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),n=t.call(this,e),S.registerCartListener(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e="",t=S.getNumberOfProducts();return t>0&&(e=r.a.createElement("span",{className:"fa-layers-counter shopping_cart_badge"},t)),r.a.createElement("a",{href:"#/wishlist",className:"shopping-cart-icon fa-layers fa-fw"},r.a.createElement(P.a,{icon:w.e}),e)}}]),a}(n.Component),Z=a(83),V=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).modalShow=!1,n}return Object(s.a)(a,[{key:"logout",value:function(){console.log("logout function"),v.resetSession(),this.forceUpdate()}},{key:"setModalShow",value:function(e){console.log("Modal show: "+e),this.modalShow=e,this.forceUpdate()}},{key:"render",value:function(){var e=this,t=v.getLoggedInUser(),a=r.a.createElement("span",null,"Hello guest! ",r.a.createElement(j.a,{variant:"link",onClick:function(){return e.setModalShow(!0)}},r.a.createElement(P.a,{icon:w.l,color:"black"}))),n="";null!=t&&(n=r.a.createElement("span",null,"Hi ",r.a.createElement("a",{href:"#/account"},t),"!"),a=r.a.createElement(j.a,{variant:"link",onClick:function(){return e.logout()}},r.a.createElement(P.a,{icon:w.m,color:"black"})));var i=r.a.createElement(Z.a,{show:this.modalShow,onHide:function(){return e.setModalShow(!1)}},r.a.createElement(Z.a.Header,{closeButton:!0},r.a.createElement(Z.a.Title,null,r.a.createElement("small",{className:"text-muted"},"Login"))),r.a.createElement(W,{listener:this}));return r.a.createElement("span",null,n,a,i)}}]),a}(n.Component),B=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(x.a,null,r.a.createElement(H.a,{collapseOnSelect:!0,expand:"sm",bg:"light",variant:"light",sticky:"top",className:"justify-content-between"},r.a.createElement(H.a.Brand,{href:"".concat("/demo-shop","/")},r.a.createElement(P.a,{icon:w.j,size:"3x",className:"brand-logo"})),r.a.createElement(H.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(H.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(z.a,{className:"mr-auto"}),r.a.createElement(z.a,null,r.a.createElement(H.a.Text,null,r.a.createElement(D,null),r.a.createElement(F,null),r.a.createElement(V,null))))))}}]),a}(r.a.Component),$=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).modalShow=!1,n}return Object(s.a)(a,[{key:"resetAppState",value:function(){S.resetList(),k.resetCart(),v.resetSession(),window.location.reload(!0)}},{key:"setModalShow",value:function(e){this.modalShow=e,this.forceUpdate()}},{key:"render",value:function(){var e=this;return r.a.createElement(x.a,null,r.a.createElement("hr",null),r.a.createElement(H.a,{sticky:"bottom",expand:"sm",bg:"light",variant:"light"},r.a.createElement(H.a,null,r.a.createElement(z.a,null,r.a.createElement(z.a.Item,null,r.a.createElement(z.a.Link,{href:"#/"},"2020 Demo Shop")))),r.a.createElement(H.a.Collapse,{className:"justify-content-end"},r.a.createElement(z.a,{className:"justify-content-end"},r.a.createElement(z.a.Item,null,r.a.createElement(j.a,{onClick:function(){return e.setModalShow(!0)},variant:"link",bottom:"true"},r.a.createElement(P.a,{icon:w.i,color:"#1551d1e3"}))),r.a.createElement(z.a.Item,null,r.a.createElement(j.a,{title:"Reset the application state",variant:"link",bottom:"true",onClick:function(){return e.resetAppState()}},r.a.createElement(P.a,{icon:w.o,color:"#1551d1e3"})))))),r.a.createElement(Z.a,{show:this.modalShow,onHide:function(){return e.setModalShow(!1)}},r.a.createElement(Z.a.Header,{closeButton:!0},r.a.createElement(Z.a.Title,null,r.a.createElement("small",{className:"text-muted"},"Help"))),r.a.createElement(Z.a.Body,null,r.a.createElement("h3",null,"Valid usernames"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Password"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"dino"),r.a.createElement("td",null,"normal user"),r.a.createElement("td",null,"choochoo")),r.a.createElement("tr",null,r.a.createElement("td",null,"beetle"),r.a.createElement("td",null,"user with bugs"),r.a.createElement("td",null,"choochoo")),r.a.createElement("tr",null,r.a.createElement("td",null,"turtle"),r.a.createElement("td",null,"slow user"),r.a.createElement("td",null,"choochoo")),r.a.createElement("tr",null,r.a.createElement("td",null,"locked"),r.a.createElement("td",null,"locked out user"),r.a.createElement("td",null,"choochoo")))))))}}]),a}(r.a.Component),J=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{page_title:"Account"}))}}]),a}(r.a.Component),G=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),n=t.call(this,e),S.registerCartListener(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e=S.getProducts();return r.a.createElement("div",null,r.a.createElement(T,{page_title:"Wishlist"}),r.a.createElement(x.a,null,r.a.createElement(_.a,{className:"justify-content-end"}),r.a.createElement(_.a,{xs:1,sm:2,md:2,lg:3,xl:4},Object.keys(e).map((function(e){return r.a.createElement(L,{key:e,id:e,isWishlist:!0})})))))}}]),a}(n.Component),Y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),n=t.call(this,e),k.registerCartListener(Object(h.a)(n)),n.item=e.item,n.state={itemVisible:!0},n.totalPrice=n.item.price,null==e.item&&(n.state.itemVisible=!1),n}return Object(s.a)(a,[{key:"removeFromCart",value:function(){k.removeProduct(this.item.id),this.setState({itemVisible:!1})}},{key:"increaseQty",value:function(){k.increaseQty(this.item.id)}},{key:"decreaseQty",value:function(){k.decreaseQty(this.item.id),k.getItemQuantity(this.item.id)<1&&this.setState({itemVisible:!1})}},{key:"calculateProductPrice",value:function(){return(this.item.price*k.getItemQuantity(this.item.id)).toFixed(2)}},{key:"render",value:function(){var e=this,t=k.getItemQuantity(this.item.id);if(this.totalPrice=this.calculateProductPrice(),this.state.itemVisible){var a=this.item.id;v.isProblemUser()&&(a+=1);var n="#product/".concat(a);return r.a.createElement(x.a,null,r.a.createElement(_.a,{style:{marginBottom:"10px",borderBottom:"1px solid #f5f5f5"}},r.a.createElement(N.a,{md:"auto"},r.a.createElement("div",{style:{width:"130px"}},r.a.createElement(j.a,{variant:"link",onClick:function(){return e.decreaseQty()}},r.a.createElement(P.a,{icon:w.g,style:{color:"grey"}})),t,r.a.createElement(j.a,{variant:"link",onClick:function(){return e.increaseQty()}},r.a.createElement(P.a,{icon:w.h,style:{color:"grey"}})))),r.a.createElement(N.a,{md:"auto",style:{marginTop:"7px"}},r.a.createElement("div",{style:{width:"100px"}},"$",this.item.price)),r.a.createElement(N.a,{md:"auto",style:{marginTop:"7px"}},r.a.createElement("div",{style:{width:"100px"}},"$",this.totalPrice)),r.a.createElement(N.a,{style:{marginTop:"7px"}},r.a.createElement("a",{href:n,id:"item_".concat(this.item.id,"_title_link")},this.item.name)),r.a.createElement(N.a,{md:"auto"},r.a.createElement(j.a,{variant:"link",onClick:function(){return e.removeFromCart()}},r.a.createElement(P.a,{icon:w.n})))))}return r.a.createElement("div",{className:"removed_cart_item"})}}]),a}(n.Component),K=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),n=t.call(this,e),k.registerCartListener(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){console.log("Render cart amount");var e=k.getCartContents(),t=0;for(var a in e){var n=p.ITEMS[a].price,i=e[a];t=parseFloat(t+n*i).toFixed(2)}var l=parseFloat(.05*t).toFixed(2);return r.a.createElement("div",{style:{textAlign:"right",margin:"10px"},className:"d-flex justify-content-between"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("table",{className:"text-right"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Items total:"),r.a.createElement("td",{className:"amount"},"$",t)),r.a.createElement("tr",null,r.a.createElement("td",null,"Tax:"),r.a.createElement("td",{className:"amount"},"$",l)),r.a.createElement("tr",{className:"amount-total"},r.a.createElement("td",null,"Total:"),r.a.createElement("td",{className:"amount"},"$",t))))))}}]),a}(n.Component),X=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),n=t.call(this,e),k.registerCartListener(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e=k.getCartContents(),t=r.a.createElement(x.a,null,r.a.createElement(_.a,{xs:1,sm:1,md:1,lg:1,xl:1},r.a.createElement(N.a,null,Object.keys(e).map((function(e,t){return r.a.createElement(Y,{key:t,item:p.ITEMS[e]})})))),r.a.createElement(K,null),r.a.createElement("div",{style:{textAlign:"right",margin:"10px"}},r.a.createElement(j.a,{style:{marginRight:"10px"},variant:"danger",href:"#/products"},r.a.createElement(P.a,{icon:w.a})," Continue Shopping"),r.a.createElement(j.a,{variant:"success",href:"#/checkout-info"},r.a.createElement(P.a,{icon:w.b})," Checkout")));return k.getNumberOfProducts()<1&&(t=r.a.createElement(x.a,{className:"text-center"},"How about adding some products in your cart?")),r.a.createElement("div",null,r.a.createElement(T,{page_title:"Your cart"}),t)}}]),a}(n.Component),ee=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={firstName:"",lastName:"",postalCode:""},n.handleFirstNameChange=n.handleFirstNameChange.bind(Object(h.a)(n)),n.handleLastNameChange=n.handleLastNameChange.bind(Object(h.a)(n)),n.handlePostalCodeChange=n.handlePostalCodeChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.dismissError=n.dismissError.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"dismissError",value:function(){this.setState({error:""})}},{key:"handleFirstNameChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"handleLastNameChange",value:function(e){var t={lastName:e.target.value};v.isProblemUser()&&(t.firstName=e.target.value),this.setState(t)}},{key:"handlePostalCodeChange",value:function(e){this.setState({postalCode:e.target.value})}},{key:"handleSubmit",value:function(e){return e.preventDefault(),this.state.firstName?this.state.lastName?this.state.postalCode?(window.location.href="#/checkout-summary",""):this.setState({error:"Postal Code is required"}):this.setState({error:"Last Name is required"}):this.setState({error:"First Name is required"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{page_title:"Your information"}),r.a.createElement(q.a,{onSubmit:this.handleSubmit},r.a.createElement(x.a,null,r.a.createElement(_.a,{className:"justify-content-between"},r.a.createElement(N.a,null,r.a.createElement("div",{className:"section-title"},"Address information"),r.a.createElement("div",null,this.state.error&&r.a.createElement("p",{className:"error","data-test":"error"},r.a.createElement(P.a,{icon:w.d})," ",this.state.error),r.a.createElement(q.a.Control,{id:"first-name",type:"text",className:"form_input","data-test":"firstName",placeholder:"First Name",value:this.state.firstName,onChange:this.handleFirstNameChange,autoCorrect:"off",autoCapitalize:"none"}),r.a.createElement(q.a.Control,{id:"last-name",type:"text",className:"form_input","data-test":"lastName",placeholder:"Last Name",value:this.state.lastName,onChange:this.handleLastNameChange,autoCorrect:"off",autoCapitalize:"none"}),r.a.createElement(q.a.Control,{id:"postal-code",type:"text",className:"form_input","data-test":"postalCode",placeholder:"Zip/Postal Code",value:this.state.postalCode,onChange:this.handlePostalCodeChange,autoCorrect:"off",autoCapitalize:"none"}))),r.a.createElement(N.a,null,r.a.createElement("div",{className:"section-title"},"Delivery information"),r.a.createElement("div",null,r.a.createElement(q.a.Check,{type:"radio",label:"Choo Choo delivery"})),r.a.createElement("div",{className:"section-title"},"Payment information"),r.a.createElement("div",null,r.a.createElement(q.a.Check,{type:"radio","data-test":"delivery-type",label:"Cash on delivery",checked:!0}),r.a.createElement(q.a.Check,{type:"radio","data-test":"delivery-type",label:"Credit card",disabled:!0}),r.a.createElement(q.a.Check,{type:"radio","data-test":"delivery-type",label:"PayPal",disabled:!0})))),r.a.createElement("div",{style:{textAlign:"right",margin:"10px"}},r.a.createElement(j.a,{style:{marginRight:"10px"},variant:"danger",href:"#/cart"},r.a.createElement(P.a,{icon:w.a})," Cancel"),r.a.createElement(j.a,{variant:"success",type:"submit"},r.a.createElement(P.a,{icon:w.b})," Continue checkout")))))}}]),a}(n.Component),te=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{page_title:"Order summary"}),r.a.createElement(x.a,null,r.a.createElement(_.a,null,r.a.createElement(N.a,null,r.a.createElement("div",null,"Payment Information:"),r.a.createElement("div",null,"Cash on delivery"),r.a.createElement("div",null,"Shipping Information:"),r.a.createElement("div",null,"CHOO CHOO DELIVERY!")),r.a.createElement(N.a,null,r.a.createElement(K,null))),r.a.createElement("div",{style:{textAlign:"right",margin:"10px"}},r.a.createElement(j.a,{style:{marginRight:"10px"},variant:"danger",href:"#/cart"},r.a.createElement(P.a,{icon:w.a})," Cancel"),r.a.createElement(j.a,{variant:"success",href:"#/checkout-complete"},r.a.createElement(P.a,{icon:w.b})," Complete your order"))))}}]),a}(n.Component),ae=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return k.resetCart(),r.a.createElement("div",null,r.a.createElement(T,{page_title:"Order complete"}),r.a.createElement(x.a,null,r.a.createElement("div",{className:"text-center"},"Thank you for your order!"),r.a.createElement("div",{style:{textAlign:"right",margin:"10px"}},r.a.createElement(j.a,{variant:"success",href:"#/products"},r.a.createElement(P.a,{icon:w.b})," Continue shopping"))))}}]),a}(r.a.Component),ne=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(x.a,{fluid:!0},r.a.createElement(B,null),r.a.createElement(m.a,{basename:"/demo-shop"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{path:"/login",component:W}),r.a.createElement(d.a,{path:"/products",component:A}),r.a.createElement(d.a,{path:"/product/:id",component:R}),r.a.createElement(d.a,{path:"/help",component:U}),r.a.createElement(d.a,{path:"/account",component:J}),r.a.createElement(d.a,{path:"/wishlist",component:G}),r.a.createElement(d.a,{path:"/cart",component:X}),r.a.createElement(d.a,{path:"/checkout-info",component:ee}),r.a.createElement(d.a,{path:"/checkout-summary",component:te}),r.a.createElement(d.a,{path:"/checkout-complete",component:ae}),r.a.createElement(d.a,{component:Q}))),r.a.createElement($,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(76);l.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.1f53f244.chunk.js.map