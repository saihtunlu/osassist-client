(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6dfdd8e"],{"13d5":function(t,e,a){"use strict";var s=a("23e7"),i=a("d58f").left,r=a("a640"),n=a("ae40"),o=r("reduce"),l=n("reduce",{1:0});s({target:"Array",proto:!0,forced:!o||!l},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},7873:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-3"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"row"},[a("div",{staticClass:"col-12 flex-x-between mb-3"},[a("div",{staticClass:"flex-align-center"},[a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"no-width my-0 flat",attrs:{type:"primary",circle:""},on:{click:function(e){return t.$router.go(-1)}}},[a("i",{staticClass:"bx bx-left-arrow-alt"})]),a("h5",{staticClass:"my-0 ml-2"},[t._v("Add import")])],1),a("div",{staticClass:"flex-align-center flex-end"},[a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"flat my-0",attrs:{type:"primary"},on:{click:function(e){return t.$router.go(-1)}}},[a("i",{staticClass:"bx bx-x mr-1"}),t._v("Discard ")]),a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"my-0",attrs:{disabled:!t.startEditing,loading:t.saving,type:"primary"},on:{click:t.Post}},[a("i",{staticClass:"bx bx-save mr-1"}),t._v("Save ")])],1)]),a("div",{staticClass:"col-lg-8 pr-lg-0"},[a("div",{staticClass:"box"},[a("div",{staticClass:"flex-x-between"},[a("p",{staticClass:"mt-0 mb-2 text-bold"},[t._v(" ("+t._s(t.order.products.length)+")Items ")]),a("div",{staticClass:"d-flex align-items-center"},[a("p",{staticClass:"mt-0 pointer primary hover-underline",on:{click:t.addItem}},[a("i",{staticClass:"bx bx-plus mr-1"}),t._v("Add item ")])])]),a("div",{staticClass:"row"},[t.order.products.length>0?a("div",{staticClass:"col-12"},[a("el-collapse",t._l(t.order.products,(function(e,s){return a("el-collapse-item",{key:s,attrs:{name:s}},[a("template",{slot:"title"},[a("div",{staticClass:"flex-x-between w-100 collapse-header"},[a("p",[t._v(t._s(e.name)+" - "+t._s(e.subtotal)+"Ks")]),a("p",{staticClass:"danger hover-underline",staticStyle:{"margin-right":"8px","z-index":"10",display:"none"},on:{click:function(e){return t.removeProduct(s)}}},[a("i",{staticClass:"bx bx-x"})])])]),a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-12 mb-3"},[a("label",{staticClass:"custom-label",attrs:{for:"Media"}},[t._v("Media")]),a("file",{key:s+e.name,attrs:{initialData:e.image?[{image:e.image}]:[]},on:{completed:function(e){return t.setImage(e,s)}}})],1),e.sale?a("div",{staticClass:"col-12 flex-align-center mb-3"},[a("div",[a("label",{staticClass:"custom-label",attrs:{for:"Name"}},[t._v("Customer")]),a("p",{staticClass:"primary pointer hover-underline",on:{click:function(a){return t.$router.push({name:"Edit order",params:{id:e.sale}})}}},[t._v(" "+t._s(e.customer_name)+" ")])])]):t._e(),a("div",{staticClass:"col-6 mb-3"},[a("label",{staticClass:"custom-label",attrs:{for:"Name"}},[t._v("Name")]),a("el-input",{staticClass:"w-100",attrs:{name:"Name"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"product.name"}})],1),a("div",{staticClass:"col-6 mb-3"},[a("label",{staticClass:"custom-label",attrs:{for:"Link"}},[t._v("Link")]),a("el-input",{staticClass:"w-100",attrs:{name:"Link"},model:{value:e.link,callback:function(a){t.$set(e,"link",a)},expression:"product.link"}})],1),a("div",{staticClass:"col-6"},[a("label",{staticClass:"custom-label",attrs:{for:"Link"}},[t._v("Quantity")]),a("el-input-number",{staticClass:"w-100",attrs:{min:0,"controls-position":"right"},on:{change:function(e){return t.changeQuantity(s)}},model:{value:e.quantity,callback:function(a){t.$set(e,"quantity",a)},expression:"product.quantity"}})],1),a("div",{staticClass:"col-6"},[a("label",{staticClass:"custom-label",attrs:{for:"Link"}},[t._v("Price")]),a("el-input",{staticClass:"w-100",attrs:{type:"number"},on:{change:function(e){return t.changeQuantity(s)}},model:{value:e.price,callback:function(a){t.$set(e,"price",a)},expression:"product.price"}})],1)])],2)})),1)],1):a("el-empty",{staticClass:"w-100",attrs:{description:"No item found!"},scopedSlots:t._u([{key:"image",fn:function(){return[a("empty")]},proxy:!0}])})],1)]),a("div",{staticClass:"box mt-base"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("p",{staticClass:"mt-0 mb-2 text-bold"},[t._v("Pricing")]),a("div",{staticClass:"flex-x-between"},[a("p",{},[t._v("Total")]),a("p",{},[t._v(" "+t._s(0===parseInt(t.order.total)?"-":t.order.total)+" ")])])])])])]),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"box"},[a("p",{staticClass:"mt-0 mb-2 text-bold"},[t._v("Organization")]),a("label",{staticClass:"custom-label md-text",attrs:{for:""}},[t._v("Date of order(sync from date)")]),a("el-date-picker",{staticClass:"w-100 mb-3",attrs:{type:"date",format:"dd/MM/yyyy","value-format":"dd/MM/yyyy",placeholder:"Pick a date"},on:{change:t.changeDate},model:{value:t.order.date,callback:function(e){t.$set(t.order,"date",e)},expression:"order.date"}}),a("label",{staticClass:"custom-label md-text",attrs:{for:""}},[t._v("Supplier")]),a("el-select",{staticClass:"w-100 mb-3",attrs:{filterable:"",remote:"","allow-create":"","reserve-keyword":"",placeholder:"Select or create new","remote-method":t.getSuppliers,loading:t.loadingSupplier},on:{change:t.changeSupplier},model:{value:t.order.supplier_name,callback:function(e){t.$set(t.order,"supplier_name",e)},expression:"order.supplier_name"}},t._l(t.suppliers,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})})),1),a("label",{staticClass:"custom-label mb-0"},[t._v("Note")]),a("el-input",{attrs:{type:"textarea",placeholder:"Text such as facebook profile link, etc.",row:5},model:{value:t.order.note,callback:function(e){t.$set(t.order,"note",e)},expression:"order.note"}})],1)])])])])},i=[],r=(a("4de4"),a("4160"),a("13d5"),a("a434"),a("b0c0"),a("9911"),a("159b"),a("5530")),n=a("2f62"),o=a("9c83"),l=a("d50a"),c={data:function(){return{url:o["c"],openCustomProduct:!1,mediaUrl:o["b"],suppliers:[],loadingSupplier:!1,selectedSupplier:{},saving:!1,order:{supplier_name:"Default Supplier",products:[],total:"0",note:""},loading:!1,startEditing:!1,query:""}},components:{file:l["d"],empty:l["c"]},watch:{order:{handler:function(){this.startEditing=!0},deep:!0}},mounted:function(){var t=this;setTimeout((function(){t.startEditing=!1}),100),this.$store.commit("setIsReady",!0)},beforeMount:function(){var t=this;window.addEventListener("beforeunload",this.preventNav),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("beforeunload",t.preventNav)}))},beforeRouteLeave:function(t,e,a){this.startEditing?this.$smalltalk.confirm("Question","Do you really want to leave? you have unsaved changes!").then((function(){a()})).catch((function(){a(!1)})):a()},methods:{preventNav:function(t){this.startEditing&&(t.preventDefault(),t.returnValue="")},setImage:function(t,e){t.length>0&&(this.order.products[e].image=t[0].image)},addItem:function(){this.order.products.push({name:"",quantity:"1",price:"0",image:"/media/default.png",subtotal:"0",link:""}),this.calcTotal()},removeProduct:function(t){this.order.products.splice(t,1),this.calcTotal()},changeDate:function(){var t=this;this.loading=!0,this.$axios.get("order-products/?date="+this.order.date).then((function(e){t.loading=!1;var a=[];e.data.forEach((function(t){a.push({name:t.name,quantity:t.quantity,price:t.primary_price,image:t.image,subtotal:parseFloat(t.primary_price)*parseFloat(t.quantity),link:t.link,sale:t.sale,customer_name:t.customer_name})})),t.order.products=a,t.calcTotal()})).catch((function(e){t.loading=!1,t.$noti.display({message:e,title:"",status:"error",color:"error"})}))},getSuppliers:function(t){var e=this;this.loadingSupplier=!0,""!==t&&t||(t="Null"),this.$axios.get("search-suppliers/?query="+t).then((function(t){e.loadingSupplier=!1,e.suppliers=t.data})).catch((function(t){e.loadingSupplier=!1,e.$noti.display({message:t,title:"",status:"error",color:"error"})}))},changeSupplier:function(){var t=this,e=this.suppliers.filter((function(e){return e.name==t.order.supplier_name}));e.length>0&&(this.selectedSupplier=e[0])},calcTotal:function(){this.order.total=this.order.products.reduce((function(t,e){return t+parseInt(e.subtotal)}),0)},changeQuantity:function(t){this.order.products[t].subtotal=parseInt(this.order.products[t].price)*parseInt(this.order.products[t].quantity),this.calcTotal()},Post:function(){var t=this;this.saving=!0,this.order.store=this.store.id,this.$axios.post("order/",{data:this.order}).then((function(e){t.startEditing=!1,t.saving=!1,t.$noti.display({title:"Success",color:"success",message:"Cool! order has been successfully added."}),t.$router.push({name:"Edit import",params:{id:e.data.id}})})).catch((function(e){t.saving=!1,t.$noti.display({message:e,title:"",status:"error",color:"error"})}))}},computed:Object(r["a"])({},Object(n["c"])(["isReady","store"]))},u=c,d=a("2877"),p=Object(d["a"])(u,s,i,!1,null,null,null);e["default"]=p.exports},"857a":function(t,e,a){var s=a("1d80"),i=/"/g;t.exports=function(t,e,a,r){var n=String(s(t)),o="<"+e;return""!==a&&(o+=" "+a+'="'+String(r).replace(i,"&quot;")+'"'),o+">"+n+"</"+e+">"}},9911:function(t,e,a){"use strict";var s=a("23e7"),i=a("857a"),r=a("af03");s({target:"String",proto:!0,forced:r("link")},{link:function(t){return i(this,"a","href",t)}})},af03:function(t,e,a){var s=a("d039");t.exports=function(t){return s((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},d58f:function(t,e,a){var s=a("1c0b"),i=a("7b0b"),r=a("44ad"),n=a("50c4"),o=function(t){return function(e,a,o,l){s(a);var c=i(e),u=r(c),d=n(c.length),p=t?d-1:0,m=t?-1:1;if(o<2)while(1){if(p in u){l=u[p],p+=m;break}if(p+=m,t?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:d>p;p+=m)p in u&&(l=a(l,u[p],p,c));return l}};t.exports={left:o(!1),right:o(!0)}}}]);
//# sourceMappingURL=chunk-b6dfdd8e.77808b0e.js.map