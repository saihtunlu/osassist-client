(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210f72"],{b9af:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isReady?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-3 flex-x-between"},[e._m(0),a("div",{staticClass:"flex-align-center flex-end"},[a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"mr-3 my-0",attrs:{type:"primary"},on:{click:e.printPdf}},[e._v(" Print ")])],1)]),a("div",{staticClass:"col-12 list-table mt-3"},[a("div",{staticClass:"box pt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"\n            col-12\n            mb-1\n            d-flex\n            justify-content-between\n            align-items-center\n          "},[a("div",{staticClass:"flex-align-center"},[a("el-select",{staticClass:"mr-2 page-size-selector mr-2",model:{value:e.filters.pageSize,callback:function(t){e.$set(e.filters,"pageSize",t)},expression:"filters.pageSize"}},e._l(100,(function(e){return a("el-option",{key:e,attrs:{label:100*e,value:100*e}})})),1),a("el-input",{staticClass:"mr-2 table-search",attrs:{placeholder:"Type something","prefix-icon":"bx bx-search"},model:{value:e.filters.query,callback:function(t){e.$set(e.filters,"query",t)},expression:"filters.query"}})],1),a("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click"}},[a("p",{staticClass:"font-weight-bold"},[e._v("Sort By")]),a("div",{staticClass:"b-divider my-2"}),a("div",{staticClass:"w-100"},e._l(e.sortList,(function(t,l){return a("el-radio",{key:t.name,class:l!==e.sortList.length-1&&"mb-3",attrs:{label:t.value},model:{value:e.filters.order_by,callback:function(t){e.$set(e.filters,"order_by",t)},expression:"filters.order_by"}},[e._v(" "+e._s(t.name)+" ")])})),1),a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0,0,0,0.1)",expression:"'rgba(0,0,0,0.1)'",modifiers:{400:!0}}],staticClass:"flat no-width",attrs:{slot:"reference"},slot:"reference"},[a("i",{staticClass:"bx bx-sort mr-1"}),e._v(" Sort ")])],1)],1)]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"w-100 el-main-table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.data},scopedSlots:e._u([{key:"empty",fn:function(){return[a("el-empty",{attrs:{description:"No data found!"},scopedSlots:e._u([{key:"image",fn:function(){return[a("empty")]},proxy:!0}],null,!1,81314202)})]},proxy:!0}],null,!1,2777114744)},[a("el-table-column",{attrs:{width:"100",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}],null,!1,3411552848)}),a("el-table-column",{attrs:{label:"Code",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"50px",height:"50px","object-fit":"cover","border-radius":"5px","margin-right":"5px"},attrs:{src:t.row.image,alt:""},on:{click:function(a){return e.openLightBox(t.row.image)}}}),e._v(" "+e._s(t.row.name)+" ")]}}],null,!1,2991570349)}),a("el-table-column",{attrs:{label:"Order ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.sale)+" ")]}}],null,!1,9451334)}),a("el-table-column",{attrs:{label:"Customer"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.customer_name)+" ")]}}],null,!1,2411052353)}),a("el-table-column",{attrs:{label:"Delivery"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.delivery)+" ")]}}],null,!1,2110818817)}),a("el-table-column",{attrs:{label:"Date"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.created_at)+" ")]}}],null,!1,2818708375)})],1),1!==e.orders.total_pages?a("div",{staticClass:"el-table-footer"},[a("el-pagination",{attrs:{background:"","current-page":e.orders.current_page,layout:"prev, pager, next","page-count":e.orders.total_pages},on:{"current-change":function(t){return e.orders.current_page=t,e.getOrders()}}})],1):e._e()],1)])]),a("CoolLightBox",{attrs:{items:e.lightBoxFile,useZoomBar:!0,index:e.index},on:{close:function(t){e.index=null}}})],1):e._e()},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-align-center"},[a("h3",{staticClass:"my-0"},[e._v("Order Items")])])}],s=(a("99af"),a("5530")),i=a("2f62"),n=a("d50a"),o={data:function(){return{filters:{query:"",order_by:"-updated_at",pageSize:10,supplier:"",date:"",is_fulfilled:!1,delivery:""},lightBoxFile:[],index:null,openFulfillDialog:!1,openCreateMultipleDialog:!1,editCodeDialog:!1,creatingCode:!1,creatingMultiple:!1,updatingCode:!1,loading:!1,code:{code:"",app:"Pin Dou Dou",status:"Pending"},editingCode:{},actions:[{label:"Set as Received",value:"Received"},{label:"Set as Pending",value:"Pending"},{label:"Set as Cancelled",value:"Cancelled"},{label:"Delete",value:"Delete"}],sortList:[{name:"Created (oldest first)",value:"created_at"},{name:"Created (newest first)",value:"-created_at"},{name:"Updated (oldest first)",value:"updated_at"},{name:"Updated (newest first)",value:"-updated_at"}],suppliers:[],selectedDate:null,allCheck:!1,gettingOrder:!1,page:1,max:5,selected:[],data:[],orders:{current_page:1,results:[],total_pages:0},cargos:[],loadingCargos:!1,deletingCode:!1,updatingMultiple:!1,deliveries:[]}},computed:Object(s["a"])({},Object(i["c"])(["isReady","store"])),components:{empty:n["c"]},created:function(){this.$store.commit("setIsReady",!1),this.getOrders()},watch:{"orders.current_page":{handler:function(){this.getOrders()},deep:!0},filters:{handler:function(){this.getOrders()},deep:!0}},methods:{openLightBox:function(e){this.lightBoxFile=[e],this.index=0},getOrders:function(){var e=this;this.loading=!0,this.gettingOrder=!0,null===this.filters.date&&(this.filters.date="");var t="sale-products-os/?page=".concat(this.orders.current_page,"&page_size=").concat(this.filters.pageSize,"&query=").concat(this.filters.query,"&order_by=").concat(this.filters.order_by);this.$axios.get(t).then((function(t){e.loading=!1,e.gettingOrder=!1,e.data=t.data.results,e.orders.total_pages=t.data.total_pages,e.$store.commit("setIsReady",!0)})).catch((function(t){e.loading=!1,e.gettingOrder=!1,e.$noti.display({message:t,status:"error",color:"error"})}))}}},d=o,c=a("2877"),u=Object(c["a"])(d,l,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d210f72.5f0588f2.js.map