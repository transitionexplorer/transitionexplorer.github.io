(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0f4f":function(t,e,n){},"138d":function(t,e,n){},"159f":function(t,e,n){"use strict";n("138d")},"268d":function(t,e,n){},4747:function(t,e,n){"use strict";n("e99f")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r,i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("GalleryNavBar"),n("keep-alive",[n(t.pageComponent,{tag:"component",attrs:{id:"main-body"}})],1)],1)},o=[],c=n("5530"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{type:"dark",variant:"info",id:"navbar"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("Transitions in Data Videos")]),n("b-navbar-nav",[n("b-nav-item",{on:{click:function(e){return t.pageChange("home")}}},[t._v("Home")]),n("b-nav-item",{on:{click:function(e){return t.pageChange("designspace")}}},[t._v("Design Space")])],1)],1)],1)},u=[],d={name:"GalleryNavBar",methods:{pageChange:function(t){this.$store.commit("SET_CURRENT_PAGE",t)}}},p=d,f=(n("e414"),n("2877")),h=Object(f["a"])(p,l,u,!1,null,"5d99696b",null),v=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:"",id:"designspace-container"}},[n("b-row",[n("b-col",{attrs:{cols:"2",id:"ds-sidebar"}},[n("DesignSpaceSideBar",{attrs:{onGalleryChange:t.changeGalleryOrganization}})],1),n("b-col",{attrs:{id:"gallery"}},[n(t.galleryComponent,{tag:"component",attrs:{id:"gallery-component"}})],1)],1)],1)},g=[],_=n("1da1"),b=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ds-sidebar"}},[n("div",{attrs:{id:"dimensions-toc"}},[n("div",{staticClass:"dimention",attrs:{id:"animation-list"}},[n("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-te",modifiers:{"collapse-te":!0}}],staticClass:"dimension-header",class:t.teVisible?null:"collapsed",attrs:{"aria-expanded":t.teVisible?"true":"false","aria-controls":"collapse-nr"},on:{click:function(e){return t.onClickTe()}}},[n("span",[t._v(" Transition Animations ")]),n("span",{staticClass:"dimension-head-stop",class:t.teVisible?"focused-stop":null})]),n("b-collapse",{staticClass:"mt-2",attrs:{visible:"",id:"collapse-te"}},[n("div",{staticClass:"sidebar-panel-group"},t._l(t.AnimationList,(function(e){return n("a",{key:e.index,staticClass:"sidebar-btn scrollSpy-btn default",attrs:{href:"#"+e.en_name}},[n("span",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse",expression:"'collapse'"}],staticClass:"scrollSpy-btn-text"},[t._v(t._s(e.en_name))]),n("span",{staticClass:"scrollSpy-btn-stop"})])})),0)])],1),n("div",{staticClass:"dimention",attrs:{id:"n-relationship"}},[n("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-nr",modifiers:{"collapse-nr":!0}}],staticClass:"dimension-header",class:t.nrVisible?null:"collapsed",attrs:{"aria-expanded":t.nrVisible?"true":"false","aria-controls":"collapse-nr"},on:{click:function(e){return t.onClickNR()}}},[n("span",[t._v(" Narrative Relation ")]),n("span",{staticClass:"dimension-head-stop",class:t.nrVisible?"focused-stop":null})]),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-nr"}},[n("div",{staticClass:"sidebar-panel-group"},t._l(t.NarrativeRelationships,(function(e){return n("a",{key:e.NR_tag,staticClass:"sidebar-btn scrollSpy-btn default",attrs:{href:"#"+e.NR_tag}},[n("span",{staticClass:"scrollSpy-btn-symbol",style:{backgroundColor:e.NR_color}}),n("span",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse"+e.NR_tag,expression:"'collapse' + NR.NR_tag"}],staticClass:"scrollSpy-btn-text"},[t._v(t._s(e.NR_tag))]),n("span",{staticClass:"scrollSpy-btn-stop"})])})),0)])],1)]),n("div",{staticClass:"dimention",attrs:{id:"editorial-layer"}},[n("div",{staticClass:"dimension-header"},[t._v("Editorial Layers")]),t._l(["Visualization","Embelishment","Camera","Frame"],(function(e){return n("div",{key:e},[n("div",{staticClass:"editorial-layer-line"},[n("span",{staticClass:"editorial-layer-key"},[n("img",{staticClass:"el-icon",attrs:{src:"./assets/icon/"+e+".jpg"}}),t._v(" "+t._s(e))])])])}))],2)])}),C=[],R=(n("159b"),n("2f62")),N={name:"DesignSpaceSideBar",props:{onGalleryChange:Function},data:function(){return{NRSelect:{},DOSelect:{},nrVisible:!1,doVisible:!1,teVisible:!0}},computed:Object(c["a"])({},Object(R["b"])({NarrativeRelationships:function(t){return t.designSpace.narrativeRelationships},DataOperations:function(t){return t.designSpace.dataOperations},EditorialLayers:function(t){return t.designSpace.editorialLayers},AnimationList:function(t){return t.designSpace.animationLists}})),methods:{NRSelectChange:function(t){this.$store.commit("UPDATE_NR_FILTER",t)},DOSelectChange:function(t){this.$store.commit("UPDATE_DO_FILTER",t)},onClickNR:function(){this.nrVisible||(this.nrVisible=!0,this.doVisible=!1,this.teVisible=!1,this.onGalleryChange("NarrativeRelationship"))},onClickTe:function(){this.teVisible||(this.nrVisible=!1,this.doVisible=!1,this.teVisible=!0,this.onGalleryChange("Animation"))}},watch:{NarrativeRelationships:function(t){var e=this;this.NRSelect={},t.forEach((function(t){e.NRSelect[t.NR_tag]=!0}))},DataOperations:function(t){var e=this;this.DOSelect={},t.forEach((function(t){e.DOSelect[t.DO_tag]=!0}))}}},y=N,O=(n("4747"),Object(f["a"])(y,b,C,!1,null,"072287f6",null)),D=O.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.activeNRCardsGroups,(function(e,a){return n("div",{key:a,class:a,attrs:{id:a}},[n("a",{attrs:{name:a}}),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.NRFilter[a],expression:"!NRFilter[NRName]"}],staticClass:"display-reminder"},[n("div",{staticClass:"reminder-content"},[n("div",[n("span",{staticClass:"scrollSpy-btn-symbol",style:{backgroundColor:t.NarrativeRelationships[a].NR_color}}),n("span",{staticClass:"reminder-name"},[n("b",[t._v(t._s(t.NarrativeRelationships[a].NR_tag))])])]),"Universal"!=a?n("div",{staticClass:"nr_descriptions"},[n("p",[n("span",{staticClass:"nr-desc-key",style:{color:t.NarrativeRelationships[a].NR_color}},[n("b",[t._v("Definition")])]),t._v(" "+t._s(t.NarrativeRelationships[a].NR_desc)+" ")]),n("p",[n("span",{staticClass:"nr-desc-key",style:{color:t.NarrativeRelationships[a].NR_color}},[n("b",[t._v("Connecting words in natural language")])]),t._v(" "+t._s('"'+t.NarrativeRelationships[a].NR_indicator.join('", "')+'"')+" ")]),n("p",[n("span",{staticClass:"nr-desc-key",style:{color:t.NarrativeRelationships[a].NR_color}},[n("b",[t._v("Examples")])]),t._v(" "+t._s(t.NarrativeRelationships[a].NR_example.before+" -> "+t.NarrativeRelationships[a].NR_example.after)+" ")])]):t._e(),n("div",{staticClass:"applicable-data-changes"},[n("span",{staticClass:"nr-desc-key",style:{color:t.NarrativeRelationships[a].NR_color}},[n("b",[t._v("Data changes that can support "),n("i",[t._v(t._s(t.NarrativeRelationships[a].NR_tag))])])]),t._l(t.NarrativeRelationships[a].dataChanges,(function(e){return n("span",{key:e,staticClass:"narrative-relation-data-change",on:{click:function(n){return t.scrollToElement(a+"-"+e,{behavior:"smooth",block:"center"})}}},[t._v(" "+t._s(e)+" ")])}))],2)])]),t._l(t.NarrativeRelationships[a].dataChanges,(function(e,r){return n("div",{key:e,staticClass:"data-change-cards"},[n("span",{staticClass:"data-change-subtitle"},[t._v(" "+t._s(e)+" ")]),n("div",{staticClass:"card-deck"},[n("a",{class:a+"-"+e}),t._l(t.NarrativeRelationships[a].animationCards[r],(function(e){return n("Card",{key:"card"+e,staticClass:"transition-card",attrs:{card:t.TransitionCards[e-1],how:t.AnimationList[t.TransitionCards[e-1].ani_idx-1].en_how,why:"why",nrColor:t.NarrativeRelationships[a].NR_color,showDOTag:!0,narrativeRelation:a}})}))],2)])}))],2)})),0)},w=[],E=(n("4de4"),n("d3b7"),function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="assets/designspace/NR_collection.json",t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,t.abrupt("return",a["NR"]);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),T=function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="assets/designspace/DO_collection.json",t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="assets/designspace/EL_collection.json",t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="assets/designspace/transition_cards.json",t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="assets/animations/animations-list.json",t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="assets/designspace/TE_collection.json",t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="assets/datasets/"+e+".json",t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("transition",{attrs:{name:"flip"}},[n("div",{key:t.cardFlip,staticClass:"card"},[n("div",{staticClass:"card-header",style:{backgroundColor:t.nrColor}},[t._v(" "+t._s(t.card.NR_tag)+" ")]),t.cardFlip?"Universal"!=t.card.NR_tag?n("div",[n("img",{staticClass:"card-img front-gif",attrs:{src:"./assets/card/card-back/card-back-gif/back_"+t.card.card_id+".gif",alt:"./assets/image/fail_loading.svg"}}),n("div",{staticClass:"card-body"},[n("div",{staticClass:"card-body-subtitle"},[t._v(t._s(t.card.eg_title))]),n("div",{staticClass:"card-body-text"},[n("div",{staticClass:"card-body-text-line"},[n("span",[n("b",[t._v("Source")])]),t._v(" "+t._s(t.card.eg_source)+" ")]),n("div",{staticClass:"card-body-text-line"},[n("span",[n("b",[t._v("Published Year")])]),t._v(" "+t._s(t.card.eg_year)+" ")]),n("div",{staticClass:"card-body-text-line"},[n("span",[n("b",[t._v("Category")])]),t._v(" "+t._s(t.card.eg_category)+" ")]),n("div",{staticClass:"card-body-text-line"},[n("span",[n("b",[t._v("Subcategory")])]),t._v(" "+t._s(t.card.eg_subcategory)+" ")])])])]):t._e():n("div",[n("img",{staticClass:"card-img front-preview",attrs:{src:"./assets/card/card-front/"+t.cardSrc+"/front_"+t.card.card_id+"."+t.frontFileType},on:{mouseover:function(e){return t.changeSource("gif")},mouseout:function(e){return t.changeSource("static")}}}),n("div",{staticClass:"card-body"},[n("div",{staticClass:"card-body-subtitle"},[t._v("HOW")]),n("div",{staticClass:"card-body-text"},[t._v(" "+t._s(t.how)+" ")])])]),n("div",{staticClass:"card-footer"},[t.cardFlip?n("div",[n("a",{attrs:{href:t.card.eg_url,target:"_blank",rel:"noopener noreferrer"}},[n("span",{staticClass:"card-footer-url"}),t._v("URL ")]),n("span",{staticClass:"card-footer-btn",on:{click:function(e){return t.toggleCard()}}},[t._v(" back to front ")])]):n("div",[n("span",{staticClass:"card-footer-num"},[t._v("No. "+t._s(t.card.card_id))])])])])])],1)])},L=[],G={name:"Card",props:{how:String,why:String,nrColor:String,card:Object,showDOTag:Boolean,narrativeRelation:String},data:function(){return{cardFlip:Boolean,cardSrc:String,frontFileType:String}},mounted:function(){this.cardFlip=!1,this.cardSrc="card-front-static",this.frontFileType="png"},methods:{toggleCard:function(){this.cardFlip=!this.cardFlip},changeSource:function(t){"gif"==t?(this.cardSrc="card-front-gif",this.frontFileType="gif"):(this.cardSrc="card-front-static",this.frontFileType="png")}}},P=G,V=(n("9f35"),Object(f["a"])(P,I,L,!1,null,"2fa6d45a",null)),$=V.exports,M={name:"DesignSpaceGallery",components:{Card:$},data:function(){return{cards:Array,activeNRCardsGroups:Object}},computed:Object(c["a"])(Object(c["a"])({},Object(R["b"])({NRCollection:function(t){return t.designSpace.narrativeRelationships},DOCollection:function(t){return t.designSpace.ataOperations},ELCollection:function(t){return t.designSpace.editorialLayers},TransitionEffects:function(t){return t.designSpace.transitionEffects},TransitionCards:function(t){return t.designSpace.transitionCards},AnimationList:function(t){return t.designSpace.animationLists},NRFilter:function(t){return t.filter.NRFilter},DOFilter:function(t){return t.filter.DOFilter},NRFilterChangeNotifier:function(t){return t.filter.NRFilterChangeNotifier},DOFilterChangeNotifier:function(t){return t.filter.DOFilterChangeNotifier}})),{},{TransitionEffectDict:function(){var t={};return this.TransitionEffects.forEach((function(e){t[e.TE_tag]={how:e.how,why:e.why}})),t},NarrativeRelationships:function(){if(void 0==this.NRCollection||void 0==this.NRCollection[0])return{};var t={};return this.NRCollection.forEach((function(e){t[e.NR_tag]=e})),t},NRCardsGroups:function(){if(void 0==this.cards||void 0==this.cards[0])return{};for(var t={},e=0;e<this.cards.length;e++){var n=this.cards[e],a=n.NR_tag;a in t||(t[a]=[]);var r=t[a];r.push(n)}return t}}),methods:{scrollToElement:function(t,e){var n=this.$el.getElementsByClassName(t)[0];n&&n.scrollIntoView(e)}},watch:{NRCardsGroups:{handler:function(t){for(var e in this.activeNRCardsGroups={},t)if(Object.hasOwnProperty.call(t,e)&&!this.NRFilter[e]){var n=t[e];this.activeNRCardsGroups[e]=n}},deep:!0},NRFilterChangeNotifier:function(){for(var t in this.activeNRCardsGroups={},this.NRCardsGroups)if(!this.NRFilter[t]){var e=this.NRCardsGroups[t];this.activeNRCardsGroups[t]=e}}},beforeMount:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:this.cards=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},B=M,U=(n("159f"),Object(f["a"])(B,S,w,!1,null,"dddf825c",null)),H=U.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.activeCardsGroups,(function(e,a){return n("div",{key:a,class:a,attrs:{id:a}},[n("a",{attrs:{name:a}}),n("div",{staticClass:"display-reminder"},[n("div",{staticClass:"reminder-content"},[n("div",[n("span",{staticClass:"scrollSpy-btn-symbol",style:{backgroundColor:t.DataOperations[a].DO_color}}),n("span",{staticClass:"reminder-name"},[n("b",[t._v(t._s(a))])])]),n("div",{staticClass:"nr_descriptions"},[n("p",[n("span",{staticClass:"nr-desc-key",style:{backgroundColor:t.DataOperations[a].DO_color}},[t._v("Definition")]),t._v(" "+t._s(t.DataOperations[a].DO_desc)+" ")]),n("p",[n("span",{staticClass:"nr-desc-key",style:{backgroundColor:t.DataOperations[a].DO_color}},[t._v("Example")]),t._v(" "+t._s(t.DataOperations[a].DO_example)+" ")])])])]),n("div",{staticClass:"card-deck"},t._l(e,(function(e){return n("Card",{key:e.card_title,attrs:{card:e,how:t.TransitionEffectDict[e.TE_tag].how,why:t.TransitionEffectDict[e.TE_tag].why,nrColor:t.NarrativeRelationships[e.NR_tag].NR_color,showDOTag:!1}})})),1)])})),0)},z=[],Y=(n("b64b"),{name:"DesignSpaceDOGallery",components:{Card:$},data:function(){return{cards:Array,activeCardsGroups:Object}},computed:Object(c["a"])(Object(c["a"])({},Object(R["b"])({NRCollection:function(t){return t.designSpace.narrativeRelationships},DOCollection:function(t){return t.designSpace.dataOperations},ELCollection:function(t){return t.designSpace.editorialLayers},TransitionEffects:function(t){return t.designSpace.transitionEffects},TransitionCards:function(t){return t.designSpace.transitionCards}})),{},{TransitionEffectDict:function(){var t={};return this.TransitionEffects.forEach((function(e){t[e.TE_tag]={how:e.how,why:e.why}})),t},NarrativeRelationships:function(){if(void 0==this.NRCollection||void 0==this.NRCollection[0])return{};var t={};return this.NRCollection.forEach((function(e){t[e.NR_tag]=e})),t},DataOperations:function(){if(void 0==this.DOCollection||void 0==this.DOCollection[0])return{};var t={};return this.DOCollection.forEach((function(e){t[e.DO_tag]=e})),console.log(t),t},cardsGroups:function(){var t=this;if(void 0==this.cards||void 0==this.cards[0])return{};for(var e={},n=function(n){var a=t.cards[n];Object.keys(a.DO_tag).forEach((function(t){t in e||(e[t]=[]);var n=e[t];n.push(a)}))},a=0;a<this.cards.length;a++)n(a);return e}}),watch:{cardsGroups:{handler:function(t){for(var e in this.activeCardsGroups={},t){var n=t[e];this.activeCardsGroups[e]=n}},deep:!0}},beforeMount:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:this.cards=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}),J=Y,q=(n("8b1c"),Object(f["a"])(J,W,z,!1,null,"8193aca2",null)),K=q.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.AnimationList,(function(e){return n("div",{key:e.index,staticClass:"animation-container"},[n("a",{attrs:{name:e.en_name}},[n("b-card",{staticClass:"mb-3 animation-card",attrs:{"header-bg-variant":"primary","header-text-variant":"white",title:" No. "+e.index+" "+e.en_name,"img-src":"./assets/animations/animation-examples/"+e.en_name+(t.overAnimation==e.en_name?".gif":".jpg"),"img-alt":"./assets/image/fail_loading.svg","img-left":""},on:{mouseover:function(n){return t.changeSource(e.en_name)},mouseout:function(n){return t.changeSource(e.en_name)}}},[n("b-card-text",{staticClass:"animation-disc"},[n("div",{staticClass:"ani-disc-box"},[n("div",[n("span",{staticClass:"ani-sub-title"},[t._v(" HOW ")]),t._v(" "),n("br"),n("span",{staticClass:"ani-text"},[t._v(" "+t._s(e.en_how)+" ")])]),n("div",[n("span",{staticClass:"ani-sub-title"},[t._v(" Why ")]),t._v(" "),n("br"),n("span",{staticClass:"ani-text"},[t._v(" "+t._s(e.en_why)+" ")])])]),t._l(Array.from({length:e.example_num},(function(t,e){return e})),(function(a){return n("span",{key:"example"+a},[n("b-button",{staticClass:"example_btn",attrs:{pill:"",variant:"outline-primary"},on:{click:function(n){return t.$bvModal.show("modal"+e.en_name+a)}}},[t._v(" Example "+t._s(a+1)+" ")]),n("b-modal",{attrs:{id:"modal"+e.en_name+a,title:"Example"}},[n("img",{staticClass:"example-img",attrs:{src:"./assets/animations/animation-real-examples/"+e.en_name+"_"+a+".gif"}})])],1)}))],2)],1)],1)])})),0)},X=[],Z={name:"AnimationGallery",data:function(){return{cards:Array,activeNRCardsGroups:Object,overAnimation:String}},mounted:function(){this.overAnimation=""},computed:Object(c["a"])({},Object(R["b"])({AnimationList:function(t){return t.designSpace.animationLists}})),methods:{changeSource:function(t){this.overAnimation===t?this.overAnimation="":this.overAnimation=t}}},tt=Z,et=(n("ade4"),Object(f["a"])(tt,Q,X,!1,null,"58fd419e",null)),nt=et.exports,at={name:"DesignSpace",components:{DesignSpaceSideBar:D,DesignSpaceGallery:H,DesignSpaceDOGallery:K},data:function(){return{galleryComponent:String}},computed:{},beforeMount:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.dispatch("fetchDesignSpace"),console.log(this.$store),this.galleryComponent=nt;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{changeGalleryOrganization:function(t){switch(t){case"NarrativeRelationship":this.galleryComponent=H;break;case"DataOperation":this.galleryComponent=K;break;case"Animation":this.galleryComponent=nt;break;default:break}}}},rt=at,it=(n("6f35"),Object(f["a"])(rt,m,g,!1,null,"3212187e",null)),st=it.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"workshop-dataset-page"}},[n("div",{attrs:{id:"dataset-block"}},[n("h3",[t._v("数据集")]),n("div",[n("div",[t._v("当前数据集： "+t._s(t.curretnDatasetName))]),t._l(t.datasetNames,(function(e){return n("b-dropdown",{key:e,attrs:{text:"选择数据集"}},[n("b-dropdown-item",{on:{click:function(n){return t.changeDataset(e)}}},[t._v(t._s(e))])],1)}))],2)]),n("div",{attrs:{id:"dataset-showcase"}},t._l(t.curretnDataset,(function(e){return n("div",{key:e["id"]},[n("b-card",{staticClass:"dataset-card",attrs:{title:e["id"]}},[n("b-table",{attrs:{striped:"",hover:"",items:e.items}}),n("b-card-text",{staticClass:"data-card-text"},[t._v(" 事实（"+t._s(e["fact type"])+"） : "+t._s(e["fact"])+" ")])],1)],1)})),0)])])},ct=[],lt={name:"WorkshopDataset",data:function(){return{datasetNames:Array,curretnDatasetName:String,curretnDataset:Array}},computed:Object(c["a"])({},Object(R["b"])({datasets:function(t){return t.workshop.datasets}})),beforeMount:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datasetNames=["practice1"],t.next=3,this.$store.dispatch("fetchAllDatasets",this.datasetNames);case 3:this.curretnDatasetName="尚未选择数据集";case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),watch:{datasets:{handler:function(t){this.curretnDataset=t[this.curretnDatasetName],console.log(this.curretnDataset)},deep:!0}},methods:{changeDataset:function(t){this.curretnDatasetName=t,this.curretnDataset=this.datasets[this.curretnDatasetName]}}},ut=lt,dt=(n("5723"),Object(f["a"])(ut,ot,ct,!1,null,"7cb44972",null)),pt=dt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"img-gallery"}},[n("b-img",{attrs:{src:"./assets/overview.png",id:"overview-img",center:""}})],1)])},ht=[],vt={name:"DesignSpace",data:function(){return{galleryComponent:String}},computed:{}},mt=vt,gt=(n("83dd"),Object(f["a"])(mt,ft,ht,!1,null,"a6cb4a60",null)),_t=gt.exports,bt={name:"App",components:{GalleryNavBar:v,DesignSpace:st,WorkshopDataset:pt,DesignSpaceImg:_t},data:function(){return{pageComponent:String}},computed:Object(c["a"])({},Object(R["b"])({currentPage:function(t){return t.pageManager.currentPage}})),watch:{currentPage:function(t){switch(t){case"home":this.pageComponent="DesignSpace";break;case"workshop-dataset":this.pageComponent="WorkshopDataset";break;case"designspace":this.pageComponent="DesignSpaceImg";break}}},beforeMount:function(){this.pageComponent="DesignSpace"}},Ct=bt,Rt=(n("034f"),Object(f["a"])(Ct,s,o,!1,null,null,null)),Nt=Rt.exports,yt=(n("202f"),n("ade3")),Ot="UPDATE_NR_FILTER",Dt="UPDATE_DO_FILTER",St="ADD_NARRATIVE_RELATIONSHIP_TO_FILTER",wt="ADD_DATA_OPERATION_TO_FILTER",Et="SET_NARRATIVE_RELATIONSHIP",Tt="SET_DATA_OPERATION",xt="SET_TRANSITION_CARDS",jt="SET_EDITORIAL_LAYERS",kt="SET_TRANSITION_EFFECTS",At="SET_ANIMATION_LIST",Ft="SET_CURRENT_PAGE",It="ADD_DATASET",Lt=function(){return{NRFilter:{},DOFilter:{},NRFilterChangeNotifier:0,DOFilterChangeNotifier:0}},Gt={},Pt={},Vt=(a={},Object(yt["a"])(a,St,(function(t,e){e in t.NRFilter||(t.NRFilter[e]=!1)})),Object(yt["a"])(a,wt,(function(t,e){e in t.DOFilter||(t.DOFilter[e]=!1)})),Object(yt["a"])(a,Ot,(function(t,e){e in t.NRFilter&&i["default"].set(t.NRFilter,e,!t.NRFilter[e]),t.NRFilterChangeNotifier+=1})),Object(yt["a"])(a,Dt,(function(t,e){e in t.DOFilter&&i["default"].set(t.DOFilter,e,!t.DOFilter[e]),t.DOFilterChangeNotifier+=1})),a),$t={namespace:!0,state:Lt,getters:Gt,actions:Pt,mutations:Vt},Mt=function(){return{narrativeRelationships:[],dataOperations:[],editorialLayers:[],transitionCards:[],transitionEffects:[],animationLists:[]}},Bt={},Ut={fetchDesignSpace:function(t){return Object(_["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,E();case 3:return a=e.sent,e.next=6,T();case 6:return r=e.sent,e.next=9,x();case 9:return i=e.sent,e.next=12,A();case 12:return s=e.sent,e.next=15,k();case 15:return o=e.sent,n("SET_NARRATIVE_RELATIONSHIP",a),n("SET_DATA_OPERATION",r),n("SET_EDITORIAL_LAYERS",i),e.t0=n,e.next=22,j();case 22:e.t1=e.sent,(0,e.t0)("SET_TRANSITION_CARDS",e.t1),n("SET_TRANSITION_EFFECTS",s),n("SET_ANIMATION_LIST",o),a.forEach((function(t){n("ADD_NARRATIVE_RELATIONSHIP_TO_FILTER",t.NR_tag,{root:!0})})),r.forEach((function(t){n("ADD_DATA_OPERATION_TO_FILTER",t.DO_tag,{root:!0})}));case 28:case"end":return e.stop()}}),e)})))()}},Ht=(r={},Object(yt["a"])(r,Et,(function(t,e){t.narrativeRelationships=e})),Object(yt["a"])(r,Tt,(function(t,e){t.dataOperations=e})),Object(yt["a"])(r,jt,(function(t,e){t.editorialLayers=e})),Object(yt["a"])(r,xt,(function(t,e){t.transitionCards=e})),Object(yt["a"])(r,kt,(function(t,e){t.transitionEffects=e})),Object(yt["a"])(r,At,(function(t,e){t.animationLists=e})),r),Wt={namespace:!0,state:Mt,getters:Bt,actions:Ut,mutations:Ht},zt=function(){return{currentPage:""}},Yt={},Jt={},qt=Object(yt["a"])({},Ft,(function(t,e){t.currentPage=e})),Kt={namespace:!0,state:zt,getters:Yt,actions:Jt,mutations:qt},Qt=function(){return{datasets:{}}},Xt={getDataset:function(t){return function(e){return t.datasets[e]}}},Zt={fetchAllDatasets:function(t,e){return Object(_["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,e.forEach(function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:n=t.sent,a("ADD_DATASET",{datasetName:e,dataset:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},te=Object(yt["a"])({},It,(function(t,e){var n=e.datasetName,a=e.dataset;t.datasets[n]=a})),ee={namespace:!0,state:Qt,getters:Xt,actions:Zt,mutations:te},ne=!1;i["default"].use(R["a"]);var ae=new R["a"].Store({modules:{filter:$t,designSpace:Wt,pageManager:Kt,workshop:ee},strict:ne}),re=n("5f5b"),ie=n("b1e0");n("f9e3"),n("2dd8");i["default"].config.productionTip=!1,i["default"].use(re["a"]),i["default"].use(ie["a"]),new i["default"]({store:ae,render:function(t){return t(Nt)}}).$mount("#app")},5723:function(t,e,n){"use strict";n("0f4f")},"5c5c":function(t,e,n){},"6f35":function(t,e,n){"use strict";n("8397")},"78fe":function(t,e,n){},8397:function(t,e,n){},"83dd":function(t,e,n){"use strict";n("a60b")},"85ec":function(t,e,n){},"8b1c":function(t,e,n){"use strict";n("78fe")},9750:function(t,e,n){},"9f35":function(t,e,n){"use strict";n("9750")},a60b:function(t,e,n){},ade4:function(t,e,n){"use strict";n("268d")},e414:function(t,e,n){"use strict";n("5c5c")},e99f:function(t,e,n){}});
//# sourceMappingURL=app.4d640a1e.js.map