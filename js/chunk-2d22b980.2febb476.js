(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22b980"],{f044:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mt-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 flex-x-between mb-3"},[s("div",{staticClass:"flex-align-center"},[s("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"no-width flat",attrs:{type:"primary",circle:""},on:{click:function(t){return e.$router.go(-1)}}},[s("i",{staticClass:"bx bx-left-arrow-alt"})]),s("h5",{staticClass:"my-0 ml-2"},[e._v("Create delivery")])],1),s("div",{staticClass:"flex-align-center flex-end"},[s("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"flat",attrs:{type:"primary"},on:{click:function(t){return e.$router.go(-1)}}},[e._v(" Discard ")]),s("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],attrs:{disabled:!e.startEditing,loading:e.saving,type:"primary"},on:{click:e.Post}},[e._v(" Save ")])],1)]),s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"box"},[s("p",{staticClass:"mt-0 mb-2 text-bold"},[e._v("Details")]),s("label",{staticClass:"custom-label",attrs:{for:"name"}},[e._v("Name")]),s("el-input",{staticClass:"w-100 mb-3",attrs:{name:"name"},model:{value:e.delivery.name,callback:function(t){e.$set(e.delivery,"name",t)},expression:"delivery.name"}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("label",{staticClass:"custom-label",attrs:{for:"Address"}},[e._v("Address")]),s("el-input",{staticClass:"w-100 mb-3",attrs:{name:"Address"},model:{value:e.delivery.address,callback:function(t){e.$set(e.delivery,"address",t)},expression:"delivery.address"}})],1),s("div",{staticClass:"col-6"},[s("label",{staticClass:"custom-label",attrs:{for:"Phone"}},[e._v("Phone number")]),s("el-input",{staticClass:"w-100 mb-3",attrs:{name:"Phone",type:"number"},model:{value:e.delivery.telephone,callback:function(t){e.$set(e.delivery,"telephone",t)},expression:"delivery.telephone"}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("label",{staticClass:"custom-label",attrs:{for:"Remark"}},[e._v("Remark")]),s("el-input",{staticClass:"w-100",attrs:{name:"Remark",type:"url"},model:{value:e.delivery.Remark,callback:function(t){e.$set(e.delivery,"Remark",t)},expression:"delivery.Remark"}})],1),s("div",{staticClass:"col-6"},[s("label",{staticClass:"custom-label",attrs:{for:"Priority"}},[e._v("Priority")]),s("el-input",{staticClass:"w-100",attrs:{name:"Priority",type:"url"},model:{value:e.delivery.priority,callback:function(t){e.$set(e.delivery,"priority",t)},expression:"delivery.priority"}})],1)])],1),s("div",{staticClass:"box mt-base"},[s("p",{staticClass:"mt-0 mb-2 text-bold"},[e._v("Contact Person")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("label",{staticClass:"custom-label",attrs:{for:"name"}},[e._v("Name")]),s("el-input",{staticClass:"w-100",attrs:{name:"name"},model:{value:e.delivery.contact_person,callback:function(t){e.$set(e.delivery,"contact_person",t)},expression:"delivery.contact_person"}})],1),s("div",{staticClass:"col-6"},[s("label",{staticClass:"custom-label",attrs:{for:"Phone"}},[e._v("Phone number")]),s("el-input",{staticClass:"w-100",attrs:{name:"Phone",type:"number"},model:{value:e.delivery.cp_mobile,callback:function(t){e.$set(e.delivery,"cp_mobile",t)},expression:"delivery.cp_mobile"}})],1)])])])])])])},i=[],l={data:function(){return{saving:!1,delivery:{tags:[]},loading:null,startEditing:!1}},watch:{delivery:{handler:function(){this.startEditing=!0},deep:!0}},mounted:function(){this.$store.commit("setIsReady",!0)},beforeMount:function(){var e=this;window.addEventListener("beforeunload",this.preventNav),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("beforeunload",e.preventNav)}))},beforeRouteLeave:function(e,t,s){this.startEditing?this.$smalltalk.confirm("Question","Do you really want to leave? you have unsaved changes!").then((function(){s()})).catch((function(){s(!1)})):s()},methods:{preventNav:function(e){this.startEditing&&(e.preventDefault(),e.returnValue="")},Post:function(){var e=this;this.saving=!0,this.$axios.post("delivery/",{data:this.delivery}).then((function(){e.saving=!1,e.startEditing=!1,e.$noti.display({message:"Cool! Delivery has been successfully updated.",title:"success",status:"normal",color:"success"}),e.$router.push({name:"Deliveries"})})).catch((function(t){e.saving=!1,e.$noti.display({message:t,title:"",status:"error",color:"error"})}))}},computed:{}},r=l,n=s("2877"),o=Object(n["a"])(r,a,i,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d22b980.2febb476.js.map