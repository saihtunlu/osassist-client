(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77a644a6"],{"7e0e":function(e,t,i){"use strict";var s=i("8551"),a=i.n(s);a.a},8551:function(e,t,i){},eaeb:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isReady?i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mt-3 flex-x-between"},[e._m(0),i("div",{staticClass:"flex-align-center flex-end"},[i("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"mx-0 my-0",attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/add-new-delivery")}}},[e._v(" Add Delivery ")])],1)]),i("div",{staticClass:"col-12 list-table mt-lg-3 mt-md-3 p-0 pt-sm-0 mt-sm-3"},[i("div",{staticClass:"box mb-sm-3 pt-3 pt-sm-3"},[i("div",{staticClass:"row"},[i("div",{staticClass:"\n            col-12\n            mb-1 mb-sm-0\n            d-flex\n            justify-content-between\n            align-items-center\n          "},[i("div",{staticClass:"flex-align-center sm-hide"},[i("el-input",{staticClass:"mr-2 table-search",attrs:{placeholder:"Type something","prefix-icon":"bx bx-search"},on:{change:e.setFilterQuery},model:{value:e.inputHelper,callback:function(t){e.inputHelper=t},expression:"inputHelper"}}),i("el-date-picker",{staticClass:"mr-2 filter-input",attrs:{type:"date",format:"dd/MM/yyyy","value-format":"dd/MM/yyyy",placeholder:"Pick a date"},model:{value:e.filters.date,callback:function(t){e.$set(e.filters,"date",t)},expression:"filters.date"}})],1),i("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click"}},[i("p",{staticClass:"font-weight-bold"},[e._v("Sort By")]),i("div",{staticClass:"b-divider my-2"}),i("div",{staticClass:"w-100"},e._l(e.sortList,(function(t,s){return i("el-radio",{key:t.name,class:s!==e.sortList.length-1&&"mb-3",attrs:{label:t.value},model:{value:e.filters.order_by,callback:function(t){e.$set(e.filters,"order_by",t)},expression:"filters.order_by"}},[e._v(" "+e._s(t.name)+" ")])})),1),i("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0,0,0,0.1)",expression:"'rgba(0,0,0,0.1)'",modifiers:{400:!0}}],staticClass:"flat no-width sm-hide",attrs:{slot:"reference"},slot:"reference"},[i("i",{staticClass:"bx bx-sort mr-1"}),e._v(" Sort ")])],1),i("div",{staticClass:"md-hide w-100 lg-hide"},[i("el-input",{staticClass:"w-100 mb-sm-2",attrs:{placeholder:"Type something","prefix-icon":"bx bx-search"},on:{change:e.setFilterQuery},model:{value:e.inputHelper,callback:function(t){e.inputHelper=t},expression:"inputHelper"}}),i("div",{staticClass:"flex-x-between"},[i("el-date-picker",{staticClass:"w-100",attrs:{type:"date",format:"dd/MM/yyyy","value-format":"dd/MM/yyyy",placeholder:"Pick a date"},model:{value:e.filters.date,callback:function(t){e.$set(e.filters,"date",t)},expression:"filters.date"}}),i("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click"}},[i("p",{staticClass:"font-weight-bold"},[e._v("Sort By")]),i("div",{staticClass:"b-divider my-2"}),i("div",{staticClass:"w-100"},e._l(e.sortList,(function(t,s){return i("el-radio",{key:t.name,class:s!==e.sortList.length-1&&"mb-3",attrs:{label:t.value},model:{value:e.filters.order_by,callback:function(t){e.$set(e.filters,"order_by",t)},expression:"filters.order_by"}},[e._v(" "+e._s(t.name)+" ")])})),1),i("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0,0,0,0.1)",expression:"'rgba(0,0,0,0.1)'",modifiers:{400:!0}}],staticClass:"flat ml-2 my-0 no-width",attrs:{slot:"reference"},slot:"reference"},[i("i",{staticClass:"bx bx-sort mr-1"}),e._v(" Sort ")])],1)],1)],1)],1)]),i("div",{staticClass:"w-100 sm-hide el-main-table"},[i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.deliveryHistories.results},scopedSlots:e._u([{key:"empty",fn:function(){return[i("el-empty",{attrs:{description:"No data found!"},scopedSlots:e._u([{key:"image",fn:function(){return[i("empty")]},proxy:!0}],null,!1,81314202)})]},proxy:!0}],null,!1,2777114744)},[i("el-table-column",{attrs:{type:"index",width:"30"}}),i("el-table-column",{attrs:{label:"Image",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("img",{staticClass:"deliImage",staticStyle:{width:"80px",height:"80px","object-fit":"cover","border-radius":"5px","margin-right":"5px"},attrs:{src:t.row.image,alt:""},on:{click:function(i){return e.openLightBox(t.row.image)}}})]}}],null,!1,2937805248)}),i("el-table-column",{attrs:{label:"Customer"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.customer_name))])]}}],null,!1,797002074)}),i("el-table-column",{attrs:{label:"Order ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" #"+e._s(t.row.order_id)+" ")]}}],null,!1,4035929058)}),i("el-table-column",{attrs:{label:"Delivery"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.delivery_name))])]}}],null,!1,1519405442)}),i("el-table-column",{attrs:{label:"Date"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e.$moment(t.row.created_at).format("YYYY-MM-DD")))])]}}],null,!1,2882437173)}),i("el-table-column",{attrs:{label:"Delete"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.deleting,expression:"deleting"},{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"mx-0 my-0 flat",attrs:{type:"danger"},on:{click:function(i){return e.deleteDelivery(t.row.id)}}},[e._v(" Delete ")])]}}],null,!1,958540320)})],1),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"el-table-footer"},[i("p",{staticClass:"pt-3"})])],1)]),i("div",{staticClass:"row px-2 lg-hide md-hide"},e._l(e.deliveryHistories.results,(function(t,s){return i("div",{key:t.id,staticClass:"col-6 px-1 mb-sm-3"},[i("div",{staticClass:"sale-item box p-2"},[i("img",{staticClass:"deliImage",staticStyle:{width:"100% !important","object-fit":"cover","border-radius":"5px"},attrs:{src:t.image,alt:""},on:{click:function(i){return e.openLightBox(t.image)}}}),i("div",{staticClass:"mt-2 mb-2 sm-text"},[i("div",{staticClass:"flex-x-between"},[i("p",{staticClass:"mb-2"},[e._v("No : "+e._s(s+1))]),i("p",{staticClass:"mb-2"},[e._v("ID : #"+e._s(t.order_id))])]),i("p",{staticClass:"mb-2"},[e._v(e._s(t.customer_name))]),i("p",{staticClass:"mb-2"},[e._v("Delivery : "+e._s(t.delivery_name))]),i("p",{staticClass:"mb-2"},[e._v(" Date : "+e._s(e.$moment(t.created_at).format("YYYY-MM-DD"))+" ")])]),i("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}},{name:"loading",rawName:"v-loading",value:e.deleting,expression:"deleting"}],staticClass:"no-width my-0 flat",attrs:{type:"danger",circle:""},on:{click:function(i){return e.deleteDelivery(t.id)}}},[i("i",{staticClass:"bx bx-trash"})])],1)])})),0),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"lg-hide md-hide"},[i("p",{staticClass:"pt-3"})])]),i("CoolLightBox",{attrs:{items:e.lightBoxFile,useZoomBar:!0,index:e.index},on:{close:function(t){e.index=null}}})],1):e._e()},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flex-align-center"},[i("h3",{staticClass:"my-0"},[e._v("Delivery History")])])}],l=(i("99af"),i("4160"),i("159b"),i("2909")),r=i("5530"),n=i("2f62"),o=i("d50a"),d={data:function(){return{inputHelper:"",lightBoxFile:[],deleting:!1,index:null,filters:{query:"",order_by:"-updated_at",pageSize:50,page:1,date:this.$moment().format("YYYY-MM-DD")},loading:!1,actions:[],sortList:[{name:"Created (oldest first)",value:"created_at"},{name:"Created (newest first)",value:"-created_at"},{name:"Updated (oldest first)",value:"updated_at"},{name:"Updated (newest first)",value:"-updated_at"},{name:"Customer A–Z",value:"customer__name"},{name:"Customer Z–A",value:"-customer__name"}],loadingDelivey:!1,deliveries:[],selectedDate:null,selectedDelivery:null,allCheck:!1,gettingOrder:!1,page:1,max:5,selected:[],isReadyToGet:!1,deliveryHistories:{next:1,results:[],total_pages:0},scroll:0}},components:{empty:o["b"]},computed:Object(r["a"])({},Object(n["c"])(["isReady","store"])),created:function(){this.$store.commit("setIsReady",!1),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){this.filters={query:this.$route.query.query||"",order_by:this.$route.query.order_by||"-updated_at",pageSize:this.$route.query.page_size||"50",page:this.$route.query.page||"1",date:this.$route.query.date||this.$moment().format("YYYY-MM-DD")},this.inputHelper=this.$route.query.query||"",this.isReadyToGet=!0,this.getdeliveryHistories()},watch:{filters:{handler:function(e){this.isReadyToGet&&this.$router.push({path:"/delivery-history",query:{query:e.query,page_size:e.pageSize,page:e.page,order_by:e.order_by,date:e.date}}).catch((function(){}))},deep:!0}},methods:{handleScroll:function(e){var t=e.target.scrollingElement.scrollHeight-2*e.target.scrollingElement.clientHeight;t<e.target.scrollingElement.scrollTop&&(this.loading||this.getdeliveryHistories())},openLightBox:function(e){this.lightBoxFile=[e],this.index=0},updateStatus:function(){},deleteDelivery:function(e){var t=this;this.deleting=!0;var i="delivery-history/?id="+e;this.$axios.delete(i).then((function(){t.filters={query:"",order_by:"-updated_at",pageSize:"50",page:"1",date:t.$moment().format("YYYY-MM-DD")},t.deleting=!1,t.$noti.display({message:"Success!",status:"success",color:"success"})})).catch((function(e){t.deleting=!1,t.loading=!1,t.$noti.display({message:e,status:"error",color:"error"})}))},deletedeliveryHistories:function(){var e=this;this.loading=!0;var t=[];this.selected.forEach((function(e){t.push(e.id)}));var i="deliveryHistories/delete/";this.$axios.post(i,{data:t}).then((function(){e.getdeliveryHistories()})).catch((function(t){e.loading=!1,e.$noti.display({message:t,status:"error",color:"error"})}))},setFilterQuery:function(){this.filters.query=this.inputHelper},toggleSelection:function(e){var t=this;e?e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.selected=e},getdeliveryHistories:function(){var e=this;if(this.deliveryHistories.next){this.loading=!0,this.gettingOrder=!0;var t="delivery-history-list/?date=".concat(this.filters.date,"&page=").concat(this.deliveryHistories.next,"&page_size=").concat(this.filters.pageSize,"&query=").concat(this.filters.query,"&order_by=").concat(this.filters.order_by);this.$axios.get(t).then((function(t){e.gettingOrder=!1;var i=window.scrollY;e.deliveryHistories=Object(r["a"])(Object(r["a"])({},t.data),{},{results:[].concat(Object(l["a"])(e.deliveryHistories.results),Object(l["a"])(t.data.results))}),setTimeout((function(){window.scroll(0,i)}),50),setTimeout((function(){e.loading=!1}),100),e.$store.commit("setIsReady",!0)})).catch((function(t){e.loading=!1,e.gettingOrder=!1,e.$noti.display({message:t,status:"error",color:"error"})}))}}}},c=d,u=(i("7e0e"),i("2877")),m=Object(u["a"])(c,s,a,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-77a644a6.10a58cb9.js.map