(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-tournament-list-tournament-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tournament-list/tournament-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tournament-list/tournament-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <br>\n    <div *ngIf=\"mailObj && mailObj.tournaments && mailObj.tournaments.length\">\n        <h3>\n            Total Tournament Found:&nbsp; <b>{{mailObj.tournaments.length}}</b>\n        </h3>\n        <div class=\"col-lg-12\">\n            <div class=\"col-lg-3\" *ngFor=\"let tournament of mailObj.tournaments; let idx = index\">\n                <a routerLink=\"/event/{{tournament.uniqueName}}\">\n                    {{idx+1}}-{{tournament.name}}\n                </a>\n            </div>\n        </div>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/components/tournament-list/tournament-list-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/tournament-list/tournament-list-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: TournamentListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentListRoutingModule", function() { return TournamentListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tournament_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tournament-list.component */ "./src/app/components/tournament-list/tournament-list.component.ts");




const routes = [
    {
        "path": '',
        "component": _tournament_list_component__WEBPACK_IMPORTED_MODULE_3__["TournamentListComponent"]
    }
];
let TournamentListRoutingModule = class TournamentListRoutingModule {
};
TournamentListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TournamentListRoutingModule);



/***/ }),

/***/ "./src/app/components/tournament-list/tournament-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/tournament-list/tournament-list.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG91cm5hbWVudC1saXN0L3RvdXJuYW1lbnQtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/tournament-list/tournament-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/tournament-list/tournament-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: TournamentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentListComponent", function() { return TournamentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");


// import { ActivatedRoute } from '@angular/router';

let TournamentListComponent = class TournamentListComponent {
    constructor(
    // private route: ActivatedRoute,
    _httpService) {
        this._httpService = _httpService;
        this.mailObj = {};
    }
    ngOnInit() {
        debugger;
        const url = this._httpService.getTournamentList(0, 10000);
        let body = { "filters": { "isOnline": true }, "projectionKeys": {} };
        this._httpService.post(url, {}, body)
            .subscribe(response => (this.mailObj.tournaments = response), error => this.mailObj.errorMessage = error);
    }
};
TournamentListComponent.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
TournamentListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tournament-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tournament-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tournament-list/tournament-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tournament-list.component.css */ "./src/app/components/tournament-list/tournament-list.component.css")).default]
    })
], TournamentListComponent);



/***/ }),

/***/ "./src/app/components/tournament-list/tournament-list.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/tournament-list/tournament-list.module.ts ***!
  \**********************************************************************/
/*! exports provided: TournamentListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentListModule", function() { return TournamentListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _tournament_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tournament-list-routing.module */ "./src/app/components/tournament-list/tournament-list-routing.module.ts");
/* harmony import */ var _tournament_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tournament-list.component */ "./src/app/components/tournament-list/tournament-list.component.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/util.service */ "./src/app/services/util.service.ts");








let TournamentListModule = class TournamentListModule {
};
TournamentListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _tournament_list_component__WEBPACK_IMPORTED_MODULE_5__["TournamentListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tournament_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["TournamentListRoutingModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
        ],
        exports: [
            _tournament_list_component__WEBPACK_IMPORTED_MODULE_5__["TournamentListComponent"]
        ],
        providers: [
            // Headers,
            _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
        ]
    })
], TournamentListModule);



/***/ })

}]);
//# sourceMappingURL=app-components-tournament-list-tournament-list-module.js.map