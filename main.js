(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about.component.css":
/*!*************************************!*\
  !*** ./src/app/about.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0VBSUUiLCJmaWxlIjoic3JjL2FwcC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgMjAxNy0yMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyJdfQ== */"

/***/ }),

/***/ "./src/app/about.component.html":
/*!**************************************!*\
  !*** ./src/app/about.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Angular's animations library makes it easy to define and apply animation effects such as page and list transitions.\r\n</p>\r\n\r\n\r\n<!-- \r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->"

/***/ }),

/***/ "./src/app/about.component.ts":
/*!************************************!*\
  !*** ./src/app/about.component.ts ***!
  \************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: transAnimation, slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transAnimation", function() { return transAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var transAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}')
]);
// Routable animations
var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('HomePage <=> AboutPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> FilterPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);
/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: block;\r\n}\r\n\r\nsection {\r\n  margin-top: 100px;\r\n}\r\n\r\n/*\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUdEOzs7O0VBSUUiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgMjAxNy0yMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Animations</h1>\r\n\r\nToggle All Animations <input type=\"checkbox\" [checked]=\"!animationsDisabled\" (click)=\"toggleAnimations()\"/>\r\n\r\n<nav>\r\n  <a id=\"home\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n  <a id=\"about\" routerLink=\"/about\" routerLinkActive=\"active\">About</a>\r\n  <a id=\"open-close\" routerLink=\"/open-close\" routerLinkActive=\"active\">Open/Close</a>\r\n  <a id=\"status\" routerLink=\"/status\" routerLinkActive=\"active\">Status Slider</a>\r\n  <a id=\"toggle\" routerLink=\"/toggle\" routerLinkActive=\"active\">Toggle Animations</a>\r\n  <a id=\"enter-leave\" routerLink=\"/enter-leave\" routerLinkActive=\"active\">Enter/Leave</a>\r\n  <a id=\"auto\" routerLink=\"/auto\" routerLinkActive=\"active\">Auto Calculation</a>\r\n  <a id=\"heroes\" routerLink=\"/heroes\" routerLinkActive=\"active\">Filter/Stagger</a>\r\n  <a id=\"hero-groups\" routerLink=\"/hero-groups\" routerLinkActive=\"active\">Hero Groups</a>\r\n</nav>\r\n\r\n<div [@routeAnimations]=\"prepareRoute(outlet)\" >\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n\r\n<!-- \r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.animationsDisabled = false;
    }
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent.prototype.toggleAnimations = function () {
        this.animationsDisabled = !this.animationsDisabled;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@.disabled'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "animationsDisabled", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]
                // animation triggers go here
            ]
        })
    ], AppComponent);
    return AppComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _open_close_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./open-close.component */ "./src/app/open-close.component.ts");
