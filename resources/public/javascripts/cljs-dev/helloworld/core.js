// Compiled by ClojureScript 1.10.764 {}
goog.provide('helloworld.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('helloworld.title');
helloworld.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello form app State",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 2"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 3"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 4"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 5"], null)], null),new cljs.core.Keyword(null,"active-item","active-item",-1265645988),cljs.core.PersistentArrayMap.EMPTY], null));
helloworld.core.items_list = (function helloworld$core$items_list(items,active_item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-list"], null),(function (){var iter__4529__auto__ = (function helloworld$core$items_list_$_iter__1535(s__1536){
return (new cljs.core.LazySeq(null,(function (){
var s__1536__$1 = s__1536;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__1536__$1);
if(temp__5735__auto__){
var s__1536__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1536__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__1536__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__1538 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__1537 = (0);
while(true){
if((i__1537 < size__4528__auto__)){
var item = cljs.core._nth.call(null,c__4527__auto__,i__1537);
cljs.core.chunk_append.call(null,b__1538,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_item,item))?"item active":"item")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__1537,item,c__4527__auto__,size__4528__auto__,b__1538,s__1536__$2,temp__5735__auto__){
return (function (event){
return cljs.core.swap_BANG_.call(null,helloworld.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988)], null),item);
});})(i__1537,item,c__4527__auto__,size__4528__auto__,b__1538,s__1536__$2,temp__5735__auto__))
], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__1539 = (i__1537 + (1));
i__1537 = G__1539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1538),helloworld$core$items_list_$_iter__1535.call(null,cljs.core.chunk_rest.call(null,s__1536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1538),null);
}
} else {
var item = cljs.core.first.call(null,s__1536__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_item,item))?"item active":"item")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__1536__$2,temp__5735__auto__){
return (function (event){
return cljs.core.swap_BANG_.call(null,helloworld.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988)], null),item);
});})(item,s__1536__$2,temp__5735__auto__))
], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)),helloworld$core$items_list_$_iter__1535.call(null,cljs.core.rest.call(null,s__1536__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,items);
})()], null);
});
helloworld.core.app = (function helloworld$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.title.header,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.items_list,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state)),new cljs.core.Keyword(null,"active-item","active-item",-1265645988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state))], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.app], null),document.querySelector("#cljs-target"));

//# sourceMappingURL=core.js.map
