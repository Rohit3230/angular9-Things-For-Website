(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{lxFx:function(e,t,o){"use strict";o.r(t),o.d(t,"TodoDetailModule",(function(){return m}));var i=o("ofXK"),d=o("3Pt+"),n=o("tyNb"),r=o("fXoL"),a=o("tadm");function c(e,t){1&e&&(r.Rb(0,"div"),r.Bc(1," Email is required. "),r.Qb())}function l(e,t){1&e&&(r.Rb(0,"div"),r.Bc(1," The email address you have entered is invalid. please try again."),r.Qb())}function b(e,t){if(1&e&&(r.Rb(0,"div",20),r.zc(1,c,2,0,"div",21),r.zc(2,l,2,0,"div",21),r.Qb()),2&e){r.hc();const e=r.rc(41);r.zb(1),r.kc("ngIf",e.errors.required),r.zb(1),r.kc("ngIf",e.errors.pattern)}}const s=[{path:"",component:(()=>{class e{constructor(e,t,o){this.todoService=e,this.router=t,this.activatedRoute=o,this.todoDetail={}}ngOnInit(){this.activatedRoute.queryParams.subscribe(e=>{this.todoId=e.id,void 0!==this.todoId?(console.log(this.todoId),this.getTodoDetailById(this.todoId),this.mode="Edit"):(console.log(this.todoId),this.todoDetail.id=0,this.mode="Add")})}getTodoDetailById(e){this.todoDetail=this.todoService.getTodoById(parseInt(e))}onToDoSubmitForm(e){if(console.log("INIT onTODOSubmitForm function*********",e),e.valid){var t=this.todoService.saveTodo(this.todoDetail);console.log("Saved todo info*****",t),this.router.navigate(["/todo-list"])}}cancle(){console.log("INIT cancle function*********"),this.router.navigate(["/todo-list"])}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(a.a),r.Mb(n.b),r.Mb(n.a))},e.\u0275cmp=r.Gb({type:e,selectors:[["app-todo-detail"]],decls:49,vars:10,consts:[[1,"container"],[1,"col-lg-12"],["id","todoForm","novalidat","",3,"ngSubmit"],["todoForm","ngForm"],[1,"col-lg-4"],["type","text","name","firstName","placeholder","Enter First Name","required","",1,"form-control",3,"ngModel","ngModelChange"],["firstName","ngModel"],[1,"text-danger",3,"hidden"],["type","text","name","middleName","placeholder","Enter Middle Name","required","",1,"form-control",3,"ngModel","ngModelChange"],["middleName","ngModel"],["type","text","name","lastName","placeholder","Enter Last Name","required","",1,"form-control",3,"ngModel","ngModelChange"],["lastName","ngModel"],["type","number","name","phone","placeholder","Enter Phone Number","required","",1,"form-control",3,"ngModel","ngModelChange"],["phone","ngModel"],["type","text","name","email","placeholder","Enter Email Id","pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$","required","",1,"form-control",3,"ngModel","ngModelChange"],["email","ngModel"],["class","text-danger",4,"ngIf"],["align","right",1,"col-lg-12"],["type","submit",1,"btn"],["type","btn",1,"btn",3,"click"],[1,"text-danger"],[4,"ngIf"]],template:function(e,t){if(1&e){const e=r.Sb();r.Rb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"form",2,3),r.dc("ngSubmit",(function(){r.sc(e);const o=r.rc(3);return t.onToDoSubmitForm(o)})),r.Rb(4,"div",1),r.Rb(5,"div",4),r.Bc(6," First Name "),r.Qb(),r.Rb(7,"div",1),r.Rb(8,"input",5,6),r.dc("ngModelChange",(function(e){return t.todoDetail.firstName=e})),r.Qb(),r.Rb(10,"div",7),r.Bc(11," First name is required...! "),r.Qb(),r.Qb(),r.Qb(),r.Rb(12,"div",1),r.Rb(13,"div",4),r.Bc(14," Middle Name "),r.Qb(),r.Rb(15,"div",1),r.Rb(16,"input",8,9),r.dc("ngModelChange",(function(e){return t.todoDetail.middleName=e})),r.Qb(),r.Rb(18,"div",7),r.Bc(19," Middle name is required...! "),r.Qb(),r.Qb(),r.Qb(),r.Rb(20,"div",1),r.Rb(21,"div",4),r.Bc(22," Last Name "),r.Qb(),r.Rb(23,"div",1),r.Rb(24,"input",10,11),r.dc("ngModelChange",(function(e){return t.todoDetail.lastName=e})),r.Qb(),r.Rb(26,"div",7),r.Bc(27," Last name is required...! "),r.Qb(),r.Qb(),r.Qb(),r.Rb(28,"div",1),r.Rb(29,"div",4),r.Bc(30," Phone Number "),r.Qb(),r.Rb(31,"div",1),r.Rb(32,"input",12,13),r.dc("ngModelChange",(function(e){return t.todoDetail.phone=e})),r.Qb(),r.Rb(34,"div",7),r.Bc(35," Phone Number is required...! "),r.Qb(),r.Qb(),r.Qb(),r.Rb(36,"div",1),r.Rb(37,"div",4),r.Bc(38," Email Id "),r.Qb(),r.Rb(39,"div",1),r.Rb(40,"input",14,15),r.dc("ngModelChange",(function(e){return t.todoDetail.email=e})),r.Qb(),r.zc(42,b,3,2,"div",16),r.Qb(),r.Qb(),r.Rb(43,"div",17),r.Rb(44,"button",18),r.Bc(45,"Save"),r.Qb(),r.Bc(46," \xa0 "),r.Rb(47,"button",19),r.dc("click",(function(){return t.cancle()})),r.Bc(48,"Cancle"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()}if(2&e){const e=r.rc(3),o=r.rc(9),i=r.rc(17),d=r.rc(25),n=r.rc(33),a=r.rc(41);r.zb(8),r.kc("ngModel",t.todoDetail.firstName),r.zb(2),r.kc("hidden",o.valid||o.pristine&&!e.submitted),r.zb(6),r.kc("ngModel",t.todoDetail.middleName),r.zb(2),r.kc("hidden",i.valid||i.pristine&&!e.submitted),r.zb(6),r.kc("ngModel",t.todoDetail.lastName),r.zb(2),r.kc("hidden",d.valid||d.pristine&&!e.submitted),r.zb(6),r.kc("ngModel",t.todoDetail.phone),r.zb(2),r.kc("hidden",n.valid||n.pristine&&!e.submitted),r.zb(6),r.kc("ngModel",t.todoDetail.email),r.zb(2),r.kc("ngIf",a.invalid&&(a.dirty||a.touched||e.submitted))}},directives:[d.n,d.f,d.g,d.a,d.l,d.e,d.h,d.j,d.k,i.j],styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(t){return new(t||e)},imports:[[n.d.forChild(s)],n.d]}),e})(),m=(()=>{class e{}return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(t){return new(t||e)},imports:[[i.b,d.b,u]]}),e})()}}]);