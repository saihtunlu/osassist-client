(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d53a565"],{"13d5":function(e,t,s){"use strict";var a=s("23e7"),l=s("d58f").left,r=s("a640"),i=s("ae40"),n=r("reduce"),o=i("reduce",{1:0});a({target:"Array",proto:!0,forced:!n||!o},{reduce:function(e){return l(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"73a6":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.isReady?s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mt-3 flex-x-between"},[e._m(0),s("div",{staticClass:"flex-align-center flex-end"},["supplier"===e.store.type?s("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"mr-3 my-0",attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/update-fulfillment")}}},[e._v(" Update Fulfillment ")]):e._e(),s("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"mx-0 my-0",attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/add-new-order")}}},[e._v(" Add order ")])],1)]),s("div",{staticClass:"col-12 list-table mt-lg-3 mt-md-3 p-0 pt-sm-0 mt-sm-3"},[s("div",{staticClass:"box mb-sm-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"\n            col-12\n            mb-1 mb-sm-0\n            d-flex\n            justify-content-between\n            align-items-center\n          "},[s("div",{staticClass:"flex-align-center sm-hide"},[s("el-input",{staticClass:"mr-2 table-search",attrs:{placeholder:"Type something","prefix-icon":"bx bx-search"},on:{change:e.setFilterQuery},model:{value:e.inputHelper,callback:function(t){e.inputHelper=t},expression:"inputHelper"}}),s("el-date-picker",{staticClass:"mr-2 filter-input",attrs:{type:"date",format:"dd/MM/yyyy","value-format":"dd/MM/yyyy",placeholder:"Pick a date"},model:{value:e.filters.date,callback:function(t){e.$set(e.filters,"date",t)},expression:"filters.date"}})],1),s("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click"}},[s("p",{staticClass:"font-weight-bold"},[e._v("Sort By")]),s("div",{staticClass:"b-divider my-2"}),s("div",{staticClass:"w-100"},e._l(e.sortList,(function(t,a){return s("el-radio",{key:t.name,class:a!==e.sortList.length-1&&"mb-3",attrs:{label:t.value},model:{value:e.filters.order_by,callback:function(t){e.$set(e.filters,"order_by",t)},expression:"filters.order_by"}},[e._v(" "+e._s(t.name)+" ")])})),1),s("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0,0,0,0.1)",expression:"'rgba(0,0,0,0.1)'",modifiers:{400:!0}}],staticClass:"flat ml-2 my-0 sm-hide no-width",attrs:{slot:"reference"},slot:"reference"},[s("i",{staticClass:"bx bx-sort mr-1"}),e._v(" Sort ")])],1),s("div",{staticClass:"md-hide w-100 lg-hide"},[s("el-input",{staticClass:"w-100 mb-sm-2",attrs:{placeholder:"Type something","prefix-icon":"bx bx-search"},on:{change:e.setFilterQuery},model:{value:e.inputHelper,callback:function(t){e.inputHelper=t},expression:"inputHelper"}}),s("div",{staticClass:"flex-x-between"},[s("el-date-picker",{staticClass:"w-100",attrs:{type:"date",format:"dd/MM/yyyy","value-format":"dd/MM/yyyy",placeholder:"Pick a date"},model:{value:e.filters.date,callback:function(t){e.$set(e.filters,"date",t)},expression:"filters.date"}}),s("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click"}},[s("p",{staticClass:"font-weight-bold"},[e._v("Sort By")]),s("div",{staticClass:"b-divider my-2"}),s("div",{staticClass:"w-100"},e._l(e.sortList,(function(t,a){return s("el-radio",{key:t.name,class:a!==e.sortList.length-1&&"mb-3",attrs:{label:t.value},model:{value:e.filters.order_by,callback:function(t){e.$set(e.filters,"order_by",t)},expression:"filters.order_by"}},[e._v(" "+e._s(t.name)+" ")])})),1),s("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0,0,0,0.1)",expression:"'rgba(0,0,0,0.1)'",modifiers:{400:!0}}],staticClass:"flat ml-2 my-0 no-width",attrs:{slot:"reference"},slot:"reference"},[s("i",{staticClass:"bx bx-sort mr-1"}),e._v(" Sort ")])],1)],1)],1)],1)]),s("div",{staticClass:"w-100 sm-hide el-main-table"},[s("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.sales.results},on:{"row-click":function(t){return e.$router.push({name:"Edit order",params:{id:t.id}})}},scopedSlots:e._u([{key:"empty",fn:function(){return[s("el-empty",{attrs:{description:"No data found!"},scopedSlots:e._u([{key:"image",fn:function(){return[s("empty")]},proxy:!0}],null,!1,81314202)})]},proxy:!0}],null,!1,2777114744)},[s("el-table-column",{attrs:{label:"Order",property:"sale_no",width:"100"}}),s("el-table-column",{attrs:{width:"150",label:"Date of order"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.date)+" ")]}}],null,!1,2797572233)}),"supplier"!==e.store.type?s("el-table-column",{attrs:{label:"Type",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-tag",{staticClass:"rounded",attrs:{type:"In Stock"==t.row.type?"success":"warning"}},[e._v(" "+e._s("Instock"==t.row.type?"-":t.row.type))])]}}],null,!1,3678172572)}):e._e(),s("el-table-column",{attrs:{label:"Note",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.note||"-")+" ")]}}],null,!1,1370674720)}),s("el-table-column",{attrs:{label:"Exported By",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.exported_by||"-")+" ")]}}],null,!1,3805086225)}),s("el-table-column",{attrs:{label:"Customer",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.customer_name||"-")+" ")]}}],null,!1,3390116620)}),s("el-table-column",{attrs:{label:"Total",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.total+("supplier"===e.store.type?"¥":"MMK"))+" ")]}}],null,!1,1218801854)}),"supplier"==e.store.type?s("el-table-column",{attrs:{label:"Type",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.profit_amount+"¥")+" ")]}}],null,!1,4067148694)}):e._e(),s("el-table-column",{attrs:{label:"Payment",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return["Paid"==t.row.payment_status?s("el-tag",{staticClass:"rounded",attrs:{type:"success"}},[s("i",{staticClass:"bx bx-check-circle"}),e._v(" "+e._s(t.row.payment_status))]):e._e(),"Unpaid"==t.row.payment_status?s("el-tag",{staticClass:"rounded",attrs:{type:"danger"}},[s("i",{staticClass:"bx bx-time-five"}),e._v(e._s(t.row.payment_status))]):e._e(),"Partially Paid"==t.row.payment_status?s("el-tag",{staticClass:"rounded",attrs:{type:"warning"}},[s("i",{staticClass:"bx bx-time-five"}),e._v(e._s(t.row.payment_status))]):e._e()]}}],null,!1,1084794278)}),"supplier"==e.store.type?s("el-table-column",{attrs:{label:"Code",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isCompleteCode(t.row.products)?s("el-tag",{staticClass:"rounded",attrs:{type:"success"}},[s("i",{staticClass:"bx bx-check-circle"}),e._v(" Completed")]):s("el-tag",{staticClass:"rounded",attrs:{type:"danger"}},[s("i",{staticClass:"bx bx-time-five"}),e._v(" Missing")])]}}],null,!1,344295959)}):e._e(),s("el-table-column",{attrs:{label:"Fulfilled"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isFulfilled(t.row)?s("el-tag",{staticClass:"rounded",attrs:{type:"success"}},[s("i",{staticClass:"bx bx-check-circle"}),e._v(" Fulfilled")]):s("el-tag",{staticClass:"rounded",attrs:{type:"danger"}},[s("i",{staticClass:"bx bx-time-five"}),e._v(" Unfulfilled")])]}}],null,!1,942551558)})],1),s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"flex-center sm-hide"},[s("p",{staticClass:"py-3"})])],1)]),e._l(e.sales.results,(function(t){return s("div",{key:t.id,staticClass:"sale-item box lg-hide md-hide mb-sm-3",on:{click:function(){return e.$router.push({name:"Edit order",params:{id:t.id}})}}},[s("div",{staticClass:"flex-x-between mb-2"},[s("p",{staticClass:"sm-text"},[e._v(e._s(t.sale_no))]),s("p",{staticClass:"sm-text"},[e._v(e._s(t.date))])]),s("div",{staticClass:"flex-x-between mb-2"},[s("p",{staticClass:"text-bold"},[e._v(e._s(t.customer_name))]),s("p",{staticClass:"primary text-bold"},[e._v(" "+e._s(t.total+("supplier"===e.store.type?"¥":"MMK"))+" ")])]),s("div",{staticClass:"flex-align-center flex-wrap"},[s("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"info"}},[s("i",{staticClass:"bx bx-user"}),e._v(" "+e._s(t.exported_by))]),s("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"In Stock"==t.type?"success":"warning"}},[e._v(" "+e._s("Instock"==t.type?"-":t.type))]),"Paid"==t.payment_status?s("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"success"}},[s("i",{staticClass:"bx bx-check-circle"}),e._v(" "+e._s(t.payment_status))]):e._e(),"Unpaid"==t.payment_status?s("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"danger"}},[s("i",{staticClass:"bx bx-time-five"}),e._v(e._s(t.payment_status))]):e._e(),"Partially Paid"==t.payment_status?s("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"warning"}},[s("i",{staticClass:"bx bx-time-five"}),e._v(e._s(t.payment_status))]):e._e(),e.isCompleteCode(t.products)&&"supplier"==e.store.type?s("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"success"}},[s("i",{staticClass:"bx bx-check-circle"}),e._v("Code Completed ")]):e._e(),e.isCompleteCode(t.products)||"supplier"!=e.store.type?e._e():s("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"danger"}},[s("i",{staticClass:"bx bx-time-five"}),e._v("Code Missing")]),e.isFulfilled(t)?s("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"success"}},[s("i",{staticClass:"bx bx-check-circle"}),e._v(" Fulfilled")]):s("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"danger"}},[s("i",{staticClass:"bx bx-time-five"}),e._v(" Unfulfilled")])],1),s("p",{staticClass:"sm-text mt-2"},[e._v("Note : "+e._s(t.note))])])})),s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"lg-hide box md-hide mb-3"},[s("p",{staticClass:"py-3"})])],2)]):e._e()},l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex-align-center"},[s("h3",{staticClass:"my-0"},[e._v("Orders")])])}],r=(s("99af"),s("4160"),s("13d5"),s("9911"),s("159b"),s("2909")),i=s("5530"),n=s("2f62"),o=s("d50a"),c={data:function(){return{inputHelper:"",filters:{query:"",order_by:"-updated_at",pageSize:15,status:"",delivery:"",date:"",is_fulfilled:!1,payment_status:"",page:1},loading:!1,actions:[{label:"Archive sales",value:"Archived"},{label:"Set as Active",value:"Active"},{label:"Set as Completed",value:"Completed"},{label:"Set as Canceled",value:"Canceled"}],sortList:[{name:"Created (oldest first)",value:"created_at"},{name:"Created (newest first)",value:"-created_at"},{name:"Updated (oldest first)",value:"updated_at"},{name:"Updated (newest first)",value:"-updated_at"},{name:"Customer A–Z",value:"customer__name"},{name:"Customer Z–A",value:"-customer__name"}],loadingDelivey:!1,deliveries:[],selectedDate:null,selectedDelivery:null,allCheck:!1,gettingOrder:!1,page:1,max:5,selected:[],isReadyToGet:!1,sales:{current_page:1,results:[],total_pages:0,next:1},scroll:0}},components:{empty:o["b"]},computed:Object(i["a"])({},Object(n["c"])(["isReady","store"])),created:function(){this.$store.commit("setIsReady",!1),this.getDeliveries()},watch:{filters:{handler:function(e){this.isReadyToGet&&this.$router.push({path:"/orders",query:{status:e.status,query:e.query,page_size:e.pageSize,date:e.date,page:e.page,order_by:e.order_by}}).catch((function(){}))},deep:!0}},mounted:function(){this.$store.commit("setSidebar",!1),this.filters={query:this.$route.query.query||"",order_by:this.$route.query.order_by||"-updated_at",pageSize:this.$route.query.page_size||"15",status:this.$route.query.status||"",delivery:"",date:this.$route.query.date||"",page:this.$route.query.page||"1",is_fulfilled:!1,payment_status:""},this.inputHelper=this.$route.query.query||"",this.isReadyToGet=!0,this.getSales(),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(e){var t=e.target.scrollingElement.scrollHeight-3*e.target.scrollingElement.clientHeight;t<e.target.scrollingElement.scrollTop&&(this.loading||this.getSales())},setFilterQuery:function(){this.filters.query=this.inputHelper},isFulfilled:function(e){var t=!0;return e.products.forEach((function(e){parseFloat(e.quantity)!==parseFloat(e.number_of_fullfilled)&&(t=!1)})),t},toggleSelection:function(e){var t=this;e?e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.selected=e},changeActions:function(e){"Archive sales"==e?this.updateStatus("Archived"):"Unarchive sales"==e&&this.updateStatus("Active")},updateStatus:function(e){var t=this;this.updatingStatus=!0;var s=[];this.selected.forEach((function(e){return s.push(e.id)})),this.$axios.put("sales-status/",{status:e,ids:s}).then((function(){t.selected=[],t.getSales()})).catch((function(e){t.$noti.display({message:e,status:"error",color:"error"})}))},getSales:function(){var e=this;if(this.sales.next){this.loading=!0,this.gettingOrder=!0,null===this.filters.date&&(this.filters.date="");var t="sales/?page=".concat(this.sales.next,"&page_size=").concat(this.filters.pageSize,"&location=&query=").concat(this.filters.query,"&status=").concat(this.filters.status,"&delivery=").concat(this.filters.delivery,"&date=").concat(this.filters.date,"&order_by=").concat(this.filters.order_by);this.$axios.get(t).then((function(t){var s=window.scrollY;e.sales=Object(i["a"])(Object(i["a"])({},t.data),{},{results:[].concat(Object(r["a"])(e.sales.results),Object(r["a"])(t.data.results))}),setTimeout((function(){window.scroll(0,s),e.loading=!1}),800),e.$store.commit("setIsReady",!0)})).catch((function(t){e.loading=!1,e.gettingOrder=!1,e.$noti.display({message:t,status:"error",color:"error"})}))}},getDeliveries:function(){var e=this,t="deliveries/?page=1&query=&order_by=-name&page_size=1000000";this.$axios.get(t).then((function(t){e.loadingDelivery=!1,e.deliveries=t.data.results})).catch((function(t){e.loadingDelivery=!1,e.$noti.display({message:t,status:"error",color:"error"})}))},isCompleteCode:function(e){var t=!0;return e.forEach((function(e){e.link||(t=!1)})),t},getItemsQuantity:function(e){return e.products.reduce((function(e,t){return e+parseFloat(t.quantity)}),0)}}},u=c,d=s("2877"),p=Object(d["a"])(u,a,l,!1,null,null,null);t["default"]=p.exports},"857a":function(e,t,s){var a=s("1d80"),l=/"/g;e.exports=function(e,t,s,r){var i=String(a(e)),n="<"+t;return""!==s&&(n+=" "+s+'="'+String(r).replace(l,"&quot;")+'"'),n+">"+i+"</"+t+">"}},9911:function(e,t,s){"use strict";var a=s("23e7"),l=s("857a"),r=s("af03");a({target:"String",proto:!0,forced:r("link")},{link:function(e){return l(this,"a","href",e)}})},af03:function(e,t,s){var a=s("d039");e.exports=function(e){return a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},d58f:function(e,t,s){var a=s("1c0b"),l=s("7b0b"),r=s("44ad"),i=s("50c4"),n=function(e){return function(t,s,n,o){a(s);var c=l(t),u=r(c),d=i(c.length),p=e?d-1:0,f=e?-1:1;if(n<2)while(1){if(p in u){o=u[p],p+=f;break}if(p+=f,e?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;e?p>=0:d>p;p+=f)p in u&&(o=s(o,u[p],p,c));return o}};e.exports={left:n(!1),right:n(!0)}}}]);
//# sourceMappingURL=chunk-5d53a565.d8109986.js.map