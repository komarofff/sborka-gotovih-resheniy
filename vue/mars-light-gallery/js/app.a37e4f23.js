(function(e){function t(t){for(var o,c,l=t[0],i=t[1],s=t[2],d=0,p=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21cd":function(e,t,n){"use strict";n("e3b3")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("75a3"),a=n.n(r),c={class:"container mx-auto flex flex-col justify-start items-center px-2"},l=Object(o["createElementVNode"])("img",{src:a.a,class:"mb-12"},null,-1);function i(e,t,n,r,a,i){var s=Object(o["resolveComponent"])("GetPhotos");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[l,Object(o["createVNode"])(s,{onStartGallery:i.startShow},null,8,["onStartGallery"])])}var s={class:"w-full lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-end mb-6"},u={class:"flex flex-col justify-start items-center w-full"},d=Object(o["createElementVNode"])("p",{class:"mb-2 text-lg"},"Number of images:",-1),p={class:"flex flex-col justify-start items-center w-full"},m=Object(o["createElementVNode"])("p",{class:"mb-2 text-lg"},"Select date:",-1),f={class:"flex justify-center"},b={class:"min-w-screen grid grid-cols-1 md:grid-cols-4 gap-20"},h={key:0,class:"flex flex-col justify-start items-center border-2 border-gray-200 bg-white self-straight rounded cursor-pointer"},g=["data-src"],j=["src"],O={class:"text-xl"},y={key:0,class:"col-start-1 col-end-5 text-lg text-gray-700"};function v(e,t,n,r,a,c){var l=Object(o["resolveComponent"])("lightgallery");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("div",u,[d,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",min:"1",max:"50","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.amount=e}),class:"border border-gray-200 text-xl rounded-lg w-full p-2 h-12 focus:border-4 focus:border-blue-200 outline-none"},null,512),[[o["vModelText"],a.amount]])]),Object(o["createElementVNode"])("div",p,[m,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"date","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.date=e}),class:"border border-gray-200 text-lg rounded-lg w-full p-2 h-12 focus:border-4 focus:border-blue-200 outline-none"},null,512),[[o["vModelText"],a.date]])]),Object(o["createElementVNode"])("div",f,[Object(o["createElementVNode"])("button",{onClick:t[2]||(t[2]=function(){return c.getData&&c.getData.apply(c,arguments)}),class:"bg-blue-600 text-white text-lg rounded-lg py-2 px-8 self-center h-12"}," Submit ")])]),Object(o["createVNode"])(l,{settings:{speed:500,plugins:a.plugins},onInit:c.onInit,onBeforeSlide:c.onBeforeSlide},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.dataFromServer,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",b,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[t<a.amountOfPhotos?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",h,[Object(o["createElementVNode"])("a",{"data-lg-size":"1406-1390",class:"gallery-item","data-src":e.img_src,"data-sub-html":"<h4>title</h4><p>description</p>"},[Object(o["createElementVNode"])("img",{class:"img-responsive",src:e.img_src},null,8,j)],8,g),Object(o["createElementVNode"])("p",O,Object(o["toDisplayString"])(e.id),1),Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(e.earth_date),1)])):Object(o["createCommentVNode"])("",!0)],64)})),256)),0==e.length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",y,"No photos found on this date.")):Object(o["createCommentVNode"])("",!0)])})),256))]})),_:1},8,["settings","onInit","onBeforeSlide"])],64)}n("fb6a");var x=n("bc3a"),w=n.n(x),k=n("97a5"),E=n.n(k),S=n("c79a"),N=n("18c1"),V=n("c3c6"),D={emits:["startGallery"],data:function(){return{today:new Date,dataFromServer:[],amount:1,amountOfPhotos:0,page:1,date:(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2),query:null,plugins:[S["a"],N["a"],V["a"]]}},beforeMount:function(){this.query="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=".concat(this.date)},watch:{amount:function(){this.amount>50&&(this.amount=50)}},computed:{getData:function(){var e=this;this.amountOfPhotos=this.amount,this.amount<=25?this.query="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=".concat(this.date,"&page=1"):this.query="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=".concat(this.date),w.a.get(this.query).then((function(t){e.dataFromServer=t.data}))}},methods:{openGallery:function(e){this.$emit("startGallery",this.dataFromServer,e,this.amount)},onInit:function(){console.log("lightGallery has been initialized")},onBeforeSlide:function(){console.log("calling before slide")}},components:{Lightgallery:E.a}},B=(n("8ea8"),n("6b0d")),_=n.n(B);const G=_()(D,[["render",v]]);var P=G,q={data:function(){return{showGallery:!1,dataForGallery:[],idx:0,amount:0}},methods:{startShow:function(e,t,n){this.showGallery=!0,this.dataForGallery=e,this.idx=t,this.amount=n},closeShow:function(){this.showGallery=!1}},name:"App",components:{GetPhotos:P}};n("21cd");const F=_()(q,[["render",i]]);var M=F;Object(o["createApp"])(M).mount("#app")},"75a3":function(e,t,n){e.exports=n.p+"img/nasa.2e3a9cbf.png"},"7fe9":function(e,t,n){},"8ea8":function(e,t,n){"use strict";n("7fe9")},e3b3:function(e,t,n){}});
//# sourceMappingURL=app.a37e4f23.js.map