(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{oZYY:function(t,n,c){"use strict";c.r(n),c.d(n,"CalculatorModule",(function(){return e}));var r=c("ofXK"),i=c("tyNb"),b=c("fXoL");const o=[{path:"",component:(()=>{class t{constructor(){this.actionArr=[],this.errorMsg="",this.actionMode=""}ngOnInit(){}setInput(t){this.actionMode?this.actionArr[1]=(this.actionArr[1]?this.actionArr[1]:"")+""+t:this.actionArr[0]=(this.actionArr[0]?this.actionArr[0]:"")+""+t}perfomrDevide(){this.outPut=this.actionArr[0]/this.actionArr[1]}perfomrMulti(){this.outPut=this.actionArr[0]*this.actionArr[1]}perfomrPlus(){this.outPut=this.actionArr[0]+this.actionArr[1]}performMinus(){this.outPut=this.actionArr[0]-this.actionArr[1]}clearAll(){this.actionArr=[],this.actionMode="",this.outPut=null}actionOperation(){switch(this.actionArr[0]=Number(this.actionArr[0]),this.actionArr[1]=Number(this.actionArr[1]),this.actionMode){case"/":this.perfomrDevide();break;case"*":this.perfomrMulti();break;case"+":this.perfomrPlus();break;case"-":this.performMinus()}}setAction(t){!this.outPut&&this.actionArr[0]?this.actionMode=t:this.outPut&&this.actionArr[0]&&this.actionArr[1]&&(this.actionArr[0]=this.outPut,this.actionArr[1]=null,this.actionMode=t,this.outPut=null)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Gb({type:t,selectors:[["app-calculator"]],decls:78,vars:5,consts:[["id","main",2,"margin-top","70px"],["classs","containor"],[1,"container"],[1,"table","table-striped","table-bordered","table-sm"],["type","btn",1,"btn","btn-danger",3,"click"],["type","btn",1,"btn","btn-info",3,"click"],["type","btn",1,"btn","btn-default",3,"click"],["type","btn",1,"btn","btn-success",3,"click"]],template:function(t,n){1&t&&(b.Rb(0,"main",0),b.zc(1," \xa0\n"),b.Qb(),b.Rb(2,"div",1),b.Rb(3,"div",2),b.Rb(4,"h2"),b.zc(5,"Simple Calculator"),b.Qb(),b.Nb(6,"br"),b.Nb(7,"br"),b.Nb(8,"br"),b.Nb(9,"br"),b.Rb(10,"table",3),b.Rb(11,"tbody"),b.Rb(12,"tr"),b.Nb(13,"td"),b.Nb(14,"td"),b.Nb(15,"td"),b.Rb(16,"td"),b.Rb(17,"button",4),b.dc("click",(function(){return n.clearAll()})),b.zc(18,"Clear"),b.Qb(),b.Qb(),b.Qb(),b.Rb(19,"tr"),b.Nb(20,"td"),b.Nb(21,"td"),b.Nb(22,"td"),b.Rb(23,"td"),b.Rb(24,"button",5),b.dc("click",(function(){return n.setAction("/")})),b.zc(25,"/"),b.Qb(),b.Qb(),b.Qb(),b.Rb(26,"tr"),b.Rb(27,"td"),b.Rb(28,"button",6),b.dc("click",(function(){return n.setInput(7)})),b.zc(29,"7"),b.Qb(),b.Qb(),b.Rb(30,"td"),b.Rb(31,"button",6),b.dc("click",(function(){return n.setInput(8)})),b.zc(32,"8"),b.Qb(),b.Qb(),b.Rb(33,"td"),b.Rb(34,"button",6),b.dc("click",(function(){return n.setInput(9)})),b.zc(35,"9"),b.Qb(),b.Qb(),b.Rb(36,"td"),b.Rb(37,"button",5),b.dc("click",(function(){return n.setAction("*")})),b.zc(38,"*"),b.Qb(),b.Qb(),b.Qb(),b.Rb(39,"tr"),b.Rb(40,"td"),b.Rb(41,"button",6),b.dc("click",(function(){return n.setInput(4)})),b.zc(42,"4"),b.Qb(),b.Qb(),b.Rb(43,"td"),b.Rb(44,"button",6),b.dc("click",(function(){return n.setInput(5)})),b.zc(45,"5"),b.Qb(),b.Qb(),b.Rb(46,"td"),b.Rb(47,"button",6),b.dc("click",(function(){return n.setInput(6)})),b.zc(48,"6"),b.Qb(),b.Qb(),b.Rb(49,"td"),b.Rb(50,"button",5),b.dc("click",(function(){return n.setAction("+")})),b.zc(51,"+"),b.Qb(),b.Qb(),b.Qb(),b.Rb(52,"tr"),b.Rb(53,"td"),b.Rb(54,"button",6),b.dc("click",(function(){return n.setInput(1)})),b.zc(55,"1"),b.Qb(),b.Qb(),b.Rb(56,"td"),b.Rb(57,"button",6),b.dc("click",(function(){return n.setInput(2)})),b.zc(58,"2"),b.Qb(),b.Qb(),b.Rb(59,"td"),b.Rb(60,"button",6),b.dc("click",(function(){return n.setInput(3)})),b.zc(61,"3"),b.Qb(),b.Qb(),b.Rb(62,"td"),b.Rb(63,"button",5),b.dc("click",(function(){return n.setAction("-")})),b.zc(64,"-"),b.Qb(),b.Qb(),b.Qb(),b.Rb(65,"tr"),b.Nb(66,"td"),b.Rb(67,"td"),b.Rb(68,"button",6),b.dc("click",(function(){return n.setInput(0)})),b.zc(69,"0"),b.Qb(),b.Qb(),b.Rb(70,"td"),b.Rb(71,"button",6),b.dc("click",(function(){return n.setInput(".")})),b.zc(72,"."),b.Qb(),b.Qb(),b.Rb(73,"td"),b.Rb(74,"button",7),b.dc("click",(function(){return n.actionOperation()})),b.zc(75,"="),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(76,"h2"),b.zc(77),b.Qb(),b.Qb(),b.Qb()),2&t&&(b.zb(77),b.Dc(" ",n.actionArr[0]," ",n.actionMode," ",n.actionArr[1]," \xa0 ",n.actionMode&&null!=n.actionArr[0]&&null!=n.actionArr[1]?"=":""," \xa0 ",null!=n.outPut?n.outPut:""," "))},styles:[".btn[_ngcontent-%COMP%]{padding-left:35px;padding-right:35px}"]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(n){return new(n||t)},imports:[[i.d.forChild(o)],i.d]}),t})(),e=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(n){return new(n||t)},imports:[[r.b,u]]}),t})()}}]);