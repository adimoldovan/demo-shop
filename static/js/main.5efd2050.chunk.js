(this["webpackJsonpdemo-shop"]=this["webpackJsonpdemo-shop"]||[]).push([[0],{51:function(e){e.exports=JSON.parse('[{"name":"Refined Frozen Mouse","desc":"Vero quia nesciunt laborum velit. Et in ipsum quia harum nihil aliquid officiis. Porro ea officia corporis.","price":9.99,"image_url":"0001.jpg"},{"name":"Awesome Granite Chips","desc":"Omnis excepturi laudantium et minima dignissimos exercitationem. Ut sed rerum fugit repellat. Libero ea reiciendis labore maxime illum consectetur quae alias impedit.","price":15.99,"image_url":"0002.jpg"},{"name":"Incredible Concrete Hat","desc":"Asperiores est error. Eum dicta totam. Aut minima laboriosam reiciendis enim unde voluptatem. Asperiores possimus nobis repellendus molestiae impedit. Eveniet corporis quasi qui quibusdam id repudiandae. Quas quis temporibus vitae hic.","price":7.99,"image_url":"0004.jpg"},{"name":"Awesome Metal Chair","desc":"Adipisci velit optio dolorem minima ex. Dolorem magni dignissimos nemo impedit. Aperiam consequatur nisi. Tempora consequatur sint soluta.","price":15.99,"image_url":"0005.jpg"},{"name":"Practical Wooden Bacon","desc":"Qui veniam laboriosam quia sequi ab. Dolorem eveniet est eveniet. Et quia eius ipsam blanditiis ea voluptatibus. Sequi doloremque inventore autem. Voluptatum est ipsam magnam officiis voluptatum quae quas rem. Odio non aliquam aut autem at omnis in aut ut.","price":29.99,"image_url":"0006.jpg"},{"name":"Awesome Soft Shirt","desc":"Qui veniam laboriosam quia sequi ab. Dolorem eveniet est eveniet. Et quia eius ipsam blanditiis ea voluptatibus. Sequi doloremque inventore autem. Voluptatum est ipsam magnam officiis voluptatum quae quas rem. Odio non aliquam aut autem at omnis in aut ut.","price":29.99,"image_url":"0006.jpg"},{"name":"Practical Wooden Bacon","desc":"Qui veniam laboriosam quia sequi ab. Dolorem eveniet est eveniet. Et quia eius ipsam blanditiis ea voluptatibus. Sequi doloremque inventore autem. Voluptatum est ipsam magnam officiis voluptatum quae quas rem. Odio non aliquam aut autem at omnis in aut ut.","price":1.99,"image_url":"0006.jpg"},{"name":"Practical Metal Mouse","desc":"Qui veniam laboriosam quia sequi ab. Dolorem eveniet est eveniet. Et quia eius ipsam blanditiis ea voluptatibus. Sequi doloremque inventore autem. Voluptatum est ipsam magnam officiis voluptatum quae quas rem. Odio non aliquam aut autem at omnis in aut ut.","price":9.99,"image_url":"0006.jpg"},{"name":"Licensed Steel Gloves","desc":"Qui veniam laboriosam quia sequi ab. Dolorem eveniet est eveniet. Et quia eius ipsam blanditiis ea voluptatibus. Sequi doloremque inventore autem. Voluptatum est ipsam magnam officiis voluptatum quae quas rem. Odio non aliquam aut autem at omnis in aut ut.","price":14.99,"image_url":"0006.jpg"},{"name":"Gorgeous Soft Pizza","desc":"Qui veniam laboriosam quia sequi ab. Dolorem eveniet est eveniet. Et quia eius ipsam blanditiis ea voluptatibus. Sequi doloremque inventore autem. Voluptatum est ipsam magnam officiis voluptatum quae quas rem. Odio non aliquam aut autem at omnis in aut ut.","price":19.99,"image_url":"0006.jpg"}]')},54:function(e){e.exports=JSON.parse('{"buildDate":"2022-05-24 11:57:32 UTC"}')},62:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(27),r=a.n(s),c=a(7),o=a(8),l=a(9),u=a(10),d=(a(62),a(57)),j=a(14),h=a(13),m=a(51),b=Object(o.a)((function e(){Object(c.a)(this,e)}));b.ITEMS=m,b.ITEMS.forEach((function(e,t){e.id=t})),b.ITEMS_NAME_AZ=b.ITEMS.slice().sort((function(e,t){return e.name.localeCompare(t.name)})),b.ITEMS_NAME_ZA=b.ITEMS_NAME_AZ.slice().reverse(),b.ITEMS_PRICE_LOHI=b.ITEMS.slice().sort((function(e,t){return e.price-t.price})),b.ITEMS_PRICE_HILO=b.ITEMS_PRICE_LOHI.slice().reverse(),b.ITEMS_FILTER=b.ITEMS.filter((function(e){return e.name.includes("Awesome")}));var O=function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,null,[{key:"verifyCredentials",value:function(t,a){return!(e.VALID_USERNAMES.indexOf(t)<0)&&(a===e.VALID_PASSWORD&&(e.isLockedOutUser(t)?(console.log("User is locked"),!0):(window.sessionStorage.setItem(p,t),!0)))}},{key:"getLoggedInUser",value:function(){var e=window.sessionStorage.getItem(p);return console.log("Loggedin user: "+e),e}},{key:"isLockedOutUser",value:function(e){return e===f}},{key:"isProblemUser",value:function(){return window.sessionStorage.getItem(p)===x}},{key:"isPerformanceGlitchUser",value:function(){return window.sessionStorage.getItem(p)===v}},{key:"resetSession",value:function(){window.sessionStorage.removeItem(p)}},{key:"registerListener",value:function(t){e.LISTENERS.push(t)}},{key:"notify",value:function(){e.LISTENERS.forEach((function(e){e.forceUpdate()}))}}]),e}(),p="session-username",x="beetle",v="turtle",f="locked";O.VALID_USERNAMES=["dino",x,v,f],O.VALID_PASSWORD="choochoo",O.LISTENERS=[];var g=function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,null,[{key:"removeProduct",value:function(t,a){var i=e.getCartContents(t);e.isProductInCart(t,a)&&delete i[a],e.setCartContents(t,i)}},{key:"increaseQty",value:function(t,a){var i=e.getCartContents(t);if(e.isProductInCart(t,a)){var n=i[a];i[a]=n+1}else i[a]=1;e.setCartContents(t,i)}},{key:"decreaseQty",value:function(t,a){var i=e.getCartContents(t);if(e.isProductInCart(t,a)){var n=i[a];i[a]=n-1,0===i[a]&&delete i[a]}e.setCartContents(t,i)}},{key:"isProductInCart",value:function(t,a){var i=!1;return void 0!==e.getCartContents(t)[a]&&(i=!0),i}},{key:"getNumberOfProducts",value:function(t){var a=e.getCartContents(t),i=0;return Object.keys(a).forEach((function(e){i+=a[e]})),i}},{key:"getItemQuantity",value:function(t,a){var i=e.getCartContents(t),n=0;return e.isProductInCart(t,a)&&(n=i[a]),console.log("Qty for product "+a+": "+n),n}},{key:"getCartContents",value:function(e){var t=window.sessionStorage.getItem(e);return t=null==t?{}:JSON.parse(t)}},{key:"setCartContents",value:function(e,t){window.sessionStorage.setItem(e,JSON.stringify(t))}},{key:"resetList",value:function(e){window.sessionStorage.removeItem(e)}},{key:"notify",value:function(e){e.forEach((function(e){e.forceUpdate()}))}}]),e}(),y="cart-contents",C=function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,null,[{key:"addProduct",value:function(t){g.increaseQty(y,t),g.notify(e.LISTENERS)}},{key:"removeProduct",value:function(t){g.removeProduct(y,t),g.notify(e.LISTENERS)}},{key:"increaseQty",value:function(t){g.increaseQty(y,t),g.notify(e.LISTENERS)}},{key:"decreaseQty",value:function(t){g.decreaseQty(y,t),g.notify(e.LISTENERS)}},{key:"isProductInCart",value:function(e){return g.isProductInCart(y,e)}},{key:"getNumberOfProducts",value:function(){return g.getNumberOfProducts(y)}},{key:"getItemQuantity",value:function(e){return g.getItemQuantity(y,e)}},{key:"getCartContents",value:function(){return g.getCartContents(y)}},{key:"resetCart",value:function(){g.resetList(y),g.notify(e.LISTENERS)}},{key:"registerCartListener",value:function(t){e.LISTENERS.push(t)}}]),e}();C.LISTENERS=[];var k="wishlist-contents",S=function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,null,[{key:"addProduct",value:function(t){g.isProductInCart(k,t)||g.increaseQty(k,t),g.notify(e.LISTENERS)}},{key:"removeProduct",value:function(t){g.removeProduct(k,t),g.notify(e.LISTENERS)}},{key:"isProductInCart",value:function(e){return g.isProductInCart(k,e)}},{key:"getNumberOfProducts",value:function(){return g.getNumberOfProducts(k)}},{key:"getProducts",value:function(){return g.getCartContents(k)}},{key:"resetList",value:function(){g.resetList(k),g.notify(e.LISTENERS)}},{key:"registerCartListener",value:function(t){e.LISTENERS.push(t)}}]),e}();S.LISTENERS=[];var N=a(73),I=a(52),E=a(81),P=a(12),w=a(11),L=a(29),T=a(1),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state={product:b.ITEMS[e.id],itemInWishlist:S.isProductInCart(e.id),isWishlist:e.isWishlist},i.state.product.id=e.id,i}return Object(o.a)(a,[{key:"addToCart",value:function(){O.isProblemUser()&&this.state.product.id%2===1||C.addProduct(this.state.product.id)}},{key:"addToWishlist",value:function(){S.addProduct(this.state.product.id),this.setState({itemInWishlist:!0})}},{key:"removeFromWishlist",value:function(){S.removeProduct(this.state.product.id),this.setState({itemInWishlist:!1})}},{key:"render",value:function(){var e=this;L.addTheme("dark",{bg:"#969494",fg:"#ffffff",text:"Thumbnail"});var t="#/product/".concat(this.state.product.id),a=this.state.product.desc.substr(0,50),i=Object(T.jsx)(N.a,{variant:"link",bottom:"true",onClick:function(){return e.addToWishlist()},children:Object(T.jsx)(P.a,{icon:w.e,size:"2x",color:"#1551d1e3"})});return!0===this.state.itemInWishlist&&(i=Object(T.jsx)(N.a,{variant:"link",bottom:"true",onClick:function(){return e.removeFromWishlist()},children:Object(T.jsx)(P.a,{icon:w.f,size:"2x",color:"#1551d1e3"})})),Object(T.jsx)(I.a,{children:Object(T.jsxs)(E.a,{style:{marginBottom:"20px"},children:[Object(T.jsx)(E.a.Img,{top:"true",width:"100%","data-src":"holder.js/100px150?theme=dark&text="+this.state.product.name+" product photo",alt:this.state.product.name}),Object(T.jsxs)(E.a.Body,{className:"text-center",children:[Object(T.jsx)(E.a.Link,{href:t,children:this.state.product.name}),Object(T.jsx)(E.a.Text,{children:a})]}),Object(T.jsxs)(E.a.Footer,{className:"text-muted text-center",children:[Object(T.jsxs)(E.a.Text,{children:["$",Object(T.jsx)("span",{style:{fontWeight:"bold",fontSize:"16px"},children:this.state.product.price})]}),Object(T.jsx)(N.a,{variant:"link",onClick:function(){return e.addToCart()},children:Object(T.jsx)(P.a,{icon:w.c,size:"2x",color:"#3aa755e3"})}),i,Object(T.jsx)(E.a.Text,{children:Object(T.jsx)("small",{children:"in stock"})})]})]})})}}]),a}(n.a.Component),q=a(74),A=a(75),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state={title:e.page_title},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(T.jsx)(q.a,{children:Object(T.jsx)(A.a,{children:Object(T.jsxs)(I.a,{children:[Object(T.jsx)("div",{className:"subheader-container",children:Object(T.jsx)("h1",{children:Object(T.jsx)("small",{className:"text-muted",children:this.state.title})})}),Object(T.jsx)("hr",{})]})})})}}]),a}(n.a.Component),R=a(78),U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state={inventoryList:b.ITEMS_NAME_AZ,searchTerm:""},i.sortByOption=i.sortByOption.bind(Object(h.a)(i)),i.sortNameAZ=i.sortNameAZ.bind(Object(h.a)(i)),i.sortNameZA=i.sortNameZA.bind(Object(h.a)(i)),i.sortPriceLoHi=i.sortPriceLoHi.bind(Object(h.a)(i)),i.sortPriceHiLo=i.sortPriceHiLo.bind(Object(h.a)(i)),i}return Object(o.a)(a,[{key:"sortByOption",value:function(e){if(!O.isProblemUser())switch(e.target.value){case"az":default:this.setState({inventoryList:b.ITEMS_NAME_AZ});break;case"za":this.setState({inventoryList:b.ITEMS_NAME_ZA});break;case"hilo":this.setState({inventoryList:b.ITEMS_PRICE_HILO});break;case"lohi":this.setState({inventoryList:b.ITEMS_PRICE_LOHI})}}},{key:"sortNameAZ",value:function(){O.isProblemUser()&&this.setState({inventoryList:b.ITEMS_NAME_AZ})}},{key:"sortNameZA",value:function(){O.isProblemUser()&&this.setState({inventoryList:b.ITEMS_NAME_ZA})}},{key:"sortPriceLoHi",value:function(){O.isProblemUser()&&this.setState({inventoryList:b.ITEMS_PRICE_LOHI})}},{key:"sortPriceHiLo",value:function(){O.isProblemUser()&&this.setState({inventoryList:b.ITEMS_PRICE_HILO})}},{key:"updateSearchTerm",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"search",value:function(){var e=this.state.searchTerm;console.log("Searching by ".concat(this.state.searchTerm)),this.setState({inventoryList:b.ITEMS.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})}},{key:"render",value:function(){var e=this;return Object(T.jsxs)("div",{children:[Object(T.jsx)(M,{page_title:"Products"}),Object(T.jsxs)(q.a,{children:[Object(T.jsx)(A.a,{className:"justify-content-end",children:Object(T.jsxs)(R.a,{inline:!0,children:[Object(T.jsxs)(I.a,{md:"auto",children:[Object(T.jsx)(R.a.Control,{size:"sm",type:"text",placeholder:"Search",id:"input-search",className:"mr-auto",value:this.state.searchTerm,onChange:function(t){return e.updateSearchTerm(t)}}),Object(T.jsx)(N.a,{size:"sm",variant:"light",style:{marginLeft:"5px"},onClick:function(){return e.search()},children:"Search"})]}),Object(T.jsx)(I.a,{md:"auto",children:Object(T.jsxs)(R.a.Control,{className:"sort-products-select",size:"sm",as:"select",onChange:this.sortByOption,children:[Object(T.jsx)("option",{value:"az",onClick:this.sortNameAZ,children:"Sort by name (A to Z)"}),Object(T.jsx)("option",{value:"za",onClick:this.sortNameZA,children:"Sort by name (Z to A)"}),Object(T.jsx)("option",{value:"lohi",onClick:this.sortPriceLoHi,children:"Sort by price (low to high)"}),Object(T.jsx)("option",{value:"hilo",onClick:this.sortPriceHiLo,children:"Sort by price (high to low)"})]})})]})}),Object(T.jsx)(A.a,{xs:1,sm:2,md:2,lg:3,xl:4,children:this.state.inventoryList.map((function(e){return Object(T.jsx)(_,{id:e.id,isWishlist:!1},e.id)}))})]})]})}}]),a}(i.Component),W=a(76),Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;Object(c.a)(this,a);var n=(i=t.call(this,e)).props.match.params;return n.id>=0&&b.ITEMS.length>n.id?i.item=b.ITEMS[n.id]:i.item={name:"PRODUCT NOT FOUND",desc:"-",price:"-"},i.item.id=n.id,i.state={itemInWishlist:S.isProductInCart(i.item.id)},i}return Object(o.a)(a,[{key:"componentDidMount",value:function(){L.run({images:".product-image"})}},{key:"addToCart",value:function(){C.addProduct(this.item.id)}},{key:"addToWishlist",value:function(){S.addProduct(this.item.id),this.setState({itemInWishlist:!0})}},{key:"removeFromWishlist",value:function(){S.removeProduct(this.item.id),this.setState({itemInWishlist:!1})}},{key:"render",value:function(){var e=this,t=Object(T.jsx)(N.a,{variant:"link",bottom:"true",onClick:function(){return e.addToWishlist()},children:Object(T.jsx)(P.a,{icon:w.e,size:"3x",color:"#1551d1e3"})});return!0===this.state.itemInWishlist&&(t=Object(T.jsx)(N.a,{variant:"link",bottom:"true",onClick:function(){return e.removeFromWishlist()},children:Object(T.jsx)(P.a,{icon:w.f,size:"3x",color:"#1551d1e3"})})),Object(T.jsxs)("div",{children:[Object(T.jsx)(M,{page_title:this.item.name}),Object(T.jsx)(q.a,{children:Object(T.jsxs)(A.a,{children:[Object(T.jsx)(I.a,{className:"col col-lg-4",children:Object(T.jsx)(W.a,{className:"product-image","data-src":"holder.js/100px150?random=yes&text="+this.item.name+" product photo"})}),Object(T.jsx)(I.a,{children:Object(T.jsx)("p",{children:this.item.desc})}),Object(T.jsxs)(I.a,{className:"col col-lg-2 text-center",children:[Object(T.jsxs)("p",{style:{fontWeight:"bold",fontSize:"24px"},children:[this.item.price," EUR"]}),Object(T.jsx)(N.a,{variant:"link",onClick:function(){return e.addToCart()},children:Object(T.jsx)(P.a,{icon:w.c,size:"3x",color:"#3aa755e3"})}),t,Object(T.jsx)("p",{children:Object(T.jsx)("small",{children:"in stock"})})]})]})})]})}}]),a}(n.a.Component),H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(T.jsx)("div",{children:Object(T.jsx)(M,{page_title:"Help"})})}}]),a}(n.a.Component),z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state={username:"",password:"",error:""},i.listener=e.listener,i.handlePassChange=i.handlePassChange.bind(Object(h.a)(i)),i.handleUserChange=i.handleUserChange.bind(Object(h.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(h.a)(i)),i}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){return e.preventDefault(),this.state.username?this.state.password?O.verifyCredentials(this.state.username,this.state.password)?O.isLockedOutUser(this.state.username)?this.setState({error:"The user has been locked out."}):(window.location.href="#/products",this.listener.setModalShow(!1),""):this.setState({error:"Incorrect username or password!"}):this.setState({error:"Please fill in the password!"}):this.setState({error:"Please fill in the username!"})}},{key:"handleUserChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePassChange",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return Object(T.jsx)("div",{className:"login_wrapper",children:Object(T.jsx)("div",{children:Object(T.jsxs)(R.a,{onSubmit:this.handleSubmit,children:[this.state.error&&Object(T.jsxs)("p",{className:"error","data-test":"error",children:[Object(T.jsx)(P.a,{icon:w.d})," ",this.state.error]}),Object(T.jsx)(R.a.Control,{type:"text",className:"form_input","data-test":"username",id:"user-name",placeholder:"Username",value:this.state.username,onChange:this.handleUserChange,autoCorrect:"off",autoCapitalize:"none"}),Object(T.jsx)(R.a.Control,{type:"password",className:"form_input","data-test":"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.handlePassChange,autoCorrect:"off",autoCapitalize:"none"}),Object(T.jsxs)(N.a,{variant:"primary",type:"submit",children:[Object(T.jsx)(P.a,{icon:w.l})," Login"]})]})})})}}]),a}(i.Component),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(T.jsx)("div",{children:Object(T.jsx)(M,{page_title:"Whoops! Content not found!"})})}}]),a}(n.a.Component),F=a(80),V=a(79),Z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),i=t.call(this,e),C.registerCartListener(Object(h.a)(i)),i}return Object(o.a)(a,[{key:"render",value:function(){var e="",t=C.getNumberOfProducts();return t>0&&(e=Object(T.jsx)("span",{className:"fa-layers-counter shopping_cart_badge",children:t})),Object(T.jsxs)("a",{href:"#/cart",className:"shopping-cart-icon fa-layers fa-fw",children:[Object(T.jsx)(P.a,{icon:w.k}),e]})}}]),a}(i.Component),B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),i=t.call(this,e),S.registerCartListener(Object(h.a)(i)),i}return Object(o.a)(a,[{key:"render",value:function(){var e="",t=S.getNumberOfProducts();return t>0&&(e=Object(T.jsx)("span",{className:"fa-layers-counter shopping_cart_badge",children:t})),Object(T.jsxs)("a",{href:"#/wishlist",className:"shopping-cart-icon fa-layers fa-fw",children:[Object(T.jsx)(P.a,{icon:w.e}),e]})}}]),a}(i.Component),$=a(77),J=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).modalShow=!1,i}return Object(o.a)(a,[{key:"logout",value:function(){console.log("logout function"),O.resetSession(),this.forceUpdate()}},{key:"setModalShow",value:function(e){console.log("Modal show: "+e),this.modalShow=e,this.forceUpdate()}},{key:"render",value:function(){var e=this,t=O.getLoggedInUser(),a=Object(T.jsxs)("span",{children:["Hello guest! ",Object(T.jsx)(N.a,{variant:"link",onClick:function(){return e.setModalShow(!0)},children:Object(T.jsx)(P.a,{icon:w.l,color:"black"})})]}),i="";null!=t&&(i=Object(T.jsxs)("span",{children:["Hi ",Object(T.jsx)("a",{href:"#/account",children:t}),"!"]}),a=Object(T.jsx)(N.a,{variant:"link",onClick:function(){return e.logout()},children:Object(T.jsx)(P.a,{icon:w.m,color:"black"})}));var n=Object(T.jsxs)($.a,{show:this.modalShow,onHide:function(){return e.setModalShow(!1)},children:[Object(T.jsx)($.a.Header,{closeButton:!0,children:Object(T.jsx)($.a.Title,{children:Object(T.jsx)("small",{className:"text-muted",children:"Login"})})}),Object(T.jsx)(z,{listener:this})]});return Object(T.jsxs)("span",{children:[i,a,n]})}}]),a}(i.Component),G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(T.jsx)(q.a,{children:Object(T.jsxs)(F.a,{collapseOnSelect:!0,expand:"sm",bg:"light",variant:"light",sticky:"top",className:"justify-content-between",children:[Object(T.jsx)(F.a.Brand,{href:"".concat("https://adimoldovan.github.io/demo-shop","/"),children:Object(T.jsx)(P.a,{icon:w.j,size:"3x",className:"brand-logo"})}),Object(T.jsx)(F.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(T.jsxs)(F.a.Collapse,{id:"responsive-navbar-nav",children:[Object(T.jsx)(V.a,{className:"mr-auto"}),Object(T.jsx)(V.a,{children:Object(T.jsxs)(F.a.Text,{children:[Object(T.jsx)(Z,{}),Object(T.jsx)(B,{}),Object(T.jsx)(J,{})]})})]})]})})}}]),a}(n.a.Component),Y=a(54),K=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).modalShow=!1,i}return Object(o.a)(a,[{key:"resetAppState",value:function(){S.resetList(),C.resetCart(),O.resetSession(),window.location.reload(!0)}},{key:"setModalShow",value:function(e){this.modalShow=e,this.forceUpdate()}},{key:"render",value:function(){var e=this;return Object(T.jsxs)(q.a,{children:[Object(T.jsx)("hr",{}),Object(T.jsxs)(F.a,{sticky:"bottom",expand:"sm",bg:"light",variant:"light",children:[Object(T.jsx)(F.a,{children:Object(T.jsx)(V.a,{children:Object(T.jsx)(V.a.Item,{children:Object(T.jsxs)(V.a.Link,{href:"".concat("https://adimoldovan.github.io/demo-shop","/"),children:["Demo Shop | build date ",Y.buildDate]})})})}),Object(T.jsx)(F.a.Collapse,{className:"justify-content-end",children:Object(T.jsxs)(V.a,{className:"justify-content-end",children:[Object(T.jsx)(V.a.Item,{children:Object(T.jsx)(N.a,{onClick:function(){return e.setModalShow(!0)},variant:"link",bottom:"true",children:Object(T.jsx)(P.a,{icon:w.i,color:"#1551d1e3"})})}),Object(T.jsx)(V.a.Item,{children:Object(T.jsx)(N.a,{title:"Reset the application state",variant:"link",bottom:"true",onClick:function(){return e.resetAppState()},children:Object(T.jsx)(P.a,{icon:w.o,color:"#1551d1e3"})})})]})})]}),Object(T.jsxs)($.a,{show:this.modalShow,onHide:function(){return e.setModalShow(!1)},children:[Object(T.jsx)($.a.Header,{closeButton:!0,children:Object(T.jsx)($.a.Title,{children:Object(T.jsx)("small",{className:"text-muted",children:"Help"})})}),Object(T.jsxs)($.a.Body,{children:[Object(T.jsx)("h3",{children:"Valid usernames"}),Object(T.jsxs)("table",{className:"table",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"Username"}),Object(T.jsx)("th",{children:"Type"}),Object(T.jsx)("th",{children:"Password"})]})}),Object(T.jsxs)("tbody",{children:[Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"dino"}),Object(T.jsx)("td",{children:"normal user"}),Object(T.jsx)("td",{children:"choochoo"})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"beetle"}),Object(T.jsx)("td",{children:"user with bugs"}),Object(T.jsx)("td",{children:"choochoo"})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"turtle"}),Object(T.jsx)("td",{children:"slow user"}),Object(T.jsx)("td",{children:"choochoo"})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"locked"}),Object(T.jsx)("td",{children:"locked out user"}),Object(T.jsx)("td",{children:"choochoo"})]})]})]})]})]})]})}}]),a}(n.a.Component),X=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(T.jsx)("div",{children:Object(T.jsx)(M,{page_title:"Account"})})}}]),a}(n.a.Component),ee=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),i=t.call(this,e),S.registerCartListener(Object(h.a)(i)),i}return Object(o.a)(a,[{key:"render",value:function(){var e=S.getProducts();return Object(T.jsxs)("div",{children:[Object(T.jsx)(M,{page_title:"Wishlist"}),Object(T.jsxs)(q.a,{children:[Object(T.jsx)(A.a,{className:"justify-content-end"}),Object(T.jsx)(A.a,{xs:1,sm:2,md:2,lg:3,xl:4,children:Object.keys(e).map((function(e){return Object(T.jsx)(_,{id:e,isWishlist:!0},e)}))})]})]})}}]),a}(i.Component),te=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),i=t.call(this,e),C.registerCartListener(Object(h.a)(i)),i.item=e.item,i.state={itemVisible:!0},i.totalPrice=i.item.price,null==e.item&&(i.state.itemVisible=!1),i}return Object(o.a)(a,[{key:"removeFromCart",value:function(){C.removeProduct(this.item.id),this.setState({itemVisible:!1})}},{key:"increaseQty",value:function(){C.increaseQty(this.item.id)}},{key:"decreaseQty",value:function(){C.decreaseQty(this.item.id),C.getItemQuantity(this.item.id)<1&&this.setState({itemVisible:!1})}},{key:"calculateProductPrice",value:function(){return(this.item.price*C.getItemQuantity(this.item.id)).toFixed(2)}},{key:"render",value:function(){var e=this,t=C.getItemQuantity(this.item.id);if(this.totalPrice=this.calculateProductPrice(),this.state.itemVisible){var a=this.item.id;O.isProblemUser()&&(a+=1);var i="#product/".concat(a);return Object(T.jsx)(q.a,{children:Object(T.jsxs)(A.a,{style:{marginBottom:"10px",borderBottom:"1px solid #f5f5f5"},children:[Object(T.jsx)(I.a,{md:"auto",children:Object(T.jsxs)("div",{style:{width:"130px"},children:[Object(T.jsx)(N.a,{variant:"link",onClick:function(){return e.decreaseQty()},children:Object(T.jsx)(P.a,{icon:w.g,style:{color:"grey"}})}),t,Object(T.jsx)(N.a,{variant:"link",onClick:function(){return e.increaseQty()},children:Object(T.jsx)(P.a,{icon:w.h,style:{color:"grey"}})})]})}),Object(T.jsx)(I.a,{md:"auto",style:{marginTop:"7px"},children:Object(T.jsxs)("div",{style:{width:"100px"},children:["$",this.item.price]})}),Object(T.jsx)(I.a,{md:"auto",style:{marginTop:"7px"},children:Object(T.jsxs)("div",{style:{width:"100px"},children:["$",this.totalPrice]})}),Object(T.jsx)(I.a,{style:{marginTop:"7px"},children:Object(T.jsx)("a",{href:i,id:"item_".concat(this.item.id,"_title_link"),children:this.item.name})}),Object(T.jsx)(I.a,{md:"auto",children:Object(T.jsx)(N.a,{variant:"link",onClick:function(){return e.removeFromCart()},children:Object(T.jsx)(P.a,{icon:w.n})})})]})})}return Object(T.jsx)("div",{className:"removed_cart_item"})}}]),a}(i.Component),ae=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),i=t.call(this,e),C.registerCartListener(Object(h.a)(i)),i}return Object(o.a)(a,[{key:"render",value:function(){console.log("Render cart amount");var e=C.getCartContents(),t=0;for(var a in e){var i=b.ITEMS[a].price,n=e[a];t=parseFloat(t+i*n).toFixed(2)}var s=parseFloat(.05*t).toFixed(2);return Object(T.jsxs)("div",{style:{textAlign:"right",margin:"10px"},className:"d-flex justify-content-between",children:[Object(T.jsx)("div",{}),Object(T.jsx)("div",{children:Object(T.jsx)("table",{className:"text-right",children:Object(T.jsxs)("tbody",{children:[Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"Items total:"}),Object(T.jsxs)("td",{className:"amount",children:["$",t]})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"Tax:"}),Object(T.jsxs)("td",{className:"amount",children:["$",s]})]}),Object(T.jsxs)("tr",{className:"amount-total",children:[Object(T.jsx)("td",{children:"Total:"}),Object(T.jsxs)("td",{className:"amount",children:["$",t]})]})]})})})]})}}]),a}(i.Component),ie=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),i=t.call(this,e),C.registerCartListener(Object(h.a)(i)),i}return Object(o.a)(a,[{key:"render",value:function(){var e=C.getCartContents(),t=Object(T.jsxs)(q.a,{children:[Object(T.jsx)(A.a,{xs:1,sm:1,md:1,lg:1,xl:1,children:Object(T.jsx)(I.a,{children:Object.keys(e).map((function(e,t){return Object(T.jsx)(te,{item:b.ITEMS[e]},t)}))})}),Object(T.jsx)(ae,{}),Object(T.jsxs)("div",{style:{textAlign:"right",margin:"10px"},children:[Object(T.jsxs)(N.a,{style:{marginRight:"10px"},variant:"danger",href:"#/products",children:[Object(T.jsx)(P.a,{icon:w.a})," Continue Shopping"]}),Object(T.jsxs)(N.a,{variant:"success",href:"#/checkout-info",children:[Object(T.jsx)(P.a,{icon:w.b})," Checkout"]})]})]});return C.getNumberOfProducts()<1&&(t=Object(T.jsx)(q.a,{className:"text-center",children:"How about adding some products in your cart?"})),Object(T.jsxs)("div",{children:[Object(T.jsx)(M,{page_title:"Your cart"}),t]})}}]),a}(i.Component),ne=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state={firstName:"",lastName:"",postalCode:""},i.handleFirstNameChange=i.handleFirstNameChange.bind(Object(h.a)(i)),i.handleLastNameChange=i.handleLastNameChange.bind(Object(h.a)(i)),i.handlePostalCodeChange=i.handlePostalCodeChange.bind(Object(h.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(h.a)(i)),i.dismissError=i.dismissError.bind(Object(h.a)(i)),i}return Object(o.a)(a,[{key:"dismissError",value:function(){this.setState({error:""})}},{key:"handleFirstNameChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"handleLastNameChange",value:function(e){var t={lastName:e.target.value};O.isProblemUser()&&(t.firstName=e.target.value),this.setState(t)}},{key:"handlePostalCodeChange",value:function(e){this.setState({postalCode:e.target.value})}},{key:"handleSubmit",value:function(e){return e.preventDefault(),this.state.firstName?this.state.lastName?this.state.postalCode?(window.location.href="#/checkout-summary",""):this.setState({error:"Address is required"}):this.setState({error:"Last Name is required"}):this.setState({error:"First Name is required"})}},{key:"render",value:function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)(M,{page_title:"Your information"}),Object(T.jsx)(R.a,{onSubmit:this.handleSubmit,children:Object(T.jsxs)(q.a,{children:[Object(T.jsxs)(A.a,{className:"justify-content-between",children:[Object(T.jsxs)(I.a,{children:[Object(T.jsx)("div",{className:"section-title",children:"Address information"}),Object(T.jsxs)("div",{children:[this.state.error&&Object(T.jsxs)("p",{className:"error","data-test":"error",children:[Object(T.jsx)(P.a,{icon:w.d})," ",this.state.error]}),Object(T.jsx)(R.a.Control,{id:"first-name",type:"text",className:"form_input","data-test":"firstName",placeholder:"First Name",value:this.state.firstName,onChange:this.handleFirstNameChange,autoCorrect:"off",autoCapitalize:"none"}),Object(T.jsx)(R.a.Control,{id:"last-name",type:"text",className:"form_input","data-test":"lastName",placeholder:"Last Name",value:this.state.lastName,onChange:this.handleLastNameChange,autoCorrect:"off",autoCapitalize:"none"}),Object(T.jsx)(R.a.Control,{id:"address",as:"textarea",className:"form_input","data-test":"address",placeholder:"Address",value:this.state.postalCode,onChange:this.handlePostalCodeChange,autoCorrect:"off",autoCapitalize:"none"})]})]}),Object(T.jsxs)(I.a,{children:[Object(T.jsx)("div",{className:"section-title",children:"Delivery information"}),Object(T.jsx)("div",{children:Object(T.jsx)(R.a.Check,{type:"radio","data-test":"delivery-type",label:"Choo Choo delivery",checked:!0})}),Object(T.jsx)("div",{className:"section-title",children:"Payment information"}),Object(T.jsxs)("div",{children:[Object(T.jsx)(R.a.Check,{type:"radio","data-test":"payment-type",label:"Cash on delivery",checked:!0}),Object(T.jsx)(R.a.Check,{type:"radio","data-test":"payment-type",label:"Credit card",disabled:!0}),Object(T.jsx)(R.a.Check,{type:"radio","data-test":"payment-type",label:"PayPal",disabled:!0})]})]})]}),Object(T.jsxs)("div",{style:{textAlign:"right",margin:"10px"},children:[Object(T.jsxs)(N.a,{style:{marginRight:"10px"},variant:"danger",href:"#/cart",children:[Object(T.jsx)(P.a,{icon:w.a})," Cancel"]}),Object(T.jsxs)(N.a,{variant:"success",type:"submit",children:[Object(T.jsx)(P.a,{icon:w.b})," Continue checkout"]})]})]})})]})}}]),a}(i.Component),se=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)(M,{page_title:"Order summary"}),Object(T.jsxs)(q.a,{children:[Object(T.jsxs)(A.a,{children:[Object(T.jsxs)(I.a,{children:[Object(T.jsx)("div",{children:"Payment Information:"}),Object(T.jsx)("div",{children:"Cash on delivery"}),Object(T.jsx)("div",{children:"Shipping Information:"}),Object(T.jsx)("div",{children:"CHOO CHOO DELIVERY!"})]}),Object(T.jsx)(I.a,{children:Object(T.jsx)(ae,{})})]}),Object(T.jsxs)("div",{style:{textAlign:"right",margin:"10px"},children:[Object(T.jsxs)(N.a,{style:{marginRight:"10px"},variant:"danger",href:"#/cart",children:[Object(T.jsx)(P.a,{icon:w.a})," Cancel"]}),Object(T.jsxs)(N.a,{variant:"success",href:"#/checkout-complete",children:[Object(T.jsx)(P.a,{icon:w.b})," Complete your order"]})]})]})]})}}]),a}(i.Component),re=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return C.resetCart(),Object(T.jsxs)("div",{children:[Object(T.jsx)(M,{page_title:"Order complete"}),Object(T.jsxs)(q.a,{children:[Object(T.jsx)("div",{className:"text-center",children:"Thank you for your order!"}),Object(T.jsx)("div",{style:{textAlign:"right",margin:"10px"},children:Object(T.jsxs)(N.a,{variant:"success",href:"#/products",children:[Object(T.jsx)(P.a,{icon:w.b})," Continue shopping"]})})]})]})}}]),a}(n.a.Component),ce=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(T.jsxs)(q.a,{fluid:!0,children:[Object(T.jsx)(G,{}),Object(T.jsx)(d.a,{basename:"/demo-shop",children:Object(T.jsxs)(j.c,{children:[Object(T.jsx)(j.a,{exact:!0,path:"/",component:U}),Object(T.jsx)(j.a,{path:"/login",component:z}),Object(T.jsx)(j.a,{path:"/products",component:U}),Object(T.jsx)(j.a,{path:"/product/:id",component:Q}),Object(T.jsx)(j.a,{path:"/help",component:H}),Object(T.jsx)(j.a,{path:"/account",component:X}),Object(T.jsx)(j.a,{path:"/wishlist",component:ee}),Object(T.jsx)(j.a,{path:"/cart",component:ie}),Object(T.jsx)(j.a,{path:"/checkout-info",component:ne}),Object(T.jsx)(j.a,{path:"/checkout-summary",component:se}),Object(T.jsx)(j.a,{path:"/checkout-complete",component:re}),Object(T.jsx)(j.a,{component:D})]})}),Object(T.jsx)(K,{})]})}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(70);r.a.render(Object(T.jsx)(ce,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.5efd2050.chunk.js.map