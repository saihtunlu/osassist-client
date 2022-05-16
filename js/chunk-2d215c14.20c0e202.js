(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d215c14"],{c00a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isReady?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 flex-x-between mt-3"},[a("div",{staticClass:"flex-align-center"},[a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"no-width mr-2 flat",attrs:{circle:"",type:"primary"},on:{click:function(t){return e.$router.go(-1)}}},[a("i",{staticClass:"bx bx-left-arrow-alt"})]),a("h5",{staticClass:"my-0"},[e._v("Customers")])],1),a("div",{staticClass:"flex-align-center flex-end"},[a("el-button",{staticClass:"mx-0",attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/settings/add-new-customer")}}},[e._v(" Add customer ")])],1)]),a("div",{staticClass:"col-12 list-table mt-3"},[a("div",{staticClass:"box pt-3"},[a("div",{staticClass:"row"},[e._m(0),e._m(1),a("div",{staticClass:"\n            col-12\n            mb-1\n            d-flex\n            justify-content-between\n            align-items-center\n          "},[a("div",{staticClass:"flex-align-center"},[a("el-select",{staticClass:"mr-2 page-size-selector mr-2",model:{value:e.filter.pageSize,callback:function(t){e.$set(e.filter,"pageSize",t)},expression:"filter.pageSize"}},e._l(10,(function(e){return a("el-option",{key:e,attrs:{label:5*e,value:5*e}})})),1),a("el-input",{staticClass:"mr-2 table-search",attrs:{placeholder:"Type something","prefix-icon":"bx bx-search"},model:{value:e.filter.query,callback:function(t){e.$set(e.filter,"query",t)},expression:"filter.query"}})],1),a("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click"}},[a("p",{staticClass:"font-weight-bold"},[e._v("Sort By")]),a("div",{staticClass:"b-divider my-2"}),a("div",{staticClass:"w-100"},e._l(e.sortList,(function(t,s){return a("el-radio",{key:t.name,class:s!==e.sortList.length-1&&"mb-3",attrs:{label:t.value},model:{value:e.filter.order_by,callback:function(t){e.$set(e.filter,"order_by",t)},expression:"filter.order_by"}},[e._v(" "+e._s(t.name)+" ")])})),1),a("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"mr-0 flat no-width",attrs:{slot:"reference",type:"dark"},slot:"reference"},[a("i",{staticClass:"bx bx-sort mr-1"}),e._v(" Sort ")])],1)],1)]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"w-100 el-main-table"},[e.selected.length>0?a("div",{staticClass:"el-table-header"},[a("div",{staticClass:"d-flex align-items-center"},[a("el-checkbox",{attrs:{indeterminate:e.selected.length==e.customers.results.length},on:{change:e.$refs.multipleTable.toggleAllSelection},model:{value:e.allCheck,callback:function(t){e.allCheck=t},expression:"allCheck"}},[e._v(e._s(e.selected.length)+" selected")]),a("el-dropdown",{attrs:{trigger:"click"},on:{command:e.changeAction}},[a("p",{staticClass:"el-dropdown-link ml-3 pointer primary hover-underline"},[e._v(" Actions "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.actions,(function(t){return a("el-dropdown-item",{key:t.value,attrs:{command:t.value}},[e._v(" "+e._s(t.label))])})),1)],1)],1)]):e._e(),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.customers.results},on:{"row-click":function(t){return e.$router.push({name:"Edit Customer",params:{id:t.id}})},"selection-change":e.handleSelectionChange},scopedSlots:e._u([{key:"empty",fn:function(){return[a("el-empty",{staticClass:"w-100",attrs:{description:"No item found!"},scopedSlots:e._u([{key:"image",fn:function(){return[a("empty")]},proxy:!0}],null,!1,81314202)})]},proxy:!0}],null,!1,350491350)},[a("el-table-column",{attrs:{type:"selection"}}),a("el-table-column",{attrs:{property:"name",label:"Name"}}),a("el-table-column",{attrs:{property:"email",label:"Email"}}),a("el-table-column",{attrs:{property:"phone",label:"Phone"}}),a("el-table-column",{attrs:{label:"Sales"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.sales.length)+" sales placed ")]}}],null,!1,61279600)})],1),1!==e.customers.total_pages?a("div",{staticClass:"el-table-footer"},[a("el-pagination",{attrs:{background:"","current-page":e.customers.current_page,layout:"prev, pager, next","page-count":e.customers.total_pages},on:{"current-change":function(t){return e.customers.current_page=t,e.getCustomers()}}})],1):e._e()],1)])])]):e._e()},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 flex-align-center"},[a("p",{staticClass:"mx-0 table-tab active-table-tab"},[e._v("All")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12"},[a("div",{staticClass:"b-divider mb-1 mt-0"})])}],r=(a("99af"),a("4de4"),a("4160"),a("159b"),a("5530")),i=a("2f62"),n=a("d50a"),o={data:function(){return{allCheck:!1,search:"",page:1,max:5,active:0,selected:[],removing:!1,customers:{current_page:1,results:[]},filter:{query:"",order_by:"-updated_at",pageSize:10,supplier:"",status:""},actions:[],sortList:[{name:"Name A–Z",value:"name"},{name:"Name Z–A",value:"-name"},{name:"Created (oldest first)",value:"created_at"},{name:"Created (newest first)",value:"-created_at"},{name:"Updated (oldest first)",value:"updated_at"},{name:"Updated (newest first)",value:"-updated_at"}],loading:!0}},created:function(){this.$store.commit("setIsReady",!1),this.getCustomers()},watch:{filter:{handler:function(){this.getCustomers()},deep:!0}},computed:Object(r["a"])({},Object(i["c"])(["isReady"])),components:{empty:n["c"]},methods:{changeAction:function(e){"delete"===e&&this.removeCustomers()},getCustomers:function(){var e=this;this.loading=!0;var t="customers/?page=".concat(this.customers.current_page,"&query=").concat(this.filter.query,"&order_by=").concat(this.filter.order_by,"&page_size=").concat(this.filter.pageSize);this.$axios.get(t).then((function(t){e.loading=!1,e.customers.results=t.data.results,e.customers.total_pages=t.data.total_pages,e.$store.commit("setIsReady",!0)})).catch((function(t){e.loading=!1,e.$noti.display({message:t,status:"error",color:"error"})}))},toggleSelection:function(e){var t=this;e?e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.selected=e},removeCustomers:function(){}}},c=o,u=a("2877"),d=Object(u["a"])(c,s,l,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d215c14.20c0e202.js.map