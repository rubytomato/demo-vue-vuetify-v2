(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Footer"],{"0bc6":function(t,e,s){},"132d":function(t,e,s){"use strict";s("7db0"),s("caad"),s("c975"),s("fb6a"),s("45fc"),s("a9e3"),s("2532"),s("498a"),s("c96a");var a,i=s("5530"),r=(s("4804"),s("7e2b")),n=s("a9ad"),o=s("af2b"),c=s("7560"),l=s("80d2"),d=s("2b0e"),h=s("58df");function v(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function u(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(a||(a={}));var m=Object(h["a"])(r["a"],n["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["w"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["t"])(t).find((function(e){return t[e]}));return e&&a[e]||Object(l["f"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(i["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return t},applyColors:function(t){t.class=Object(i["a"])(Object(i["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var s=[],a=this.getDefaultData(),i="material-icons",r=t.indexOf("-"),n=r<=-1;n?s.push(t):(i=t.slice(0,r),v(i)&&(i="")),a.class[i]=!0,a.class[t]=!n;var o=this.getSize();return o&&(a.style={fontSize:o}),this.applyColors(a),e(this.hasClickListener?"button":this.tag,a,s)},renderSvgIcon:function(t,e){var s=this.getSize(),a=Object(i["a"])(Object(i["a"])({},this.getDefaultData()),{},{style:s?{fontSize:s,height:s,width:s}:void 0});a.class["v-icon--svg"]=!0,this.applyColors(a);var r={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:s||"24",width:s||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",a,[e("svg",r,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var s=this.getDefaultData();s.class["v-icon--is-component"]=!0;var a=this.getSize();a&&(s.style={fontSize:a,height:a,width:a}),this.applyColors(s);var i=t.component;return s.props=t.props,s.nativeOn=s.on,e(i,s)}},render:function(t){var e=this.getIcon();return"string"===typeof e?u(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=d["a"].extend({name:"v-icon",$_wrapperFor:m,functional:!0,render:function(t,e){var s=e.data,a=e.children,i="";return s.domProps&&(i=s.domProps.textContent||s.domProps.innerHTML||i,delete s.domProps.textContent,delete s.domProps.innerHTML),t(m,s,i?[i]:a)}})},"297c":function(t,e,s){"use strict";s("a9e3");var a=s("2b0e"),i=s("37c6");e["a"]=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(i["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37c6":function(t,e,s){"use strict";var a=s("8e36");e["a"]=a["a"]},4804:function(t,e,s){},"615b":function(t,e,s){},"6ece":function(t,e,s){},"8ce9":function(t,e,s){},"8e36":function(t,e,s){"use strict";s("a9e3"),s("c7cd");var a=s("5530"),i=s("ade3"),r=(s("6ece"),s("0789")),n=s("a9ad"),o=s("fe6c"),c=s("a452"),l=s("7560"),d=s("80d2"),h=s("58df"),v=Object(h["a"])(n["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),c["a"],l["a"]);e["a"]=v.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(i["a"])(t,this.isReversed?"right":"left",Object(d["f"])(this.normalizedValue,"%")),Object(i["a"])(t,"width",Object(d["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(a["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?r["d"]:r["e"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["o"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(i["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),s=e.width;this.internalValue=t.offsetX/s*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},9397:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",[s("v-col",{staticClass:"my-2 grey darken-3",attrs:{cols:"12",md:"6"}},[s("v-subheader",{staticClass:"white--text"},[t._v("dark theme")]),s("v-card",{attrs:{dark:"",height:"150",tile:""}},[s("v-card-title",[t._v("Main Contents")]),s("v-card-text",[t._v("contents...")])],1),s("v-footer",{attrs:{dark:"",padless:""}},[s("v-card",{staticClass:"text-center",attrs:{tile:"",width:"100%"}},[s("v-card-text",[s("v-btn",{staticClass:"mx-4",attrs:{icon:""}},[s("v-icon",{attrs:{size:"24px"}},[t._v("mdi-account")])],1),s("v-btn",{staticClass:"mx-4",attrs:{icon:""}},[s("v-icon",{attrs:{size:"24px"}},[t._v("mdi-home")])],1),s("v-btn",{staticClass:"mx-4",attrs:{icon:""}},[s("v-icon",{attrs:{size:"24px"}},[t._v("mdi-email")])],1),s("v-btn",{staticClass:"mx-4",attrs:{icon:""}},[s("v-icon",{attrs:{size:"24px"}},[t._v("mdi-calendar")])],1),s("v-btn",{staticClass:"mx-4",attrs:{icon:""}},[s("v-icon",{attrs:{size:"24px"}},[t._v("mdi-delete")])],1)],1),s("v-divider"),s("v-card-text",{staticClass:"font-weight-medium"},[t._v("2020 — Footer")])],1)],1)],1),s("v-col",{staticClass:"my-2 grey lighten-3",attrs:{cols:"12",md:"6"}},[s("v-subheader",[t._v("light theme")]),s("v-card",{attrs:{light:"",height:"150",tile:""}},[s("v-card-title",[t._v("Main Contents")]),s("v-card-text",[t._v("contents...")])],1),s("v-footer",{attrs:{light:"",padless:""}},[s("v-card",{staticClass:"text-center",attrs:{tile:"",width:"100%"}},[s("v-card-text",[s("v-btn",{staticClass:"mx-4",attrs:{icon:""}},[s("v-icon",{attrs:{size:"24px"}},[t._v("mdi-account")])],1),s("v-btn",{staticClass:"mx-4",attrs:{icon:""}},[s("v-icon",{attrs:{size:"24px"}},[t._v("mdi-home")])],1),s("v-btn",{staticClass:"mx-4",attrs:{icon:""}},[s("v-icon",{attrs:{size:"24px"}},[t._v("mdi-email")])],1),s("v-btn",{staticClass:"mx-4",attrs:{icon:""}},[s("v-icon",{attrs:{size:"24px"}},[t._v("mdi-calendar")])],1),s("v-btn",{staticClass:"mx-4",attrs:{icon:""}},[s("v-icon",{attrs:{size:"24px"}},[t._v("mdi-delete")])],1)],1),s("v-divider"),s("v-card-text",{staticClass:"font-weight-medium"},[t._v("2020 — Footer")])],1)],1)],1),s("v-col",{staticClass:"my-2 grey lighten-4",attrs:{cols:"12",md:"6"}},[s("v-subheader",[t._v("color")]),s("v-card",{attrs:{height:"120",color:"white",tile:""}},[s("v-card-title",[t._v("Main Contents")]),s("v-card-text",[t._v("contents...")])],1),s("v-footer",{attrs:{color:"red"}},[s("v-col",{staticClass:"font-weight-medium text-center",attrs:{cols:"12"}},[t._v("2020 — Footer")])],1)],1),s("v-col",{staticClass:"my-2 grey lighten-4",attrs:{cols:"12",md:"6"}},[s("v-subheader",[t._v("elevation")]),s("v-card",{attrs:{height:"120",color:"white",tile:""}},[s("v-card-title",[t._v("Main Contents")]),s("v-card-text",[t._v("contents...")])],1),s("v-footer",{attrs:{elevation:"10"}},[s("v-col",{staticClass:"font-weight-medium text-center",attrs:{cols:"12"}},[t._v("2020 — Footer")])],1)],1),s("v-col",{staticClass:"my-2 grey lighten-4",attrs:{cols:"12",md:"6"}},[s("v-subheader",[t._v("padless")]),s("v-card",{attrs:{height:"120",color:"white",tile:""}},[s("v-card-title",[t._v("Main Contents")]),s("v-card-text",[t._v("contents...")])],1),s("v-footer",{attrs:{color:"blue",padless:""}},[s("v-col",{staticClass:"font-weight-medium text-center",staticStyle:{"background-color":"#90CAF9"},attrs:{cols:"12"}},[t._v("2020 — Footer")])],1)],1),s("v-col",{staticClass:"my-2 grey lighten-4",attrs:{cols:"12",md:"6"}},[s("v-subheader",[t._v("no padless")]),s("v-card",{attrs:{height:"120",color:"white",tile:""}},[s("v-card-title",[t._v("Main Contents")]),s("v-card-text",[t._v("contents...")])],1),s("v-footer",{attrs:{color:"blue"}},[s("v-col",{staticClass:"font-weight-medium text-center",staticStyle:{"background-color":"#90CAF9"},attrs:{cols:"12"}},[t._v("2020 — Footer")])],1)],1),s("v-col",{staticClass:"my-2 grey lighten-4",attrs:{cols:"12",md:"6"}},[s("v-subheader",[t._v("tile")]),s("v-card",{attrs:{height:"120",color:"white",tile:""}},[s("v-card-title",[t._v("Main Contents")]),s("v-card-text",[t._v("contents...")])],1),s("v-footer",{attrs:{color:"blue"}},[s("v-col",{staticClass:"font-weight-medium text-center",attrs:{cols:"12"}},[t._v("2020 — Footer")])],1)],1),s("v-col",{staticClass:"my-2 grey lighten-4",attrs:{cols:"12",md:"6"}},[s("v-subheader",[t._v("no tile")]),s("v-card",{attrs:{height:"120",color:"white",tile:""}},[s("v-card-title",[t._v("Main Contents")]),s("v-card-text",[t._v("contents...")])],1),s("v-footer",{attrs:{tile:!1,color:"blue"}},[s("v-col",{staticClass:"font-weight-medium text-center",attrs:{cols:"12"}},[t._v("2020 — Footer")])],1)],1),s("v-col",{staticClass:"my-2 grey lighten-4",attrs:{cols:"12",md:"6"}},[s("v-subheader",[t._v("width")]),s("v-card",{attrs:{light:"",height:"120",width:"400",tile:""}},[s("v-card-title",[t._v("Main Contents")]),s("v-card-text",[t._v("contents...")])],1),s("v-footer",{attrs:{width:"400",color:"blue darken-1"}},[s("v-col",{staticClass:"font-weight-medium text-center",attrs:{cols:"12"}},[t._v("2020 — Footer")])],1)],1),s("v-col",{staticClass:"my-2 grey lighten-4",attrs:{cols:"12",md:"6"}},[s("v-subheader",[t._v("height")]),s("v-card",{attrs:{light:"",height:"120",tile:""}},[s("v-card-title",[t._v("Main Contents")]),s("v-card-text",[t._v("contents...")])],1),s("v-footer",{attrs:{height:"100",color:"blue darken-1"}},[s("v-col",{staticClass:"font-weight-medium text-center",attrs:{cols:"12"}},[t._v("2020 — Footer")])],1)],1),s("v-col",{staticClass:"my-2 grey lighten-4",attrs:{cols:"12",md:"6"}},[s("v-subheader",[t._v("absolute")]),s("v-card",{attrs:{light:"",tile:"",height:"300"}},[s("v-card-title",[t._v("Main Contents")]),s("v-card-text",[t._v("contents...")]),s("v-footer",{attrs:{absolute:"",color:"lime lighten-3"}},[s("v-col",{staticClass:"font-weight-medium text-center",attrs:{cols:"12"}},[t._v("2020 — Footer")])],1)],1)],1)],1)],1)},i=[],r=s("2877"),n=s("6544"),o=s.n(n),c=s("8336"),l=s("b0af"),d=s("99d9"),h=s("62ad"),v=s("a523"),u=s("ce7e"),m=s("553a"),g=s("132d"),f=s("0fd9"),p=s("e0c7"),b={},_=Object(r["a"])(b,a,i,!1,null,null,null);e["default"]=_.exports;o()(_,{VBtn:c["a"],VCard:l["a"],VCardText:d["c"],VCardTitle:d["d"],VCol:h["a"],VContainer:v["a"],VDivider:u["a"],VFooter:m["a"],VIcon:g["a"],VRow:f["a"],VSubheader:p["a"]})},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return o})),s.d(e,"d",(function(){return c}));var a=s("b0af"),i=s("80d2"),r=Object(i["h"])("v-card__actions"),n=Object(i["h"])("v-card__subtitle"),o=Object(i["h"])("v-card__text"),c=Object(i["h"])("v-card__title");a["a"]},a452:function(t,e,s){"use strict";var a=s("ade3"),i=s("2b0e");function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return i["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(a["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(a["a"])({},t,(function(t){this.internalLazyValue=t}))})}var n=r();e["a"]=n},b0af:function(t,e,s){"use strict";s("0481"),s("4069"),s("a9e3");var a=s("5530"),i=(s("615b"),s("10d2")),r=s("297c"),n=s("1c87"),o=s("58df");e["a"]=Object(o["a"])(r["a"],n["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),s=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(s,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},ce7e:function(t,e,s){"use strict";var a=s("5530"),i=(s("8ce9"),s("7560"));e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(a["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(a["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},e0c7:function(t,e,s){"use strict";var a=s("5530"),i=(s("0bc6"),s("7560")),r=s("58df");e["a"]=Object(r["a"])(i["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(a["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);
//# sourceMappingURL=Footer.dddea467.js.map