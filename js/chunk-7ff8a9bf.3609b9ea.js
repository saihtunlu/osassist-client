(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ff8a9bf"],{"13d5":function(e,t,s){"use strict";var a=s("23e7"),l=s("d58f").left,i=s("a640"),r=s("2d00"),o=s("605d"),n=!o&&r>79&&r<83,d=n||!i("reduce");a({target:"Array",proto:!0,forced:d},{reduce:function(e){var t=arguments.length;return l(this,e,t,t>1?arguments[1]:void 0)}})},"605d":function(e,t,s){(function(t){var a=s("c6b6");e.exports="undefined"!=typeof t&&"process"==a(t)}).call(this,s("4362"))},"73a6":function(e,t,s){"use strict";s.r(t);s("14d9"),s("13d5");var a=function(){var e=this,t=e._self._c;return e.isReady?t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 mt-3 flex-x-between"},[e._m(0),t("div",{staticClass:"flex-align-center flex-end"},["supplier"===e.store.type?t("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"mr-3 my-0",attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/update-fulfillment")}}},[e._v(" Update Fulfillment ")]):e._e(),t("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"mx-0 my-0",attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/add-new-order")}}},[e._v(" Add order ")])],1)]),t("div",{staticClass:"col-12 list-table mt-lg-3 mt-md-3 p-0 pt-sm-0 mt-sm-3"},[t("div",{staticClass:"box mb-sm-3"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 mb-1 mb-sm-0 d-flex justify-content-between align-items-center"},[t("div",{staticClass:"flex-align-center sm-hide"},[t("el-select",{staticClass:"mr-2 page-size-selector mr-2",model:{value:e.filters.pageSize,callback:function(t){e.$set(e.filters,"pageSize",t)},expression:"filters.pageSize"}},e._l(10,(function(e){return t("el-option",{key:e,attrs:{label:50*e,value:50*e}})})),1),t("el-input",{staticClass:"mr-2 table-search",attrs:{placeholder:"Type something","prefix-icon":"bx bx-search"},on:{change:e.setFilterQuery},model:{value:e.inputHelper,callback:function(t){e.inputHelper=t},expression:"inputHelper"}}),t("el-date-picker",{staticStyle:{"z-index":"100"},attrs:{type:"daterange",align:"right","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","picker-options":e.pickerOptions},model:{value:e.filters.dates,callback:function(t){e.$set(e.filters,"dates",t)},expression:"filters.dates"}}),t("p",{staticClass:"my-2 primary total-price"},[e._v(" Total Sale - "+e._s(e.sales.results.reduce((e,t)=>e+t.total,0).toFixed("supplier"===e.store.type?2:0))+e._s("supplier"===e.store.type?"¥":"MMK")+" ")])],1),t("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click"}},[t("p",{staticClass:"font-weight-bold"},[e._v("Sort By")]),t("div",{staticClass:"b-divider my-2"}),t("div",{staticClass:"w-100"},e._l(e.sortList,(function(s,a){return t("el-radio",{key:s.name,class:a!==e.sortList.length-1&&"mb-3",attrs:{label:s.value},model:{value:e.filters.order_by,callback:function(t){e.$set(e.filters,"order_by",t)},expression:"filters.order_by"}},[e._v(" "+e._s(s.name)+" ")])})),1),t("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0,0,0,0.1)",expression:"'rgba(0,0,0,0.1)'",modifiers:{400:!0}}],staticClass:"flat ml-2 my-0 sm-hide no-width",attrs:{slot:"reference"},slot:"reference"},[t("i",{staticClass:"bx bx-sort mr-1"}),e._v(" Sort ")])],1),t("div",{staticClass:"md-hide w-100 lg-hide"},[t("el-input",{staticClass:"w-100 mb-sm-2",attrs:{placeholder:"Type something","prefix-icon":"bx bx-search"},on:{change:e.setFilterQuery},model:{value:e.inputHelper,callback:function(t){e.inputHelper=t},expression:"inputHelper"}}),t("div",{staticClass:"flex-x-between"},[t("el-date-picker",{staticStyle:{"z-index":"100"},attrs:{type:"daterange",align:"right","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","picker-options":e.pickerOptions},model:{value:e.filters.dates,callback:function(t){e.$set(e.filters,"dates",t)},expression:"filters.dates"}}),t("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click"}},[t("p",{staticClass:"font-weight-bold"},[e._v("Sort By")]),t("div",{staticClass:"b-divider my-2"}),t("div",{staticClass:"w-100"},e._l(e.sortList,(function(s,a){return t("el-radio",{key:s.name,class:a!==e.sortList.length-1&&"mb-3",attrs:{label:s.value},model:{value:e.filters.order_by,callback:function(t){e.$set(e.filters,"order_by",t)},expression:"filters.order_by"}},[e._v(" "+e._s(s.name)+" ")])})),1),t("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0,0,0,0.1)",expression:"'rgba(0,0,0,0.1)'",modifiers:{400:!0}}],staticClass:"flat ml-2 my-0 no-width",attrs:{slot:"reference"},slot:"reference"},[t("i",{staticClass:"bx bx-sort mr-1"}),e._v(" Sort ")])],1)],1)],1)],1)]),t("div",{staticClass:"w-100 sm-hide el-main-table"},[t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.sales.results},on:{"row-click":t=>e.$router.push({name:"Edit order",params:{id:t.id}})},scopedSlots:e._u([{key:"empty",fn:function(){return[t("el-empty",{attrs:{description:"No data found!"},scopedSlots:e._u([{key:"image",fn:function(){return[t("empty")]},proxy:!0}],null,!1,81314202)})]},proxy:!0}],null,!1,2777114744)},[t("el-table-column",{attrs:{label:"Order",property:"sale_no",width:"100"}}),t("el-table-column",{attrs:{width:"150",label:"Date of order"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.date)+" ")]}}],null,!1,2797572233)}),"supplier"==e.store.type?t("el-table-column",{attrs:{label:"Plan",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(("safe delivery"==t.row.delivery_company_name?"Normal Plan":t.row.delivery_company_name)||"-")+" ")]}}],null,!1,524349817)}):e._e(),"supplier"!==e.store.type?t("el-table-column",{attrs:{label:"Type",width:"150"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-tag",{staticClass:"rounded",attrs:{type:"In Stock"==s.row.type?"success":"warning"}},[e._v(" "+e._s("Instock"==s.row.type?"-":s.row.type))])]}}],null,!1,3678172572)}):e._e(),t("el-table-column",{attrs:{label:"Note",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.note||"-")+" ")]}}],null,!1,1370674720)}),t("el-table-column",{attrs:{label:"Exported By",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.exported_by||"-")+" ")]}}],null,!1,3805086225)}),t("el-table-column",{attrs:{label:"Customer",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.customer_name||"-")+" ")]}}],null,!1,3390116620)}),t("el-table-column",{attrs:{label:"Total",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.total+("supplier"===e.store.type?"¥":"MMK"))+" ")]}}],null,!1,1218801854)}),"supplier"==e.store.type?t("el-table-column",{attrs:{label:"Type",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.profit_amount+"¥")+" ")]}}],null,!1,4067148694)}):e._e(),t("el-table-column",{attrs:{label:"Status",width:"200"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-tag",{staticClass:"rounded",attrs:{type:"success"}},[e._v(" "+e._s(s.row.status))])]}}],null,!1,432306391)}),"supplier"==e.store.type?t("el-table-column",{attrs:{label:"Code",width:"150"},scopedSlots:e._u([{key:"default",fn:function(s){return["Complete"==e.isCompleteCode(s.row.products)?t("el-tag",{staticClass:"rounded",attrs:{type:"success"}},[t("i",{staticClass:"bx bx-check-circle"}),e._v(" Completed")]):e._e(),"No code"==e.isCompleteCode(s.row.products)?t("el-tag",{staticClass:"rounded",attrs:{type:"danger"}},[t("i",{staticClass:"bx bx-time-five"}),e._v(" Missing")]):e._e(),"Has some codes"==e.isCompleteCode(s.row.products)?t("el-tag",{staticClass:"rounded",attrs:{type:"warning"}},[t("i",{staticClass:"bx bx-time-five"}),e._v(" Has some codes")]):e._e()]}}],null,!1,1894547882)}):e._e(),t("el-table-column",{attrs:{label:"Fulfilled"},scopedSlots:e._u([{key:"default",fn:function(s){return[e.isFulfilled(s.row)?t("el-tag",{staticClass:"rounded",attrs:{type:"success"}},[t("i",{staticClass:"bx bx-check-circle"}),e._v(" Fulfilled")]):t("el-tag",{staticClass:"rounded",attrs:{type:"danger"}},[t("i",{staticClass:"bx bx-time-five"}),e._v(" Unfulfilled")])]}}],null,!1,942551558)})],1),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"flex-center sm-hide"},[t("p",{staticClass:"py-3"})])],1)]),e._l(e.sales.results,(function(s){return t("div",{key:s.id,staticClass:"sale-item box lg-hide md-hide mb-sm-3",on:{click:()=>e.$router.push({name:"Edit order",params:{id:s.id}})}},[t("div",{staticClass:"flex-x-between mb-2"},[t("p",{staticClass:"sm-text"},[e._v(e._s(s.sale_no))]),t("p",{staticClass:"sm-text"},[e._v(e._s(s.date))])]),t("div",{staticClass:"flex-x-between mb-2"},[t("p",{staticClass:"text-bold"},[e._v(e._s(s.customer_name))]),t("p",{staticClass:"primary text-bold"},[e._v(" "+e._s(s.total+("supplier"===e.store.type?"¥":"MMK"))+" ")])]),t("div",{staticClass:"flex-align-center flex-wrap"},[t("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"info"}},[t("i",{staticClass:"bx bx-user"}),e._v(" "+e._s(s.exported_by))]),t("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"In Stock"==s.type?"success":"warning"}},[e._v(" "+e._s("Instock"==s.type?"-":s.type))]),t("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"success"}},[e._v(" "+e._s(s.status))]),"Complete"==e.isCompleteCode(s.products)&&"supplier"==e.store.type?t("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"success"}},[t("i",{staticClass:"bx bx-check-circle"}),e._v("Code Completed ")]):e._e(),"Complete"!==e.isCompleteCode(s.products)&&"supplier"==e.store.type?t("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"danger"}},[t("i",{staticClass:"bx bx-time-five"}),e._v("Code Missing")]):e._e(),e.isFulfilled(s)?t("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"success"}},[t("i",{staticClass:"bx bx-check-circle"}),e._v(" Fulfilled")]):t("el-tag",{staticClass:"rounded mr-2 mb-2",attrs:{type:"danger"}},[t("i",{staticClass:"bx bx-time-five"}),e._v(" Unfulfilled")])],1),t("p",{staticClass:"sm-text mt-2"},[e._v("Note : "+e._s(s.note))])])})),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"lg-hide box md-hide mb-3"},[t("p",{staticClass:"py-3"})])],2)]):e._e()},l=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex-align-center"},[t("h3",{staticClass:"my-0"},[e._v("Orders")])])}],i=s("2f62"),r=s("d50a"),o={data(){return{inputHelper:"",filters:{query:"",order_by:"-created_at",pageSize:50,status:"",delivery:"",dates:"",is_fulfilled:!1,payment_status:"",page:1},loading:!1,actions:[{label:"Archive sales",value:"Archived"},{label:"Set as Active",value:"Active"},{label:"Set as Completed",value:"Completed"},{label:"Set as Canceled",value:"Canceled"}],sortList:[{name:"Created (oldest first)",value:"created_at"},{name:"Created (newest first)",value:"-created_at"},{name:"Updated (oldest first)",value:"updated_at"},{name:"Updated (newest first)",value:"-updated_at"},{name:"Customer A–Z",value:"customer__name"},{name:"Customer Z–A",value:"-customer__name"}],pickerOptions:{shortcuts:[{text:"Last week",onClick(e){const t=new Date,s=new Date;t.setTime(t.getTime()+864e5),s.setTime(s.getTime()-6048e5),e.$emit("pick",[s,t])}},{text:"Last month",onClick(e){const t=new Date,s=new Date;t.setTime(t.getTime()+864e5),s.setTime(s.getTime()-2592e6),e.$emit("pick",[s,t])}},{text:"Last 3 months",onClick(e){const t=new Date,s=new Date;t.setTime(t.getTime()+864e5),s.setTime(s.getTime()-7776e6),e.$emit("pick",[s,t])}},{text:"Last 1 year",onClick(e){const t=new Date,s=new Date;t.setTime(t.getTime()+864e5),s.setTime(s.getTime()-31536e6),e.$emit("pick",[s,t])}}]},loadingDelivey:!1,deliveries:[],selectedDate:null,selectedDelivery:null,allCheck:!1,gettingOrder:!1,page:1,max:5,selected:[],isReadyToGet:!1,sales:{current_page:1,results:[],total_pages:0,next:1},scroll:0}},components:{empty:r["b"]},computed:{...Object(i["c"])(["isReady","store"])},created(){this.$store.commit("setIsReady",!1),this.getDeliveries()},watch:{filters:{handler:function(e){this.isReadyToGet&&(null===e.dates&&(e.dates=[],e.dates[0]="",e.dates[1]=""),this.$router.push({path:"/orders",query:{status:e.status,query:e.query,page_size:e.pageSize,from_date:e.dates[0],to_date:e.dates[1],page:e.page,order_by:e.order_by}}).catch(()=>{}))},deep:!0}},mounted(){this.$store.commit("setSidebar",!1),this.filters={query:this.$route.query.query||"",order_by:this.$route.query.order_by||"-created_at",pageSize:this.$route.query.page_size||"25",status:this.$route.query.status||"",delivery:"",dates:[this.$route.query.from_date||"",this.$route.query.to_date||""],page:this.$route.query.page||"1",is_fulfilled:!1,payment_status:""},this.inputHelper=this.$route.query.query||"",this.isReadyToGet=!0,this.getSales(),window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(e){const t=e.target.scrollingElement.scrollHeight-3*e.target.scrollingElement.clientHeight;t<e.target.scrollingElement.scrollTop&&(this.loading||this.getSales())},setFilterQuery(){this.filters.query=this.inputHelper},isFulfilled(e){var t=!0;return e.products.forEach(e=>{parseFloat(e.quantity)!==parseFloat(e.number_of_fullfilled)&&(t=!1)}),t},toggleSelection(e){e?e.forEach(e=>{this.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.selected=e},changeActions(e){"Archive sales"==e?this.updateStatus("Archived"):"Unarchive sales"==e&&this.updateStatus("Active")},updateStatus(e){this.updatingStatus=!0;var t=[];this.selected.forEach(e=>t.push(e.id)),this.$axios.put("sales-status/",{status:e,ids:t}).then(()=>{this.selected=[],this.getSales()}).catch(e=>{this.$noti.display({message:e,status:"error",color:"error"})})},getSales(){if(this.sales.next){this.loading=!0,this.gettingOrder=!0,null===this.filters.dates&&(this.filters.dates=[],this.filters.dates[0]="",this.filters.dates[1]="");var e=`sales/?page=${this.sales.next}&page_size=${this.filters.pageSize}&location=&query=${this.filters.query}&status=${this.filters.status}&delivery=${this.filters.delivery}&from_date=${this.filters.dates[0]}&to_date=${this.filters.dates[1]}&order_by=${this.filters.order_by}`;this.$axios.get(e).then(e=>{const t=window.scrollY;this.sales={...e.data,results:[...this.sales.results,...e.data.results]},setTimeout(()=>{window.scroll(0,t),this.loading=!1},800),this.$store.commit("setIsReady",!0)}).catch(e=>{this.loading=!1,this.gettingOrder=!1,this.$noti.display({message:e,status:"error",color:"error"})})}},getDeliveries(){var e="deliveries/?page=1&query=&order_by=-name&page_size=1000000";this.$axios.get(e).then(e=>{this.loadingDelivery=!1,this.deliveries=e.data.results}).catch(e=>{this.loadingDelivery=!1,this.$noti.display({message:e,status:"error",color:"error"})})},isCompleteCode(e){var t="Complete",s=!1;return e.forEach(e=>{e.link?s=!0:t="No code"}),"No code"==t&&s?"Has some codes":t},getItemsQuantity(e){return e.products.reduce((e,t)=>e+parseFloat(t.quantity),0)}}},n=o,d=s("2877"),c=Object(d["a"])(n,a,l,!1,null,null,null);t["default"]=c.exports},a640:function(e,t,s){"use strict";var a=s("d039");e.exports=function(e,t){var s=[][e];return!!s&&a((function(){s.call(null,t||function(){return 1},1)}))}},d58f:function(e,t,s){var a=s("59ed"),l=s("7b0b"),i=s("44ad"),r=s("07fa"),o=TypeError,n=function(e){return function(t,s,n,d){a(s);var c=l(t),u=i(c),p=r(c),m=e?p-1:0,f=e?-1:1;if(n<2)while(1){if(m in u){d=u[m],m+=f;break}if(m+=f,e?m<0:p<=m)throw o("Reduce of empty array with no initial value")}for(;e?m>=0:p>m;m+=f)m in u&&(d=s(d,u[m],m,c));return d}};e.exports={left:n(!1),right:n(!0)}}}]);
//# sourceMappingURL=chunk-7ff8a9bf.3609b9ea.js.map