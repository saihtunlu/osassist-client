(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fbf720c"],{1148:function(a,e,l){"use strict";var t=l("a691"),s=l("1d80");a.exports="".repeat||function(a){var e=String(s(this)),l="",n=t(a);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(l+=e);return l}},"13d5":function(a,e,l){"use strict";var t=l("23e7"),s=l("d58f").left,n=l("a640"),i=l("ae40"),o=n("reduce"),r=i("reduce",{1:0});t({target:"Array",proto:!0,forced:!o||!r},{reduce:function(a){return s(this,a,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"408a":function(a,e,l){var t=l("c6b6");a.exports=function(a){if("number"!=typeof a&&"Number"!=t(a))throw TypeError("Incorrect invocation");return+a}},"48c0":function(a,e,l){"use strict";l.r(e);var t=function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-12 mt-3"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12 flex-x-between mb-3"},[l("div",{staticClass:"flex-align-center"},[l("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"no-width my-0 flat",attrs:{type:"primary",circle:""},on:{click:function(e){return a.$router.go(-1)}}},[l("i",{staticClass:"bx bx-left-arrow-alt"})]),l("h5",{staticClass:"my-0 ml-2"},[a._v("Add order")])],1),l("div",{staticClass:"flex-align-center flex-end"},[l("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"flat my-0",attrs:{type:"primary"},on:{click:function(e){return a.$router.go(-1)}}},[l("i",{staticClass:"bx bx-x mr-1"}),a._v("Discard ")]),l("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"my-0",attrs:{disabled:!a.startEditing,loading:a.saving,type:"primary"},on:{click:a.Post}},[l("i",{staticClass:"bx bx-save mr-1"}),a._v("Save ")])],1)]),l("div",{staticClass:"col-lg-8 pr-lg-0"},[l("div",{staticClass:"box"},[l("div",{staticClass:"flex-x-between"},[l("p",{staticClass:"mt-0 mb-2 text-bold"},[a._v("Items")]),l("div",{staticClass:"d-flex align-items-center"},[l("p",{staticClass:"mt-0 pointer primary hover-underline",on:{click:a.addItem}},[l("i",{staticClass:"bx bx-plus mr-1"}),a._v("Add item ")])])]),l("div",{staticClass:"row"},[a.sale.products.length>0?l("div",{staticClass:"col-12"},[l("el-collapse",a._l(a.sale.products,(function(e,t){return l("el-collapse-item",{key:t,attrs:{name:t}},[l("template",{slot:"title"},[l("div",{staticClass:"flex-x-between w-100 collapse-header"},[l("p",[a._v(a._s(e.name)+" - "+a._s(e.subtotal)+"Ks")]),l("p",{staticClass:"danger hover-underline",staticStyle:{"margin-right":"8px","z-index":"10",display:"none"},on:{click:function(e){return a.removeProduct(t)}}},[l("i",{staticClass:"bx bx-x"})])])]),l("div",{staticClass:"row mb-3"},[l("div",{staticClass:"col-12 mb-3"},[l("label",{staticClass:"custom-label",attrs:{for:"Media"}},[a._v("Media")]),l("file",{key:t+e.name,attrs:{initialData:e.image?[{image:e.image}]:[]},on:{completed:function(e){return a.setImage(e,t)}}})],1),l("div",{staticClass:"col-12 mb-3"},[l("label",{staticClass:"custom-label",attrs:{for:"Name"}},[a._v("Name")]),l("el-input",{staticClass:"w-100",attrs:{name:"Name"},model:{value:e.name,callback:function(l){a.$set(e,"name",l)},expression:"product.name"}})],1),"supplier"!==a.store.type?l("div",{staticClass:"col-lg-6 mb-3"},[l("label",{staticClass:"custom-label",attrs:{for:"Link"}},[a._v("Capital price(MMK)")]),l("el-input",{staticClass:"w-100",attrs:{name:"Capital price(MMK)",type:"number"},on:{change:function(e){return a.calcPrice(t)}},model:{value:e.primary_price_myanmar,callback:function(l){a.$set(e,"primary_price_myanmar",l)},expression:"product.primary_price_myanmar"}})],1):a._e(),"supplier"!==a.store.type?l("div",{staticClass:"col-lg-6 mb-3"},[l("label",{staticClass:"custom-label",attrs:{for:"Link"}},[a._v("Selling Price(MMK)")]),l("el-input",{staticClass:"w-100",attrs:{name:"Sale Price(MMK)",type:"number"},on:{change:function(e){return a.calcPrice(t)}},model:{value:e.sale_price,callback:function(l){a.$set(e,"sale_price",l)},expression:"product.sale_price"}})],1):a._e(),l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-6"},[l("label",{staticClass:"custom-label",attrs:{for:"Link"}},[a._v("Quantity")]),l("el-input-number",{staticClass:"w-100",attrs:{min:0,"controls-position":"right"},on:{change:function(e){return a.changeQuantity(t)}},model:{value:e.quantity,callback:function(l){a.$set(e,"quantity",l)},expression:"product.quantity"}})],1),l("div",{staticClass:"col-6"},[l("label",{staticClass:"custom-label",attrs:{for:"Link"}},[a._v("Fulfilled")]),l("el-input-number",{staticClass:"w-100",attrs:{min:0,"controls-position":"right"},on:{change:function(e){return a.checkFulfill()}},model:{value:e.number_of_fullfilled,callback:function(l){a.$set(e,"number_of_fullfilled",l)},expression:"product.number_of_fullfilled"}})],1)])]),"supplier"==a.store.type?l("div",{staticClass:"col-lg-6 mb-3"},[l("label",{staticClass:"custom-label",attrs:{for:"Link"}},[a._v("Price")]),l("el-input",{staticClass:"w-100",attrs:{name:"Price",type:"number"},on:{change:function(e){return a.calcPrice(t)}},model:{value:e.sale_price,callback:function(l){a.$set(e,"sale_price",l)},expression:"product.sale_price"}})],1):a._e(),"supplier"!==a.store.type?l("div",{staticClass:"\n                        d-flex\n                        justify-content-around\n                        col-lg-6\n                        align-items-center\n                      "},[l("div",{staticClass:"\n                          d-flex\n                          justify-content-center\n                          align-items-center\n                          flex-column\n                        "},[l("p",{staticClass:"md-text"},[a._v("Margin")]),l("p",{staticClass:"mt-2"},[a._v(" "+a._s(e.margin?e.margin+"%":"-")+" ")])]),l("div",{staticClass:"\n                          d-flex\n                          justify-content-center\n                          align-items-center\n                          flex-column\n                        "},[l("p",{staticClass:"md-text"},[a._v("Profit(MMK)")]),l("p",{staticClass:"mt-2"},[a._v(" "+a._s(e.profit?e.profit:"-")+" ")])])]):a._e()])],2)})),1)],1):l("el-empty",{staticClass:"w-100",attrs:{description:"No item found!"},scopedSlots:a._u([{key:"image",fn:function(){return[l("empty")]},proxy:!0}])})],1)]),l("div",{staticClass:"box mt-3 mb-3"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("p",{staticClass:"mt-0 mb-2 text-bold"},[a._v("Pricing")]),l("div",{staticClass:"flex-x-between"},[l("p",{staticClass:"primary hover-underline pointer",on:{click:function(e){a.openDiscount=!a.openDiscount}}},[a._v(" Add discount ")]),l("p",{staticClass:"text-right"},[a._v(" "+a._s(0===parseFloat(a.sale.discount)?"-":"-"+a.sale.discount+"MMK")+" "),a.sale.discount_reason?l("span",{staticClass:"sm-text"},[l("br"),a._v(" "+a._s(a.sale.discount_reason)+" ")]):a._e()])]),l("el-divider"),l("div",{staticClass:"flex-x-between"},[l("p",{},[a._v("Subtotal")]),l("p",[a._v(" "+a._s(0===parseFloat(a.sale.subtotal)?"-":a.sale.subtotal+"MMK")+" ")])]),l("el-divider"),l("div",{staticClass:"flex-x-between"},[l("p",{},[a._v("Total")]),l("p",{},[a._v(" "+a._s(0===parseFloat(a.sale.total)?"-":a.sale.total+"MMK")+" ")])])],1)])])]),l("div",{staticClass:"col-lg-4"},[l("div",{staticClass:"box"},[l("label",{staticClass:"custom-label md-text",attrs:{for:""}},[a._v("Date of order")]),l("el-date-picker",{staticClass:"w-100 mb-3",attrs:{type:"date",format:"dd/MM/yyyy","value-format":"dd/MM/yyyy",placeholder:"Pick a date"},model:{value:a.sale.date,callback:function(e){a.$set(a.sale,"date",e)},expression:"sale.date"}}),l("label",{staticClass:"custom-label mt-3 mb-0"},[a._v("Note")]),l("el-input",{attrs:{type:"textarea",placeholder:"Text such as facebook profile link, etc.",row:5},model:{value:a.sale.note,callback:function(e){a.$set(a.sale,"note",e)},expression:"sale.note"}})],1),"supplier"==a.store.type?l("div",{staticClass:"box mt-3"},[l("p",{staticClass:"mt-0 mb-2 text-bold"},[a._v("Pricing Details")]),l("label",{staticClass:"custom-label"},[a._v("Money price")]),l("el-input",{staticClass:"w-100",model:{value:a.sale.money_price,callback:function(e){a.$set(a.sale,"money_price",e)},expression:"sale.money_price"}}),l("label",{staticClass:"custom-label mt-3"},[a._v("Supplier percentage")]),l("el-input",{staticClass:"w-100",on:{change:a.calcTotal},model:{value:a.sale.supplier_percentage,callback:function(e){a.$set(a.sale,"supplier_percentage",e)},expression:"sale.supplier_percentage"}})],1):a._e(),l("div",{staticClass:"box mt-3 mb-3"},[l("p",{staticClass:"mt-0 mb-2 text-bold"},[a._v("Customer")]),l("label",{staticClass:"custom-label md-text",attrs:{for:""}},[a._v("Name")]),l("el-select",{staticClass:"w-100 mb-3",attrs:{filterable:"",remote:"","data-is-search":"true","allow-create":"","reserve-keyword":"",placeholder:"Select or create new","remote-method":a.getCustomers,loading:a.loadingCustomer},on:{change:a.changeCustomer},model:{value:a.sale.customer_name,callback:function(e){a.$set(a.sale,"customer_name",e)},expression:"sale.customer_name"}},a._l(a.customers,(function(a){return l("el-option",{key:a.id,attrs:{label:a.name,value:a.name}})})),1),l("label",{staticClass:"custom-label md-text",attrs:{for:""}},[a._v("Phone")]),l("el-input",{staticClass:"w-100 mb-3",attrs:{placeholder:"Phone number",type:"number"},model:{value:a.sale.phone,callback:function(e){a.$set(a.sale,"phone",e)},expression:"sale.phone"}}),l("label",{staticClass:"custom-label md-text",attrs:{for:""}},[a._v("State & city")]),l("el-cascader",{attrs:{options:a.options},on:{change:a.handleChangeAddress},model:{value:a.address,callback:function(e){a.address=e},expression:"address"}}),l("label",{staticClass:"mt-3 custom-label",attrs:{for:"Street address"}},[a._v("Street address")]),l("el-input",{staticClass:"w-100",attrs:{name:"Street address",placeholder:"Street address"},model:{value:a.sale.address.address,callback:function(e){a.$set(a.sale.address,"address",e)},expression:"sale.address.address"}})],1)])])]),l("el-dialog",{staticClass:"default-dialog",attrs:{"show-close":!1,visible:a.openDiscount},on:{"update:visible":function(e){a.openDiscount=e}},scopedSlots:a._u([{key:"title",fn:function(){return[l("div",{staticClass:"d-flex align-items-center justify-content-between"},[l("h5",{staticClass:"my-0"},[a._v("Add discount")]),l("div",{staticClass:"d-flex align-items-center"})])]},proxy:!0},{key:"footer",fn:function(){return[l("div",{staticClass:"d-flex align-items-center justify-content-end"},[l("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"my-0 flat mr-0",attrs:{type:"primary"},on:{click:function(e){a.openDiscount=!1}}},[a._v(" Cancel ")]),l("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"my-0 mr-0",attrs:{type:"primary"},on:{click:a.calcDiscount}},[a._v(" Done ")])],1)]},proxy:!0}])},[l("div",{staticClass:"con-content"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-6 pr-1"},[l("label",{staticClass:"pt-1 custom-label",attrs:{for:"discountType"}},[a._v("Discount type")]),l("el-select",{staticClass:"w-100",attrs:{name:"discountType"},model:{value:a.sale.discount_type,callback:function(e){a.$set(a.sale,"discount_type",e)},expression:"sale.discount_type"}},[l("el-option",{attrs:{label:"Amount",value:"$"}}),l("el-option",{attrs:{label:"Percentage",value:"%"}})],1)],1),l("div",{staticClass:"col-6 pl-1"},[l("label",{staticClass:"pt-1 custom-label",attrs:{for:"discountType"}},[a._v("Discount value")]),l("el-input",{staticClass:"w-100",attrs:{type:"number"},model:{value:a.discount,callback:function(e){a.discount=e},expression:"discount"}})],1),l("div",{staticClass:"col-12"},[l("label",{staticClass:"pt-1 custom-label",attrs:{for:"reason"}},[a._v("Reason")]),l("el-input",{staticClass:"w-100",attrs:{type:"textarea",row:3,name:"reason"},model:{value:a.sale.discount_reason,callback:function(e){a.$set(a.sale,"discount_reason",e)},expression:"sale.discount_reason"}})],1)])])])],1)},s=[],n=(l("4de4"),l("4160"),l("13d5"),l("a434"),l("b0c0"),l("b680"),l("159b"),l("5530")),i=l("2f62"),o=l("e9dd"),r=l("9c83"),c=l("d50a"),u={data:function(){return{url:r["c"],openCustomProduct:!1,mediaUrl:r["b"],options:o["a"],customProduct:{name:"",is_custom_product:!0,quantity:"1",price:"0",number_of_stock:1e5,image:"images/default.png",variation_product:null,product:null,subtotal:"0"},address:[],customers:[],deliveries:[],inventory:[],loadingProduct:!1,loadingCustomer:!1,loadingDelivey:!1,tax:5,discount:0,selectedProduct:"",openDiscount:!1,saving:!1,sale:{payment_status:"Unpaid",supplier_percentage:"3",money_price:"300",customer_name:"",location_name:"",status:"Active",tax_rate:5,delivery_company_name:null,delivery_date:null,payment_method:null,location:1,payments:[],address:{state:"",city:"",address:"",map:""},products:[],timelines:[],subtotal:"",total:"0",discount:"0",discount_reason:"",discount_type:"$",is_same_address:!1,tax:"",note:"note",tags:[],phone:""},selectedCustomer:{},loading:null,startEditing:!1,activePayment:!1,adding:!1,due_amount:0,query:""}},components:{file:c["d"],empty:c["c"]},watch:{sale:{handler:function(){this.startEditing=!0},deep:!0},locations:{handler:function(a){this.sale.location=a[0].id,this.sale.location_name=a[0].name},deep:!0}},mounted:function(){var a=this;setTimeout((function(){a.startEditing=!1}),100),this.sale.date=this.$moment().format("DD/MM/YYYY"),this.$store.commit("setIsReady",!0)},beforeMount:function(){var a=this;window.addEventListener("beforeunload",this.preventNav),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("beforeunload",a.preventNav)}))},beforeRouteLeave:function(a,e,l){this.startEditing?this.$smalltalk.confirm("Question","Do you really want to leave? you have unsaved changes!").then((function(){l()})).catch((function(){l(!1)})):l()},methods:{preventNav:function(a){this.startEditing&&(a.preventDefault(),a.returnValue="")},handleChangeAddress:function(a){this.sale.address.state=a[0],this.sale.address.city=a[1]},setImage:function(a,e){a.length>0&&(this.sale.products[e].image=a[0].image)},addItem:function(){this.sale.products.push({quantity:"1",sale_price:"",subtotal:"",name:"",image:"/media/default.png",link:null,primary_price:null,primary_price_myanmar:null,number_of_fullfilled:0}),this.calcSubtotal()},removeProduct:function(a){this.sale.products.splice(a,1),this.calcSubtotal()},getCustomers:function(a){var e=this;this.loadingCustomer=!0,""!==a&&a||(a="Null"),this.$axios.get("search-customer/?query="+a).then((function(a){e.loadingCustomer=!1,e.customers=a.data})).catch((function(a){e.loadingCustomer=!1,e.$noti.display({message:a,title:"",status:"error",color:"error"})}))},getDeliveries:function(a){var e=this;this.loadingDelivery=!0,""!==a&&a||(a="Null"),this.$axios.get("search-delivery/?query="+a).then((function(a){e.loadingDelivery=!1,e.deliveries=a.data})).catch((function(a){e.loadingDelivery=!1,e.$noti.display({message:a,title:"",status:"error",color:"error"})}))},changeCustomer:function(){var a=this,e=this.customers.filter((function(e){return e.name==a.sale.customer_name}));e.length>0&&(this.selectedCustomer=e[0],this.selectedCustomer.phone&&(this.sale.phone=this.selectedCustomer.phone),this.selectedCustomer.address&&(this.sale.address=this.selectedCustomer.address,this.address=[this.selectedCustomer.address.state,this.selectedCustomer.address.city]))},calcDiscount:function(){"%"===this.sale.discount_type?this.sale.discount=parseFloat(this.discount)/100*parseFloat(this.sale.subtotal):this.sale.discount=parseFloat(this.discount),this.openDiscount=!1,this.calcTotal()},calcTotal:function(){"supplier"===this.store.type?this.sale.total=(parseFloat(this.sale.subtotal)+parseFloat(this.sale.subtotal)*(parseFloat(this.sale.supplier_percentage)/100)-parseFloat(this.sale.discount)).toFixed(0):this.sale.total=(parseFloat(this.sale.subtotal)-parseFloat(this.sale.discount)).toFixed(0)},calcSubtotal:function(){this.sale.subtotal=this.sale.products.reduce((function(a,e){return a+parseFloat(e.subtotal)}),0).toFixed(2),this.calcDiscount()},changeQuantity:function(a){this.sale.products[a].subtotal=(parseFloat(this.sale.products[a].sale_price)*parseFloat(this.sale.products[a].quantity)).toFixed(2),this.calcSubtotal()},calcPrice:function(a){this.sale.products[a].sale_price&&this.sale.products[a].primary_price_myanmar?(this.sale.products[a].profit=parseFloat(this.sale.products[a].sale_price-this.sale.products[a].primary_price_myanmar),this.sale.products[a].margin=(this.sale.products[a].profit/this.sale.products[a].sale_price*100).toFixed(2)):(this.sale.products[a].margin=null,this.sale.products[a].profit=null),this.changeQuantity(a)},calcAllProductPrice:function(){var a=this,e=[];this.sale.products.forEach((function(l,t){l.primary_price_myanmar=((parseFloat(l.primary_price)*(parseFloat(a.sale.supplier_percentage)/100)+parseFloat(l.primary_price))*a.sale.money_price).toFixed(0),a.calcPrice(t),e.push(l)}));var l=JSON.stringify(e);setTimeout((function(){a.sale.products=[],a.sale.products=JSON.parse(l)}),500)},changePrimaryPrice:function(a,e){var l=parseFloat(this.sale.supplier_percentage)/100;this.sale.products[e].primary_price_myanmar=parseFloat((parseFloat(a)*l+parseFloat(a))*this.sale.money_price);var t=JSON.stringify(this.sale.products);this.sale.products=[],this.sale.products=JSON.parse(t),this.calcPrice(e)},Post:function(){var a=this;this.saving=!0,this.sale.store=this.store.id,this.$axios.post("sale/",{data:this.sale}).then((function(e){console.log("🚀 ~ file: create.vue ~ line 763 ~ .then ~ res",e),a.startEditing=!1,a.saving=!1,a.$noti.display({title:"Success",color:"success",message:"Cool! Sale has been successfully added."}),a.$router.push({name:"Edit order",params:{id:e.data.id}})})).catch((function(e){a.saving=!1,a.$noti.display({message:e,title:"",status:"error",color:"error"})}))},changeIsSame:function(){this.sale.is_same_address?this.sale.shipping_address=this.sale.address:this.sale.shipping_address={state:"",city:"",address:"",map:""}}},computed:Object(n["a"])({},Object(i["c"])(["isReady","locations","store"]))},b=u,d=l("2877"),p=Object(d["a"])(b,t,s,!1,null,null,null);e["default"]=p.exports},b680:function(a,e,l){"use strict";var t=l("23e7"),s=l("a691"),n=l("408a"),i=l("1148"),o=l("d039"),r=1..toFixed,c=Math.floor,u=function(a,e,l){return 0===e?l:e%2===1?u(a,e-1,l*a):u(a*a,e/2,l)},b=function(a){var e=0,l=a;while(l>=4096)e+=12,l/=4096;while(l>=2)e+=1,l/=2;return e},d=r&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){r.call({})}));t({target:"Number",proto:!0,forced:d},{toFixed:function(a){var e,l,t,o,r=n(this),d=s(a),p=[0,0,0,0,0,0],m="",h="0",g=function(a,e){var l=-1,t=e;while(++l<6)t+=a*p[l],p[l]=t%1e7,t=c(t/1e7)},y=function(a){var e=6,l=0;while(--e>=0)l+=p[e],p[e]=c(l/a),l=l%a*1e7},f=function(){var a=6,e="";while(--a>=0)if(""!==e||0===a||0!==p[a]){var l=String(p[a]);e=""===e?l:e+i.call("0",7-l.length)+l}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return String(r);if(r<0&&(m="-",r=-r),r>1e-21)if(e=b(r*u(2,69,1))-69,l=e<0?r*u(2,-e,1):r/u(2,e,1),l*=4503599627370496,e=52-e,e>0){g(0,l),t=d;while(t>=7)g(1e7,0),t-=7;g(u(10,t,1),0),t=e-1;while(t>=23)y(1<<23),t-=23;y(1<<t),g(1,1),y(2),h=f()}else g(0,l),g(1<<-e,0),h=f()+i.call("0",d);return d>0?(o=h.length,h=m+(o<=d?"0."+i.call("0",d-o)+h:h.slice(0,o-d)+"."+h.slice(o-d))):h=m+h,h}})},d58f:function(a,e,l){var t=l("1c0b"),s=l("7b0b"),n=l("44ad"),i=l("50c4"),o=function(a){return function(e,l,o,r){t(l);var c=s(e),u=n(c),b=i(c.length),d=a?b-1:0,p=a?-1:1;if(o<2)while(1){if(d in u){r=u[d],d+=p;break}if(d+=p,a?d<0:b<=d)throw TypeError("Reduce of empty array with no initial value")}for(;a?d>=0:b>d;d+=p)d in u&&(r=l(r,u[d],d,c));return r}};a.exports={left:o(!1),right:o(!0)}},e9dd:function(a,e,l){"use strict";l("4160"),l("ac1f"),l("5319"),l("159b");var t=[{label:"Yangon (ရန်ကုန်တိုင်း)",children:[{label:"Botataung (ဗိုလ်တထောင်)"},{label:"Dagon Seikkan (ဒဂုံဆိပ်ကမ်း)"},{label:"East Dagon (အရှေ့ဒဂုံ)"},{label:"North Dagon (မြောက်ဒဂုံ)"},{label:"South Dagon (တောင်ဒဂုံ)"},{label:"North Okkalapa (မြောက်ဥက္ကလာပ)"},{label:"South Okkalapa (တောင်ဥက္ကလာပ)"},{label:"Pazundaung (ပုဇွန်တောင်)"},{label:"Thingangyun (သင်္ဃန်းကျွန်း)"},{label:"Dawbon (ဒေါပုံ)"},{label:"Mingalar Taungnyunt (မင်္ဂလာတောင်ညွှန့်)"},{label:"Tamwe (တာမွေ)"},{label:"Thaketa (သာကေတ)"},{label:"Yankin (ရန်ကင်း)"},{label:"Hlaing Tharyar (လှိုင်သာယာ)"},{label:"Insein (အင်းစိန်)"},{label:"Mingalardon (မင်္ဂလာဒုံ)"},{label:"Shwepyitha (ရွှေပြည်သာ)"},{label:"Hlegu (လှည်းကူး)"},{label:"Hmawbi (မှော်ဘီ)"},{label:"Htantabin (ထန်းတပင်)"},{label:"Taikkyi (တိုက်ကြီး)"},{label:"Dala (ဒလ)"},{label:"Seikkyi Kanaungto (ဆိပ်ကြီးခနောင်တို)"},{label:"Cocokyun (ကိုကိုးကျွန်း)"},{label:"Kawhmu (ကော့မှူး)"},{label:"Kayan (ခရမ်း)"},{label:"Kungyangon (ကွမ်းခြံကုန်း)"},{label:"Kyauktan (ကျောက်တန်း)"},{label:"Thanlyi (သန်လျင်)"},{label:"Thongwa (သုံးခွ)"},{label:"Thonse (သုံးဆယ်)"},{label:"Twante (တွံတေး)"},{label:"Ahlon (အလုံ)"},{label:"Bahan (ဗဟန်း)"},{label:"Dagon (ဒဂုံ)"},{label:"Kyauktada (ကျောက်တံတား)"},{label:"Kyimyindaing (ကြည့်မြင်တိုင်)"},{label:"Lanmadaw (လမ်းမတော်)"},{label:"Latha (လသာ)"},{label:"Pabedan (ပန်းပဲတန်း)"},{label:"Sanchaung (စမ်းချောင်း)"},{label:"Seikkan (ဆိပ်ကမ်း)"},{label:"Hlaing (လှိုင်)"},{label:"Kamayut (ကမာရွတ်)"},{label:"Mayangon (မရမ်းကုန်း)"}]},{label:"Mandalay (မန္တလေးတိုင်း)",children:[{label:"Kyaukse (ကျောက်ဆည်မြို့)"},{label:"Taungtha (တောင်သာ)"},{label:"Mandalay (မန္တလေးမြို့)"},{label:"Myittha (မြစ်သားမြို့)"},{label:"Sintgaing (စဉ့်ကိုင်)"},{label:"Tada_U (တံတားဦး)"},{label:"Amarapura (အမရပူရ)"},{label:"Aungmyethazan (အောင်မြေသာစံ)"},{label:"Chanayethazan (ချမ်းအေးသာစံ)"},{label:"Chanmyathazi (ချမ်းမြသာစည်)"},{label:"Mahaaungmye (မဟာအောင်မြေ)"},{label:"Patheingyi (ပုသိမ်ကြီး)"},{label:"Pyigyidagun (ပြည်ကြီးတံခွန်)"},{label:"Mahlaing (မလှိုင်)"},{label:"Meiktila (မိတ္ထီလာ)"},{label:"Thazi (သာစည်)"},{label:"Wundwin (ဝမ်းတွင်း)"},{label:"Myingyan (မြင်းခြံ)"},{label:"Natogyi (နွားထိုးကြီး)"},{label:"Nganzun (ငါန်းဇွန်)"},{label:"Thaungtha (တောင်သာ)"},{label:"Nyaung-U (ညောင်ဦး)"},{label:"Kyaukpadaung (ကျောက်ပန်းတောင်း)"},{label:"Ngathayauk (ငါ့သရောက်)"},{label:"Madaya (မတ္တရာ)"},{label:"Mogok (မိုးကုတ်)"},{label:"Pyinoolwin (ပြင်ဦးလွင်)"},{label:"Singu (စဉ့်ကူ)"},{label:"Thabeikkyin (သပိတ်ကျင်း)"},{label:"Tagaung (တကောင်း)"},{label:"Pyawbwe (ပျော်ဘွယ်)"},{label:"Yamethin (ရမည်းသင်း)"}]},{label:"Magway (မကွေးတိုင်း)",children:[{label:"Gangaw (ဂန့်ဂေါ)"},{label:"Myit Chay (မြစ်ခြေ)"},{label:"Saw (စော)"},{label:"Tilin (ထီးလင်း)"},{label:"Chauck (ချောက်)"},{label:"Magway (မကွေးမြို့)"},{label:"Natmauk (နတ်မောက်)"},{label:"Taungdwingyi (တောင်တွင်းကြီး)"},{label:"Yenangyaung (ရေနံချောင်း)"},{label:"Minbu (မင်းဘူး)"},{label:"Ngape (ငဖဲ)"},{label:"Pwintbyu (ပွင့်ဖြူ)"},{label:"Salin (စလင်း)"},{label:"Myaing (မြိုင်)"},{label:"Pakokku (ပခုက္ကူ)"},{label:"Pauk (ပေါက်)"},{label:"Seikphyu (ဆိပ်ဖြူ)"},{label:"Yesagyo (ရေစကြို)"},{label:"Aunglan (အောင်လံ)"},{label:"Kamma (ကမ္မ)"},{label:"Mindon (မင်းတုန်း)"},{label:"Minhla (မင်းလှ)"},{label:"Sinbaungwe (ဆင်ပေါင်ဝဲ)"},{label:"Thayet (သရက်)"}]},{label:"Naypyidaw (နေပြည်တော်)",children:[{label:"Thar Wut Hti (သာဝတ်ထိ)"},{label:"Dekkhinathiri (ဒက္ခိဏသီရိ)"},{label:"Lewe (လယ်ဝေး)"},{label:"Pyinmana (ပျဉ်းမနား)"},{label:"Zabuthiri (ဇမ္မူသီရိ)"},{label:"Naypyidaw (နေပြည်တော်)"},{label:"Ottarathiri (ဥတ္တရသီရိ)"},{label:"Pobbathiri (ပုပ္ဗသီရိ)"},{label:"Tatkon (တပ်ကုန်း)"},{label:"Zeyarthiri (ဇေယျာသီရိ)"}]},{label:"Ayeyarwady (ဧရာဝတီတိုင်း)",children:[{label:"Yegyi (ရေကြည်)"},{label:"Myaungmya (မြောင်းမြ)"},{label:"Hinthada (ဟင်္သာတ)"},{label:"Lemyethna (လေးမျက်နှာ)"},{label:"Zalun (ဇလွန်)"},{label:"Ingapu (အင်္ဂပူ)"},{label:"Kyangin (ကြံခင်း)"},{label:"Myanaung (မြောင်းမြ)"},{label:"Labutta (လပွတ္တာ)"},{label:"Mawlamyinegyun (မော်လမြိုင်ကျွန်း)"},{label:"Pyinsalu (ပြင်စလူခွဲ)"},{label:"Danuphyu (ဓနုဖြူ)"},{label:"Ma-ubin (မအူပင်)"},{label:"Nyaungdon (ညောင်တုန်း)"},{label:"Pantanaw (ပန်းတနော်)"},{label:"Einme (အိမ်မဲ)"},{label:"Wakema (ဝါးခယ်မ)"},{label:"Kangyidaunk (ကန်ကြီးတောင့်)"},{label:"Ngapudaw (ငပုတော)"},{label:"Pathein (ပုသိမ်မြို့)"},{label:"Thabaung (သာပေါင်း)"},{label:"Kyaunggon (ကျောင်းကုန်း)"},{label:"Kyonpyaw (ကျုံပျော်)"},{label:"Yekyi (ရေကြီး)"},{label:"Ngayokaung (ငရုပ်ကောင်း)"},{label:"Hainggyikyun (ဟိုင်းကြီးကျွန်း)"},{label:"Shwethaungyan (ရွှေသာယန်ကျေးရွာအုပ်ချုပ်ရေးမှူး)"},{label:"Ngwehsaung (ငွေဆောင်)"},{label:"Chaungthar (ချောင်းသာ)"},{label:"Ngathaingchaung (ငသိုင်းချောင်းခွဲ)"},{label:"Bogale (ဘိုကလေး)"},{label:"Dedaye (ဒေးဒရဲ)"},{label:"Kyaiklat (ကျိုက်လတ်)"},{label:"Pyapon (ဖျာပုံ)"},{label:"Ahmar (အမာခွဲ)"}]},{label:"Bago (ပဲခူးတိုင်း)",children:[{label:"Thar Ga Ya (သာဂရ)"},{label:"Bago (ပဲခူး)"},{label:"Daik-U (ဒိုက်ဦး)"},{label:"Kawa (ကဝ)"},{label:"Nyaunglebin (ညောင်လေးပင်)"},{label:"Shwegyin (ရွှေကျင်)"},{label:"Thanatpin (သနပ္်ပင်)"},{label:"Waw (ဝေါ)"},{label:"Kyauktaga (ကျောက်တံခါး)"},{label:"Hpayargyi (ဘုရားကြီး)"},{label:"Pyuntaza (ပြွန်တန်ဆာခွဲ)"},{label:"Madauk (မဒေါက်)"},{label:"Penwegon (ပဲနွယ်ကုန်းခွဲ)"},{label:"Aungmyin (အောင်မြေ)"},{label:"Kyaukkyi (ကျောက်ကြီး)"},{label:"Oktwin (အုတ်တွင်း)"},{label:"Pyu (ပျူ)"},{label:"Tantabin (ထန်းတပင်)"},{label:"Taungoo (တောင်ငူ)"},{label:"Yedashe (ရေတာရှည်)"},{label:"Kanyutkwin (ကညွတ်ကွင်း)"},{label:"Nyaungbinthar (ညောင်ပင်သာ)"},{label:"Kywebwe (ကျွဲပွဲ)"},{label:"Padaung (ပန်းတောင်း)"},{label:"Paukkaung (ပေါက်ခေါင်း)"},{label:"Paungde (ပေါင်းတည်)"},{label:"Pyay (ပြည်)"},{label:"Shwedaung (ရွှေတောင်)"},{label:"Thegon (သဲကုန်း)"},{label:"Innma (အင်းမ)"},{label:"Padigone (ပုတီးကုန်း)"},{label:"Sinmezwe (ဆင်မြီးဆွဲ)"},{label:"Paungdale (ပေါင်းတလည်)"},{label:"Gyobingauk (ကြို့ပင်ကောက်)"},{label:"Letpadan (လက်ပတန်းမြို့)"},{label:"Minhla (မင်းလှ)"},{label:"Monyo (မိုးညို)"},{label:"Okpho (အုတ်ဖို)"},{label:"Tharrawaddy (သာရ၀တီ)"},{label:"Nattalin (နတ်တလင်း)"},{label:"Zigon (ဇီးကုန်း)"},{label:"Thonze (သုံးဆယ်)"},{label:"Ooethegone (အိုးသည်ကုန်း)"},{label:"Sitkwin (စစ်ကွင်း)"},{label:"Tapun (တာပွန်)"}]},{label:"Sagaing (စစ်ကိုင်းတိုင်း)",children:[{label:"Hkamti (ခန္တီး)"},{label:"Homalin (ဟုမ္မလင်း)"},{label:"Leshi (လေရှီး)"},{label:"Nanyun (နန်းယွန်း)"},{label:"Donhee (ဒုံဟီး)"},{label:"Htanparkway (ထန်ပါခွေ)"},{label:"Pansaung (ပန်ဆောင်)"},{label:"Kanbalu (ကန့်ဘလူ)"},{label:"Kyunhla (ကျွန်းလှ)"},{label:"Taze (တန့်ဆည်)"},{label:"Ye-U (ရေဦး)"},{label:"Kale (ကလေး)"},{label:"Kalewa (ကလေးဝ)"},{label:"Mingin (မင်းကင်း)"},{label:"Banmauk (ဗန်းမောက်)"},{label:"Indaw (အင်းတော်)"},{label:"Katha (ကသာ)"},{label:"Kawlin (ကောလင်)"},{label:"Pinlebu (ပင်လည်ဘူး)"},{label:"Tigyaing (ထီးချိုင့်)"},{label:"Wuntho (ဝန်းသို)"},{label:"Mawlaik (မော်လိုက်)"},{label:"Paungbyin (ဖေါင်းပြင်)"},{label:"Ayadaw (အရာတော်)"},{label:"Budalin (ဘုတလင်)"},{label:"Chaung-U (ချောင်းဦး)"},{label:"Monywa (မုံရွာ)"},{label:"Myaung (မြှောင်)"},{label:"Myinmu (မြင်းမူ)"},{label:"Sagaing (စစ်ကိုင်း)"},{label:"Khin-U (ခင်ဦး)"},{label:"Shwebo (ရွှေဘို)"},{label:"Wetlet (ဝက်လက်)"},{label:"Tabayin (ဒီပဲယင်း)"},{label:"Kyaukmyaung (ကျောက်မြောင်း)"},{label:"Tamu (တမူး)"},{label:"Khampat (ခန်းပတ်)"},{label:"Myothit (မြို့သစ်)"},{label:"Kani (ကနီ)"},{label:"Pale (ပုလဲ)"},{label:"Salingyi (ဆားလင်းကြီး)"},{label:"Yinmabin (ယင်းမာပင်)"}]},{label:"Tanintharyi (တနင်္သာရီတိုင်း)",children:[{label:"Dawei (ထားဝယ်)"},{label:"Launglon (လောင်းလုံ)"},{label:"Thayetchaung (သရက်ချောင်း)"},{label:"Yebyu (ရေဖြူ)"},{label:"Kaleinaung (ကလိန်အောင်)"},{label:"Myitta (မေတ္တာ)"},{label:"Bokpyin (ဘုတ်ပြင်း)"},{label:"Kawthoung (ကော့သောင်း)"},{label:"Karathuri (ကရသူရိ)"},{label:"Khamaukgyi (ခမောက်ကြီး)"},{label:"Pyigyimandaing (ပြည်ကြီးမဏ္ဍိုင်)"},{label:"Kyunsu (ကျွန်းစု)"},{label:"Myeik (မြိတ်)"},{label:"Palaw (ပုလော)"},{label:"Palauk (ပလောက်)"}]},{label:"East Shan State (အရှေ့ရှမ်းပြည်နယ်)",children:[{label:"Kengtung (ကျိုင်းတုံ)"},{label:"Mong Khet (မိုင်းခတ်)"},{label:"Mong La (မိုင်းလား)"},{label:"Mong Yang (မိုင်းယန်း)"},{label:"Mine Pauk (မိုင်းပေါက်)"},{label:"Mong Hpayak (မိုင်းဖြတ်)"},{label:"Mong Yawng (မိုင်းယောင်း)"},{label:"Mong Hsat (မိုင်းဆတ်)"},{label:"Mong Ping (မိုင်းပြင်း)"},{label:"Mong Tong (မိုင်းတုံ)"},{label:"Tachileik (တာချီလိတ်)"},{label:"Minekoke (မိုင်းကုတ်)"},{label:"Ponparkyin (ပုံပါကျင်)"}]},{label:"North Shan State (ရှမ်းပြည်နယ်မြောက်ပိုင်း )",children:[{label:"Hsipaw (သီပေါ)"},{label:"Kyaukme (ကျောက်မဲ)"},{label:"Mantong (မန်တုန်)"},{label:"Namhsan (နမ့်ဆန်)"},{label:"Namtu (နမ္မတူ)"},{label:"Nawnghkio (နောင်ချို)"},{label:"Hsenwi (သိန္နီ)"},{label:"Lashio (လားရှိုး)"},{label:"Mongyai (မိုင်းရယ်)"},{label:"Tangyan (တန့်ယန်း)"},{label:"Laukkaing (လောက်ကိုင်)"},{label:"Konkyan (ကုန်းကြမ်း)"},{label:"Kutkai (ကွတ်ခိုင်)"},{label:"Muse (မူဆယ်)"},{label:"Namhkam (နမ့်ခမ်း)"},{label:"Hopang (ဟိုပုန်)"},{label:"Mongmao (မိုင်းမော)"},{label:"Pangwaun (ပန်ဝိုင်)"},{label:"Matman (မက်မန်း)"},{label:"Pangsang (ပန်ဆန်း)"},{label:"Mabein (မဘိမ်း)"},{label:"Mongmit (မိုးမိတ်)"}]},{label:"South Shan State (တောင်ပိုင်းရှမ်းပြည်နယ်)",children:[{label:"Langkho (လင်းခေး)"},{label:"Mawkmai (မောက်မယ်)"},{label:"Mong Nai (မိုင်းနိုင်း)"},{label:"Mong Pan (မိုင်းပန်)"},{label:"Kunhing (ကွန်ဟိန်း)"},{label:"Kyethi (ကျေးသီး)"},{label:"Lai-Hka (လဲချား)"},{label:"Loilen (လွိုင်လင်)"},{label:"Mong Hsu (မိုင်းရှူး)"},{label:"Mong Kung (မိုင်းကိုင်)"},{label:"Nansang (နမ့်စန်)"},{label:"Hopong (ဟိုပုံး)"},{label:"Hsi Hseng (ဆီဆိုင်)"},{label:"Kalaw (ကလော)"},{label:"Lawksawk (ရပ်စောက်)"},{label:"Nyaungshwe (ညောင်ရွှေ)"},{label:"Pekon (ဖယ်ခုံ)"},{label:"Pingdaya (ပင်းတယ)"},{label:"Pinlaung (ပင်လောင်း)"},{label:"Taunggyi (တောင်ကြီး)"},{label:"Ywangan (ရှာငံ)"}]},{label:"Kachin State (ကချင်ပြည်နယ်)",children:[{label:"Bhamo (ဗန်းမော်)"},{label:"Mansi (မန်စီ)"},{label:"Momauk (မိုးမောက်)"},{label:"Shwegu (ရွှေကူ)"},{label:"Hpakant (ဖားကန့်)"},{label:"Mogaung (မိုးကောင်း)"},{label:"Mohnyin (မိုးညှင်း)"},{label:"Chipwi (ချီဗွေ)"},{label:"Hsawlaw (ဆော့လော)"},{label:"Injangyang (အင်ဂျန်းယန်)"},{label:"Myitkyina (မြစ်ကြီးနားမြို့)"},{label:"Tanai (တနိုင်း)"},{label:"Waingmaw (ဝိုင်းမော်)"},{label:"Kawnglanghpu (ခေါင်လန်ဖူး)"},{label:"Machanbaw (မချမ်းဘေ)"},{label:"Nogmung (နောင်မွန်း)"},{label:"Puta-O (ပူတာအို)"},{label:"Sumprabum (ဆွမ်ပရာဘွမ်)"}]},{label:"Kayin State (ကရင်ပြည်နယ်)",children:[{label:"Hlaignbwe (လှိုင်ဘွဲ့)"},{label:"Hpa-an (ဘားအံ)"},{label:"Thandaunggyi (သံတောင်ကြီး)"},{label:"Hpapun (ဖာပွန်)"},{label:"Kawkareik (ကော့ကရိတ်)"},{label:"Kyain Seikgyi (ကြာအင်းဆိပ်ကြီး)"},{label:"Myawaddy (မြဝတီ)"}]},{label:"Mon State (မွန်ပြည်နယ်)",children:[{label:"Chaungzon (ချောင်းဆုံ)"},{label:"Kyaikmaraw (ကျိုက်မရော)"},{label:"Mawlamyine (မော်လမြိုင်)"},{label:"Mudon (မုဒုံ)"},{label:"Thanbyuzayat (သံဖြူဇရပ်)"},{label:"Ye (ရေး)"},{label:"Bilin (ဘီလင်း)"},{label:"Kyaikto (ကျိုက်ထို)"},{label:"Paung (ပေါင်)"},{label:"Thaton (သထုံ)"}]},{label:"Chin State (ချင်းပြည်နယ်)",children:[{label:"Falam (ဖလမ်း)"},{label:"Tiddim (တီးတိန်)"},{label:"Ton Zang (တွန်းဇံ)"},{label:"Hakha (ဟားခါး)"},{label:"Htantlang (ထန်တလန်)"},{label:"Kanpetlet (ကန်ပက်လက်)"},{label:"Matupi (မတူပီ)"},{label:"Mindat (မင်းတပ်)"},{label:"Paletwa (ပလက်၀)"}]},{label:"Rakhine State (ရခိုင်ပြည်နယ်)",children:[{label:"Ann (အမ်း)"},{label:"Kyaukpyu (ကျောက်ဖြူ)"},{label:"Manaung (မာန်အောင်)"},{label:"Ramree (ရမ်းဗြဲ)"},{label:"Buthidaung (ဘူးသီးတောင်)"},{label:"Maungdaw (မောင်တော)"},{label:"Pauktaw (ပေါက်တော)"},{label:"Ponnagyun (ပုဏ္ဏားကျွန်း)"},{label:"Rathedaung (ရသေ့တောင်)"},{label:"Sittwe (စစ်တွေ)"},{label:"Gaw (ဂေါ)"},{label:"Thandwe (သံတွဲ)"},{label:"Toungup (တောင်ကုတ်)"},{label:"Kyauktaw (ကျောက်တော်)"},{label:"Minbya (မင်းပြား)"},{label:"Mrauk-U (မြောက်ဦး)"},{label:"Myebon (မြေပုံ)"}]},{label:"Kayah State (ကယားပြည်နယ်)",children:[{label:"Bawlakhe (ဘောလခဲ)"},{label:"Hpasawng (ဖားဆောင်း)"},{label:"Mese (မယ်ဆည်)"},{label:"Demoso (ဒီမောဆို)"},{label:"Hpruso (ဖရူဆို)"},{label:"Loikaw (လွိုင်ကော်)"},{label:"Shadaw (ရှားတော)"}]}];t.forEach((function(a){a.value=a.label.replace(/ /g,"_"),a.children.forEach((function(a){a.value=a.label.replace(/ /g,"_")}))})),e["a"]=t}}]);
//# sourceMappingURL=chunk-6fbf720c.a61cebc8.js.map