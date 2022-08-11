(function(e){function t(t){for(var n,l,c=t[0],s=t[1],i=t[2],d=0,m=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&m.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(m.length)m.shift()();return a.push.apply(a,i||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},r={app:0},a=[];function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0920":function(e,t,o){},"0c4a":function(e,t,o){"use strict";o("0920")},1954:function(e,t,o){"use strict";o("871d")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r=o("75a3"),a=o.n(r),l={class:"container mx-auto flex flex-col justify-start items-center px-2"},c=Object(n["createElementVNode"])("img",{src:a.a,class:"mb-12 w-48 h-28"},null,-1);function s(e,t,o,r,a,s){var i=Object(n["resolveComponent"])("GetPhotos"),u=Object(n["resolveComponent"])("new-gallery");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("div",l,[c,Object(n["createVNode"])(i,{onStartGallery:s.startShow},null,8,["onStartGallery"])]),a.showGallery?(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:0,photoList:a.dataForGallery.photos,amount:a.amount,startIndex:a.idx},null,8,["photoList","amount","startIndex"])):Object(n["createCommentVNode"])("",!0)],64)}o("b0c0");var i={class:"container mx-auto"},u=["data-src","data-sub-html"],d=["src"],m={class:"text-xl"};function p(e,t,o,r,a,l){var c=Object(n["resolveComponent"])("lightgallery");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[(Object(n["openBlock"])(),Object(n["createBlock"])(c,{key:e.componentKey,settings:{speed:500,plugins:e.plugins},onInit:l.onInit,onBeforeSlide:l.onBeforeSlide,class:"min-w-screen flex flex-row justify-center items-start flex-wrap"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.arr,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{"data-lg-size":"1406-1390",class:"gallery-item w-image h-88 flex flex-col justify-start items-center border-2 border-gray-200 bg-white self-straight rounded cursor-pointer","data-src":e.img_src,"data-sub-html":"<h4>"+e.camera.name+"</h4> <p>"+e.camera.full_name+" </p>",key:e.id},[(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{style:{"object-fit":"cover"},class:"img-responsive w-full h-full object-cover",src:e.img_src,key:e.img_src},null,8,d)),Object(n["createElementVNode"])("p",m,Object(n["toDisplayString"])(e.id),1),Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.earth_date),1)],8,u)})),128))]})),_:1},8,["settings","onInit","onBeforeSlide"]))])}var h=o("97a5"),f=o.n(h),b=o("c79a"),g=o("18c1"),y=o("c3c6"),j={props:["photoList","startIndex","amount"],components:{Lightgallery:f.a},beforeMount:function(){for(var e=0;e<this.amount;e++)void 0!==this.photoList[e]&&this.arr.push(this.photoList[e])},data:function(){return{plugins:[b["a"],g["a"],y["a"]],arr:[],componentKey:0}},watch:{photoList:function(){this.arr=[];for(var e=0;e<this.amount;e++)void 0!==this.photoList[e]&&this.arr.push(this.photoList[e]);this.forceRerender()}},methods:{onInit:function(){console.log("lightGallery has been initialized")},onBeforeSlide:function(){console.log("calling before slide")},forceRerender:function(){this.componentKey+=1}}},v=(o("5e8f"),o("6b0d")),O=o.n(v);const x=O()(j,[["render",p]]);var w=x,D={class:"w-full lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 md:gap-x-20 items-end mb-6"},k={class:"flex flex-col justify-start items-center w-full"},S=Object(n["createElementVNode"])("p",{class:"mt-4 md:mt-0 mb-2 text-lg"},"Number of images:",-1),B={class:"flex flex-col justify-start items-center w-full"},E=Object(n["createElementVNode"])("p",{class:"mt-4 md:mt-0 mb-2 text-lg"},"Select date:",-1),N=["max"],V={class:"flex justify-center"},G={key:0,class:"col-start-2 col-end-5 text-lg text-gray-700 mt-4"};function _(e,t,o,r,a,l){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("div",D,[Object(n["createElementVNode"])("div",k,[S,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",min:"1",max:"50","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.amount=e}),class:"border border-gray-200 text-xl rounded-lg w-full p-2 h-12 focus:border-4 focus:border-blue-200 outline-none"},null,512),[[n["vModelText"],a.amount]])]),Object(n["createElementVNode"])("div",B,[E,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"date","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.date=e}),max:a.maxDate,class:"border border-gray-200 text-lg rounded-lg w-full p-2 h-12 focus:border-4 focus:border-blue-200 outline-none"},null,8,N),[[n["vModelText"],a.date]])]),Object(n["createElementVNode"])("div",V,[Object(n["createElementVNode"])("button",{onClick:t[2]||(t[2]=function(){return l.getData&&l.getData.apply(l,arguments)}),class:"w-1/2 md:w-full mt-4 md:mt-0 border border-blue-600 hover:bg-white bg-blue-600 text-white hover:text-blue-600 text-lg rounded-lg py-2 px-8 self-center h-12"}," Submit ")])]),a.noData?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",G,"No photos found on this date."))],64)}o("fb6a");var L=o("bc3a"),F=o.n(L),M={emits:["startGallery"],data:function(){return{today:new Date,dataFromServer:[],amount:1,amountOfPhotos:0,page:1,date:(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2),query:null,noData:!0,maxDate:(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2)}},beforeMount:function(){this.query="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=".concat(this.date)},watch:{amount:function(){this.amount>50&&(this.amount=50)}},computed:{getData:function(){var e=this;this.amountOfPhotos=this.amount,this.amount<=25?this.query="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=".concat(this.date,"&page=1"):this.query="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=".concat(this.date),F.a.get(this.query).then((function(t){e.dataFromServer=t.data,e.dataFromServer.photos.length>0?(e.$emit("startGallery",e.dataFromServer,5,e.amount),e.noData=!0):(e.noData=!1,e.$emit("startGallery",[],5,0))}))}},methods:{openGallery:function(e){this.$emit("startGallery",this.dataFromServer,e,this.amount)}}};o("1954");const q=O()(M,[["render",_]]);var P=q,C={data:function(){return{showGallery:!1,dataForGallery:[],idx:0,amount:0,showBigGallery:!1}},methods:{startShow:function(e,t,o){this.showGallery=!0,this.dataForGallery=e,this.idx=t,this.amount=o},closeShow:function(){this.showGallery=!1}},name:"App",components:{GetPhotos:P,NewGallery:w}};o("0c4a");const T=O()(C,[["render",s]]);var z=T;Object(n["createApp"])(z).mount("#app")},"5e8f":function(e,t,o){"use strict";o("b7ae")},"75a3":function(e,t,o){e.exports=o.p+"img/nasa.2e3a9cbf.png"},"871d":function(e,t,o){},b7ae:function(e,t,o){}});
//# sourceMappingURL=app.f610c5d1.js.map