(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GridP2"],{"42e5":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"grey lighten-5"},[s("v-row",{attrs:{dense:t.dense,"no-gutters":t.gutters,justify:"space-around"}},[s("v-col",{staticStyle:{"background-color":"#FFCDD2"},attrs:{cols:"12",sm:"8",md:"6",lg:"4",xl:"3"}},[s("v-sheet",{staticClass:"pa-1",attrs:{color:"red",tile:""}},[t._v("column 1")])],1),s("v-col",{staticStyle:{"background-color":"#F8BBD0"},attrs:{cols:"12",sm:"8",md:"6",lg:"4",xl:"3"}},[s("v-sheet",{staticClass:"pa-1",attrs:{color:"pink",tile:""}},[t._v("column 2")])],1),s("v-col",{staticStyle:{"background-color":"#E1BEE7"},attrs:{cols:"12",sm:"8",md:"6",lg:"4",xl:"3"}},[s("v-sheet",{staticClass:"pa-1",attrs:{color:"purple",tile:""}},[t._v("column 3")])],1),s("v-col",{staticStyle:{"background-color":"#D1C4E9"},attrs:{cols:"12",sm:"8",md:"6",lg:"4",xl:"3"}},[s("v-sheet",{staticClass:"pa-1",attrs:{color:"deep-purple",tile:""}},[t._v("column 4")])],1),s("v-col",{staticStyle:{"background-color":"#C5CAE9"},attrs:{cols:"12",sm:"8",md:"6",lg:"4",xl:"3"}},[s("v-sheet",{staticClass:"pa-1",attrs:{color:"indigo",tile:""}},[t._v("column 5")])],1),s("v-col",{staticStyle:{"background-color":"#BBDEFB"},attrs:{cols:"12",sm:"8",md:"6",lg:"4",xl:"3"}},[s("v-sheet",{staticClass:"pa-1",attrs:{color:"blue",tile:""}},[t._v("column 6")])],1),s("v-col",{staticStyle:{"background-color":"#B3E5FC"},attrs:{cols:"12",sm:"8",md:"6",lg:"4",xl:"3"}},[s("v-sheet",{staticClass:"pa-1",attrs:{color:"light-blue",tile:""}},[t._v("column 7")])],1),s("v-col",{staticStyle:{"background-color":"#B2EBF2"},attrs:{cols:"12",sm:"8",md:"6",lg:"4",xl:"3"}},[s("v-sheet",{staticClass:"pa-1",attrs:{color:"cyan",tile:""}},[t._v("column 8")])],1),s("v-col",{staticStyle:{"background-color":"#B2DFDB"},attrs:{cols:"12",sm:"8",md:"6",lg:"4",xl:"3"}},[s("v-sheet",{staticClass:"pa-1",attrs:{color:"teal",tile:""}},[t._v("column 9")])],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-sheet",{staticClass:"pa-2",attrs:{elevation:"2",color:"green lighten-4",tile:""}},[s("pre",[t._v("(12) xs :        - 600px\n( 8) sm :  600px - 960px\n( 6) md :  960px - 1264px\n( 4) lg : 1264px - 1904px\n( 3) xl : 1904px -\n          ")])]),s("v-sheet",{staticClass:"pa-2",attrs:{elevation:"2",color:"green lighten-4",tile:""}},[s("ul",[s("li",[t._v("Height: "+t._s(t.$vuetify.breakpoint.height)+" / Width: "+t._s(t.$vuetify.breakpoint.width))]),s("li",[t._v("XS: "+t._s(t.$vuetify.breakpoint.xs))]),s("li",[t._v("SM: "+t._s(t.$vuetify.breakpoint.sm))]),s("li",[t._v("MD: "+t._s(t.$vuetify.breakpoint.md))]),s("li",[t._v("LG: "+t._s(t.$vuetify.breakpoint.lg))]),s("li",[t._v("XL: "+t._s(t.$vuetify.breakpoint.xl))])])]),s("v-switch",{attrs:{label:"dense"},model:{value:t.dense,callback:function(e){t.dense=e},expression:"dense"}}),s("v-switch",{attrs:{label:"no-gutters"},model:{value:t.gutters,callback:function(e){t.gutters=e},expression:"gutters"}})],1)],1)],1)},o=[],a={data:function(){return{dense:!1,gutters:!1}}},n=a,c=s("2877"),l=s("6544"),r=s.n(l),u=s("62ad"),h=s("a523"),d=s("0fd9"),v=s("8dd9"),p=s("b73d"),f=Object(c["a"])(n,i,o,!1,null,null,null);e["default"]=f.exports;r()(f,{VCol:u["a"],VContainer:h["a"],VRow:d["a"],VSheet:v["a"],VSwitch:p["a"]})},"9d01":function(t,e,s){},b73d:function(t,e,s){"use strict";s("0481"),s("4069");var i=s("5530"),o=(s("ec29"),s("9d01"),s("fe09")),a=s("c37a"),n=s("c3f0"),c=s("0789"),l=s("490a"),r=s("80d2");e["a"]=o["a"].extend({name:"v-switch",directives:{Touch:n["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(i["a"])({},a["a"].options.computed.classes.call(this),{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.disabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(i["a"])({},this.attrs,{},this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(c["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(l["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===r["q"].left&&this.isActive||t.keyCode===r["q"].right&&!this.isActive)&&this.onChange()}}})},c3f0:function(t,e,s){"use strict";s("4160"),s("159b");var i=s("80d2"),o=function(t){var e=t.touchstartX,s=t.touchendX,i=t.touchstartY,o=t.touchendY,a=.5,n=16;t.offsetX=s-e,t.offsetY=o-i,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&s<e-n&&t.left(t),t.right&&s>e+n&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&o<i-n&&t.up(t),t.down&&o>i+n&&t.down(t))};function a(t,e){var s=t.changedTouches[0];e.touchstartX=s.clientX,e.touchstartY=s.clientY,e.start&&e.start(Object.assign(t,e))}function n(t,e){var s=t.changedTouches[0];e.touchendX=s.clientX,e.touchendY=s.clientY,e.end&&e.end(Object.assign(t,e)),o(e)}function c(t,e){var s=t.changedTouches[0];e.touchmoveX=s.clientX,e.touchmoveY=s.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return a(t,e)},touchend:function(t){return n(t,e)},touchmove:function(t){return c(t,e)}}}function r(t,e,s){var o=e.value,a=o.parent?t.parentElement:t,n=o.options||{passive:!0};if(a){var c=l(e.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[s.context._uid]=c,Object(i["r"])(c).forEach((function(t){a.addEventListener(t,c[t],n)}))}}function u(t,e,s){var o=e.value.parent?t.parentElement:t;if(o&&o._touchHandlers){var a=o._touchHandlers[s.context._uid];Object(i["r"])(a).forEach((function(t){o.removeEventListener(t,a[t])})),delete o._touchHandlers[s.context._uid]}}var h={inserted:r,unbind:u};e["a"]=h}}]);
//# sourceMappingURL=GridP2.ab4ea437.js.map