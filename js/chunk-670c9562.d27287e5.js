(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-670c9562"],{1148:function(t,e,a){"use strict";var s=a("a691"),i=a("1d80");t.exports="".repeat||function(t){var e=String(i(this)),a="",n=s(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},2570:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t.isReady?a("div",{staticClass:"col-12 mt-3",staticStyle:{"min-height":"80vh"}},[t.isReady&&!t.getting?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 flex-x-between sm-hide mb-3"},[a("h3",{staticClass:"my-0"},[t._v("Dashboard")]),a("el-date-picker",{staticClass:"white-bg",staticStyle:{"z-index":"100"},attrs:{type:"daterange",align:"right","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","picker-options":t.pickerOptions},on:{change:t.getData},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1),t._m(0),t.getting?t._e():a("div",{staticClass:"col-12 mb-sm-3 animated fadeIn"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-md-4 mb-sm-3 pr-lg-2"},[a("div",{staticClass:"box status-box primary-box-bg"},[a("div",{staticClass:"\n                  d-flex\n                  animated\n                  fadeInLeft\n                  flex-column\n                  justify-content-between\n                ",staticStyle:{height:"100%"}},[a("div",{},[a("h4",{staticClass:"mt-0 mb-2"},[t._v("Received Amount")]),a("p",{staticStyle:{"font-size":"10px !important","font-weight":"normal"}},[t._v(" from order report ")]),a("p",{staticClass:"mb-2"},[t._v(" On "+t._s(t.$moment().format("MMM, Do YYYY"))+" ")])]),a("p",{staticClass:"mb-0 mt-4"},[a("span",{staticStyle:{"font-size":"30px !important"}},[t._v(" "+t._s(t.todayData.received_amounts||"0"))]),a("span",{staticClass:"title"},[t._v(" "+t._s("supplier"===t.store.type?"¥":"MMK")+" ")])])]),t._m(1)])]),a("div",{staticClass:"col-lg-4 col-md-4 mb-sm-3 px-lg-2"},[a("div",{staticClass:"box status-box success-box-bg"},[a("div",{staticClass:"\n                  d-flex\n                  animated\n                  fadeInLeft\n                  flex-column\n                  justify-content-between\n                ",staticStyle:{height:"100%"}},[a("div",[a("h4",{staticClass:"mt-0 mb-2"},[t._v("Ordered Amount")]),a("p",{staticStyle:{"font-size":"10px !important","font-weight":"normal"}},[t._v(" from order report ")]),a("p",{staticClass:"mb-2"},[t._v(" On "+t._s(t.$moment().format("MMM, Do YYYY"))+" ")])]),a("p",{staticClass:"mb-0 mt-4"},[a("span",{staticStyle:{"font-size":"30px !important"}},[t._v(" "+t._s((t.todayData.sale_prices&&"supplier"===t.store.type?t.todayData.sale_prices.toFixed(2):t.todayData.sale_prices.toFixed(0))||"0"))]),a("span",{staticClass:"title"},[t._v(" "+t._s("supplier"===t.store.type?"¥":"MMK")+" ")])])]),t._m(2)])]),a("div",{staticClass:"col-lg-4 col-md-4 pl-lg-2"},[a("div",{staticClass:"box status-box warn-box-bg"},[a("div",{staticClass:"\n                  d-flex\n                  animated\n                  fadeInLeft\n                  flex-column\n                  justify-content-between\n                ",staticStyle:{height:"100%"}},[a("div",[a("h4",{staticClass:"mt-0 mb-2"},[t._v("Number of orders")]),a("p",{staticStyle:{"font-size":"10px !important","font-weight":"normal"}},[t._v(" from order report ")]),a("p",{staticClass:"mb-2"},[t._v(" On "+t._s(t.$moment().format("MMM, Do YYYY"))+" ")])]),a("p",{staticClass:"mb-0 mt-4"},[a("span",{staticStyle:{"font-size":"30px !important"}},[t._v(t._s(t.todayData.sale_numbers||"0"))]),a("span",{staticClass:"title"},[t._v(t._s(parseInt(t.todayData.sale_numbers)>1?"Sales":"Sale"))])])]),t._m(3)])]),a("div",{staticClass:"col-12 col-lg-6 pr-lg-2 mt-base"},[a("div",{staticClass:"box"},[a("p",{staticClass:"my-0 text-bold"},[t._v(" Total Ordered Amount "),a("span",{staticStyle:{"font-weight":"normal"}},[t._v("(From "+t._s(t.dates[0])+" To "+t._s(t.dates[1])+")")])]),a("p",{staticClass:"my-2 primary"},[t._v(" "+t._s(t.saleData[0].data.reduce((function(t,e){return t+e}),0).toFixed("supplier"===t.store.type?2:0))+t._s("supplier"===t.store.type?"¥":"MMK")+" ")]),a("apexchart",{staticClass:"chart sm-hide",attrs:{height:"350",options:t.saleChartOptions,series:t.saleData}}),a("apexchart",{staticClass:"chart lg-hide md-hide",attrs:{height:"200",options:t.saleChartOptions,series:t.saleData}})],1)]),a("div",{staticClass:"col-12 col-lg-6 pl-lg-2 mt-base"},[a("div",{staticClass:"box"},[a("p",{staticClass:"my-0 text-bold"},[t._v(" Total Orders "),a("span",{staticStyle:{"font-weight":"normal"}},[t._v("(From "+t._s(t.dates[0])+" To "+t._s(t.dates[1])+")")])]),a("p",{staticClass:"my-2 primary"},[t._v(" "+t._s(t.noOfSaleData[0].data.reduce((function(t,e){return t+e}),0))+" Orders ")]),a("apexchart",{staticClass:"chart sm-hide",attrs:{height:"350",options:t.noOfSaleChartOptions,series:t.noOfSaleData}}),a("apexchart",{staticClass:"chart lg-hide md-hide",attrs:{height:"200",options:t.noOfSaleChartOptions,series:t.noOfSaleData}})],1)])])])]):t._e()]):t._e()])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 lg-hide md-hide mb-3"},[a("h3",{staticClass:"my-2"},[t._v("Dashboard")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"\n                  report-icon\n                  animated\n                  zoomIn\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                "},[a("i",{staticClass:"bx bx-credit-card"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"\n                  report-icon\n                  animated\n                  zoomIn\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                "},[a("i",{staticClass:"bx bx-bar-chart"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"\n                  report-icon\n                  animated\n                  zoomIn\n                  d-flex\n                  align-items-center\n                  justify-content-center\n                "},[a("i",{staticClass:"bx bx-gift"})])}],n=(a("99af"),a("4160"),a("b680"),a("159b"),a("5530")),o=a("2f62"),r=a("bc3a"),l=a.n(r),c={data:function(){return{dates:[],getting:!0,pickerOptions:{shortcuts:[{text:"Last week",onClick:function(t){var e=new Date,a=new Date;e.setTime(e.getTime()+864e5),a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"Last month",onClick:function(t){var e=new Date,a=new Date;e.setTime(e.getTime()+864e5),a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"Last 3 months",onClick:function(t){var e=new Date,a=new Date;e.setTime(e.getTime()+864e5),a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}},{text:"Last 1 year",onClick:function(t){var e=new Date,a=new Date;e.setTime(e.getTime()+864e5),a.setTime(a.getTime()-31536e6),t.$emit("pick",[a,e])}}]},todayData:{},taxData:[],selected:[],topSoldOut:[],saleData:[],noOfSaleData:[],receivedAmountChartData:[],message:"",saleChartOptions:{chart:{type:"line",zoom:{enabled:!1},animations:{enabled:!0,easing:"ease-in-out",dynamicAnimation:{speed:1e3}},dropShadow:{enabled:!0,top:12,left:0,blur:4,opacity:.15,color:["#7f7fd5","#fe5f75"]}},colors:["#4e54c8","#fc9842"],dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#b993d6","#fe5f75"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},stroke:{show:!0,curve:"smooth",width:5},xaxis:{type:"datetime",categories:[]},yaxis:{title:{text:"Price "},floating:!1,labels:{show:!0,formatter:function(t){return t.toFixed(2)}}},tooltip:{x:{format:"dd-MM-yyyy"},y:{formatter:function(t){return t.toFixed(2)}}}},noOfSaleChartOptions:{chart:{type:"line",zoom:{enabled:!1},animations:{enabled:!0,easing:"ease-in-out",dynamicAnimation:{speed:1e3}},dropShadow:{enabled:!0,top:12,left:0,blur:4,opacity:.15,color:["#7f7fd5"]}},plotOptions:{},colors:["#91eae4"],dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8ca6db"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},stroke:{show:!0,curve:"smooth",width:5},xaxis:{type:"datetime",categories:[]},yaxis:{title:{text:"Order"}},tooltip:{x:{format:"dd-MM-yyyy"},y:{formatter:function(t){return t+" order(s)"}}}},today:null}},watch:{dates:function(){this.getData()}},computed:Object(n["a"])({},Object(o["c"])(["isReady","user","store"])),created:function(){var t=this;this.$store.commit("setIsReady",!1),setTimeout((function(){var e=new Date,a=new Date;a.setTime(a.getTime()-864e6),e.setTime(e.getTime()+864e5),t.today=t.$moment().format("YYYY-MM-DD"),t.dates=[t.$moment(a).format("YYYY-MM-DD"),t.$moment(e).format("YYYY-MM-DD")]}),300)},methods:{getData:function(){var t=this;this.getting=!0,l.a.get("sale-reports/?from=".concat(this.dates[0],"&to=").concat(this.dates[1],"&today=").concat(this.today)).then((function(e){var a=e.data;t.todayData=a.today_data;var s=[],i=[],n=[],o=[];a.total_sales.forEach((function(t,e){e!==a.total_sales.length-1&&(s.push(t.label),t.data.forEach((function(t){"sale_price"==t.type&&i.push(t.data),"received_amounts"==t.type&&n.push(t.data),"sale_counts"==t.type&&o.push(t.data)})))})),t.saleData=[{name:"Ordered amount",data:i},{name:"Received amount",data:n}],t.noOfSaleData=[{name:"Number of orders",data:o}],t.saleChartOptions.xaxis.categories=s,t.noOfSaleChartOptions.xaxis.categories=s,t.getting=!1,t.$store.commit("setIsReady",!0)})).catch((function(e){t.getting=!1,t.$noti.display({message:e,status:"error",color:"error"})}))}}},d=c,m=(a("df7d"),a("2877")),p=Object(m["a"])(d,s,i,!1,null,null,null);e["default"]=p.exports},"408a":function(t,e,a){var s=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=s(t))throw TypeError("Incorrect invocation");return+t}},a459:function(t,e,a){},b680:function(t,e,a){"use strict";var s=a("23e7"),i=a("a691"),n=a("408a"),o=a("1148"),r=a("d039"),l=1..toFixed,c=Math.floor,d=function(t,e,a){return 0===e?a:e%2===1?d(t,e-1,a*t):d(t*t,e/2,a)},m=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},p=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){l.call({})}));s({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,a,s,r,l=n(this),p=i(t),f=[0,0,0,0,0,0],u="",h="0",y=function(t,e){var a=-1,s=e;while(++a<6)s+=t*f[a],f[a]=s%1e7,s=c(s/1e7)},g=function(t){var e=6,a=0;while(--e>=0)a+=f[e],f[e]=c(a/t),a=a%t*1e7},v=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var a=String(f[t]);e=""===e?a:e+o.call("0",7-a.length)+a}return e};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(u="-",l=-l),l>1e-21)if(e=m(l*d(2,69,1))-69,a=e<0?l*d(2,-e,1):l/d(2,e,1),a*=4503599627370496,e=52-e,e>0){y(0,a),s=p;while(s>=7)y(1e7,0),s-=7;y(d(10,s,1),0),s=e-1;while(s>=23)g(1<<23),s-=23;g(1<<s),y(1,1),g(2),h=v()}else y(0,a),y(1<<-e,0),h=v()+o.call("0",p);return p>0?(r=h.length,h=u+(r<=p?"0."+o.call("0",p-r)+h:h.slice(0,r-p)+"."+h.slice(r-p))):h=u+h,h}})},df7d:function(t,e,a){"use strict";var s=a("a459"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-670c9562.d27287e5.js.map