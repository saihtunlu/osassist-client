(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-670c9562"],{1148:function(t,e,a){"use strict";var s=a("a691"),i=a("1d80");t.exports="".repeat||function(t){var e=String(i(this)),a="",n=s(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},2570:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t.isReady?a("div",{staticClass:"col-12 mt-3",staticStyle:{"min-height":"80vh"}},[t.isReady&&!t.getting?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 flex-x-between flex-sm-column mb-3"},[a("h3",{staticClass:"my-0"},[t._v("Dashboard")]),a("el-date-picker",{staticClass:"white-bg",staticStyle:{"z-index":"100"},attrs:{type:"daterange",align:"right","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","picker-options":t.pickerOptions},on:{change:t.getData},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1),t.getting?t._e():a("div",{staticClass:"col-12 animated fadeIn"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 pr-lg-2"},[a("div",{staticClass:"box status-box primary-box-bg"},[a("div",{staticClass:"\n                  d-flex\n                  animated\n                  fadeInLeft\n                  flex-column\n                  justify-content-between\n                ",staticStyle:{height:"100%"}},[a("div",{},[a("h4",{staticClass:"mt-0 mb-2"},[t._v("Received Amount")]),a("p",{staticStyle:{"font-size":"10px !important","font-weight":"normal"}},[t._v(" from order report ")]),a("p",{staticClass:"mb-2"},[t._v(" On "+t._s(t.$moment().format("MMM, Do YYYY"))+" ")])]),a("p",{staticClass:"mb-0 mt-4"},[a("span",{staticStyle:{"font-size":"30px !important"}},[t._v(" "+t._s(t.todayData.received_amounts||"0"))]),a("span",{staticClass:"title"},[t._v(" "+t._s("supplier"===t.store.type?"¥":"MMK")+" ")])])]),t._m(0)])]),a("div",{staticClass:"col-4 px-lg-2"},[a("div",{staticClass:"box status-box success-box-bg"},[a("div",{staticClass:"\n                  d-flex\n                  animated\n                  fadeInLeft\n                  flex-column\n                  justify-content-between\n                ",staticStyle:{height:"100%"}},[a("div",[a("h4",{staticClass:"mt-0 mb-2"},[t._v("Ordered Amount")]),a("p",{staticStyle:{"font-size":"10px !important","font-weight":"normal"}},[t._v(" from order report ")]),a("p",{staticClass:"mb-2"},[t._v(" On "+t._s(t.$moment().format("MMM, Do YYYY"))+" ")])]),a("p",{staticClass:"mb-0 mt-4"},[a("span",{staticStyle:{"font-size":"30px !important"}},[t._v(" "+t._s(t.todayData.sale_prices.data&&t.todayData.sale_prices.data.toFixed(2)||"0"))]),a("span",{staticClass:"title"},[t._v(" "+t._s("supplier"===t.store.type?"¥":"MMK")+" ")])])]),t._m(1)])]),a("div",{staticClass:"col-4 pl-lg-2"},[a("div",{staticClass:"box status-box warn-box-bg"},[a("div",{staticClass:"\n                  d-flex\n                  animated\n                  fadeInLeft\n                  flex-column\n                  justify-content-between\n                ",staticStyle:{height:"100%"}},[a("div",[a("h4",{staticClass:"mt-0 mb-2"},[t._v("Number of orders")]),a("p",{staticStyle:{"font-size":"10px !important","font-weight":"normal"}},[t._v(" from order report ")]),a("p",{staticClass:"mb-2"},[t._v(" On "+t._s(t.$moment().format("MMM, Do YYYY"))+" ")])]),a("p",{staticClass:"mb-0 mt-4"},[a("span",{staticStyle:{"font-size":"30px !important"}},[t._v(t._s(t.todayData.sale_numbers||"0"))]),a("span",{staticClass:"title"},[t._v(t._s(parseInt(t.todayData.sale_numbers)>1?"Sales":"Sale"))])])]),t._m(2)])]),a("div",{staticClass:"col-12 col-lg-6 pr-lg-2 mt-base"},[a("div",{staticClass:"box"},[a("p",{staticClass:"my-0 text-bold"},[t._v(" Total Ordered Amount "),a("span",{staticStyle:{"font-weight":"normal"}},[t._v("(From "+t._s(t.dates[0])+" To "+t._s(t.dates[1])+")")])]),a("p",{staticClass:"my-2 primary"},[t._v(" "+t._s(t.saleData[0].data.reduce((function(t,e){return t+e}),0))+t._s("supplier"===t.store.type?"¥":"MMK")+" ")]),a("apexchart",{staticClass:"chart",attrs:{height:"350",options:t.saleChartOptions,series:t.saleData}})],1)]),a("div",{staticClass:"col-12 col-lg-6 pl-lg-2 mt-base"},[a("div",{staticClass:"box"},[a("p",{staticClass:"my-0 text-bold"},[t._v(" Total Orders "),a("span",{staticStyle:{"font-weight":"normal"}},[t._v("(From "+t._s(t.dates[0])+" To "+t._s(t.dates[1])+")")])]),a("p",{staticClass:"my-2 primary"},[t._v(" "+t._s(t.noOfSaleData[0].data.reduce((function(t,e){return t+e}),0))+" Orders ")]),a("apexchart",{staticClass:"chart",attrs:{height:"350",options:t.noOfSaleChartOptions,series:t.noOfSaleData}})],1)])])])]):t._e()]):t._e()])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"\n                  report-icon\n                  animated\n                  zoomIn\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                "},[a("i",{staticClass:"bx bx-credit-card"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"\n                  report-icon\n                  animated\n                  zoomIn\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                "},[a("i",{staticClass:"bx bx-bar-chart"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"\n                  report-icon\n                  animated\n                  zoomIn\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                "},[a("i",{staticClass:"bx bx-gift"})])}],n=(a("99af"),a("b680"),a("5530")),o=a("2f62"),r=a("bc3a"),c=a.n(r),l={data:function(){return{dates:[],getting:!0,pickerOptions:{shortcuts:[{text:"Last week",onClick:function(t){var e=new Date,a=new Date;e.setTime(e.getTime()+864e5),a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"Last month",onClick:function(t){var e=new Date,a=new Date;e.setTime(e.getTime()+864e5),a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"Last 3 months",onClick:function(t){var e=new Date,a=new Date;e.setTime(e.getTime()+864e5),a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}},{text:"Last 1 year",onClick:function(t){var e=new Date,a=new Date;e.setTime(e.getTime()+864e5),a.setTime(a.getTime()-31536e6),t.$emit("pick",[a,e])}}]},todayData:{},taxData:[],selected:[],topSoldOut:[],saleData:[],noOfSaleData:[],receivedAmountChartData:[],message:"",saleChartOptions:{chart:{type:"line",zoom:{enabled:!1},animations:{enabled:!0,easing:"ease-in-out",dynamicAnimation:{speed:1e3}},dropShadow:{enabled:!0,top:12,left:0,blur:4,opacity:.15,color:["#7f7fd5","#91eae4"]}},colors:["#4e54c8","#8f94fb"],dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#b993d6","#8ca6db"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},stroke:{show:!0,curve:"smooth",width:5},xaxis:{type:"datetime",categories:[]},yaxis:{title:{text:"Price "},floating:!1,labels:{show:!0,formatter:function(t){return t.toFixed(2)}}},tooltip:{x:{format:"dd-MM-yyyy"},y:{formatter:function(t){return t.toFixed(2)}}}},noOfSaleChartOptions:{chart:{type:"line",zoom:{enabled:!1},animations:{enabled:!0,easing:"ease-in-out",dynamicAnimation:{speed:1e3}},dropShadow:{enabled:!0,top:12,left:0,blur:4,opacity:.15,color:["#7f7fd5"]}},plotOptions:{},colors:["#91eae4"],dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8ca6db"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},stroke:{show:!0,curve:"smooth",width:5},xaxis:{type:"datetime",categories:[]},yaxis:{title:{text:"Order"}},tooltip:{x:{format:"dd-MM-yyyy"},y:{formatter:function(t){return t+" order(s)"}}}},today:null}},watch:{dates:function(){this.getData()}},computed:Object(n["a"])({},Object(o["c"])(["isReady","user","store"])),created:function(){var t=this;this.$store.commit("setIsReady",!1),setTimeout((function(){var e=new Date,a=new Date;a.setTime(a.getTime()-864e6),e.setTime(e.getTime()+864e5),t.today=t.$moment().format("YYYY-MM-DD"),t.dates=[t.$moment(a).format("YYYY-MM-DD"),t.$moment(e).format("YYYY-MM-DD")]}),300)},methods:{getData:function(){var t=this;this.getting=!0,c.a.get("sale-reports/?from=".concat(this.dates[0],"&to=").concat(this.dates[1],"&today=").concat(this.today)).then((function(e){var a=e.data;t.todayData=a.today_data,t.saleData=[{name:"Ordered amount",data:a.sale_prices.data},{name:"Received amount",data:a.received_amount.data}],t.noOfSaleData=[{name:"Number of orders",data:a.sale_numbers.data}],t.saleChartOptions.xaxis.categories=a.sale_prices.label,t.noOfSaleChartOptions.xaxis.categories=a.sale_numbers.label,t.getting=!1,t.$store.commit("setIsReady",!0)})).catch((function(e){t.getting=!1,t.$noti.display({message:e,status:"error",color:"error"})}))}}},d=l,m=(a("df7d"),a("2877")),f=Object(m["a"])(d,s,i,!1,null,null,null);e["default"]=f.exports},"408a":function(t,e,a){var s=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=s(t))throw TypeError("Incorrect invocation");return+t}},a459:function(t,e,a){},b680:function(t,e,a){"use strict";var s=a("23e7"),i=a("a691"),n=a("408a"),o=a("1148"),r=a("d039"),c=1..toFixed,l=Math.floor,d=function(t,e,a){return 0===e?a:e%2===1?d(t,e-1,a*t):d(t*t,e/2,a)},m=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));s({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,a,s,r,c=n(this),f=i(t),p=[0,0,0,0,0,0],u="",h="0",y=function(t,e){var a=-1,s=e;while(++a<6)s+=t*p[a],p[a]=s%1e7,s=l(s/1e7)},b=function(t){var e=6,a=0;while(--e>=0)a+=p[e],p[e]=l(a/t),a=a%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==p[t]){var a=String(p[t]);e=""===e?a:e+o.call("0",7-a.length)+a}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(u="-",c=-c),c>1e-21)if(e=m(c*d(2,69,1))-69,a=e<0?c*d(2,-e,1):c/d(2,e,1),a*=4503599627370496,e=52-e,e>0){y(0,a),s=f;while(s>=7)y(1e7,0),s-=7;y(d(10,s,1),0),s=e-1;while(s>=23)b(1<<23),s-=23;b(1<<s),y(1,1),b(2),h=g()}else y(0,a),y(1<<-e,0),h=g()+o.call("0",f);return f>0?(r=h.length,h=u+(r<=f?"0."+o.call("0",f-r)+h:h.slice(0,r-f)+"."+h.slice(r-f))):h=u+h,h}})},df7d:function(t,e,a){"use strict";var s=a("a459"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-670c9562.f4c72195.js.map