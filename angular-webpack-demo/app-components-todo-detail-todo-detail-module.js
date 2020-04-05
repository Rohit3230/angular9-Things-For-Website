(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-todo-detail-todo-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo-detail/todo-detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo-detail/todo-detail.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"col-lg-12\">\n        <form id=\"todoForm\" #todoForm=\"ngForm\" (ngSubmit)=\"onToDoSubmitForm(todoForm)\" novalidat>\n            <div class=\"col-lg-12\">\n                <div class=\"col-lg-4\">\n                    First Name\n                </div>\n                <div class=\"col-lg-12\">\n                    <input type=\"text\" class=\"form-control\" #firstName=\"ngModel\" name=\"firstName\" [(ngModel)]=\"todoDetail.firstName\" placeholder=\"Enter First Name\" required />\n                    <div [hidden]=\"firstName.valid || (firstName.pristine && !todoForm.submitted)\" class=\"text-danger\">\n                        First name is required...!\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"form-group row\">\n                <label for=\"firstName\" class=\"col-md-2 col-form-label\">First Name</label>\n                <div class=\"col-md-5\">\n                    <input type=\"text\" class=\"form-control\" #firstName=\"ngModel\" name=\"firstName\" [(ngModel)]=\"todoDetail.firstName\" placeholder=\"First Name\" required>\n                    <div [hidden]=\"firstName.valid || (firstName.pristine && !todoForm.submitted)\" class=\"text-danger\">\n                      First name is required.\n                    </div>\n                </div>\n            </div> -->\n            <div class=\"col-lg-12\">\n                <div class=\"col-lg-4\">\n                    Middle Name\n                </div>\n                <div class=\"col-lg-12\">\n                    <input type=\"text\" class=\"form-control\" #middleName=\"ngModel\" name=\"middleName\" [(ngModel)]=\"todoDetail.middleName\" placeholder=\"Enter Middle Name\" required />\n                    <div [hidden]=\"middleName.valid || (middleName.pristine && !todoForm.submitted)\" class=\"text-danger\">\n                        Middle name is required...!\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12\">\n                <div class=\"col-lg-4\">\n                    Last Name\n                </div>\n                <div class=\"col-lg-12\">\n                    <input type=\"text\" class=\"form-control\" #lastName=\"ngModel\" name=\"lastName\" [(ngModel)]=\"todoDetail.lastName\" placeholder=\"Enter Last Name\" required />\n                    <div [hidden]=\"lastName.valid || (lastName.pristine && !todoForm.submitted)\" class=\"text-danger\">\n                        Last name is required...!\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12\">\n                <div class=\"col-lg-4\">\n                    Phone Number\n                </div>\n                <div class=\"col-lg-12\">\n                    <input type=\"number\" class=\"form-control\" #phone=\"ngModel\" name=\"phone\" [(ngModel)]=\"todoDetail.phone\" placeholder=\"Enter Phone Number\" required />\n                    <div [hidden]=\"phone.valid || (phone.pristine && !todoForm.submitted)\" class=\"text-danger\">\n                        Phone Number is required...!\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12\">\n                <div class=\"col-lg-4\">\n                    Email Id\n                </div>\n                <div class=\"col-lg-12\">\n                    <!-- <input type=\"email\" class=\"form-control\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"todoDetail.email\" placeholder=\"Email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required> -->\n                    <input type=\"text\" class=\"form-control\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"todoDetail.email\" placeholder=\"Enter Email Id\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required />\n                    <div *ngIf=\"email.invalid && (email.dirty || email.touched || todoForm.submitted)\" class=\"text-danger\">\n                        <div *ngIf=\"email.errors.required\"> Email is required. </div>\n                        <div *ngIf=\"email.errors.pattern\"> The email address you have entered is invalid. please try again.</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12\" align=\"right\">\n                    <button type=\"submit\" class=\"btn\">Save</button>\n                    &nbsp;\n                    <button type=\"btn\" class=\"btn\" (click)=\"cancle()\">Cancle</button>\n                    <!-- <br>\n                    <p *ngIf=\"todoDetail && todoDetail.status\" [innerHtml]=\"todoDetail.status\"></p> -->\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/components/todo-detail/todo-detail-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/todo-detail/todo-detail-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: TodoDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailRoutingModule", function() { return TodoDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _todo_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-detail.component */ "./src/app/components/todo-detail/todo-detail.component.ts");




const routes = [
    { path: '', component: _todo_detail_component__WEBPACK_IMPORTED_MODULE_3__["TodoDetailComponent"] }
];
let TodoDetailRoutingModule = class TodoDetailRoutingModule {
};
TodoDetailRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TodoDetailRoutingModule);



/***/ }),

/***/ "./src/app/components/todo-detail/todo-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/todo-detail/todo-detail.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1kZXRhaWwvdG9kby1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/todo-detail/todo-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/todo-detail/todo-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailComponent", function() { return TodoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/todo.service */ "./src/app/services/todo.service.ts");




let TodoDetailComponent = class TodoDetailComponent {
    constructor(todoService, router, activatedRoute) {
        this.todoService = todoService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.todoDetail = {};
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            this.todoId = params['id'];
            if (this.todoId !== undefined) {
                console.log(this.todoId);
                this.getTodoDetailById(this.todoId);
                this.mode = 'Edit';
            }
            else {
                // this.todoId = null;
                console.log(this.todoId);
                this.todoDetail['id'] = 0;
                this.mode = 'Add';
            }
        });
    }
    getTodoDetailById(todoId) {
        this.todoDetail = this.todoService.getTodoById(parseInt(todoId));
    }
    onToDoSubmitForm(todoForm) {
        console.log('INIT onTODOSubmitForm function*********', todoForm);
        debugger;
        if (!todoForm.valid) {
            return;
        }
        // if(
        //   !todoForm.firstName
        //   ||
        //   !todoForm.middleName
        //   ||
        //   !todoForm.lastName
        //   ||
        //   !todoForm.phone
        //   ||
        //   !todoForm.email
        // ){
        //   return;
        // }
        var todo = this.todoService.saveTodo(this.todoDetail);
        console.log('Saved todo info*****', todo);
        this.router.navigate(['/todo-list']);
    }
    cancle() {
        console.log('INIT cancle function*********');
        this.router.navigate(['/todo-list']);
    }
};
TodoDetailComponent.ctorParameters = () => [
    { type: _services_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
TodoDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./todo-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo-detail/todo-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./todo-detail.component.css */ "./src/app/components/todo-detail/todo-detail.component.css")).default]
    })
], TodoDetailComponent);



/***/ }),

/***/ "./src/app/components/todo-detail/todo-detail.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/todo-detail/todo-detail.module.ts ***!
  \**************************************************************/
/*! exports provided: TodoDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailModule", function() { return TodoDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _todo_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-detail-routing.module */ "./src/app/components/todo-detail/todo-detail-routing.module.ts");
/* harmony import */ var _todo_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-detail.component */ "./src/app/components/todo-detail/todo-detail.component.ts");






let TodoDetailModule = class TodoDetailModule {
};
TodoDetailModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_todo_detail_component__WEBPACK_IMPORTED_MODULE_5__["TodoDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _todo_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["TodoDetailRoutingModule"]
        ]
    })
], TodoDetailModule);



/***/ })

}]);
//# sourceMappingURL=app-components-todo-detail-todo-detail-module.js.map