/* harmony import */ var _open_close_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open-close-page.component */ "./src/app/open-close-page.component.ts");
/* harmony import */ var _open_close_component_4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./open-close.component.4 */ "./src/app/open-close.component.4.ts");
/* harmony import */ var _toggle_animations_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toggle-animations-page.component */ "./src/app/toggle-animations-page.component.ts");
/* harmony import */ var _status_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./status-slider.component */ "./src/app/status-slider.component.ts");
/* harmony import */ var _status_slider_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./status-slider-page.component */ "./src/app/status-slider-page.component.ts");
/* harmony import */ var _hero_list_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hero-list-page.component */ "./src/app/hero-list-page.component.ts");
/* harmony import */ var _hero_list_group_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hero-list-group-page.component */ "./src/app/hero-list-group-page.component.ts");
/* harmony import */ var _hero_list_groups_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hero-list-groups.component */ "./src/app/hero-list-groups.component.ts");
/* harmony import */ var _hero_list_enter_leave_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hero-list-enter-leave-page.component */ "./src/app/hero-list-enter-leave-page.component.ts");
/* harmony import */ var _hero_list_enter_leave_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hero-list-enter-leave.component */ "./src/app/hero-list-enter-leave.component.ts");
/* harmony import */ var _hero_list_auto_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hero-list-auto-page.component */ "./src/app/hero-list-auto-page.component.ts");
/* harmony import */ var _hero_list_auto_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hero-list-auto.component */ "./src/app/hero-list-auto.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about.component */ "./src/app/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
                    { path: 'open-close', component: _open_close_page_component__WEBPACK_IMPORTED_MODULE_6__["OpenClosePageComponent"] },
                    { path: 'status', component: _status_slider_page_component__WEBPACK_IMPORTED_MODULE_10__["StatusSliderPageComponent"] },
                    { path: 'toggle', component: _toggle_animations_page_component__WEBPACK_IMPORTED_MODULE_8__["ToggleAnimationsPageComponent"] },
                    { path: 'heroes', component: _hero_list_page_component__WEBPACK_IMPORTED_MODULE_11__["HeroListPageComponent"], data: { animation: 'FilterPage' } },
                    { path: 'hero-groups', component: _hero_list_group_page_component__WEBPACK_IMPORTED_MODULE_12__["HeroListGroupPageComponent"] },
                    { path: 'enter-leave', component: _hero_list_enter_leave_page_component__WEBPACK_IMPORTED_MODULE_14__["HeroListEnterLeavePageComponent"] },
                    { path: 'auto', component: _hero_list_auto_page_component__WEBPACK_IMPORTED_MODULE_16__["HeroListAutoCalcPageComponent"] },
                    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], data: { animation: 'HomePage' } },
                    { path: 'about', component: _about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"], data: { animation: 'AboutPage' } },
                ])
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _status_slider_component__WEBPACK_IMPORTED_MODULE_9__["StatusSliderComponent"],
                _open_close_component__WEBPACK_IMPORTED_MODULE_5__["OpenCloseComponent"],
                _open_close_component_4__WEBPACK_IMPORTED_MODULE_7__["OpenCloseChildComponent"],
                _open_close_page_component__WEBPACK_IMPORTED_MODULE_6__["OpenClosePageComponent"],
                _status_slider_page_component__WEBPACK_IMPORTED_MODULE_10__["StatusSliderPageComponent"],
                _toggle_animations_page_component__WEBPACK_IMPORTED_MODULE_8__["ToggleAnimationsPageComponent"],
                _hero_list_page_component__WEBPACK_IMPORTED_MODULE_11__["HeroListPageComponent"],
                _hero_list_groups_component__WEBPACK_IMPORTED_MODULE_13__["HeroListGroupsComponent"],
                _hero_list_group_page_component__WEBPACK_IMPORTED_MODULE_12__["HeroListGroupPageComponent"],
                _hero_list_enter_leave_page_component__WEBPACK_IMPORTED_MODULE_14__["HeroListEnterLeavePageComponent"],
                _hero_list_enter_leave_component__WEBPACK_IMPORTED_MODULE_15__["HeroListEnterLeaveComponent"],
                _hero_list_auto_page_component__WEBPACK_IMPORTED_MODULE_16__["HeroListAutoCalcPageComponent"],
                _hero_list_auto_component__WEBPACK_IMPORTED_MODULE_17__["HeroListAutoComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/hero-list-auto-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hero-list-auto-page.component.ts ***!
  \**************************************************/
/*! exports provided: HeroListAutoCalcPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListAutoCalcPageComponent", function() { return HeroListAutoCalcPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_heroes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-heroes */ "./src/app/mock-heroes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeroListAutoCalcPageComponent = /** @class */ (function () {
    function HeroListAutoCalcPageComponent() {
        this.heroes = _mock_heroes__WEBPACK_IMPORTED_MODULE_1__["HEROES"].slice();
    }
    HeroListAutoCalcPageComponent.prototype.onRemove = function (id) {
        this.heroes = this.heroes.filter(function (hero) { return hero.id !== id; });
    };
    HeroListAutoCalcPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-auto-page',
            template: "\n    <section>\n      <h2>Automatic Calculation</h2>\n\n      <app-hero-list-auto [heroes]=\"heroes\" (remove)=\"onRemove($event)\"></app-hero-list-auto>\n    </section>\n  "
        })
    ], HeroListAutoCalcPageComponent);
    return HeroListAutoCalcPageComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/hero-list-auto.component.html":
/*!***********************************************!*\
  !*** ./src/app/hero-list-auto.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"heroes\">\r\n  <li *ngFor=\"let hero of heroes\"\r\n      [@shrinkOut]=\"'in'\" (click)=\"removeHero(hero.id)\">\r\n      <div class=\"inner\">\r\n        <span class=\"badge\">{{ hero.id }}</span>\r\n        <span>{{ hero.name }}</span>\r\n      </div>\r\n  </li>\r\n</ul>\r\n\r\n<!-- \r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->"

/***/ }),

