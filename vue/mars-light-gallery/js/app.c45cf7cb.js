(function(e){function t(t){for(var a,l,c=t[0],s=t[1],i=t[2],d=0,m=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&m.push(r[l][0]),r[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,i||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,c=1;c<o.length;c++){var s=o[c];0!==r[s]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=o[0]))}return e}var a={},r={app:0},n=[];function l(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=a,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(o,a,function(t){return e[t]}.bind(null,a));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=s;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"10df":function(e,t,o){},2265:function(e,t,o){"use strict";o("b10b")},3819:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("7a23"),r=o("75a3"),n=o.n(r),l={class:"container mx-auto flex flex-col justify-start items-center px-2"},c=Object(a["createElementVNode"])("img",{src:n.a,class:"mb-12"},null,-1);function s(e,t,o,r,n,s){var i=Object(a["resolveComponent"])("GetPhotos"),u=Object(a["resolveComponent"])("gallery");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",l,[c,Object(a["createVNode"])(i,{onStartGallery:s.startShow},null,8,["onStartGallery"])]),n.showGallery?(Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:0,dataForGallery:n.dataForGallery,index:n.idx,amount:n.amount,onCloseGallery:s.closeShow},null,8,["dataForGallery","index","amount","onCloseGallery"])):Object(a["createCommentVNode"])("",!0)],64)}var i=function(e){return Object(a["pushScopeId"])("data-v-6a4b3e67"),e=e(),Object(a["popScopeId"])(),e},u={class:"min-w-screen min-h-screen bg-black fixed inset-0 flex flex-col items-center text-white z-10"},d={class:"w-full flex flex-row justify-between items-center mt-12"},m=i((function(){return Object(a["createElementVNode"])("p",null,"left",-1)})),p=["src"],f=i((function(){return Object(a["createElementVNode"])("p",null,"right ",-1)})),h={class:"w-full flex flex-row justify-center items-center mt-12 flex-wrap"},b={key:0,class:"mr-4"},g=["src","onClick"];function j(e,t,o,r,n,l){return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(e){return l.Close()}),class:"text-white text-lg py-2 px-4 bg-red-500 fixed right-0 top-0 z-20"}," close gallery "),Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("div",d,[m,Object(a["createElementVNode"])("img",{src:n.startPhoto,alt:"",class:"w-4/12 object-cover overflow-hidden animation"},null,8,p),f]),Object(a["createElementVNode"])("div",h,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.array,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e,(function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[t<o.amount?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",b,[(Object(a["openBlock"])(),Object(a["createElementBlock"])("img",{src:e.img_src,alt:"",class:"w-full h-32 object-cover border-4 border-gray-100 rounded-lg hover:border-red-400",onClick:function(e){return l.changePhoto(t)},key:e.id},null,8,g))])):Object(a["createCommentVNode"])("",!0)],64)})),256))],64)})),256))])])],64)}var y={emits:["closeGallery"],props:["dataForGallery","index","amount"],name:"Gallery",data:function(){return{startPhoto:this.dataForGallery.photos[this.index].img_src,array:this.dataForGallery,isActive:!1,isAnimated:!0}},methods:{Close:function(){this.$emit("closeGallery")},changePhoto:function(e){this.startPhoto=this.dataForGallery.photos[e].img_src}}},O=(o("ffd4"),o("6b0d")),x=o.n(O);const w=x()(y,[["render",j],["__scopeId","data-v-6a4b3e67"]]);var v=w,k={class:"w-full lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-end mb-6"},B={class:"flex flex-col justify-start items-center w-full"},E=Object(a["createElementVNode"])("p",{class:"mb-2 text-lg"},"Number of images:",-1),V={class:"flex flex-col justify-start items-center w-full"},G=Object(a["createElementVNode"])("p",{class:"mb-2 text-lg"},"Select date:",-1),D={class:"flex justify-center"},N={class:"min-w-screen grid grid-cols-1 md:grid-cols-4 gap-20"},S=["onClick"],M=["src"],C={class:"text-xl"},F={key:0,class:"col-start-1 col-end-5 text-lg text-gray-700"};function _(e,t,o,r,n,l){return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.query)+" ",1),Object(a["createElementVNode"])("div",k,[Object(a["createElementVNode"])("div",B,[E,Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"number",min:"1",max:"50","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.amount=e}),class:"border border-gray-200 text-xl rounded-lg w-full p-2 h-12 focus:border-4 focus:border-blue-200 outline-none"},null,512),[[a["vModelText"],n.amount]])]),Object(a["createElementVNode"])("div",V,[G,Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"date","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.date=e}),class:"border border-gray-200 text-lg rounded-lg w-full p-2 h-12 focus:border-4 focus:border-blue-200 outline-none"},null,512),[[a["vModelText"],n.date]])]),Object(a["createElementVNode"])("div",D,[Object(a["createElementVNode"])("button",{onClick:t[2]||(t[2]=function(){return l.getData&&l.getData.apply(l,arguments)}),class:"bg-blue-600 text-white text-lg rounded-lg py-2 px-8 self-center h-12"}," Submit ")])]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.dataFromServer,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",N,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e,(function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[t<n.amountOfPhotos?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:0,onClick:function(e){return l.openGallery(t)},class:"flex flex-col justify-start items-center border-2 border-gray-200 bg-white self-straight rounded cursor-pointer"},[Object(a["createElementVNode"])("img",{src:e.img_src,class:"w-full h-full object-cover"},null,8,M),Object(a["createElementVNode"])("p",C,Object(a["toDisplayString"])(e.id),1),Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.earth_date),1)],8,S)):Object(a["createCommentVNode"])("",!0)],64)})),256)),0==e.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",F,"No photos found on this date.")):Object(a["createCommentVNode"])("",!0)])})),256))],64)}o("fb6a");var P=o("bc3a"),A=o.n(P),q={emits:["startGallery"],data:function(){return{today:new Date,dataFromServer:[],amount:1,amountOfPhotos:0,page:1,date:(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2),query:null}},beforeMount:function(){this.query="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=".concat(this.date)},computed:{getData:function(){var e=this;this.amountOfPhotos=this.amount,this.amount<=25?this.query="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=".concat(this.date,"&page=1"):this.query="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=".concat(this.date),A.a.get(this.query).then((function(t){e.dataFromServer=t.data}))}},methods:{openGallery:function(e){this.$emit("startGallery",this.dataFromServer,e,this.amount)}}};const H=x()(q,[["render",_]]);var z=H,L=Object(a["createElementVNode"])("a",{"data-lg-size":"1406-1390",class:"gallery-item","data-src":"https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80","data-sub-html":"<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"},[Object(a["createElementVNode"])("img",{class:"img-responsive",src:"https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"})],-1),T=Object(a["createElementVNode"])("a",{"data-lg-size":"1400-1400",class:"gallery-item","data-src":"https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80","data-sub-html":"<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"},[Object(a["createElementVNode"])("img",{class:"img-responsive",src:"https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"})],-1),W=Object(a["createElementVNode"])("a",{"data-lg-size":"1400-1400",class:"gallery-item","data-src":"https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80","data-sub-html":"<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"},[Object(a["createElementVNode"])("img",{style:{width:"200px"},class:"img-responsive",src:"https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"})],-1),I=Object(a["createElementVNode"])("a",{class:"gallery-item","data-video":'{"source": [{"src":"https://www.lightgalleryjs.com/videos/video1.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}',"data-poster":"","data-sub-html":"<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"},[Object(a["createElementVNode"])("img",{width:"200",class:"img-responsive",src:"https://www.lightgalleryjs.com/images/demo/html5-video-poster.jpg"})],-1);function J(e,t,o,r,n,l){var c=Object(a["resolveComponent"])("lightgallery");return Object(a["openBlock"])(),Object(a["createBlock"])(c,{settings:{speed:500,plugins:e.plugins},onInit:l.onInit,onBeforeSlide:l.onBeforeSlide},{default:Object(a["withCtx"])((function(){return[L,T,W,I]})),_:1},8,["settings","onInit","onBeforeSlide"])}var Y=o("97a5"),Q=o.n(Y),R=o("c79a"),X=o("18c1"),K={name:"App",components:{Lightgallery:Q.a},data:function(){return{plugins:[R["a"],X["a"]]}},methods:{onInit:function(){console.log("lightGallery has been initialized")},onBeforeSlide:function(){console.log("calling before slide")}}};o("8d2d");const U=x()(K,[["render",J]]);var $=U,Z={data:function(){return{showGallery:!1,dataForGallery:[],idx:0,amount:0}},methods:{startShow:function(e,t,o){this.showGallery=!0,this.dataForGallery=e,this.idx=t,this.amount=o},closeShow:function(){this.showGallery=!1}},name:"App",components:{GetPhotos:z,Gallery:v,Gal2:$}};o("2265");const ee=x()(Z,[["render",s]]);var te=ee;Object(a["createApp"])(te).mount("#app")},"75a3":function(e,t,o){e.exports=o.p+"img/nasa.2e3a9cbf.png"},"8d2d":function(e,t,o){"use strict";o("10df")},b10b:function(e,t,o){},ffd4:function(e,t,o){"use strict";o("3819")}});
//# sourceMappingURL=app.c45cf7cb.js.map