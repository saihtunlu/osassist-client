(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38b5c89a"],{"683f":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isReady?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-3 flex-x-between"},[e._m(0),a("div",{staticClass:"flex-align-center flex-end"},[a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"mr-3 my-0",attrs:{type:"primary"},on:{click:e.printPdf}},[e._v(" Print ")])],1)]),a("div",{staticClass:"col-12 list-table mt-3"},[a("div",{staticClass:"box pt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 flex-align-center"},[a("p",{staticClass:"mx-0 table-tab",class:e.filters.is_fulfilled&&"active-table-tab",on:{click:function(t){e.filters.is_fulfilled=!0}}},[e._v(" Fulfilled ")]),a("p",{staticClass:"mx-0 table-tab",class:!e.filters.is_fulfilled&&"active-table-tab",on:{click:function(t){e.filters.is_fulfilled=!1}}},[e._v(" Not Fulfilled ")])]),e._m(1),a("div",{staticClass:"\n            col-12\n            mb-1\n            d-flex\n            justify-content-between\n            align-items-center\n          "},[a("div",{staticClass:"flex-align-center"},[a("el-select",{staticClass:"mr-2 page-size-selector mr-2",model:{value:e.filters.pageSize,callback:function(t){e.$set(e.filters,"pageSize",t)},expression:"filters.pageSize"}},e._l(300,(function(e){return a("el-option",{key:e,attrs:{label:5*e,value:5*e}})})),1),a("el-input",{staticClass:"mr-2 table-search",attrs:{placeholder:"Type something","prefix-icon":"bx bx-search"},model:{value:e.filters.query,callback:function(t){e.$set(e.filters,"query",t)},expression:"filters.query"}})],1),a("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click"}},[a("p",{staticClass:"font-weight-bold"},[e._v("Sort By")]),a("div",{staticClass:"b-divider my-2"}),a("div",{staticClass:"w-100"},e._l(e.sortList,(function(t,l){return a("el-radio",{key:t.name,class:l!==e.sortList.length-1&&"mb-3",attrs:{label:t.value},model:{value:e.filters.order_by,callback:function(t){e.$set(e.filters,"order_by",t)},expression:"filters.order_by"}},[e._v(" "+e._s(t.name)+" ")])})),1),a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0,0,0,0.1)",expression:"'rgba(0,0,0,0.1)'",modifiers:{400:!0}}],staticClass:"flat no-width",attrs:{slot:"reference"},slot:"reference"},[a("i",{staticClass:"bx bx-sort mr-1"}),e._v(" Sort ")])],1)],1)]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"w-100 el-main-table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.data},scopedSlots:e._u([{key:"empty",fn:function(){return[a("el-empty",{attrs:{description:"No data found!"},scopedSlots:e._u([{key:"image",fn:function(){return[a("empty")]},proxy:!0}],null,!1,81314202)})]},proxy:!0}],null,!1,2777114744)},[a("el-table-column",{attrs:{width:"50",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}],null,!1,3411552848)}),a("el-table-column",{attrs:{label:"Code",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.link)+" ")]}}],null,!1,3025792349)}),a("el-table-column",{attrs:{label:"Status"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isFulfilled(t.row)?a("el-tag",{staticClass:"rounded",attrs:{type:"success"}},[a("i",{staticClass:"bx bx-check-circle"}),e._v(" Fulfilled")]):a("el-tag",{staticClass:"rounded",attrs:{type:"danger"}},[a("i",{staticClass:"bx bx-time-five"}),e._v("Not Fulfilled")])]}}],null,!1,1318428680)}),a("el-table-column",{attrs:{label:"Order ID",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.sale)+" ")]}}],null,!1,9451334)}),a("el-table-column",{attrs:{label:"Customer",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.customer_name)+" ")]}}],null,!1,2411052353)}),a("el-table-column",{attrs:{label:"Date"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.created_at)+" ")]}}],null,!1,2818708375)})],1),1!==e.orders.total_pages?a("div",{staticClass:"el-table-footer"},[a("el-pagination",{attrs:{background:"","current-page":e.orders.current_page,layout:"prev, pager, next","page-count":e.orders.total_pages},on:{"current-change":function(t){return e.orders.current_page=t,e.getOrders()}}})],1):e._e()],1)])])]):e._e()},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-align-center"},[a("h3",{staticClass:"my-0"},[e._v("COdes")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12"},[a("div",{staticClass:"b-divider mb-1 mt-0"})])}],i=(a("99af"),a("4de4"),a("4160"),a("9911"),a("159b"),a("5530")),s=a("2f62"),r=a("d50a"),o={data:function(){return{filters:{query:"",order_by:"-updated_at",pageSize:10,supplier:"",date:"",is_fulfilled:!1},openFulfillDialog:!1,openCreateMultipleDialog:!1,editCodeDialog:!1,creatingCode:!1,creatingMultiple:!1,updatingCode:!1,loading:!1,code:{code:"",app:"Pin Dou Dou",status:"Pending"},editingCode:{},actions:[{label:"Set as Received",value:"Received"},{label:"Set as Pending",value:"Pending"},{label:"Set as Cancelled",value:"Cancelled"},{label:"Delete",value:"Delete"}],sortList:[{name:"Created (oldest first)",value:"created_at"},{name:"Created (newest first)",value:"-created_at"},{name:"Updated (oldest first)",value:"updated_at"},{name:"Updated (newest first)",value:"-updated_at"},{name:"Supplier A–Z",value:"supplier__name"},{name:"Supplier Z–A",value:"-supplier__name"}],suppliers:[],selectedDate:null,allCheck:!1,gettingOrder:!1,page:1,max:5,selected:[],data:[],orders:{current_page:1,results:[],total_pages:0},cargos:[],loadingCargos:!1,deletingCode:!1,updatingMultiple:!1}},computed:Object(i["a"])({},Object(s["c"])(["isReady","store"])),components:{empty:r["c"]},created:function(){this.$store.commit("setIsReady",!1),this.getOrders()},watch:{"orders.current_page":{handler:function(){this.getOrders()},deep:!0},filters:{handler:function(){this.getOrders()},deep:!0}},methods:{isFulfilled:function(e){return parseFloat(e.quantity)===parseFloat(e.number_of_fullfilled)},printPdf:function(){var e="";this.data.forEach((function(t,a){e+="<tr>\n                          <td>".concat(a+1,"</td>\n                          <td>").concat(t.link,"</td>\n                          <td>").concat(t.created_at,"</td>\n                      </tr>")}));var t='\n                <!DOCTYPE html>\n                <html lang="en">\n                  <head>\n                    <meta charset="UTF-8" />\n                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n                    <title>Order Codes</title>\n                    <style>\n                      table {\n                        font-family: arial, sans-serif;\n                        border-collapse: collapse;\n                        width: 100%;\n                        margin-bottom: 15px;\n                      }\n\n                      td,\n                      th {\n                        border: 1px solid #dddddd;\n                        text-align: left;\n                        padding: 8px;\n                      }\n                    </style>\n                  </head>\n                  <body>\n                    <table>\n                      <thead>\n                        <tr>\n                          <th style="width:50px;">No.</th>\n                          <th>Code</th>\n                          <th>Date</th>\n                        </tr>\n                      </thead>\n                      <tbody id="table-body">'.concat(e,"</tbody>\n                    </table>\n                  </body>\n                </html>\n"),a=window.open("","Print-Window");a.document.open(),a.document.write(t),a.window.print()},getOrders:function(){var e=this;this.loading=!0,this.gettingOrder=!0,null===this.filters.date&&(this.filters.date="");var t="sale-products/?page=".concat(this.orders.current_page,"&page_size=").concat(this.filters.pageSize,"&query=").concat(this.filters.query,"&is_fulfilled=").concat(this.filters.is_fulfilled,"&order_by=").concat(this.filters.order_by);this.$axios.get(t).then((function(t){e.loading=!1,e.gettingOrder=!1;var a=[];t.data.results.forEach((function(e){if(e.link){var t=a.filter((function(t){return t.link==e.link}));0==t.length&&a.push(e)}})),e.data=a,e.orders.total_pages=t.data.total_pages,e.$store.commit("setIsReady",!0)})).catch((function(t){e.loading=!1,e.gettingOrder=!1,e.$noti.display({message:t,status:"error",color:"error"})}))}}},d=o,c=a("2877"),u=Object(c["a"])(d,l,n,!1,null,null,null);t["default"]=u.exports},"857a":function(e,t,a){var l=a("1d80"),n=/"/g;e.exports=function(e,t,a,i){var s=String(l(e)),r="<"+t;return""!==a&&(r+=" "+a+'="'+String(i).replace(n,"&quot;")+'"'),r+">"+s+"</"+t+">"}},9911:function(e,t,a){"use strict";var l=a("23e7"),n=a("857a"),i=a("af03");l({target:"String",proto:!0,forced:i("link")},{link:function(e){return n(this,"a","href",e)}})},af03:function(e,t,a){var l=a("d039");e.exports=function(e){return l((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}}}]);
//# sourceMappingURL=chunk-38b5c89a.b2a68316.js.map