/***/ "./src/app/hero-list-auto.component.ts":
/*!*********************************************!*\
  !*** ./src/app/hero-list-auto.component.ts ***!
  \*********************************************/
/*! exports provided: HeroListAutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListAutoComponent", function() { return HeroListAutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroListAutoComponent = /** @class */ (function () {
    function HeroListAutoComponent() {
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeroListAutoComponent.prototype.removeHero = function (id) {
        this.remove.emit(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeroListAutoComponent.prototype, "heroes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeroListAutoComponent.prototype, "remove", void 0);
    HeroListAutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-auto',
            template: __webpack_require__(/*! ./hero-list-auto.component.html */ "./src/app/hero-list-auto.component.html"),
            styles: [__webpack_require__(/*! ./hero-list-page.component.css */ "./src/app/hero-list-page.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('shrinkOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 0 }))
                    ])
                ])
            ]
        })
    ], HeroListAutoComponent);
    return HeroListAutoComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/hero-list-enter-leave-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/hero-list-enter-leave-page.component.ts ***!
  \*********************************************************/
/*! exports provided: HeroListEnterLeavePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListEnterLeavePageComponent", function() { return HeroListEnterLeavePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_heroes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-heroes */ "./src/app/mock-heroes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeroListEnterLeavePageComponent = /** @class */ (function () {
    function HeroListEnterLeavePageComponent() {
        this.heroes = _mock_heroes__WEBPACK_IMPORTED_MODULE_1__["HEROES"].slice();
    }
    HeroListEnterLeavePageComponent.prototype.onRemove = function (id) {
        this.heroes = this.heroes.filter(function (hero) { return hero.id !== id; });
    };
    HeroListEnterLeavePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-enter-leave-page',
            template: "\n    <section>\n      <h2>Enter/Leave</h2>\n\n      <app-hero-list-enter-leave [heroes]=\"heroes\" (remove)=\"onRemove($event)\"></app-hero-list-enter-leave>\n    </section>\n  "
        })
    ], HeroListEnterLeavePageComponent);
    return HeroListEnterLeavePageComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/hero-list-enter-leave.component.ts":
/*!****************************************************!*\
  !*** ./src/app/hero-list-enter-leave.component.ts ***!
  \****************************************************/
/*! exports provided: HeroListEnterLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListEnterLeaveComponent", function() { return HeroListEnterLeaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroListEnterLeaveComponent = /** @class */ (function () {
    function HeroListEnterLeaveComponent() {
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeroListEnterLeaveComponent.prototype.removeHero = function (id) {
        this.remove.emit(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeroListEnterLeaveComponent.prototype, "heroes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeroListEnterLeaveComponent.prototype, "remove", void 0);
    HeroListEnterLeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-enter-leave',
            template: "\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n          [@flyInOut]=\"'in'\" (click)=\"removeHero(hero.id)\">\n          <div class=\"inner\">\n            <span class=\"badge\">{{ hero.id }}</span>\n            <span>{{ hero.name }}</span>\n          </div>\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__(/*! ./hero-list-page.component.css */ "./src/app/hero-list-page.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
                    ])
                ])
            ]
        })
    ], HeroListEnterLeaveComponent);
    return HeroListEnterLeaveComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/hero-list-group-page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/hero-list-group-page.component.ts ***!
  \***************************************************/
/*! exports provided: HeroListGroupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListGroupPageComponent", function() { return HeroListGroupPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_heroes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-heroes */ "./src/app/mock-heroes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeroListGroupPageComponent = /** @class */ (function () {
    function HeroListGroupPageComponent() {
        this.heroes = _mock_heroes__WEBPACK_IMPORTED_MODULE_1__["HEROES"].slice();
    }
    HeroListGroupPageComponent.prototype.onRemove = function (id) {
        this.heroes = this.heroes.filter(function (hero) { return hero.id !== id; });
    };
    HeroListGroupPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-groups-page',
            template: "\n    <section>\n      <h2>Hero List Group</h2>\n\n      <app-hero-list-groups [heroes]=\"heroes\" (remove)=\"onRemove($event)\"></app-hero-list-groups>\n    </section>\n  "
        })
    ], HeroListGroupPageComponent);
    return HeroListGroupPageComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/hero-list-groups.component.ts":
