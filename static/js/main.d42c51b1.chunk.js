(this["webpackJsonpdemo-shop"]=this["webpackJsonpdemo-shop"]||[]).push([[0],{43:function(e){e.exports=JSON.parse('[{"name":"Refined Frozen Mouse","desc":"Vero quia nesciunt laborum velit. Et in ipsum quia harum nihil aliquid officiis. Porro ea officia corporis.","price":9.99,"image_url":"0001.jpg"},{"name":"Awesome Granite Chips","desc":"Omnis excepturi laudantium et minima dignissimos exercitationem. Ut sed rerum fugit repellat. Libero ea reiciendis labore maxime illum consectetur quae alias impedit.","price":15.99,"image_url":"0002.jpg"},{"name":"Incredible Concrete Hat","desc":"Asperiores est error. Eum dicta totam. Aut minima laboriosam reiciendis enim unde voluptatem. Asperiores possimus nobis repellendus molestiae impedit. Eveniet corporis quasi qui quibusdam id repudiandae. Quas quis temporibus vitae hic.","price":7.99,"image_url":"0004.jpg"},{"name":"Awesome Metal Chair","desc":"Adipisci velit optio dolorem minima ex. Dolorem magni dignissimos nemo impedit. Aperiam consequatur nisi. Tempora consequatur sint soluta.","price":15.99,"image_url":"0005.jpg"},{"name":"Practical Wooden Bacon","desc":"Qui veniam laboriosam quia sequi ab. Dolorem eveniet est eveniet. Et quia eius ipsam blanditiis ea voluptatibus. Sequi doloremque inventore autem. Voluptatum est ipsam magnam officiis voluptatum quae quas rem. Odio non aliquam aut autem at omnis in aut ut.","price":29.99,"image_url":"0006.jpg"}]')},44:function(e,t,a){e.exports=a.p+"static/media/cart-2.a0e76b8e.svg"},55:function(e,t,a){e.exports=a(71)},60:function(e,t,a){},61:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),s=a.n(i),o=a(6),c=a(7),l=a(9),m=a(8),u=(a(60),a(49)),d=a(19),h=a(14),p=a(43),v=function e(){Object(o.a)(this,e)};(v.ITEMS=p).map((function(e,t){e.id=t})),v.ITEMS_NAME_AZ=v.ITEMS.slice().sort((function(e,t){return e.name.localeCompare(t.name)})),v.ITEMS_NAME_ZA=v.ITEMS_NAME_AZ.slice().reverse(),v.ITEMS_PRICE_LOHI=v.ITEMS.slice().sort((function(e,t){return e.price-t.price})),v.ITEMS_PRICE_HILO=v.ITEMS_PRICE_LOHI.slice().reverse();var E=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"verifyCredentials",value:function(t,a){return a===e.VALID_PASSWORD&&(!(e.VALID_USERNAMES.indexOf(t)<0)&&(window.sessionStorage.setItem("session-username",t),!0))}},{key:"isLockedOutUser",value:function(){return"locked_out_user"===window.sessionStorage.getItem("session-username")}},{key:"isProblemUser",value:function(){return"problem_user"===window.sessionStorage.getItem("session-username")}},{key:"isPerformanceGlitchUser",value:function(){return"performance_glitch_user"===window.sessionStorage.getItem("session-username")}}]),e}();E.VALID_USERNAMES=["standard_user","locked_out_user","problem_user","performance_glitch_user"],E.VALID_PASSWORD="secret_sauce";var b=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"addItem",value:function(t){var a=e.getCartContents();a.indexOf(t)<0&&(a.push(t),e.setCartContents(a))}},{key:"removeItem",value:function(t){var a=e.getCartContents(),n=a.indexOf(t);n>=0&&(a.splice(n,1),e.setCartContents(a))}},{key:"isItemInCart",value:function(t){return e.getCartContents().indexOf(t)>=0}},{key:"getCartContents",value:function(){var e=window.sessionStorage.getItem("cart-contents");return e=null==e?[]:JSON.parse(e)}},{key:"setCartContents",value:function(t){window.sessionStorage.setItem("cart-contents",JSON.stringify(t)),e.LISTENERS.forEach((function(e){e.forceUpdate()}))}},{key:"resetCart",value:function(){window.sessionStorage.removeItem("cart-contents"),e.LISTENERS.forEach((function(e){e.forceUpdate()}))}},{key:"registerCartListener",value:function(t){e.LISTENERS.push(t)}}]),e}();b.LISTENERS=[];var f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={id:e.id,image_url:e.image_url,name:e.name,desc:e.desc,price:e.price,itemInCart:b.isItemInCart(e.id)},E.isProblemUser()&&(n.state.image_url="".concat(n.state.image_url,"WithGarbageOnItToBreakTheUrl")),n}return Object(c.a)(a,[{key:"addToCart",value:function(e){E.isProblemUser()&&e%2===1||(b.addItem(e),this.setState({itemInCart:!0}),console.log(b.getCartContents()))}},{key:"removeFromCart",value:function(e){E.isProblemUser()&&e%2===0||(b.removeItem(e),this.setState({itemInCart:!1}),console.log(b.getCartContents()))}},{key:"render",value:function(){var e=this,t=this.state.id;E.isProblemUser()&&(t+=1);var a="./product/".concat(t),n="./../img/products/".concat(this.state.image_url);return r.a.createElement("div",{className:"inventory_item"},r.a.createElement("div",{className:"inventory_item_img"},r.a.createElement("a",{href:a,id:"item_".concat(this.state.id,"_img_link")},r.a.createElement("img",{className:"inventory_item_img",src:n,alt:this.state.name}))),r.a.createElement("div",{className:"inventory_item_label"},r.a.createElement("a",{href:a,id:"item_".concat(this.state.id,"_title_link")},r.a.createElement("div",{className:"inventory_item_name"},this.state.name)),r.a.createElement("div",{className:"inventory_item_desc"},this.state.desc)),r.a.createElement("div",{className:"pricebar"},r.a.createElement("div",{className:"inventory_item_price"},"$",this.state.price),r.a.createElement("button",{className:"btn_primary btn_inventory",onClick:function(){return e.addToCart(e.state.id)}},"ADD TO CART")))}}]),a}(r.a.Component),_=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={inventoryList:v.ITEMS_NAME_AZ},n.sortByOption=n.sortByOption.bind(Object(h.a)(n)),n.sortNameAZ=n.sortNameAZ.bind(Object(h.a)(n)),n.sortNameZA=n.sortNameZA.bind(Object(h.a)(n)),n.sortPriceLoHi=n.sortPriceLoHi.bind(Object(h.a)(n)),n.sortPriceHiLo=n.sortPriceHiLo.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"sortByOption",value:function(e){if(console.log(e),!E.isProblemUser())switch(e.target.value){case"az":this.setState({inventoryList:v.ITEMS_NAME_AZ});break;case"za":this.setState({inventoryList:v.ITEMS_NAME_ZA});break;case"hilo":this.setState({inventoryList:v.ITEMS_PRICE_HILO});break;case"lohi":this.setState({inventoryList:v.ITEMS_PRICE_LOHI})}}},{key:"sortNameAZ",value:function(){E.isProblemUser()&&this.setState({inventoryList:v.ITEMS_NAME_AZ})}},{key:"sortNameZA",value:function(){E.isProblemUser()&&this.setState({inventoryList:v.ITEMS_NAME_ZA})}},{key:"sortPriceLoHi",value:function(){E.isProblemUser()&&this.setState({inventoryList:v.ITEMS_PRICE_LOHI})}},{key:"sortPriceHiLo",value:function(){E.isProblemUser()&&this.setState({inventoryList:v.ITEMS_PRICE_HILO})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header_secondary_container"},r.a.createElement("div",{id:"searchbox_container"}),r.a.createElement("div",{id:"inventory_filter_container"},r.a.createElement("div",{className:"product_label"},"Products"),r.a.createElement("select",{onChange:this.sortByOption,className:"product_sort_container"},r.a.createElement("option",{value:"az",onClick:this.sortNameAZ},"Name (A to Z)"),r.a.createElement("option",{value:"za",onClick:this.sortNameZA},"Name (Z to A)"),r.a.createElement("option",{value:"lohi",onClick:this.sortPriceLoHi},"Price (low to high)"),r.a.createElement("option",{value:"hilo",onClick:this.sortPriceHiLo},"Price (high to low)")))),r.a.createElement("div",{id:"inventory_container",className:"inventory_container"},r.a.createElement("div",{className:"inventory_list"},this.state.inventoryList.map((function(e,t){return r.a.createElement(f,{key:e.id,id:e.id,image_url:e.image_url,name:e.name,desc:e.desc,price:e.price})})))))}}]),a}(n.Component),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(o.a)(this,a);var r;return(r=(n=t.call(this,e)).props.match.params.id)>=0&&v.ITEMS.length>r?n.item=v.ITEMS[r]:n.item={name:"PRODUCT NOT FOUND",desc:"",image_url:"./img/product-not-found.jpg",price:""},n.item.id=r,n.state={itemInCart:b.isItemInCart(r)},n}return Object(c.a)(a,[{key:"goBack",value:function(){window.history.back()}},{key:"addToCart",value:function(e){E.isProblemUser()&&e%2===1||(b.addItem(e),this.setState({itemInCart:!0}),console.log(b.getCartContents()))}},{key:"removeFromCart",value:function(e){E.isProblemUser()&&e%2===0||(b.removeItem(e),this.setState({itemInCart:!1}),console.log(b.getCartContents()))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inventory_details"},r.a.createElement("button",{className:"inventory_details_back_button",onClick:this.goBack},"<- Back"),r.a.createElement("div",{className:"inventory_details_container"},r.a.createElement("img",{className:"inventory_details_img",src:this.item.image_url,alt:this.item.name}),r.a.createElement("div",{className:"inventory_details_desc_container"},r.a.createElement("div",{className:"inventory_details_name"},this.item.name),r.a.createElement("div",{className:"inventory_details_desc"},this.item.desc),r.a.createElement("div",{className:"inventory_details_price"},"$",this.item.price),r.a.createElement("button",{className:"btn_primary btn_inventory",onClick:function(){return e.addToCart(e.item.id)}},"ADD TO CART"))))}}]),a}(r.a.Component),y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Contact")}}]),a}(r.a.Component),C=(a(61),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",error:""},n.handlePassChange=n.handlePassChange.bind(Object(h.a)(n)),n.handleUserChange=n.handleUserChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){return e.preventDefault(),this.state.username?this.state.password?E.verifyCredentials(this.state.username,this.state.password)?E.isLockedOutUser()?this.setState({error:"The user has been locked out."}):(window.location.href="./products",""):this.setState({error:"Incorrect username or password!"}):this.setState({error:"Please fill in the password!"}):this.setState({error:"Please fill in the username!"})}},{key:"handleUserChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePassChange",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"login_wrapper"},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},this.state.error&&r.a.createElement("p",{class:"error","data-test":"error"},this.state.error),r.a.createElement("input",{type:"text",className:"form_input","data-test":"username",id:"user-name",placeholder:"Username",value:this.state.username,onChange:this.handleUserChange,autoCorrect:"off",autoCapitalize:"none"}),r.a.createElement("input",{type:"password",className:"form_input","data-test":"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.handlePassChange,autoCorrect:"off",autoCapitalize:"none"}),r.a.createElement("input",{type:"submit",className:"btn_action",value:"LOGIN"}))))}}]),a}(n.Component)),O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Uups! Page not found!")}}]),a}(r.a.Component),I=a(77),S=a(78),k=a(76),N=a(44),j=a.n(N),w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(I.a,{collapseOnSelect:!0,expand:"sm",bg:"light",variant:"light",sticky:"top"},r.a.createElement(I.a.Brand,{href:"".concat("/demo-shop","/")},"Demo Shop"),r.a.createElement(I.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(I.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(S.a,{className:"mr-auto"}),r.a.createElement(S.a,null,r.a.createElement(S.a.Link,{href:"/cart"},r.a.createElement("img",{src:j.a,width:"20",height:"20",className:"d-inline-block align-top",alt:"Cart"})),r.a.createElement(k.a,{title:"Me",id:"collasible-nav-dropdown",drop:"left"},r.a.createElement(k.a.Item,{href:"".concat("/demo-shop","/account")},"My account"),r.a.createElement(k.a.Item,{href:"".concat("/demo-shop","/wishlist")},"Wishlist"),r.a.createElement(k.a.Divider,null),r.a.createElement(k.a.Item,{href:"/logout"},"Logout")))))}}]),a}(r.a.Component),A=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(I.a,{sticky:"bottom"},"Footer")}}]),a}(r.a.Component),P=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(u.a,{basename:"/demo-shop"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:_}),r.a.createElement(d.a,{path:"/login",component:C}),r.a.createElement(d.a,{path:"/products",component:_}),r.a.createElement(d.a,{path:"/product/:id",component:g}),r.a.createElement(d.a,{path:"/contact",component:y}),r.a.createElement(d.a,{component:O}))),r.a.createElement(A,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(70);s.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.d42c51b1.chunk.js.map