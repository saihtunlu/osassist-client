(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f898"],{d9f3:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isReady?s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mt-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 flex-x-between mb-3"},[s("div",{staticClass:"flex-align-center"},[s("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"no-width my-0 flat",attrs:{type:"primary",circle:""},on:{click:function(e){return t.$router.go(-1)}}},[s("i",{staticClass:"bx bx-left-arrow-alt"})]),s("h5",{staticClass:"my-0 ml-2"},[t._v(t._s(t.product.name))])],1),s("div",{staticClass:"flex-align-center flex-end"},[s("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"flat my-0",attrs:{type:"primary"},on:{click:function(e){return t.$router.go(-1)}}},[s("i",{staticClass:"bx bx-x mr-1"}),t._v("Discard ")]),s("el-button",{directives:[{name:"ripple",rawName:"v-ripple.400",modifiers:{400:!0}}],staticClass:"my-0",attrs:{disabled:!t.startEditing,loading:t.saving,type:"primary"},on:{click:t.Post}},[s("i",{staticClass:"bx bx-save mr-1"}),t._v("Save ")])],1)]),s("div",{staticClass:"col-lg-8 col-md-cu-8 pr-lg-0"},[s("div",{staticClass:"box"},[s("div",{staticClass:"flex-x-between"},[s("div",{staticClass:"row mb-3"},[s("div",{staticClass:"col-12 mb-3"},[s("label",{staticClass:"custom-label",attrs:{for:"Media"}},[t._v("Media")]),s("file",{key:t.product.name,attrs:{initialData:t.product.image?[{image:t.product.image}]:[{}]},on:{completed:t.setImage}})],1),s("div",{staticClass:"col-12 mb-3"},[s("label",{staticClass:"custom-label",attrs:{for:"Name"}},[t._v("Name")]),s("el-input",{staticClass:"w-100",attrs:{name:"Name"},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}})],1),"supplier"!==t.store.type?s("div",{staticClass:"col-lg-6 mb-3"},[s("label",{staticClass:"custom-label",attrs:{for:"Link"}},[t._v("Price per item (MMK)")]),s("el-input",{staticClass:"w-100",attrs:{type:"number"},model:{value:t.product.cost_per_item,callback:function(e){t.$set(t.product,"cost_per_item",e)},expression:"product.cost_per_item"}})],1):t._e(),s("div",{staticClass:"col-lg-6 mb-3"},[s("label",{staticClass:"custom-label",attrs:{for:"Link"}},[t._v("Selling Price(MMK)")]),s("el-input",{staticClass:"w-100",attrs:{name:"Sale Price(MMK)",type:"number"},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",e)},expression:"product.price"}})],1),s("div",{staticClass:"col-6"},[s("label",{staticClass:"custom-label",attrs:{for:"Link"}},[t._v("Quantity")]),s("el-input-number",{staticClass:"w-100",attrs:{min:0,"controls-position":"right"},model:{value:t.product.number_of_stock,callback:function(e){t.$set(t.product,"number_of_stock",e)},expression:"product.number_of_stock"}})],1),s("div",{staticClass:"col-lg-6"},[s("label",{staticClass:"custom-label",attrs:{for:"Link"}},[t._v("Barcode")]),s("el-input",{staticClass:"w-100",model:{value:t.product.barcode,callback:function(e){t.$set(t.product,"barcode",e)},expression:"product.barcode"}})],1)])])])])])])]):t._e()},i=[],o=s("5530"),r=s("2f62"),c=s("9c83"),l=s("d50a"),n={data:function(){return{url:c["c"],mediaUrl:c["b"],product:{name:"",number_of_stock:"1",price:"0",cost_per_item:"0",image:"media/default.png",barcode:null},saving:!1,startEditing:!1,productBeforeEdit:""}},components:{file:l["d"]},watch:{product:{handler:function(){this.startEditing=!0},deep:!0}},mounted:function(){var t=this;setTimeout((function(){t.startEditing=!1}),100),this.filterProduct()},beforeMount:function(){var t=this;window.addEventListener("beforeunload",this.preventNav),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("beforeunload",t.preventNav)}))},beforeRouteLeave:function(t,e,s){this.startEditing?this.$smalltalk.confirm("Question","Do you really want to leave? you have unsaved changes!").then((function(){s()})).catch((function(){s(!1)})):s()},methods:{preventNav:function(t){this.startEditing&&(t.preventDefault(),t.returnValue="")},setImage:function(t){this.product.image=t[0].image},filterProduct:function(){var t=this;this.gettingSale=!0,this.$axios.get("product/?id="+this.$route.params.id).then((function(e){t.product=e.data,setTimeout((function(){t.startEditing=!1,t.gettingSale=!1}),1),t.$store.commit("setIsReady",!0)})).catch((function(e){t.$noti.display({message:e,status:"error",color:"error"})}))},Post:function(){var t=this;this.saving=!0,this.store=this.store.id,this.$axios.put("product/",{data:this.product}).then((function(e){t.product=e.data,t.saving=!1,t.$noti.display({title:"Success",color:"success",message:"Cool! Sale has been successfully added."}),setTimeout((function(){t.startEditing=!1}),100)})).catch((function(e){t.saving=!1,t.$noti.display({message:e,title:"",status:"error",color:"error"})}))}},computed:Object(o["a"])({},Object(r["c"])(["isReady","store"]))},u=n,d=s("2877"),p=Object(d["a"])(u,a,i,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d21f898.30001c82.js.map