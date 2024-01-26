import{$ as m,Ba as k,Ea as re,Fa as se,Ga as x,Ha as B,Ia as d,Ja as ae,K as f,Ka as R,L as _,La as ue,Ma as T,N as Y,Na as $,O as N,Oa as le,P as E,Pa as me,Qa as U,Ra as pe,U as J,W as l,X as K,Y as g,_ as M,aa as r,ba as i,bb as ce,ca as v,da as D,ea as c,fa as P,ga as W,ha as X,hb as de,ia as Z,ib as A,ja as ee,ka as p,la as y,lb as he,ma as te,mb as fe,na as C,oa as w,pa as H,q as j,qa as O,ra as oe,rb as z,sa as ne,ta as S,ua as V,va as b,za as ie}from"./chunk-4JEBYGF6.js";function ve(s,o){s&1&&(r(0,"th",9),p(1,"Action"),i())}function ye(s,o){if(s&1){let h=D();r(0,"td",11),c("click",function(){N(h);let n=P().$implicit,e=P();return E(e.editHouse.emit(n))}),p(1,"Edit"),i()}}function He(s,o){if(s&1&&(r(0,"tr")(1,"td"),p(2),i(),r(3,"td"),p(4),i(),r(5,"td"),p(6),i(),r(7,"td"),p(8),i(),r(9,"td"),p(10),i(),M(11,ye,2,0,"td",10),i()),s&2){let h=o.$implicit,t=P();l(2),y(h.house_number),l(2),y(h.block_number),l(2),y(h.land_number),l(2),y(h.price),l(2),y(h.status),l(),m("ngIf",t.isLogin)}}var _e=(()=>{let o=class o{constructor(){this.editHouse=new g,this.router=f(k)}set data(t){this.itemsOrigin=t,this.itemsList=t}onSort({column:t,direction:n}){for(let e of this.headers)e.sortable!==t&&(e.direction="");n===""||t===""?this.itemsList=this.itemsOrigin:this.itemsList=[...this.itemsOrigin].sort((e,u)=>{let a=me(e[t],u[t]);return n==="asc"?a:-a})}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=_({type:o,selectors:[["app-house-table"]],viewQuery:function(n,e){if(n&1&&W(U,5),n&2){let u;X(u=Z())&&(e.headers=u)}},inputs:{data:"data",isLogin:"isLogin"},outputs:{editHouse:"editHouse"},standalone:!0,features:[C],decls:16,vars:2,consts:[[1,"table","table-striped"],[1,"header-table"],["scope","col","sortable","house_number",3,"sort"],["scope","col","sortable","block_number",3,"sort"],["scope","col","sortable","land_number",3,"sort"],["scope","col","sortable","price",3,"sort"],["scope","col","sortable","status",3,"sort"],["scope","col",4,"ngIf"],[4,"ngFor","ngForOf"],["scope","col"],["class","edit",3,"click",4,"ngIf"],[1,"edit",3,"click"]],template:function(n,e){n&1&&(r(0,"table",0)(1,"thead")(2,"tr",1)(3,"th",2),c("sort",function(a){return e.onSort(a)}),p(4," House Number "),i(),r(5,"th",3),c("sort",function(a){return e.onSort(a)}),p(6," Block No "),i(),r(7,"th",4),c("sort",function(a){return e.onSort(a)}),p(8," Land No "),i(),r(9,"th",5),c("sort",function(a){return e.onSort(a)}),p(10,"Price"),i(),r(11,"th",6),c("sort",function(a){return e.onSort(a)}),p(12,"Status"),i(),M(13,ve,2,0,"th",7),i()(),r(14,"tbody"),M(15,He,12,6,"tr",8),i()()),n&2&&(l(13),m("ngIf",e.isLogin),l(2),m("ngForOf",e.itemsList))},dependencies:[b,ne,S,U],styles:["[_nghost-%COMP%]{max-height:20rem;overflow:auto;display:block}[_nghost-%COMP%]   .edit[_ngcontent-%COMP%]{color:#1e88e5;cursor:pointer;text-decoration:underline}[_nghost-%COMP%]   .header-table[_ngcontent-%COMP%]{position:sticky;top:0;cursor:pointer}[_nghost-%COMP%]   .header-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child.asc, [_nghost-%COMP%]   .header-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child.desc{padding-left:2rem}"]});let s=o;return s})();var ge=(()=>{let o=class o{constructor(){this.editHouse=new g,this.cdr=f(K)}ngOnInit(){this.filter.valueChanges.subscribe(t=>{this.houseDataFilter=this.houseData?.filter(n=>{let{blockNumber:e,landNumber:u,minPrice:a,maxPrice:q}=t,F=!0;return e&&(F=F&&n.block_number===e),u&&(F=F&&n.land_number===u),a&&(F=F&&n.price>=Number(a)),q&&(F=F&&n.price<=Number(q)),F}),this.cdr.detectChanges()})}ngOnChanges(t){t.housesModel&&t.housesModel.previousValue!==t.housesModel?.currentValue&&t.houseList&&t.houseList.previousValue!==t.houseList?.currentValue&&t.filter&&t.filter.previousValue!==t.filter?.currentValue&&(this.houseData=this.houseList?.filter(n=>n.model===this.housesModel?.content?.model),this.houseDataFilter=this.houseData)}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=_({type:o,selectors:[["app-house-list"]],inputs:{housesModel:"housesModel",houseList:"houseList",filter:"filter",isLogin:"isLogin"},outputs:{editHouse:"editHouse"},standalone:!0,features:[Y,C],decls:8,vars:6,consts:[[1,"info-house-model"],[1,"media"],[3,"src","alt"],[3,"data","isLogin","editHouse"]],template:function(n,e){n&1&&(r(0,"div",0)(1,"div",1)(2,"h2"),p(3),i(),r(4,"p"),p(5),i()(),v(6,"img",2),i(),r(7,"app-house-table",3),c("editHouse",function(a){return e.editHouse.emit(a)}),i()),n&2&&(l(3),y(e.housesModel.content.media.title),l(2),y(e.housesModel.content.media.description),l(),m("src",e.housesModel.content.media.banner,J)("alt",e.housesModel.content.media.title),l(),m("data",e.houseDataFilter)("isLogin",e.isLogin))},dependencies:[b,_e],styles:["[_nghost-%COMP%]   .info-house-model[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1rem}"],changeDetection:0});let s=o;return s})();function Fe(s,o){s&1&&(r(0,"span",10),p(1,"Your house number is already used"),i())}var Ce=(()=>{let o=class o{constructor(){this.changeValue=new g,this.updateHouse=new g,this.createHouse=new g,this.houseDetail={}}set data(t){t&&(this.houseDetail=t,this.form?.patchValue({houseNumber:t.house_number,blockNumber:t.block_number,landNumber:t.land_number,houseType:t.house_type,houseModel:t.model,price:t.price,status:t.status,id:t.id,type:t.type}))}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=_({type:o,selectors:[["app-house-detail"]],inputs:{data:"data",form:"form",status:"status",houseTypes:"houseTypes",houseModels:"houseModels"},outputs:{changeValue:"changeValue",updateHouse:"updateHouse",createHouse:"createHouse"},standalone:!0,features:[C],decls:26,vars:13,consts:[[1,"header"],[1,"btn","btn-outline-secondary",3,"click"],[1,"container-house",3,"formGroup"],[1,"custom-input"],["type","text","formControlName","houseNumber",1,"form-control"],["class","error",4,"ngIf"],["type","text","formControlName","blockNumber",1,"form-control"],["type","text","formControlName","landNumber",1,"form-control"],[3,"title","items","value","changeItem"],["type","number","formControlName","price",1,"form-control"],[1,"error"]],template:function(n,e){if(n&1&&(r(0,"div",0)(1,"p"),p(2),i(),r(3,"button",1),c("click",function(){return e.houseDetail.id?e.updateHouse.emit():e.createHouse.emit()}),p(4),i()(),r(5,"div",2)(6,"div",3)(7,"p"),p(8,"House number"),i(),v(9,"input",4),M(10,Fe,2,0,"span",5),i(),r(11,"div",3)(12,"p"),p(13,"Block number"),i(),v(14,"input",6),i(),r(15,"div",3)(16,"p"),p(17,"Land number"),i(),v(18,"input",7),i(),r(19,"app-dropdown",8),c("changeItem",function(a){return e.changeValue.emit({value:a,nameControl:"houseType"})}),i(),r(20,"app-dropdown",8),c("changeItem",function(a){return e.changeValue.emit({value:a,nameControl:"houseModel"})}),i(),r(21,"div",3)(22,"p"),p(23,"Price"),i(),v(24,"input",9),i(),r(25,"app-dropdown",8),c("changeItem",function(a){return e.changeValue.emit({value:a,nameControl:"status"})}),i()()),n&2){let u;l(2),y(e.houseDetail.house_number||"Create house"),l(2),te(" ",e.houseDetail.id?"Update":"Create"," "),l(),m("formGroup",e.form),l(5),m("ngIf",(u=e.form.get("houseNumber"))==null?null:u.hasError("invalidHouseNumber")),l(9),m("title","House type")("items",e.houseTypes)("value",e.form.value.houseType),l(),m("title","House model")("items",e.houseModels)("value",e.form.value.houseModel),l(5),m("title","Status")("items",e.status)("value",e.form.value.status)}},dependencies:[b,S,T,re,ae,se,x,R,ue,$],styles:["[_nghost-%COMP%] > *[_ngcontent-%COMP%]{padding:1.5rem 7rem}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:38px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.8rem}[_nghost-%COMP%]   .container-house[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}[_nghost-%COMP%]   .container-house[_ngcontent-%COMP%]   .custom-input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}@media (max-width: 839.98px){[_nghost-%COMP%]   .container-house[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr)}}@media (max-width: 599.98px){[_nghost-%COMP%]   .container-house[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr}}[_nghost-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, [_nghost-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}[_nghost-%COMP%]   input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}[_nghost-%COMP%]   .error[_ngcontent-%COMP%]{color:red;font-size:.7rem}"]});let s=o;return s})();function Pe(s,o){if(s&1){let h=D();r(0,"button",7),c("click",function(){N(h);let n=P();return E(n.createHouse.emit())}),p(1," Create new house "),i()}}function we(s,o){if(s&1){let h=D();r(0,"app-house-list",8),c("editHouse",function(n){N(h);let e=P();return E(e.editHouse.emit(n))}),i()}if(s&2){let h=o.data,t=P();m("housesModel",h)("houseList",t.houseList)("filter",t.filterForm)("isLogin",t.isCreate)}}var be=(()=>{let o=class o{constructor(){this.accordions=[],this.changeFilter=new g,this.editHouse=new g,this.createHouse=new g}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=_({type:o,selectors:[["app-house-model"]],inputs:{filterForm:"filterForm",blockNumbers:"blockNumbers",landNumbers:"landNumbers",prices:"prices",accordions:"accordions",houseList:"houseList",isCreate:"isCreate"},outputs:{changeFilter:"changeFilter",editHouse:"editHouse",createHouse:"createHouse"},standalone:!0,features:[C],decls:11,vars:16,consts:[[1,"filter"],[1,"filter-properties",3,"formGroup"],[3,"title","items","value","changeItem"],["class","btn btn-outline-secondary",3,"click",4,"ngIf"],[1,"houses-list"],[3,"accordions","customTemplate"],["housesTemp",""],[1,"btn","btn-outline-secondary",3,"click"],[3,"housesModel","houseList","filter","isLogin","editHouse"]],template:function(n,e){if(n&1&&(r(0,"div",0)(1,"div",1)(2,"app-dropdown",2),c("changeItem",function(a){return e.changeFilter.emit({value:a,nameControl:"blockNumber"})}),i(),r(3,"app-dropdown",2),c("changeItem",function(a){return e.changeFilter.emit({value:a,nameControl:"landNumber"})}),i(),r(4,"app-dropdown",2),c("changeItem",function(a){return e.changeFilter.emit({value:a,nameControl:"minPrice"})}),i(),r(5,"app-dropdown",2),c("changeItem",function(a){return e.changeFilter.emit({value:a,nameControl:"maxPrice"})}),i()(),M(6,Pe,2,0,"button",3),i(),r(7,"div",4),v(8,"app-accordion",5),M(9,we,1,4,"ng-template",null,6,oe),i()),n&2){let u=ee(10);l(),m("formGroup",e.filterForm),l(),m("title","Block number")("items",e.blockNumbers)("value",e.filterForm.value.blockNumber),l(),m("title","Land number")("items",e.landNumbers)("value",e.filterForm.value.landNumber),l(),m("title","Min Price")("items",e.prices)("value",e.filterForm.value.minPrice),l(),m("title","Max Price")("items",e.prices)("value",e.filterForm.value.maxPrice),l(),m("ngIf",e.isCreate),l(2),m("accordions",e.accordions)("customTemplate",u)}},dependencies:[b,S,T,x,R,$,le,ge],styles:["[_nghost-%COMP%]   .houses-list[_ngcontent-%COMP%], [_nghost-%COMP%]   .filter[_ngcontent-%COMP%]{padding:1.5rem 7rem}[_nghost-%COMP%]   .filter[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}[_nghost-%COMP%]   .filter[_ngcontent-%COMP%]:nth-child(1){align-items:baseline}[_nghost-%COMP%]   .filter[_ngcontent-%COMP%]   .filter-properties[_ngcontent-%COMP%]{display:flex;gap:1rem}"],changeDetection:0});let s=o;return s})();var Se=()=>[],Q=(()=>{let o=class o{constructor(){this.housesFace=f(A),this.activatedRoute=f(ie),this.form=new B({houseNumber:new d("",this.inHouseListValidator()),blockNumber:new d,landNumber:new d,houseType:new d,houseModel:new d,price:new d,status:new d,type:new d,id:new d}),this.status=["Available","Booked"],this.houseTypes=["Townhouse","Villa"]}ngOnInit(){this.housesFace.getHouseModelList(),this.housesFace.getHouseList(),this.housesFace.houseNumbers$.pipe(j(t=>!!t)).subscribe(t=>this.houseNumbers=t),this.activatedRoute.params.pipe(j(t=>!!t.id)).subscribe(t=>{this.form?.controls.houseNumber.setValidators(null),this.form?.controls.houseNumber.updateValueAndValidity(),this.houseData$=this.housesFace.getHouseById(t.id)})}changeValue(t){this.form.patchValue({[t.nameControl]:t.value})}createHouse(){this.form.valid&&this.housesFace.createHouse(this.form.value)}updateHouse(){this.housesFace.updateHouse(this.form.value)}inHouseListValidator(){return t=>{let{value:n}=t;return!this.houseNumbers||!this.houseNumbers?.find(e=>e===n)?null:{invalidHouseNumber:!0}}}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=_({type:o,selectors:[["app-house-detail-container"]],standalone:!0,features:[C],decls:3,vars:10,consts:[[3,"data","form","status","houseTypes","houseModels","changeValue","createHouse","updateHouse"]],template:function(n,e){n&1&&(r(0,"app-house-detail",0),c("changeValue",function(a){return e.changeValue(a)})("createHouse",function(){return e.createHouse()})("updateHouse",function(){return e.updateHouse()}),H(1,"async"),H(2,"async"),i()),n&2&&m("data",O(1,5,e.houseData$))("form",e.form)("status",e.status)("houseTypes",e.houseTypes)("houseModels",O(2,7,e.housesFace.houseModels$)||w(9,Se))},dependencies:[b,V,T,Ce],styles:["[_nghost-%COMP%] > *[_ngcontent-%COMP%]{padding:1.5rem 7rem}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:38px}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.8rem}[_nghost-%COMP%]   .container-house[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}[_nghost-%COMP%]   .container-house[_ngcontent-%COMP%]   .custom-input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}"],changeDetection:0});let s=o;return s})();function Te(s,o){s&1&&(r(0,"div",2),v(1,"mat-spinner",3),i())}var L=()=>[],Me=(()=>{let o=class o{constructor(){this.router=f(k),this.store=f(ce),this.housesFace=f(A),this.loginFace=f(de),this.filterForm=new B({blockNumber:new d,landNumber:new d,minPrice:new d,maxPrice:new d})}ngOnInit(){this.housesFace.getHouseModelList(),this.housesFace.getHouseList()}changeFilter(t){this.filterForm.patchValue({[t.nameControl]:t.value})}editHouse(t){this.router.navigateByUrl(`/houses/${t.id}`)}createHouse(){this.router.navigateByUrl("/houses/create-house")}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=_({type:o,selectors:[["app-house-model-container"]],standalone:!0,features:[C],decls:9,vars:27,consts:[["class","custom-spinner",4,"ngIf"],[3,"filterForm","blockNumbers","landNumbers","prices","accordions","houseList","isCreate","changeFilter","editHouse","createHouse"],[1,"custom-spinner"],["color","accent"]],template:function(n,e){n&1&&(M(0,Te,2,0,"div",0),H(1,"async"),r(2,"app-house-model",1),c("changeFilter",function(a){return e.changeFilter(a)})("editHouse",function(a){return e.editHouse(a)})("createHouse",function(){return e.createHouse()}),H(3,"async"),H(4,"async"),H(5,"async"),H(6,"async"),H(7,"async"),H(8,"async"),i()),n&2&&(m("ngIf",O(1,8,e.housesFace.isLoading$)),l(2),m("filterForm",e.filterForm)("blockNumbers",O(3,10,e.housesFace.blockNumber$)||w(22,L))("landNumbers",O(4,12,e.housesFace.landNumbers$)||w(23,L))("prices",O(5,14,e.housesFace.prices$)||w(24,L))("accordions",O(6,16,e.housesFace.houseModelList$)||w(25,L))("houseList",O(7,18,e.housesFace.houseList$)||w(26,L))("isCreate",!!O(8,20,e.loginFace.loginResult$)))},dependencies:[b,S,V,T,fe,he,be],changeDetection:0});let s=o;return s})();var no=[{path:"",component:pe,providers:[],children:[{path:"",component:Me},{path:"create-house",component:Q,canActivate:[z],data:{breadcrumb:"Create house"}},{path:":id",component:Q,canActivate:[z],data:{breadcrumb:""}}]}];export{no as HOUSES_ROUTES};
