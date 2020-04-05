(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-tournament-tournament-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tournament/tournament.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tournament/tournament.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>tournament works!</p>\n");

/***/ }),

/***/ "./src/app/components/tournament/tournament-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/tournament/tournament-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TournamentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentRoutingModule", function() { return TournamentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tournament_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tournament.component */ "./src/app/components/tournament/tournament.component.ts");




const routes = [
    {
        path: 'event',
        component: _tournament_component__WEBPACK_IMPORTED_MODULE_3__["TournamentComponent"]
    }
];
let TournamentRoutingModule = class TournamentRoutingModule {
};
TournamentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TournamentRoutingModule);



/***/ }),

/***/ "./src/app/components/tournament/tournament.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/tournament/tournament.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG91cm5hbWVudC90b3VybmFtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/tournament/tournament.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/tournament/tournament.component.ts ***!
  \***************************************************************/
/*! exports provided: TournamentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentComponent", function() { return TournamentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");




let TournamentComponent = class TournamentComponent {
    constructor(route, _httpService) {
        this.route = route;
        this._httpService = _httpService;
    }
    getTournamentDetail(uniqName) {
        const url = this._httpService.getTournamentDetailApiURL(uniqName);
        this._httpService.get(url, {})
            .subscribe(response => (this.mailObj.data = response), error => this.mailObj.errorMessage = error);
    }
    ;
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.mailObj.tournamentUniqName = params['uniqName'];
            this.getTournamentDetail(this.mailObj.tournamentUniqName);
        });
    }
};
TournamentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
TournamentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tournament',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tournament.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tournament/tournament.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tournament.component.css */ "./src/app/components/tournament/tournament.component.css")).default]
    })
], TournamentComponent);



/***/ }),

/***/ "./src/app/components/tournament/tournament.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/tournament/tournament.module.ts ***!
  \************************************************************/
/*! exports provided: TournamentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentModule", function() { return TournamentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tournament_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tournament-routing.module */ "./src/app/components/tournament/tournament-routing.module.ts");
/* harmony import */ var _tournament_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tournament.component */ "./src/app/components/tournament/tournament.component.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");






let TournamentModule = class TournamentModule {
};
TournamentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _tournament_component__WEBPACK_IMPORTED_MODULE_4__["TournamentComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tournament_routing_module__WEBPACK_IMPORTED_MODULE_3__["TournamentRoutingModule"]
        ],
        providers: [
            _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
        ],
        exports: [
            _tournament_component__WEBPACK_IMPORTED_MODULE_4__["TournamentComponent"]
        ]
    })
], TournamentModule);



/***/ })

}]);
//# sourceMappingURL=app-components-tournament-tournament-module.js.map