/*!***********************************************!*\
  !*** ./src/app/hero-list-groups.component.ts ***!
  \***********************************************/
/*! exports provided: HeroListGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListGroupsComponent", function() { return HeroListGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroListGroupsComponent = /** @class */ (function () {
    function HeroListGroupsComponent() {
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeroListGroupsComponent.prototype.removeHero = function (id) {
        this.remove.emit(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HeroListGroupsComponent.prototype, "heroes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeroListGroupsComponent.prototype, "remove", void 0);
    HeroListGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-groups',
            template: "\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n          [@flyInOut]=\"'in'\" (click)=\"removeHero(hero.id)\">\n          <div class=\"inner\">\n            <span class=\"badge\">{{ hero.id }}</span>\n            <span>{{ hero.name }}</span>\n          </div>\n      </li>\n    </ul>\n  ",
            styles: [__webpack_require__(/*! ./hero-list-page.component.css */ "./src/app/hero-list-page.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        width: 120,
                        transform: 'translateX(0)', opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s 0.1s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(0)',
                                width: 120
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 1
                            }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(50px)',
                                width: 10
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s 0.2s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 0
                            }))
                        ])
                    ])
                ])
            ]
        })
    ], HeroListGroupsComponent);
    return HeroListGroupsComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/hero-list-page.component.css":
/*!**********************************************!*\
  !*** ./src/app/hero-list-page.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heroes {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n\r\n.heroes li {\r\n  position: relative;\r\n  height: 2.3em;\r\n  overflow:hidden;\r\n  margin: .5em;\r\n}\r\n\r\n.heroes li > .inner {\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n  width: 19em;\r\n}\r\n\r\n.heroes li:hover > .inner {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  -webkit-transform: translateX(.1em);\r\n          transform: translateX(.1em);\r\n}\r\n\r\n.heroes a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n\r\n.heroes a:hover {\r\n  color:#607D8B;\r\n}\r\n\r\n.heroes .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.button {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nbutton.delete {\r\n  position: relative;\r\n  left: 24em;\r\n  top: -32px;\r\n  background-color: gray !important;\r\n  color: white;\r\n  display: inherit;\r\n  padding: 5px 8px;\r\n  width: 2em;\r\n}\r\n\r\ninput {\r\n  font-size: 100%;\r\n  margin-bottom: 2px;\r\n  width: 11em;\r\n}\r\n\r\n.heroes input {\r\n  position: relative;\r\n  top: -3px;\r\n  width: 12em;\r\n}\r\n\r\n/*\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1saXN0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixvQ0FBNEI7VUFBNUIsNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVztDQUNaOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7Q0FDYjs7QUFHRDs7OztFQUlFIiwiZmlsZSI6InNyYy9hcHAvaGVyby1saXN0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvZXMge1xyXG4gIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxNWVtO1xyXG59XHJcblxyXG4uaGVyb2VzIGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyLjNlbTtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG59XHJcblxyXG4uaGVyb2VzIGxpID4gLmlubmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgaGVpZ2h0OiAxLjZlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgd2lkdGg6IDE5ZW07XHJcbn1cclxuXHJcbi5oZXJvZXMgbGk6aG92ZXIgPiAuaW5uZXIge1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC4xZW0pO1xyXG59XHJcblxyXG4uaGVyb2VzIGEge1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uaGVyb2VzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiM2MDdEOEI7XHJcbn1cclxuXHJcbi5oZXJvZXMgLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0xcHg7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGhlaWdodDogMS44ZW07XHJcbiAgbWluLXdpZHRoOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogLjhlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAyNGVtO1xyXG4gIHRvcDogLTMycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgd2lkdGg6IDJlbTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgd2lkdGg6IDExZW07XHJcbn1cclxuXHJcbi5oZXJvZXMgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0zcHg7XHJcbiAgd2lkdGg6IDEyZW07XHJcbn1cclxuXHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgMjAxNy0yMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyJdfQ== */"

/***/ }),

