(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6738a2ae"],{"13d5":function(t,e,a){"use strict";var s=a("23e7"),i=a("d58f").left,o=a("a640"),r=a("2d00"),l=a("605d"),n=!l&&r>79&&r<83,d=n||!o("reduce");s({target:"Array",proto:!0,forced:d},{reduce:function(t){var e=arguments.length;return i(this,t,e,e>1?arguments[1]:void 0)}})},2570:function(t,e,a){"use strict";a.r(e);a("13d5");var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[t.isReady?e("div",{staticClass:"col-12 mt-3",staticStyle:{"min-height":"80vh"}},[t.isReady&&!t.getting?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 flex-x-between sm-hide mb-3"},[e("h3",{staticClass:"my-0"},[t._v("Dashboard")]),e("el-date-picker",{staticClass:"white-bg",staticStyle:{"z-index":"100"},attrs:{type:"daterange",align:"right","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","picker-options":t.pickerOptions},on:{change:t.getData},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1),t._m(0),t.getting?t._e():e("div",{staticClass:"col-12 mb-sm-3 animated fadeIn"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"box intro-bg flex-x-between mb-3"},[e("div",{staticClass:"w-50 w-sm-100 pl-lg-5"},[e("h5",[t._v("Total Sale On")]),e("p",{staticStyle:{"font-size":"18px !important"}},[t._v(" "+t._s(t.$moment().format("MMM, Do YYYY"))+". ")]),e("div",{staticClass:"mb-4 mb-sm-2 flex primary",staticStyle:{"align-items":"end"}},[e("h2",{staticStyle:{"font-size":"30px"}},[t._v(" "+t._s(""!==t.todayData.sale_prices?t.todayData.sale_prices&&"supplier"===t.store.type?t.todayData.sale_prices.toFixed(2):t.todayData.sale_prices.toFixed(0):"0")+" "),e("span",{staticClass:"title",staticStyle:{"font-size":"12px"}},[t._v(" "+t._s("supplier"===t.store.type?"¥":"MMK")+" ")]),e("span",{staticClass:"title sm-hide",staticStyle:{"font-size":"12px"}},[t._v(" / Received Amount ( "+t._s(t.todayData.received_amounts||"0")+"MMK) ")])])]),e("p",{staticClass:"title text-bold primary mb-3 lg-hide md-hide",staticStyle:{"font-size":"12px"}},[t._v(" Received Amount ( "+t._s(t.todayData.received_amounts||"0")+"MMK) ")]),e("div",{staticClass:"flex sm-hide",staticStyle:{"align-items":"center"}},t._l(t.todayData.today_sale_by_payments,(function(a,s){return e("div",{key:a.payments__type,staticClass:"flex sm-hide",staticStyle:{"align-items":"center"}},[e("div",{staticClass:"mr-3 flex-center flex-column",staticStyle:{"min-width":"120px"}},[e("img",{staticStyle:{width:"60px","border-radius":"15px"},attrs:{src:`/image/${a.payments__type}.png`,alt:""}}),e("h5",{staticClass:"mt-2"},[t._v(" "+t._s(a.price)+" "),e("span",{staticClass:"title",staticStyle:{"font-size":"12px"}},[t._v(" MMK ")])])]),s!==t.todayData.today_sale_by_payments.length-1?e("div",{staticClass:"y-divider"}):t._e()])})),0),e("div",{staticClass:"lg-hide flex md-hide",staticStyle:{"align-items":"center","flex-wrap":"wrap"}},t._l(t.todayData.today_sale_by_payments,(function(a){return e("div",{key:a.payments__type,staticClass:"mr-1 flex-center flex-column",staticStyle:{"min-width":"70px"}},[e("img",{staticStyle:{width:"30px","border-radius":"5px"},attrs:{src:`/image/${a.payments__type}.png`,alt:""}}),e("p",{staticClass:"mt-2 text-bold",staticStyle:{"font-size":"10px"}},[t._v(" "+t._s(a.price)+" "),e("span",{staticClass:"title",staticStyle:{"font-size":"8px"}},[t._v(" MMK ")])])])})),0)]),t._m(1)])]),e("div",{staticClass:"col-12 col-lg-6 pr-lg-2 mt-base"},[e("div",{staticClass:"box"},[e("p",{staticClass:"my-0 text-bold"},[t._v(" Total Ordered Amount "),e("span",{staticStyle:{"font-weight":"normal"}},[t._v("(From "+t._s(t.dates[0])+" To "+t._s(t.dates[1])+")")])]),e("p",{staticClass:"my-2 primary"},[t._v(" "+t._s(t.saleData[0].data.reduce((t,e)=>t+e,0).toFixed("supplier"===t.store.type?2:0))+t._s("supplier"===t.store.type?"¥":"MMK")+" ")]),e("apexchart",{staticClass:"chart sm-hide",attrs:{height:"300",options:t.saleChartOptions,series:t.saleData}}),e("apexchart",{staticClass:"chart lg-hide md-hide",attrs:{height:"200",options:t.saleChartOptions,series:t.saleData}})],1)]),e("div",{staticClass:"col-12 col-lg-6 pl-lg-2 mt-base"},[e("div",{staticClass:"box"},[e("p",{staticClass:"my-0 text-bold"},[t._v(" Total Orders "),e("span",{staticStyle:{"font-weight":"normal"}},[t._v("(From "+t._s(t.dates[0])+" To "+t._s(t.dates[1])+")")])]),e("p",{staticClass:"my-2 primary"},[t._v(" "+t._s(t.noOfSaleData[0].data.reduce((t,e)=>t+e,0))+" Orders ")]),e("apexchart",{staticClass:"chart sm-hide",attrs:{height:"300",options:t.noOfSaleChartOptions,series:t.noOfSaleData}}),e("apexchart",{staticClass:"chart lg-hide md-hide",attrs:{height:"200",options:t.noOfSaleChartOptions,series:t.noOfSaleData}})],1)]),"supplier"!==t.store.type?e("div",{staticClass:"col-12 col-lg-12 list-table pr-lg-2 mt-base sm-hide"},[e("div",{staticClass:"box"},[e("p",{staticClass:"my-0 text-bold"},[t._v(" Top 10 Products "),e("span",{staticStyle:{"font-weight":"normal"}},[t._v("(From "+t._s(t.dates[0])+" To "+t._s(t.dates[1])+")")])]),e("div",{staticClass:"w-100 el-main-table mt-3"},[e("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.topSoldProducts},scopedSlots:t._u([{key:"empty",fn:function(){return[e("el-empty",{attrs:{description:"No data found!"},scopedSlots:t._u([{key:"image",fn:function(){return[e("empty")]},proxy:!0}],null,!1,81314202)})]},proxy:!0}],null,!1,2777114744)},[e("el-table-column",{attrs:{type:"index",width:"50"}}),e("el-table-column",{attrs:{label:"Code",width:"450"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("img",{staticStyle:{width:"80px",height:"80px","object-fit":"cover","border-radius":"5px","margin-right":"5px"},attrs:{src:a.row.image,alt:""}}),t._v(" "+t._s(a.row.name)+" ")]}}],null,!1,4159342294)}),e("el-table-column",{attrs:{label:"Quantity"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.quantity)+" x "+t._s(e.row.sale_price)+"Ks ")]}}],null,!1,2257474530)}),e("el-table-column",{attrs:{label:"Total"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.total)+" Ks ")]}}],null,!1,2393190727)})],1)],1)])]):t._e(),"supplier"==t.store.type&&t.user.is_superuser?e("div",{staticClass:"col-12 col-lg-6 pr-lg-2 mt-base"},[e("div",{staticClass:"box"},[e("p",{staticClass:"my-0 text-bold"},[t._v(" Net PrA "),e("span",{staticStyle:{"font-weight":"normal"}},[t._v("(From "+t._s(t.dates[0])+" To "+t._s(t.dates[1])+")")])]),e("p",{staticClass:"my-2 primary"},[t._v(" "+t._s(t.profitData[0].data.reduce((t,e)=>t+e,0))+"MMK ")]),e("apexchart",{staticClass:"chart sm-hide",attrs:{height:"300",options:t.profitChartOptions,series:t.profitData}}),e("apexchart",{staticClass:"chart lg-hide md-hide",attrs:{height:"200",options:t.profitChartOptions,series:t.profitData}})],1)]):t._e(),"supplier"==t.store.type?e("div",{staticClass:"col-12 col-lg-6 pl-lg-2 mt-base"},[e("div",{staticClass:"box"},[e("p",{staticClass:"my-0 text-bold"},[t._v(" Net PuA "),e("span",{staticStyle:{"font-weight":"normal"}},[t._v("(From "+t._s(t.dates[0])+" To "+t._s(t.dates[1])+")")])]),e("p",{staticClass:"my-2 primary"},[t._v(" "+t._s(t.purchasedData[0].data.reduce((t,e)=>t+e,0))+"¥ ")]),e("apexchart",{staticClass:"chart sm-hide",attrs:{height:"300",options:t.purchasedChartOptions,series:t.purchasedData}}),e("apexchart",{staticClass:"chart lg-hide md-hide",attrs:{height:"200",options:t.purchasedChartOptions,series:t.purchasedData}})],1)]):t._e()])])]):t._e()]):t._e()])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 lg-hide md-hide mb-3"},[e("h3",{staticClass:"my-2"},[t._v("Dashboard")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-50 flex-center my-4 sm-hide"},[e("img",{staticClass:"w-50",attrs:{src:"/image/login-v2.svg",alt:""}})])}],o=(a("14d9"),a("2f62")),r=a("bc3a"),l=a.n(r),n={data(){return{dates:[],getting:!0,pickerOptions:{shortcuts:[{text:"Last week",onClick(t){const e=new Date,a=new Date;e.setTime(e.getTime()+864e5),a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"Last month",onClick(t){const e=new Date,a=new Date;e.setTime(e.getTime()+864e5),a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"Last 3 months",onClick(t){const e=new Date,a=new Date;e.setTime(e.getTime()+864e5),a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}},{text:"Last 1 year",onClick(t){const e=new Date,a=new Date;e.setTime(e.getTime()+864e5),a.setTime(a.getTime()-31536e6),t.$emit("pick",[a,e])}}]},todayData:{},taxData:[],selected:[],topSoldOut:[],saleData:[],noOfSaleData:[],profitData:[],purchasedData:[],topSoldProducts:[],receivedAmountChartData:[],message:"",saleChartOptions:{chart:{type:"line",zoom:{enabled:!1},animations:{enabled:!0,easing:"ease-in-out",dynamicAnimation:{speed:1e3}},dropShadow:{enabled:!0,top:12,left:0,blur:4,opacity:.15,color:["#7f7fd5","#fe5f75"]}},colors:["#4e54c8","#fc9842"],dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#b993d6","#fe5f75"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},stroke:{show:!0,curve:"smooth",width:5},xaxis:{type:"datetime",categories:[]},yaxis:{title:{text:"Price "},floating:!1,labels:{show:!0,formatter:function(t){return t.toFixed(2)}}},tooltip:{x:{format:"dd-MM-yyyy"},y:{formatter:function(t){return t.toFixed(2)}}}},noOfSaleChartOptions:{chart:{type:"line",zoom:{enabled:!1},animations:{enabled:!0,easing:"ease-in-out",dynamicAnimation:{speed:1e3}},dropShadow:{enabled:!0,top:12,left:0,blur:4,opacity:.15,color:["#7f7fd5"]}},plotOptions:{},colors:["#91eae4"],dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8ca6db"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},stroke:{show:!0,curve:"smooth",width:5},xaxis:{type:"datetime",categories:[]},yaxis:{title:{text:"Order"}},tooltip:{x:{format:"dd-MM-yyyy"},y:{formatter:function(t){return t+" order(s)"}}}},profitChartOptions:{chart:{type:"line",zoom:{enabled:!1},animations:{enabled:!0,easing:"ease-in-out",dynamicAnimation:{speed:1e3}},dropShadow:{enabled:!0,top:12,left:0,blur:4,opacity:.15,color:["#3EB39A"]}},plotOptions:{},colors:["#35FF09"],dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#3EB39A"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},stroke:{show:!0,curve:"smooth",width:5},xaxis:{type:"datetime",categories:[]},yaxis:{title:{text:"PrA"}},tooltip:{x:{format:"dd-MM-yyyy"},y:{formatter:function(t){return t+"MMK"}}}},purchasedChartOptions:{chart:{type:"line",zoom:{enabled:!1},animations:{enabled:!0,easing:"ease-in-out",dynamicAnimation:{speed:1e3}},dropShadow:{enabled:!0,top:12,left:0,blur:4,opacity:.15,color:["#fc9842"]}},plotOptions:{},colors:["#fe5f75"],dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#fc9842"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},stroke:{show:!0,curve:"smooth",width:5},xaxis:{type:"datetime",categories:[]},yaxis:{title:{text:"PuA"}},tooltip:{x:{format:"dd-MM-yyyy"},y:{formatter:function(t){return t+"¥"}}}},today:null}},watch:{dates(){this.getData()}},computed:{...Object(o["c"])(["isReady","user","store"])},created(){this.$store.commit("setIsReady",!1),setTimeout(()=>{const t=new Date,e=new Date;e.setTime(e.getTime()-864e6),t.setTime(t.getTime()+864e5),this.today=this.$moment().format("YYYY-MM-DD"),this.dates=[this.$moment(e).format("YYYY-MM-DD"),this.$moment(t).format("YYYY-MM-DD")]},300)},methods:{getData(){this.getting=!0,l.a.get(`sale-reports/?from=${this.dates[0]}&to=${this.dates[1]}&today=${this.today}`).then(t=>{var e=t.data;this.todayData=e.today_data,this.topSoldProducts=e.top_sold_products;var a=[],s=[],i=[],o=[],r=[],l=[];e.total_sales.forEach((t,n)=>{n!==e.total_sales.length-1&&(a.push(t.label),t.data.forEach(t=>{"sale_price"==t.type&&s.push(t.data),"received_amounts"==t.type&&i.push(t.data),"sale_counts"==t.type&&o.push(t.data),"profit_amount"==t.type&&r.push(t.data),"purchased_amount"==t.type&&l.push(t.data)}))}),this.saleData=[{name:"Ordered amount",data:s},{name:"Received amount",data:i}],this.noOfSaleData=[{name:"Number of orders",data:o}],this.profitData=[{name:"Profit Amount",data:r}],this.purchasedData=[{name:"Purchased Amount",data:l}],this.saleChartOptions.xaxis.categories=a,this.noOfSaleChartOptions.xaxis.categories=a,this.profitChartOptions.xaxis.categories=a,this.purchasedChartOptions.xaxis.categories=a,this.getting=!1,this.$store.commit("setIsReady",!0)}).catch(t=>{this.getting=!1,this.$noti.display({message:t,status:"error",color:"error"})})}}},d=n,c=(a("3ca9"),a("0c7c")),p=Object(c["a"])(d,s,i,!1,null,null,null);e["default"]=p.exports},"38b9":function(t,e,a){},"3ca9":function(t,e,a){"use strict";a("38b9")},"605d":function(t,e,a){(function(e){var s=a("c6b6");t.exports="undefined"!=typeof e&&"process"==s(e)}).call(this,a("4362"))},a640:function(t,e,a){"use strict";var s=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&s((function(){a.call(null,e||function(){return 1},1)}))}},d58f:function(t,e,a){var s=a("59ed"),i=a("7b0b"),o=a("44ad"),r=a("07fa"),l=TypeError,n=function(t){return function(e,a,n,d){s(a);var c=i(e),p=o(c),m=r(c),h=t?m-1:0,y=t?-1:1;if(n<2)while(1){if(h in p){d=p[h],h+=y;break}if(h+=y,t?h<0:m<=h)throw l("Reduce of empty array with no initial value")}for(;t?h>=0:m>h;h+=y)h in p&&(d=a(d,p[h],h,c));return d}};t.exports={left:n(!1),right:n(!0)}}}]);
//# sourceMappingURL=chunk-6738a2ae.4a2e477d.js.map