(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d05cb"],{"683f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isReady?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-3 flex-x-between"},[e._m(0),a("div",{staticClass:"flex-align-center flex-end"},[a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"mr-3 my-0",attrs:{type:"primary"},on:{click:e.printPdf}},[e._v(" Print ")]),a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"mx-0 my-0",attrs:{type:"primary"},on:{click:function(t){e.openFulfillDialog=!0}}},[e._v(" Add code ")])],1)]),a("div",{staticClass:"col-12 list-table mt-3"},[a("div",{staticClass:"box pt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 flex-align-center"},[a("p",{staticClass:"mx-0 table-tab",class:""===e.filters.status&&"active-table-tab",on:{click:function(t){e.filters.status=""}}},[e._v(" All ")]),a("p",{staticClass:"mx-0 table-tab",class:"Received"===e.filters.status&&"active-table-tab",on:{click:function(t){e.filters.status="Received"}}},[e._v(" Received ")]),a("p",{staticClass:"mx-0 table-tab",class:"Pending"===e.filters.status&&"active-table-tab",on:{click:function(t){e.filters.status="Pending"}}},[e._v(" Pending ")]),a("p",{staticClass:"mx-0 table-tab",class:"Cancelled"===e.filters.status&&"active-table-tab",on:{click:function(t){e.filters.status="Cancelled"}}},[e._v(" Cancelled ")])]),e._m(1),a("div",{staticClass:"\n            col-12\n            mb-1\n            d-flex\n            justify-content-between\n            align-items-center\n          "},[a("div",{staticClass:"flex-align-center"},[a("el-select",{staticClass:"mr-2 page-size-selector mr-2",model:{value:e.filters.pageSize,callback:function(t){e.$set(e.filters,"pageSize",t)},expression:"filters.pageSize"}},e._l(30,(function(e){return a("el-option",{key:e,attrs:{label:5*e,value:5*e}})})),1),a("el-input",{staticClass:"mr-2 table-search",attrs:{placeholder:"Type something","prefix-icon":"bx bx-search"},model:{value:e.filters.query,callback:function(t){e.$set(e.filters,"query",t)},expression:"filters.query"}})],1),a("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click"}},[a("p",{staticClass:"font-weight-bold"},[e._v("Sort By")]),a("div",{staticClass:"b-divider my-2"}),a("div",{staticClass:"w-100"},e._l(e.sortList,(function(t,s){return a("el-radio",{key:t.name,class:s!==e.sortList.length-1&&"mb-3",attrs:{label:t.value},model:{value:e.filters.order_by,callback:function(t){e.$set(e.filters,"order_by",t)},expression:"filters.order_by"}},[e._v(" "+e._s(t.name)+" ")])})),1),a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0,0,0,0.1)",expression:"'rgba(0,0,0,0.1)'",modifiers:{400:!0}}],staticClass:"flat no-width",attrs:{slot:"reference"},slot:"reference"},[a("i",{staticClass:"bx bx-sort mr-1"}),e._v(" Sort ")])],1)],1)]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"w-100 el-main-table"},[e.selected.length>0?a("div",{staticClass:"el-table-header"},[a("div",{staticClass:"d-flex align-items-center"},[a("el-checkbox",{attrs:{indeterminate:e.selected.length==e.orders.results.length},on:{change:e.$refs.multipleTable.toggleAllSelection},model:{value:e.allCheck,callback:function(t){e.allCheck=t},expression:"allCheck"}},[e._v(e._s(e.selected.length)+" selected")]),a("el-dropdown",{attrs:{trigger:"click"},on:{command:e.updateStatus}},[a("p",{staticClass:"el-dropdown-link ml-3 pointer primary hover-underline"},[e._v(" Actions "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e._l(e.actions,(function(t){return a("el-dropdown-item",{key:t.value,attrs:{command:t.value}},[e._v(" "+e._s(t.label))])})),a("el-dropdown-item",{attrs:{disabled:""}},[e._v(" No Action")])],2)],1)],1)]):e._e(),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.orders.results},on:{"row-click":function(t){return e.editCode(t)}},scopedSlots:e._u([{key:"empty",fn:function(){return[a("el-empty",{attrs:{description:"No data found!"},scopedSlots:e._u([{key:"image",fn:function(){return[a("empty")]},proxy:!0}],null,!1,81314202)})]},proxy:!0}],null,!1,2777114744)},[a("el-table-column",{attrs:{width:"50",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}],null,!1,3411552848)}),a("el-table-column",{attrs:{label:"Code",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.code)+" ")]}}],null,!1,3302545424)}),a("el-table-column",{attrs:{label:"Status",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return["Received"==t.row.status?a("el-tag",{staticClass:"rounded",attrs:{type:"success"}},[a("i",{staticClass:"bx bx-check-circle"}),e._v(" "+e._s(t.row.status))]):e._e(),"Cancelled"==t.row.status?a("el-tag",{staticClass:"rounded",attrs:{type:"danger"}},[a("i",{staticClass:"bx bx-time-five"}),e._v(e._s(t.row.status))]):e._e(),"Pending"==t.row.status?a("el-tag",{staticClass:"rounded",attrs:{type:"warning"}},[a("i",{staticClass:"bx bx-time-five"}),e._v(e._s(t.row.status))]):e._e()]}}],null,!1,1600782108)}),a("el-table-column",{attrs:{label:"App Name",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.app)+" ")]}}],null,!1,771097180)}),a("el-table-column",{attrs:{label:"Date"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.$moment(t.row.created_at).format("DD/MM/YYYY"))+" ")]}}],null,!1,1669753966)})],1),1!==e.orders.total_pages?a("div",{staticClass:"el-table-footer"},[a("el-pagination",{attrs:{background:"","current-page":e.orders.current_page,layout:"prev, pager, next","page-count":e.orders.total_pages},on:{"current-change":function(t){return e.orders.current_page=t,e.getOrders()}}})],1):e._e()],1)])]),a("el-dialog",{staticClass:"default-dialog",attrs:{"show-close":!1,visible:e.openFulfillDialog},on:{"update:visible":function(t){e.openFulfillDialog=t}},scopedSlots:e._u([{key:"title",fn:function(){return[a("div",{staticClass:"d-flex align-items-center justify-content-between"},[a("h5",{staticClass:"my-0"},[e._v("Create Code")]),a("div",{staticClass:"d-flex align-items-center"})])]},proxy:!0},{key:"footer",fn:function(){return[a("div",{staticClass:"d-flex align-items-center justify-content-end"},[a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(var(--primary),0.2)",expression:"'rgba(var(--primary),0.2)'",modifiers:{400:!0}}],staticClass:"my-0 flat mr-0",attrs:{type:"primary"},on:{click:function(t){e.openFulfillDialog=!1}}},[e._v(" Cancel ")]),a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"my-0 mr-0",attrs:{type:"primary",loading:e.creatingCode},on:{click:e.createNewCode}},[e._v(" Done ")])],1)]},proxy:!0}],null,!1,2088536935)},[a("div",{staticClass:"con-content"},[a("el-input",{staticClass:"w-100 mb-3",attrs:{placeholder:"Code"},model:{value:e.code.code,callback:function(t){e.$set(e.code,"code",t)},expression:"code.code"}}),a("el-select",{staticClass:"w-100 mb-3",model:{value:e.code.app,callback:function(t){e.$set(e.code,"app",t)},expression:"code.app"}},[a("el-option",{attrs:{label:"Pin Dou Dou",value:"Pin Dou Dou"}}),a("el-option",{attrs:{label:"Tao Bao",value:"Tao Bao"}}),a("el-option",{attrs:{label:"1688",value:"1688"}})],1),a("el-select",{staticClass:"w-100 mb-3",model:{value:e.code.status,callback:function(t){e.$set(e.code,"status",t)},expression:"code.status"}},[a("el-option",{attrs:{label:"Received",value:"Received"}}),a("el-option",{attrs:{label:"Pending",value:"Pending"}}),a("el-option",{attrs:{label:"Cancelled",value:"Cancelled"}})],1)],1)]),a("el-dialog",{staticClass:"default-dialog",attrs:{"show-close":!1,visible:e.editCodeDialog},on:{"update:visible":function(t){e.editCodeDialog=t}},scopedSlots:e._u([{key:"title",fn:function(){return[a("div",{staticClass:"d-flex align-items-center justify-content-between"},[a("h5",{staticClass:"my-0"},[e._v("Edit Code")]),a("div",{staticClass:"d-flex align-items-center"})])]},proxy:!0},{key:"footer",fn:function(){return[a("div",{staticClass:"d-flex align-items-center justify-content-end"},[a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(var(--primary),0.2)",expression:"'rgba(var(--primary),0.2)'",modifiers:{400:!0}}],staticClass:"my-0 flat mr-0",attrs:{type:"primary"},on:{click:function(t){e.editCodeDialog=!1}}},[e._v(" Cancel ")]),a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"my-0 mr-0",attrs:{type:"primary",loading:e.updatingCode},on:{click:e.updateCode}},[e._v(" Done ")])],1)]},proxy:!0}],null,!1,1895284534)},[a("div",{staticClass:"con-content"},[a("el-input",{staticClass:"w-100 mb-3",attrs:{placeholder:"Code"},model:{value:e.editingCode.code,callback:function(t){e.$set(e.editingCode,"code",t)},expression:"editingCode.code"}}),a("el-select",{staticClass:"w-100 mb-3",model:{value:e.editingCode.app,callback:function(t){e.$set(e.editingCode,"app",t)},expression:"editingCode.app"}},[a("el-option",{attrs:{label:"Pin Dou Dou",value:"Pin Dou Dou"}}),a("el-option",{attrs:{label:"Tao Bao",value:"Tao Bao"}}),a("el-option",{attrs:{label:"1688",value:"1688"}})],1),a("el-select",{staticClass:"w-100 mb-3",model:{value:e.editingCode.status,callback:function(t){e.$set(e.editingCode,"status",t)},expression:"editingCode.status"}},[a("el-option",{attrs:{label:"Received",value:"Received"}}),a("el-option",{attrs:{label:"Pending",value:"Pending"}}),a("el-option",{attrs:{label:"Cancelled",value:"Cancelled"}})],1)],1)])],1):e._e()},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-align-center"},[a("h3",{staticClass:"my-0"},[e._v("COdes")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12"},[a("div",{staticClass:"b-divider mb-1 mt-0"})])}],i=(a("99af"),a("4160"),a("159b"),a("5530")),n=a("2f62"),o=a("d50a"),r={data:function(){return{filters:{query:"",order_by:"-updated_at",pageSize:10,status:"",supplier:"",date:"",is_fulfilled:!1},openFulfillDialog:!1,editCodeDialog:!1,creatingCode:!1,updatingCode:!1,loading:!1,code:{code:"",app:"Pin Dou Dou",status:"Pending"},editingCode:{},actions:[],sortList:[{name:"Created (oldest first)",value:"created_at"},{name:"Created (newest first)",value:"-created_at"},{name:"Updated (oldest first)",value:"updated_at"},{name:"Updated (newest first)",value:"-updated_at"},{name:"Supplier A–Z",value:"supplier__name"},{name:"Supplier Z–A",value:"-supplier__name"}],suppliers:[],selectedDate:null,allCheck:!1,gettingOrder:!1,page:1,max:5,selected:[],orders:{current_page:1,results:[],total_pages:0}}},computed:Object(i["a"])({},Object(n["c"])(["isReady","store"])),components:{empty:o["c"]},created:function(){this.$store.commit("setIsReady",!1),this.getOrders()},watch:{"orders.current_page":{handler:function(){this.getOrders()},deep:!0},filters:{handler:function(){this.getOrders()},deep:!0}},methods:{handleSelectionChange:function(e){this.selected=e},printPdf:function(){var e=this,t="";this.orders.results.forEach((function(a,s){t+="<tr>\n            <td>".concat(s+1,"</td>\n            <td>").concat(a.code,"</td>\n            <td>").concat("Received"==a.status?"Yes":"No","</td>\n             <td>").concat(e.$moment(a.created_at).format("DD/MM/YYYY"),"</td>\n        </tr>")}));var a='\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Order Codes</title>\n    <style>\n      table {\n        font-family: arial, sans-serif;\n        border-collapse: collapse;\n        width: 100%;\n        margin-bottom: 15px;\n      }\n\n      td,\n      th {\n        border: 1px solid #dddddd;\n        text-align: left;\n        padding: 8px;\n      }\n    </style>\n  </head>\n  <body>\n    <table>\n      <thead>\n        <tr>\n          <th style="width:50px;">No.</th>\n          <th>Code</th>\n          <th>Received</th>\n          <th>Date</th>\n        </tr>\n      </thead>\n      <tbody id="table-body">'.concat(t,"</tbody>\n    </table>\n  </body>\n</html>\n"),s=window.open("","Print-Window");s.document.open(),s.document.write(a),s.window.print()},editCode:function(e){this.editingCode=e,this.editCodeDialog=!0},updateCode:function(){var e=this;this.updatingCode=!0,this.$axios.put("order/",{data:this.editingCode}).then((function(){e.updatingCode=!1,e.editingCode={code:"",app:"Pin Dou Dou",status:"Pending"},e.editCodeDialog=!1,e.getOrders(),e.$noti.display({message:"Successfully updated!",status:"success",color:"success"})})).catch((function(t){e.editCodeDialog=!1,e.updatingCode=!1,e.$noti.display({message:t,status:"error",color:"error"})}))},createNewCode:function(){var e=this;this.creatingCode=!0,this.$axios.post("order/",{data:this.code}).then((function(){e.code={code:"",app:"Pin Dou Dou",status:"Pending"},e.creatingCode=!1,e.openFulfillDialog=!1,e.getOrders(),e.$noti.display({message:"Successfully created!",status:"success",color:"success"})})).catch((function(t){e.creatingCode=!1,e.openFulfillDialog=!1,e.$noti.display({message:t,status:"error",color:"error"})}))},getOrders:function(){var e=this;this.loading=!0,this.gettingOrder=!0,null===this.filters.date&&(this.filters.date="");var t="order/list/?page=".concat(this.orders.current_page,"&page_size=").concat(this.filters.pageSize,"&query=").concat(this.filters.query,"&status=").concat(this.filters.status,"&order_by=").concat(this.filters.order_by);this.$axios.get(t).then((function(t){e.loading=!1,e.gettingOrder=!1,e.orders.results=t.data.results,e.orders.total_pages=t.data.total_pages,e.$store.commit("setIsReady",!0)})).catch((function(t){e.loading=!1,e.gettingOrder=!1,e.$noti.display({message:t,status:"error",color:"error"})}))}}},d=r,c=a("2877"),u=Object(c["a"])(d,s,l,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0d05cb.6000cf15.js.map