/***/ "./src/app/hero-list-page.component.html":
/*!***********************************************!*\
  !*** ./src/app/hero-list-page.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Filter/Stagger</h2>\r\n\r\n<form>\r\n  <input #criteria (input)=\"updateCriteria(criteria.value)\" placeholder=\"Search Heroes\" />\r\n</form>    \r\n\r\n<ul class=\"heroes\" [@filterAnimation]=\"heroTotal\">\r\n  <li *ngFor=\"let hero of heroes\" class=\"hero\">\r\n    <div class=\"inner\">\r\n      <span class=\"badge\">{{ hero.id }}</span>\r\n      <span>{{ hero.name }}</span>\r\n    </div>\r\n  </li>\r\n</ul>\r\n\r\n<!-- \r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->"

/***/ }),

/***/ "./src/app/hero-list-page.component.ts":
/*!*********************************************!*\
  !*** ./src/app/hero-list-page.component.ts ***!
  \*********************************************/
/*! exports provided: HeroListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListPageComponent", function() { return HeroListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _mock_heroes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-heroes */ "./src/app/mock-heroes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroListPageComponent = /** @class */ (function () {
    function HeroListPageComponent() {
        this.animatePage = true;
        this._heroes = [];
        this.heroTotal = -1;
    }
    Object.defineProperty(HeroListPageComponent.prototype, "heroes", {
        get: function () {
            return this._heroes;
        },
        enumerable: true,
        configurable: true
    });
    HeroListPageComponent.prototype.ngOnInit = function () {
        this._heroes = _mock_heroes__WEBPACK_IMPORTED_MODULE_2__["HEROES"];
    };
    HeroListPageComponent.prototype.updateCriteria = function (criteria) {
        criteria = criteria ? criteria.trim() : '';
        this._heroes = _mock_heroes__WEBPACK_IMPORTED_MODULE_2__["HEROES"].filter(function (hero) { return hero.name.toLowerCase().includes(criteria.toLowerCase()); });
        var newTotal = this.heroes.length;
        if (this.heroTotal !== newTotal) {
            this.heroTotal = newTotal;
        }
        else if (!criteria) {
            this.heroTotal = -1;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@pageAnimations'),
        __metadata("design:type", Object)
    ], HeroListPageComponent.prototype, "animatePage", void 0);
    HeroListPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-list-page',
            template: __webpack_require__(/*! ./hero-list-page.component.html */ "./src/app/hero-list-page.component.html"),
            styles: [__webpack_require__(/*! ./hero-list-page.component.css */ "./src/app/hero-list-page.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('pageAnimations', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.hero, form', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-100px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'none' }))
                            ])
                        ])
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('filterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter, * => 0, * => -1', []),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':increment', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, width: '0px' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(50, [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, width: '*' })),
                            ]),
                        ], { optional: true })
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':decrement', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(50, [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, width: '0px' })),
                            ]),
                        ])
                    ]),
                ]),
            ]
        })
    ], HeroListPageComponent);
    return HeroListPageComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/home.component.css":
/*!************************************!*\
  !*** ./src/app/home.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7RUFJRSIsImZpbGUiOiJzcmMvYXBwL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLypcclxuQ29weXJpZ2h0IDIwMTctMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG5Vc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi8iXX0= */"

/***/ }),

/***/ "./src/app/home.component.html":
/*!*************************************!*\
  !*** ./src/app/home.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Welcome to Animations in Angular!\r\n</p>\r\n\r\n\r\n<!-- \r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->"

/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/mock-heroes.ts":
/*!********************************!*\
  !*** ./src/app/mock-heroes.ts ***!
  \********************************/
/*! exports provided: HEROES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEROES", function() { return HEROES; });
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/open-close-page.component.ts":
/*!**********************************************!*\
  !*** ./src/app/open-close-page.component.ts ***!
  \**********************************************/
/*! exports provided: OpenClosePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenClosePageComponent", function() { return OpenClosePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OpenClosePageComponent = /** @class */ (function () {
    function OpenClosePageComponent() {
        this.logging = false;
    }
    OpenClosePageComponent.prototype.toggleLogging = function () {
        this.logging = !this.logging;
    };
    OpenClosePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-close-page',
            template: "\n    <section>\n      <h2>Open Close Component</h2>\n      <input type=\"checkbox\" [checked]=\"logging\" (click)=\"toggleLogging()\"/> Console Log Animation Events\n\n      <app-open-close [logging]=\"logging\"></app-open-close>\n    </section>\n  "
        })
    ], OpenClosePageComponent);
    return OpenClosePageComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/open-close.component.4.html":
