(function(e){function t(t){for(var n,r,i=t[0],o=t[1],s=t[2],p=0,m=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&m.push(l[r][0]),l[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(m.length)m.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==l[o]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},l={app:0},c=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=o;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),l=a.n(n);l.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("listUI")],1)},c=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[e._m(0),a("section",{staticClass:"left"},e._l(e.items,(function(t,n){return a("div",{key:t.id,class:{active:t.img.value==e.selected},attrs:{id:"item"+n},on:{click:function(a){e.selected=t.img.value}}},[a("item",{attrs:{item:t}})],1)})),0),a("section",{staticClass:"right"},e._l(e.items,(function(t,n){return a("div",{key:t.id,class:{active:t.img.value==e.selected},attrs:{id:"item"+n},on:{click:function(a){e.selected=t.img.value}}},[a("item",{attrs:{item:t}})],1)})),0)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Africa")]),a("h1",[e._v("NMVW Comparison")]),a("h2",[e._v("North-America")])])}],o=(a("4160"),a("caad"),a("ac1f"),a("2532"),a("5319"),a("159b"),a("bc3a")),s=a.n(o),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{on:{click:e.details}},[a("img",{attrs:{alt:e.item.title.value,src:e.item.img.value}}),a("div",{staticClass:"hide"},[a("h2",[e._v(e._s(e.item.title.value))]),a("p",{staticClass:"type"},[e._v("Type: "+e._s(e.item.type.value))]),a("p",{staticClass:"culture"},[e._v(e._s(e.item.culture.value))]),a("p",{staticClass:"time"},[e._v(e._s(e.item.time.value))]),a("p",{staticClass:"placeSpecfic"},[e._v(e._s(e.item.placeSpecific.value))]),a("p",{attrs:{place:"cat"}},[e._v(e._s(e.item.cat.value))]),a("a",{attrs:{target:"_blank",href:e.item.cho.value}},[e._v("Source")])])])},p=[],m={name:"item",props:{item:null},methods:{details:function(){var e=this.item,t={title:e.title.value,cho:e.cho.value,clicked:1},a=[t],n=!1,l=!1;null==localStorage.getItem("metadata")?(localStorage.setItem("metadata",JSON.stringify(a)),a=JSON.parse(localStorage.getItem("metadata")),console.table(JSON.parse(localStorage.getItem("metadata")))):(a=JSON.parse(localStorage.getItem("metadata")),a.forEach((function(t,c){t.cho==e.cho.value?(t.clicked++,a[c]=t,localStorage.setItem("metadata",JSON.stringify(a)),console.table(JSON.parse(localStorage.getItem("metadata"))),l=!0):n=!0})),n&&!l&&(a.push(t),localStorage.setItem("metadata",JSON.stringify(a)),console.table(JSON.parse(localStorage.getItem("metadata"))))),console.log(this),console.log(event.target)}}},f=m,d=(a("e364"),a("2877")),h=Object(d["a"])(f,u,p,!1,null,"354b41ca",null),v=h.exports,g={name:"listUI",components:{item:v},data:function(){return{items:[],selected:void 0}},created:function(){var e=this,t="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-23/sparql",a='\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX dc: <http://purl.org/dc/elements/1.1/>\n        PREFIX dct: <http://purl.org/dc/terms/>\n        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n        PREFIX edm: <http://www.europeana.eu/schemas/edm/>\n        PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\n        SELECT ?cho ?img ?title ?cat ?time ?type ?culture ?placeSpecific ?placeAltLabel ?placeAltLabel2 WHERE {\n          #Category\n            # <https://hdl.handle.net/20.500.11840/termmaster2653> skos:* ?catURI .\n             <https://hdl.handle.net/20.500.11840/termmaster2815> skos:* ?catURI .\n          \t?cho edm:isRelatedTo ?catURI .\n            ?catURI skos:prefLabel ?cat .\n          #Image\n            ?cho edm:isShownBy ?img .\n          #Title\n            ?cho dc:title ?title .\n          #Time\n            ?cho dct:created ?time .\n          #Type\n            ?cho dc:type ?type .\n          #Culture\n            ?cho dc:subject ?cultureRaw .\n            ?cultureRaw skos:prefLabel ?culture .\n\n          #Origin\n            ?cho dct:spatial ?place .\n            ?place skos:prefLabel ?placeSpecific . \n            \n            OPTIONAL { ?place skos:broader ?placeAlt } . \n            OPTIONAL { ?placeAlt skos:prefLabel ?placeAltLabel } .\n\n            OPTIONAL { ?placeAlt skos:broader ?placeAltLabel1 } .\n            OPTIONAL { ?placeAltLabel1 skos:prefLabel ?placeAltLabel2 } .\n\n        FILTER langMatches(lang(?title), "eng")\n        } LIMIT 40\n      ';s.a.get(t+"?query="+encodeURIComponent(a)+"&format=json").then((function(t){return e.items=t.data.results.bindings})).then((function(e){return console.log(e)})).then((function(t){e.items.forEach((function(e){return e.img.value=e.img.value.replace("http","https"),e.img.value.includes("-Extra")&&(e.img.value=e.img.value.replace("-Extra","")),t}))})).catch((function(e){return console.log(e)}))}},b=g,_=(a("6143"),Object(d["a"])(b,r,i,!1,null,"a9cb32b8",null)),y=_.exports,I={name:"app",components:{listUI:y}},O=I,w=(a("034f"),Object(d["a"])(O,l,c,!1,null,null,null)),S=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(S)}}).$mount("#app")},6143:function(e,t,a){"use strict";var n=a("9b8f"),l=a.n(n);l.a},"85ec":function(e,t,a){},"9b8f":function(e,t,a){},e364:function(e,t,a){"use strict";var n=a("e6ce"),l=a.n(n);l.a},e6ce:function(e,t,a){}});
//# sourceMappingURL=app.22cc2a84.js.map