webpackJsonp([7],{272:function(e,t,n){n(298);var a=n(280)(n(282),n(307),"data-v-0aa04aaa",null);e.exports=a.exports},280:function(e,t){e.exports=function(e,t,n,a){var o,r=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,r=e.default);var s="function"==typeof r?r.options:r;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),a){var c=Object.create(s.computed||null);Object.keys(a).forEach(function(e){var t=a[e];c[e]=function(){return t}}),s.computed=c}return{esModule:o,exports:r,options:s}}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"index",data:function(){return{name:""}},props:{},computed:{},methods:{jump:function(){this.$router.go(-1)}},created:function(){console.log(this.$route.name),this.name=this.$route.name},beforeMount:function(){},mounted:function(){},watch:{$route:function(){this.$route.name&&(this.name=this.$route.name)}},components:{},filters:{},directive:{}}},290:function(e,t,n){t=e.exports=n(270)(!0),t.push([e.i,".box[data-v-0aa04aaa]{max-width:10rem;margin:0 auto;margin-bottom:1rem}header[data-v-0aa04aaa]{height:.9rem;line-height:.9rem;padding:0 .3rem;text-align:center;font-size:.3rem;color:#000;border-bottom:.01rem solid #ccc}header .el-icon-arrow-left[data-v-0aa04aaa]{font-size:.28rem;float:left;line-height:.9rem}","",{version:3,sources:["D:/git/DApp-token/mobile/src/views/index/index.vue"],names:[],mappings:"AACA,sBACE,gBAAiB,AACjB,cAAe,AACf,kBAAoB,CACrB,AACD,wBACE,aAAe,AACf,kBAAoB,AACpB,gBAAkB,AAClB,kBAAmB,AACnB,gBAAkB,AAClB,WAAY,AACZ,+BAAiC,CAClC,AACD,4CACE,iBAAkB,AAClB,WAAY,AACZ,iBAAoB,CACrB",file:"index.vue",sourcesContent:["\n.box[data-v-0aa04aaa] {\n  max-width: 10rem;\n  margin: 0 auto;\n  margin-bottom: 1rem;\n}\nheader[data-v-0aa04aaa] {\n  height: .90rem;\n  line-height: .90rem;\n  padding: 0 .30rem;\n  text-align: center;\n  font-size: .30rem;\n  color: #000;\n  border-bottom: .01rem solid #ccc;\n}\nheader .el-icon-arrow-left[data-v-0aa04aaa] {\n  font-size: .28rem;\n  float: left;\n  line-height: .90rem;\n}\n"],sourceRoot:""}])},298:function(e,t,n){var a=n(290);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(271)("4cbb9daa",a,!0)},307:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("div",{staticClass:"box"},[n("router-view")],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=7.aa78f5f3adefacf3d3cf.js.map