/*!*********************************************!*\
  !*** ./src/app/open-close.component.4.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <button (click)=\"toggleAnimations()\">Toggle Animations</button>\r\n  <button (click)=\"toggle()\">Toggle Open/Closed</button>\r\n</nav>\r\n<div [@.disabled]=\"isDisabled\">\r\n  <div [@childAnimation]=\"isOpen ? 'open' : 'closed'\"\r\n    class=\"open-close-container\">\r\n    <p>The box is now {{ isOpen ? 'Open' : 'Closed' }}!</p>\r\n  </div>\r\n</div>\r\n\r\n<!-- \r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->"

/***/ }),

/***/ "./src/app/open-close.component.4.ts":
/*!*******************************************!*\
  !*** ./src/app/open-close.component.4.ts ***!
  \*******************************************/
/*! exports provided: OpenCloseChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCloseChildComponent", function() { return OpenCloseChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OpenCloseChildComponent = /** @class */ (function () {
    function OpenCloseChildComponent() {
        this.isDisabled = false;
        this.isOpen = false;
    }
    OpenCloseChildComponent.prototype.toggleAnimations = function () {
        this.isDisabled = !this.isDisabled;
    };
    OpenCloseChildComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    OpenCloseChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-close-toggle',
            template: __webpack_require__(/*! ./open-close.component.4.html */ "./src/app/open-close.component.4.html"),
            styles: [__webpack_require__(/*! ./open-close.component.css */ "./src/app/open-close.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('childAnimation', [
                    // ...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        width: '250px',
                        opacity: 1,
                        backgroundColor: 'yellow'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        width: '100px',
                        opacity: 0.5,
                        backgroundColor: 'green'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                    ]),
                ]),
            ],
        })
    ], OpenCloseChildComponent);
    return OpenCloseChildComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/open-close.component.css":
/*!******************************************!*\
  !*** ./src/app/open-close.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: block;\r\n}\r\n\r\n.open-close-container {\r\n  border: 1px solid #dddddd;\r\n  margin-top: 1em;\r\n  padding: 20px 20px 0px 20px;\r\n  color: #000000;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n/*\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blbi1jbG9zZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0NBQ2pCOztBQUdEOzs7O0VBSUUiLCJmaWxlIjoic3JjL2FwcC9vcGVuLWNsb3NlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5vcGVuLWNsb3NlLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgcGFkZGluZzogMjBweCAyMHB4IDBweCAyMHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuXHJcbi8qXHJcbkNvcHlyaWdodCAyMDE3LTIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiovIl19 */"

/***/ }),

/***/ "./src/app/open-close.component.html":
/*!*******************************************!*\
  !*** ./src/app/open-close.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <button (click)=\"toggle()\">Toggle Open/Close</button>\r\n</nav>\r\n\r\n<div [@openClose]=\"isOpen ? 'open' : 'closed'\"\r\n  (@openClose.start)=\"onAnimationEvent($event)\"\r\n  (@openClose.done)=\"onAnimationEvent($event)\"\r\n  class=\"open-close-container\">  \r\n  <p>The box is now {{ isOpen ? 'Open' : 'Closed' }}!</p>\r\n</div>\r\n\r\n\r\n<!-- \r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->"

/***/ }),

/***/ "./src/app/open-close.component.ts":
/*!*****************************************!*\
  !*** ./src/app/open-close.component.ts ***!
  \*****************************************/
/*! exports provided: OpenCloseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCloseComponent", function() { return OpenCloseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpenCloseComponent = /** @class */ (function () {
    function OpenCloseComponent() {
        this.isOpen = true;
        this.logging = false;
    }
    OpenCloseComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    OpenCloseComponent.prototype.onAnimationEvent = function (event) {
        if (!this.logging) {
            return;
        }
        // openClose is trigger name in this example
        console.warn("Animation Trigger: " + event.triggerName);
        // phaseName is start or done
        console.warn("Phase: " + event.phaseName);
        // in our example, totalTime is 1000 or 1 second
        console.warn("Total time: " + event.totalTime);
        // in our example, fromState is either open or closed
        console.warn("From: " + event.fromState);
        // in our example, toState either open or closed
        console.warn("To: " + event.toState);
        // the HTML element itself, the button in this case
        console.warn("Element: " + event.element);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OpenCloseComponent.prototype, "logging", void 0);
    OpenCloseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-close',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                    // ...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '200px',
                        opacity: 1,
                        backgroundColor: 'yellow'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '100px',
                        opacity: 0.5,
                        backgroundColor: 'green'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open <=> closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '*' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                    ]),
                ]),
            ],
            template: __webpack_require__(/*! ./open-close.component.html */ "./src/app/open-close.component.html"),
            styles: [__webpack_require__(/*! ./open-close.component.css */ "./src/app/open-close.component.css")]
        })
    ], OpenCloseComponent);
    return OpenCloseComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/status-slider-page.component.ts":
/*!*************************************************!*\
  !*** ./src/app/status-slider-page.component.ts ***!
  \*************************************************/
/*! exports provided: StatusSliderPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusSliderPageComponent", function() { return StatusSliderPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StatusSliderPageComponent = /** @class */ (function () {
    function StatusSliderPageComponent() {
    }
    StatusSliderPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status-slider-page',
            template: "\n    <section>\n      <h2>Status Slider</h2>\n      <app-status-slider></app-status-slider>\n    </section>\n  "
        })
    ], StatusSliderPageComponent);
    return StatusSliderPageComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/status-slider.component.css":
/*!*********************************************!*\
  !*** ./src/app/status-slider.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: block;\r\n}\r\n\r\n.box {\r\n  width: 300px;\r\n  border: 5px solid black;\r\n  display: block;\r\n  line-height: 300px;\r\n  text-align: center;\r\n  font-size: 50px;\r\n  color: white;\r\n}\r\n\r\n/*\r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHVzLXNsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDs7QUFHRDs7OztFQUlFIiwiZmlsZSI6InNyYy9hcHAvc3RhdHVzLXNsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYm94IHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDMwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLypcclxuQ29weXJpZ2h0IDIwMTctMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG5Vc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi8iXX0= */"

/***/ }),

/***/ "./src/app/status-slider.component.html":
/*!**********************************************!*\
  !*** ./src/app/status-slider.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <button (click)=\"toggle()\">Toggle Status</button>\r\n</nav>\r\n\r\n<div [@slideStatus]=\"status\" class=\"box\">\r\n  {{ status == 'active' ? 'Active' : 'Inactive' }}\r\n</div>\r\n\r\n\r\n<!-- \r\nCopyright 2017-2018 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->"

/***/ }),

/***/ "./src/app/status-slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/status-slider.component.ts ***!
  \********************************************/
/*! exports provided: StatusSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusSliderComponent", function() { return StatusSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StatusSliderComponent = /** @class */ (function () {
    function StatusSliderComponent() {
        this.status = 'inactive';
    }
    StatusSliderComponent.prototype.toggle = function () {
        if (this.status === 'active') {
            this.status = 'inactive';
        }
        else {
            this.status = 'active';
        }
    };
    StatusSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status-slider',
            template: __webpack_require__(/*! ./status-slider.component.html */ "./src/app/status-slider.component.html"),
            styles: [__webpack_require__(/*! ./status-slider.component.css */ "./src/app/status-slider.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideStatus', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'blue' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'orange' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'blue', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'red', offset: 0.8 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'orange', offset: 1.0 })
                        ])),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => inactive', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'orange', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'red', offset: 0.2 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'blue', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'blue' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'red' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'orange' })
                        ]))
                    ]),
                ])
            ]
        })
    ], StatusSliderComponent);
    return StatusSliderComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/toggle-animations-page.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/toggle-animations-page.component.ts ***!
  \*****************************************************/
/*! exports provided: ToggleAnimationsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleAnimationsPageComponent", function() { return ToggleAnimationsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToggleAnimationsPageComponent = /** @class */ (function () {
    function ToggleAnimationsPageComponent() {
    }
    ToggleAnimationsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toggle-animations-child-page',
            template: "\n    <section>\n      <h2>Toggle Animations</h2>\n\n      <app-open-close-toggle></app-open-close-toggle>\n    </section>\n  "
        })
    ], ToggleAnimationsPageComponent);
    return ToggleAnimationsPageComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\workshop12\Desktop\AGAnimation\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map