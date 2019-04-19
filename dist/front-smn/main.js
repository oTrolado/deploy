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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_imadmin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/imadmin.guard */ "./src/app/guards/imadmin.guard.ts");
/* harmony import */ var _components_auth_in_auth_in_auth_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth-in/auth-in/auth-in.component */ "./src/app/components/auth-in/auth-in/auth-in.component.ts");
/* harmony import */ var _components_cardapio_cardapio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cardapio/cardapio.component */ "./src/app/components/cardapio/cardapio.component.ts");
/* harmony import */ var _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/feedback/feedback.component */ "./src/app/components/feedback/feedback.component.ts");
/* harmony import */ var _components_adm_alterar_cardapio_alterar_cardapio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/adm/alterar-cardapio/alterar-cardapio.component */ "./src/app/components/adm/alterar-cardapio/alterar-cardapio.component.ts");
/* harmony import */ var _components_adm_trocas_trocas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/adm/trocas/trocas.component */ "./src/app/components/adm/trocas/trocas.component.ts");
/* harmony import */ var _components_adm_feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/adm/feedbacks/feedbacks.component */ "./src/app/components/adm/feedbacks/feedbacks.component.ts");











var routes = [
    { path: '', component: _components_auth_in_auth_in_auth_in_component__WEBPACK_IMPORTED_MODULE_5__["AuthInComponent"] },
    { path: 'cardapio', component: _components_cardapio_cardapio_component__WEBPACK_IMPORTED_MODULE_6__["CardapioComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'feedback', component: _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__["FeedbackComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'cardapios', component: _components_adm_alterar_cardapio_alterar_cardapio_component__WEBPACK_IMPORTED_MODULE_8__["AlterarCardapioComponent"], canActivate: [_guards_imadmin_guard__WEBPACK_IMPORTED_MODULE_4__["ImadminGuard"]] },
    { path: 'trocas', component: _components_adm_trocas_trocas_component__WEBPACK_IMPORTED_MODULE_9__["TrocasComponent"], canActivate: [_guards_imadmin_guard__WEBPACK_IMPORTED_MODULE_4__["ImadminGuard"]] },
    { path: 'feedbacks', component: _components_adm_feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_10__["FeedbacksComponent"], canActivate: [_guards_imadmin_guard__WEBPACK_IMPORTED_MODULE_4__["ImadminGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#progresso{\n\tposition: fixed;\n    top: 0;\n    right: 0;\n    z-index: 2;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(900,900,900,.5);\n}\n\n.mat-spinner{ margin: 40vh auto }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0lBQ1osTUFBTTtJQUNOLFFBQVE7SUFDUixVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUEsY0FBYyxrQkFBa0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9ncmVzc297XG5cdHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkwMCw5MDAsOTAwLC41KTtcbn1cblxuLm1hdC1zcGlubmVyeyBtYXJnaW46IDQwdmggYXV0byB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" id=\"header\">\n  <div id=\"menu\" *ngIf=\"mostrarMenu\">\n  \t<button mat-icon-button color=\"primary\" aria-label=\"Botão menu\">\n\t  \t<mat-icon id=\"iconeMenu\" color=\"primary\" (click)=\"drawer.toggle()\">\tmenu\n\t  \t</mat-icon>\n\t</button>\n  </div>\n  <span id=\"smn-topo\" class=\"\">{{ title }}</span>\n</mat-toolbar>\n\n<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\">  \t\t\n\t<mat-drawer #drawer [mode]=\"over\">\n\t\t<div id=\"nome-menu\">\n\t\t\t<a>{{ usuario.nome }}</a>\n\t\t</div>\n\t\t<mat-list class=\"navs subheading-2\">\n\t\t\t<nav>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t  \t\t<a routerLink=\"/cardapio\" (click)=\"drawer.toggle();\"><mat-list-item>Cardápio</mat-list-item></a>\n\t\t  \t\t<mat-divider></mat-divider>\n\t\t  \t\t<nav id=\"admin\" *ngIf=\"usuario.admin\">\n\t\t  \t\t\t<a routerLink=\"/cardapios\" (click)=\"drawer.toggle();\"><mat-list-item>Editar Cardapios</mat-list-item></a>\n\t\t  \t\t\t<mat-divider></mat-divider>\n\t\t  \t\t\t<a routerLink=\"/trocas\" (click)=\"drawer.toggle();\"><mat-list-item>Pedidos de Troca</mat-list-item></a>\n\t\t  \t\t\t<mat-divider></mat-divider>\n\t  \t\t\t</nav>\n\t\t  \t\t<a (click)=\"drawer.toggle(); feedback()\"><mat-list-item>Sugestões</mat-list-item></a>\n\t\t  \t\t<mat-divider></mat-divider>\n\t\t  \t\t<a routerLink=\"/cardapio\" (click)=\"drawer.toggle(); logOut()\"><mat-list-item>Sair</mat-list-item></a>\n\t\t  \t\t<mat-divider></mat-divider>\n\t\t\t</nav>\n\t\t</mat-list>\n\t</mat-drawer>     \n\t<mat-drawer-content>\n\t\t<router-outlet></router-outlet>\n\n\t\n\t\t<mat-toolbar  id=\"footer\" color=\"accent\">\n\t\t    Time de Estágio\n\t\t</mat-toolbar>\n    </mat-drawer-content>       \n</mat-drawer-container> \n\n<div id=\"progresso\" *ngIf=\"progress\">\n\t<mat-spinner color=\"accent\"></mat-spinner>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _components_auth_in_auth_in_auth_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/auth-in/auth-in/auth-in.component */ "./src/app/components/auth-in/auth-in/auth-in.component.ts");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/progress.service */ "./src/app/services/progress.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(authService, authIn, progressServ, router) {
        this.authService = authService;
        this.authIn = authIn;
        this.progressServ = progressServ;
        this.router = router;
        this.title = 'SMN';
        this.progress = false;
        this.mostrarMenu = false;
        this.admin = false;
        this.usuario = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.mostrarMenuEmitter.subscribe(function (res) {
            _this.mostrarMenu = res;
            _this.usuario = _this.authService.getUser();
        });
        this.progressServ.progressEmitter.subscribe(function (res) {
            _this.progress = res;
        });
    };
    AppComponent.prototype.logOut = function () {
        this.authIn.logOut();
    };
    AppComponent.prototype.feedback = function () {
        if (this.usuario.admin) {
            this.router.navigate(['feedbacks']);
        }
        else
            this.router.navigate(['feedback']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"],
            _components_auth_in_auth_in_auth_in_component__WEBPACK_IMPORTED_MODULE_4__["AuthInComponent"],
            _services_progress_service__WEBPACK_IMPORTED_MODULE_5__["ProgressService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _components_auth_in_auth_in_auth_in_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/auth-in/auth-in/auth-in.component */ "./src/app/components/auth-in/auth-in/auth-in.component.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _components_cardapio_cardapio_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/cardapio/cardapio.component */ "./src/app/components/cardapio/cardapio.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_cardapio_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/cardapio.service */ "./src/app/services/cardapio.service.ts");
/* harmony import */ var _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/feedback/feedback.component */ "./src/app/components/feedback/feedback.component.ts");
/* harmony import */ var _guards_imadmin_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./guards/imadmin.guard */ "./src/app/guards/imadmin.guard.ts");
/* harmony import */ var _components_adm_alterar_cardapio_alterar_cardapio_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/adm/alterar-cardapio/alterar-cardapio.component */ "./src/app/components/adm/alterar-cardapio/alterar-cardapio.component.ts");
/* harmony import */ var _components_adm_trocas_trocas_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/adm/trocas/trocas.component */ "./src/app/components/adm/trocas/trocas.component.ts");
/* harmony import */ var _components_adm_feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/adm/feedbacks/feedbacks.component */ "./src/app/components/adm/feedbacks/feedbacks.component.ts");




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_auth_in_auth_in_auth_in_component__WEBPACK_IMPORTED_MODULE_26__["AuthInComponent"],
                _components_cardapio_cardapio_component__WEBPACK_IMPORTED_MODULE_28__["CardapioComponent"],
                _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_31__["FeedbackComponent"],
                _components_adm_alterar_cardapio_alterar_cardapio_component__WEBPACK_IMPORTED_MODULE_33__["AlterarCardapioComponent"],
                _components_adm_trocas_trocas_component__WEBPACK_IMPORTED_MODULE_34__["TrocasComponent"],
                _components_adm_feedbacks_feedbacks_component__WEBPACK_IMPORTED_MODULE_35__["FeedbacksComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"]
            ],
            providers: [
                _services_auth_service_service__WEBPACK_IMPORTED_MODULE_27__["AuthServiceService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AuthGuard"],
                _guards_imadmin_guard__WEBPACK_IMPORTED_MODULE_32__["ImadminGuard"],
                _services_cardapio_service__WEBPACK_IMPORTED_MODULE_30__["CardapioService"],
                _components_auth_in_auth_in_auth_in_component__WEBPACK_IMPORTED_MODULE_26__["AuthInComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/adm/alterar-cardapio/alterar-cardapio.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/adm/alterar-cardapio/alterar-cardapio.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{ margin: 10px 0 0 auto; width: 120px;}\n.mat-display-3{margin-bottom: 0!important}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG0vYWx0ZXJhci1jYXJkYXBpby9hbHRlcmFyLWNhcmRhcGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxxQkFBcUIsRUFBRSxZQUFZLENBQUM7QUFDNUMsZUFBZSwwQkFBMEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbS9hbHRlcmFyLWNhcmRhcGlvL2FsdGVyYXItY2FyZGFwaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbnsgbWFyZ2luOiAxMHB4IDAgMCBhdXRvOyB3aWR0aDogMTIwcHg7fVxuLm1hdC1kaXNwbGF5LTN7bWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnR9Il19 */"

/***/ }),

/***/ "./src/app/components/adm/alterar-cardapio/alterar-cardapio.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/adm/alterar-cardapio/alterar-cardapio.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"container\" id=\"cardapios\">\n\n\t<h1 class=\"mat-display-3\"> Cardápios </h1>\n\n\t<mat-tab-group color=\"accent\">\n\n\t\t<mat-tab *ngFor=\"let cardapio of cardapios\" [label]=\"cardapio.nome_dia_da_semana\">\n\n\t\t\t<mat-card>\n\t\t\t\t<form class=\"formCardapios\">\n\t\t\t\t\t<mat-form-field appearance=\"outline\" color=\"accent\" >\n\t                \t<mat-label>Prato Principal</mat-label>\n\t                \t<input name=\"pratoPrincipal\" matInput [placeholder]=\"cardapio.pratoPrincipal\" required  [(ngModel)]=\"cardapio.pratoPrincipal\">\n\t              \t</mat-form-field>\n\n\t              \t<mat-form-field appearance=\"outline\" color=\"accent\" >\n\t                \t<mat-label>Opção 1</mat-label>\n\t                \t<input name=\"opcao1\" matInput [placeholder]=\"cardapio.opcao1\" required  [(ngModel)]=\"cardapio.opcao1\">\n\t              \t</mat-form-field>\n\n\t              \t<mat-form-field appearance=\"outline\" color=\"accent\" >\n\t                \t<mat-label>Opção 2</mat-label>\n\t                \t<input name=\"opcao2\" matInput [placeholder]=\"cardapio.opcao2\" required  [(ngModel)]=\"cardapio.opcao2\">\n\t              \t</mat-form-field>\n\n\t              \t<mat-form-field appearance=\"outline\" color=\"accent\" >\n\t                \t<mat-label>Guarnição 1</mat-label>\n\t                \t<input name=\"guarnicao1\" matInput [placeholder]=\"cardapio.guarnicao1\" required  [(ngModel)]=\"cardapio.guarnicao1\">\n\t              \t</mat-form-field>\n\n\t              \t<mat-form-field appearance=\"outline\" color=\"accent\" >\n\t                \t<mat-label>Guarnição 2</mat-label>\n\t                \t<input name=\"guarnicao2\" matInput [placeholder]=\"cardapio.guarnicao2\" required  [(ngModel)]=\"cardapio.guarnicao2\">\n\t              \t</mat-form-field>\n\n\t              \t<mat-form-field appearance=\"outline\" color=\"accent\" >\n\t                \t<mat-label>Salada</mat-label>\n\t                \t<input name=\"salada\" matInput [placeholder]=\"cardapio.salada\" required  [(ngModel)]=\"cardapio.salada\">\n\t              \t</mat-form-field>\n\n\t              \t<mat-form-field appearance=\"outline\" color=\"accent\" >\n\t                \t<mat-label>Sobremesa</mat-label>\n\t                \t<input name=\"sobremesa\" matInput [placeholder]=\"cardapio.sobremesa\" required  [(ngModel)]=\"cardapio.sobremesa\">\n\t              \t</mat-form-field>\n\n\t              \t<mat-form-field color=\"accent\"  appearance=\"outline\" color=\"accent\">\n\t\t\t\t\t  <mat-label>Data</mat-label>\n\t\t\t\t\t  <input name=\"data\" matInput [matDatepicker]=\"picker\" placeholder=\"Selecione a data\" required [(ngModel)]=\"cardapio.data\">\n\t\t\t\t\t  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t\t  <mat-datepicker #picker></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\n\t              \t<button mat-flat-button color=\"accent\" (click)=\"confirma(cardapio);\"><strong>Confirmar</strong></button>\n\t\t\t\t</form>\n\t\t\t</mat-card>\n\t\t\t\n\t\t</mat-tab>\n\t\t\n\t</mat-tab-group>\n\n</article>"

/***/ }),

/***/ "./src/app/components/adm/alterar-cardapio/alterar-cardapio.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/adm/alterar-cardapio/alterar-cardapio.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AlterarCardapioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterarCardapioComponent", function() { return AlterarCardapioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_cardapio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/cardapio.service */ "./src/app/services/cardapio.service.ts");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/progress.service */ "./src/app/services/progress.service.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");






//Object.keys(obj).filter(item => obj[item] == "")
var AlterarCardapioComponent = /** @class */ (function () {
    function AlterarCardapioComponent(cardapioS, progress, snack, adapter) {
        this.cardapioS = cardapioS;
        this.progress = progress;
        this.snack = snack;
        this.adapter = adapter;
        this.cardapios = {};
        this.dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
    }
    AlterarCardapioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adapter.setLocale('pt-br');
        this.progress.onProgress();
        var retorno = this.cardapioS.listar();
        retorno.subscribe(function (res) {
            _this.cardapios = res;
            _this.progress.offProgress();
            _this.cardapios = _this.cardapios.map(function (cardapio) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, cardapio, { nome_dia_da_semana: _this.dias[new Date(cardapio.data).getDay()] })); });
        }, function (erro) {
            console.log(erro);
            _this.progress.offProgress();
        });
    };
    AlterarCardapioComponent.prototype.confirma = function (cardapio) {
        var _this = this;
        var teste = true;
        console.log(cardapio);
        if (cardapio.nome_dia_da_semana == this.dias[new Date(cardapio.data).getDay()]) {
            Object.keys(cardapio).filter(function (item) { return cardapio[item] === ''; }).map(function (item) {
                teste = false;
                console.log(item);
                _this.snack.open(item + ' está vazio', 'Fechar', { duration: 3000 });
            });
            if (teste) {
                this.progress.onProgress();
                var retorno = this.cardapioS.alterar(cardapio);
                retorno.subscribe(function (res) {
                    _this.progress.offProgress();
                    _this.snack.open('Cardápio da ' + cardapio.nome_dia_da_semana + ' atualizado', 'Fechar', { duration: 3000 });
                }, function (erro) {
                    _this.progress.offProgress();
                    console.log(erro);
                });
            }
        }
        else {
            this.snack.open('A data não é uma ' + cardapio.nome_dia_da_semana, 'Fechar', { duration: 3000 });
        }
    };
    AlterarCardapioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alterar-cardapio',
            template: __webpack_require__(/*! ./alterar-cardapio.component.html */ "./src/app/components/adm/alterar-cardapio/alterar-cardapio.component.html"),
            providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"], useValue: 'pt-br' }],
            styles: [__webpack_require__(/*! ./alterar-cardapio.component.css */ "./src/app/components/adm/alterar-cardapio/alterar-cardapio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cardapio_service__WEBPACK_IMPORTED_MODULE_3__["CardapioService"],
            _services_progress_service__WEBPACK_IMPORTED_MODULE_4__["ProgressService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"]])
    ], AlterarCardapioComponent);
    return AlterarCardapioComponent;
}());



/***/ }),

/***/ "./src/app/components/adm/feedbacks/feedbacks.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/adm/feedbacks/feedbacks.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-feedback{ margin-bottom: 10px; background-color: #626262}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG0vZmVlZGJhY2tzL2ZlZWRiYWNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixtQkFBbUIsRUFBRSx5QkFBeUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbS9mZWVkYmFja3MvZmVlZGJhY2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1mZWVkYmFja3sgbWFyZ2luLWJvdHRvbTogMTBweDsgYmFja2dyb3VuZC1jb2xvcjogIzYyNjI2Mn0iXX0= */"

/***/ }),

/***/ "./src/app/components/adm/feedbacks/feedbacks.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/adm/feedbacks/feedbacks.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"container\" id=\"feedbacks\">\n\t<h1 class=\"mat-display-3\"> <span class=\"noMobile\">Painel de </span>Sugestões </h1>\n\t\n\t<mat-card>\n\t\t<mat-accordion>\n\t\t  <mat-expansion-panel>\n\t\t    <mat-expansion-panel-header>\n\t\t      <mat-panel-title>\n\t\t        <strong>Sugestões</strong>\n\t\t      </mat-panel-title>\n\t\t    </mat-expansion-panel-header>\n\t\t       \n\t\t      <article *ngFor=\"let feedback of feedbacks\" >\n\t\t      \t<mat-card class=\"card-feedback\" *ngIf=\"filtrar(feedback, 'sugestao')\">\n\t\t\t  \t\t<p>{{ feedback.mensagem }}</p>\n\t\t\t    </mat-card>\n\t\t      </article>\n\t\t\t  \n\t\t  </mat-expansion-panel>\t\n\t\t  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n\t\t                       (closed)=\"panelOpenState = false\">\n\t\t    <mat-expansion-panel-header>\n\t\t      <mat-panel-title>\n\t\t        <strong>Bugs</strong>\n\t\t      </mat-panel-title>\n\t\t    </mat-expansion-panel-header>\n\t\t    \n\t\t      <article *ngFor=\"let feedback of feedbacks\" >\n\t\t      \t<mat-card class=\"card-feedback\" *ngIf=\"filtrar(feedback, 'bug')\">\n\t\t\t  \t\t<p>{{ feedback.mensagem }}</p>\n\t\t\t    </mat-card>\n\t\t      </article>\n\n\t\t  </mat-expansion-panel>\n\t\t</mat-accordion>\n\t</mat-card>\n\t\n</article>"

/***/ }),

/***/ "./src/app/components/adm/feedbacks/feedbacks.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/adm/feedbacks/feedbacks.component.ts ***!
  \*****************************************************************/
/*! exports provided: FeedbacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbacksComponent", function() { return FeedbacksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/feedback.service */ "./src/app/services/feedback.service.ts");



var FeedbacksComponent = /** @class */ (function () {
    function FeedbacksComponent(feedbackS) {
        this.feedbackS = feedbackS;
        this.feedbacks = {};
    }
    FeedbacksComponent.prototype.ngOnInit = function () {
        var _this = this;
        var retorno = this.feedbackS.listar();
        retorno.subscribe(function (res) {
            _this.feedbacks = res;
            console.log(_this.feedbacks);
        }, function (erro) {
            console.log(erro);
        });
    };
    FeedbacksComponent.prototype.filtrar = function (feedback, tipo) {
        if (feedback.tipo == tipo) {
            return true;
        }
        return false;
    };
    FeedbacksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedbacks',
            template: __webpack_require__(/*! ./feedbacks.component.html */ "./src/app/components/adm/feedbacks/feedbacks.component.html"),
            styles: [__webpack_require__(/*! ./feedbacks.component.css */ "./src/app/components/adm/feedbacks/feedbacks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"]])
    ], FeedbacksComponent);
    return FeedbacksComponent;
}());



/***/ }),

/***/ "./src/app/components/adm/trocas/trocas.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/adm/trocas/trocas.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtL3Ryb2Nhcy90cm9jYXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/adm/trocas/trocas.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/adm/trocas/trocas.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"container\" id=\"trocas\">\n\t<h1 class=\"mat-display-3\"> <span class=\"noMobile\">Painel de </span>Trocas </h1>\n\t<mat-tab-group color=\"accent\">\n\n\t\t<mat-tab *ngFor=\"let cardapio of cardapios\" [label]=\"cardapio.nome_dia_da_semana\">\n\n\t\t\t<mat-card class=\"dia-semana\">\n\t\t\t\t<mat-accordion>\n\t\t\t\t  <mat-expansion-panel>\n\t\t\t\t    <mat-expansion-panel-header>\n\t\t\t\t      <mat-panel-title>\n\t\t\t\t        <strong>{{ cardapio.opcao1 }}</strong>\n\t\t\t\t      </mat-panel-title>\n\t\t\t\t    </mat-expansion-panel-header>\n\t\t\t\t    <mat-list role=\"list\">\n\t\t\t\t      <div *ngFor=\"let troca of trocas\" >\n\t\t\t\t      \t<mat-list-item role=\"listitem\" *ngIf=\"filtrar(cardapio, troca, cardapio.opcao1)\">\n\t\t\t\t\t  \t\t{{ troca.user.nome }}\n\t\t\t\t\t    </mat-list-item>\n\t\t\t\t      </div>\n\t\t\t\t\t</mat-list>\n\t\t\t\t  </mat-expansion-panel>\n\t\t\t\t  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n\t\t\t\t                       (closed)=\"panelOpenState = false\">\n\t\t\t\t    <mat-expansion-panel-header>\n\t\t\t\t      <mat-panel-title>\n\t\t\t\t        <strong>{{ cardapio.opcao2 }}</strong>\n\t\t\t\t      </mat-panel-title>\n\t\t\t\t    </mat-expansion-panel-header>\n\t\t\t\t    \t<mat-list role=\"list\">\n\t\t\t\t\t      <div *ngFor=\"let troca of trocas\" >\n\t\t\t\t\t      \t<mat-list-item role=\"listitem\" *ngIf=\"filtrar(cardapio, troca, cardapio.opcao2)\">\n\t\t\t\t\t\t  \t\t{{ troca.user.nome }}\n\t\t\t\t\t\t    </mat-list-item>\n\t\t\t\t\t      </div>\n\t\t\t\t\t\t</mat-list>\n\t\t\t\t  </mat-expansion-panel>\n\t\t\t\t  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n\t\t\t\t                       (closed)=\"panelOpenState = false\">\n\t\t\t\t    <mat-expansion-panel-header>\n\t\t\t\t      <mat-panel-title>\n\t\t\t\t        <strong>Desistiu</strong>\n\t\t\t\t      </mat-panel-title>\n\t\t\t\t    </mat-expansion-panel-header>\n\t\t\t\t    \t<mat-list role=\"list\">\n\t\t\t\t\t      <div *ngFor=\"let troca of trocas\" >\n\t\t\t\t\t      \t<mat-list-item role=\"listitem\" *ngIf=\"filtrar(cardapio, troca, 'desistiu')\">\n\t\t\t\t\t\t  \t\t{{ troca.user.nome }}\n\t\t\t\t\t\t    </mat-list-item>\n\t\t\t\t\t      </div>\n\t\t\t\t\t\t</mat-list>\n\t\t\t\t  </mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\t\t\t</mat-card>\n\t\t\t\n\t\t</mat-tab>\n\t\t\n\t</mat-tab-group>\n</article>"

/***/ }),

/***/ "./src/app/components/adm/trocas/trocas.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/adm/trocas/trocas.component.ts ***!
  \***********************************************************/
/*! exports provided: TrocasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrocasComponent", function() { return TrocasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cardapio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/cardapio.service */ "./src/app/services/cardapio.service.ts");
/* harmony import */ var _services_troca_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/troca.service */ "./src/app/services/troca.service.ts");




var TrocasComponent = /** @class */ (function () {
    function TrocasComponent(cardapioS, trocaS) {
        this.cardapioS = cardapioS;
        this.trocaS = trocaS;
        this.cardapios = {};
        this.trocas = {};
        this.dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
    }
    TrocasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var retornoCardapios = this.cardapioS.listar();
        retornoCardapios.subscribe(function (res) {
            _this.cardapios = res;
            _this.cardapios = _this.cardapios.map(function (cardapio) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, cardapio, { nome_dia_da_semana: _this.dias[new Date(cardapio.data).getDay()] })); });
            console.log(_this.cardapios);
        }, function (erro) {
            console.log(erro);
        });
        var retornoTrocas = this.trocaS.listarTodos();
        retornoTrocas.subscribe(function (res) {
            _this.trocas = res;
            console.log(_this.trocas);
        }, function (erro) {
            console.log(erro);
        });
    };
    TrocasComponent.prototype.filtrar = function (cardapio, troca, opcao) {
        if (troca.cardapio._id == cardapio._id) {
            if (troca.pratoPrincipal == opcao) {
                return true;
            }
        }
        return false;
    };
    TrocasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trocas',
            template: __webpack_require__(/*! ./trocas.component.html */ "./src/app/components/adm/trocas/trocas.component.html"),
            styles: [__webpack_require__(/*! ./trocas.component.css */ "./src/app/components/adm/trocas/trocas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cardapio_service__WEBPACK_IMPORTED_MODULE_2__["CardapioService"],
            _services_troca_service__WEBPACK_IMPORTED_MODULE_3__["TrocaService"]])
    ], TrocasComponent);
    return TrocasComponent;
}());



/***/ }),

/***/ "./src/app/components/auth-in/auth-in/auth-in.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/auth-in/auth-in/auth-in.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC1pbi9hdXRoLWluL2F1dGgtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/auth-in/auth-in/auth-in.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/auth-in/auth-in/auth-in.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"login\">\n   <mat-tab-group color=\"accent\">\n      <mat-tab label=\"Entrar\">\n          <mat-card class=\"card-login\">\n            <form id=\"formlogin\">\n              <mat-form-field appearance=\"outline\" color=\"accent\" >\n                <mat-label>Usuário</mat-label>\n                <input name=\"user\" matInput placeholder=\"login123\" required  [(ngModel)]=\"usuario.user\">\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" color=\"accent\"  >\n                <mat-label>Senha</mat-label>\n                <input name=\"senha\" matInput type=\"password\" required placeholder=\"*****\" [(ngModel)]=\"usuario.senha\">\n              </mat-form-field>\n              <button mat-flat-button color=\"accent\" (click)=\"login()\"><strong>Entrar</strong></button>\n            </form>\n          </mat-card>  \n      </mat-tab>\n      <mat-tab label=\"Cadastrar\"> \n        <mat-card class=\"card-login\">\n          <form id=\"singin\">\n              <mat-form-field appearance=\"outline\" color=\"accent\" >\n                <mat-label>Usuário</mat-label>\n                <input name=\"user\" matInput placeholder=\"1234\" required [(ngModel)]=\"usuario.user\">\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" color=\"accent\" >\n                <mat-label>Nome</mat-label>\n                <input name=\"nome\" matInput placeholder=\"Mario\" required [(ngModel)]=\"usuario.nome\"  >\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" color=\"accent\" >\n                <mat-label>Email</mat-label>\n                <input name=\"email\" matInput placeholder=\"mario@smn.com.br\" required [(ngModel)]=\"usuario.email\">\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" color=\"accent\"  >\n                <mat-label>Senha</mat-label>\n                <input name=\"senha\" matInput type=\"password\" required=\"\" placeholder=\"*****\" [(ngModel)]=\"usuario.senha\">\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" color=\"accent\"  >\n                <mat-label>Confirme a senha</mat-label>\n                <input name=\"confirma\" matInput type=\"password\" required=\"\" placeholder=\"*****\" [(ngModel)]=\"usuario.confirma\">\n              </mat-form-field>\n              <button mat-flat-button color=\"accent\" (click)=\"singin()\"><strong>Cadastrar</strong></button>\n            </form>\n        </mat-card>\n      </mat-tab>\n    </mat-tab-group>\n </div>\n"

/***/ }),

/***/ "./src/app/components/auth-in/auth-in/auth-in.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/auth-in/auth-in/auth-in.component.ts ***!
  \*****************************************************************/
/*! exports provided: AuthInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInComponent", function() { return AuthInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/progress.service */ "./src/app/services/progress.service.ts");






var AuthInComponent = /** @class */ (function () {
    function AuthInComponent(serv, snack, router, progress) {
        this.serv = serv;
        this.snack = snack;
        this.router = router;
        this.progress = progress;
        this.usuario = {};
    }
    AuthInComponent.prototype.ngOnInit = function () {
    };
    AuthInComponent.prototype.preenchido = function (value) {
        if (value != '' && value != null) {
            return true;
        }
        return false;
    };
    AuthInComponent.prototype.isEmail = function (value) {
        if (!/@/g.test(value)) {
            return false;
        }
        return true;
    };
    ;
    AuthInComponent.prototype.validaLogin = function () {
        if (this.preenchido(this.usuario.user)) {
            if (this.preenchido(this.usuario.senha)) {
                this.snack.open('Logando... ;)', 'Fechar', { duration: 3000 });
                return true;
            }
            this.snack.open('Você não preencheu a senha :(', 'Fechar', { duration: 3000 });
            return false;
        }
        this.snack.open('Você não preencheu seu usuario :(', 'Fechar', { duration: 3000 });
        return false;
    };
    AuthInComponent.prototype.validaCadastro = function () {
        if (this.preenchido(this.usuario.user)) {
            if (this.preenchido(this.usuario.nome)) {
                if (this.preenchido(this.usuario.senha)) {
                    if (this.preenchido(this.usuario.user)) {
                        if (this.isEmail(this.usuario.email)) {
                            if (this.preenchido(this.usuario.senha)) {
                                if (this.preenchido(this.usuario.confirma) &&
                                    this.usuario.confirma == this.usuario.senha) {
                                    this.snack.open('Cadastrando... :)', 'Fechar', { duration: 3000 });
                                    return true;
                                }
                                this.snack.open('Confirme a senha por favor ;)', 'Fechar', { duration: 3000 });
                                return false;
                            }
                            this.snack.open('Você não ficará seguro sem senha :(', 'Fechar', { duration: 3000 });
                            return false;
                        }
                        this.snack.open('Coloque um email valido ;)', 'Fechar', { duration: 3000 });
                        return false;
                    }
                    this.snack.open('Você não preencheu o email :(', 'Fechar', { duration: 3000 });
                    return false;
                }
                this.snack.open('Você não preencheu a senha :(', 'Fechar', { duration: 3000 });
                return false;
            }
            this.snack.open('Hey qual seu nome???', 'Fechar', { duration: 3000 });
            return false;
        }
        this.snack.open('Você não preencheu seu usuario :(', 'Fechar', { duration: 3000 });
        return false;
    };
    AuthInComponent.prototype.login = function () {
        var _this = this;
        if (this.validaLogin()) {
            this.progress.onProgress();
            var retorno = void 0;
            retorno = this.serv.logar(this.usuario);
            retorno.subscribe(function (res) {
                _this.usuario = res;
                _this.progress.offProgress();
                _this.snack.open('Logado com sucesso ' + _this.usuario.nome, 'Fechar', { duration: 3000 });
                _this.serv.validar(true, _this.usuario);
                _this.progress.offProgress();
                _this.router.navigate(['cardapio']);
            }, function (erro) {
                _this.progress.offProgress();
                _this.snack.open('Erro tente de novo mais tarde', 'Fechar', { duration: 3000 });
                console.error(erro);
                _this.usuario.senha = "";
            });
        }
    };
    AuthInComponent.prototype.singin = function () {
        var _this = this;
        if (this.validaCadastro()) {
            this.progress.onProgress();
            var retorno = this.serv.cadastrar(this.usuario);
            retorno.subscribe(function (res) {
                _this.progress.offProgress();
                _this.snack.open('Agora você esta cadastrado :)' + _this.usuario.nome, 'Fechar', { duration: 3000 });
                _this.login();
            }, function (erro) {
                if (erro.status == 201) {
                    _this.progress.offProgress();
                    _this.snack.open('Agora você esta cadastrado :)' + _this.usuario.nome, 'Fechar', { duration: 3000 });
                    _this.login();
                }
                else {
                    _this.progress.offProgress();
                    _this.snack.open('Erro tente de novo mais tarde :(', 'Fechar', { duration: 3000 });
                }
            });
        }
    };
    AuthInComponent.prototype.getUsuario = function () {
        return this.usuario;
    };
    AuthInComponent.prototype.logOut = function () {
        this.usuario = {};
        this.serv.validar(false, this.usuario);
        this.router.navigate(['']);
    };
    AuthInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-in',
            template: __webpack_require__(/*! ./auth-in.component.html */ "./src/app/components/auth-in/auth-in/auth-in.component.html"),
            styles: [__webpack_require__(/*! ./auth-in.component.css */ "./src/app/components/auth-in/auth-in/auth-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_progress_service__WEBPACK_IMPORTED_MODULE_5__["ProgressService"]])
    ], AuthInComponent);
    return AuthInComponent;
}());



/***/ }),

/***/ "./src/app/components/cardapio/cardapio.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/cardapio/cardapio.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cardapio{\n\tmargin: 0 auto;\n}\n\n.tab-cardapio{\n\tmargin: 10px auto;\n\ttext-align: center;\n\tline-height: 35px;\n\tfont-size: 18px;\n\tpadding: 2px;\n}\n\n.tab-cardapio th{ background-color: #10c853; padding: 0 10px; }\n\n.tab-cardapio td{ background-color: #757575; padding: 0 10px; }\n\n.mat-tab-group {width: 100%;}\n\n.mat-display-3{margin-bottom: 0!important;}\n\nbutton{ margin: 10px 0 0 auto!important; width: 120px;}\n\n.btn-wrap{\n\tdisplay: flex;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkYXBpby9jYXJkYXBpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLFlBQVk7QUFDYjs7QUFDQSxrQkFBa0IseUJBQXlCLEVBQUUsZUFBZSxFQUFFOztBQUM5RCxrQkFBa0IseUJBQXlCLEVBQUUsZUFBZSxFQUFFOztBQUM5RCxnQkFBZ0IsV0FBVyxDQUFDOztBQUM1QixlQUFlLDBCQUEwQixDQUFDOztBQUMxQyxRQUFRLCtCQUErQixFQUFFLFlBQVksQ0FBQzs7QUFFdEQ7Q0FDQyxhQUFhO0lBQ1Ysc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkYXBpby9jYXJkYXBpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmRhcGlve1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuLnRhYi1jYXJkYXBpb3tcblx0bWFyZ2luOiAxMHB4IGF1dG87XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bGluZS1oZWlnaHQ6IDM1cHg7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0cGFkZGluZzogMnB4O1xufVxuLnRhYi1jYXJkYXBpbyB0aHsgYmFja2dyb3VuZC1jb2xvcjogIzEwYzg1MzsgcGFkZGluZzogMCAxMHB4OyB9XG4udGFiLWNhcmRhcGlvIHRkeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1OyBwYWRkaW5nOiAwIDEwcHg7IH1cbi5tYXQtdGFiLWdyb3VwIHt3aWR0aDogMTAwJTt9XG4ubWF0LWRpc3BsYXktM3ttYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDt9XG5idXR0b257IG1hcmdpbjogMTBweCAwIDAgYXV0byFpbXBvcnRhbnQ7IHdpZHRoOiAxMjBweDt9XG5cbi5idG4td3JhcHtcblx0ZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/cardapio/cardapio.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/cardapio/cardapio.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"cardapio\">\n\t\n\t<h1 class=\"mat-display-3\"> Cardápio </h1>\n\n\t<mat-tab-group color=\"accent\">\n\n\t\t<mat-tab *ngFor=\"let cardapio of cardapios\" [label]=\"cardapio.nome_dia_da_semana\">\n\n\t\t\t<mat-card class=\"dia-semana\">\n\t\t\t\t<table class=\"tab-cardapio\">\n\t\t\t\t\t<tr><th>Prato Principal</th><td>\n\t\t\t\t\t\t<mat-form-field color=\"accent\">\n\t\t\t\t\t\t    <mat-select [(ngModel)]=\"cardapio.escolha\">\n\t\t\t\t\t\t      <mat-option value=\"{{ cardapio.pratoPrincipal }}\" selected=\"selected\">\n\t\t\t\t\t\t        {{ cardapio.pratoPrincipal }}\n\t\t\t\t\t\t      </mat-option>\n\t\t\t\t\t\t      <mat-option value=\"{{ cardapio.opcao1 }}\">\n\t\t\t\t\t\t        {{ cardapio.opcao1 }}\n\t\t\t\t\t\t      </mat-option>\n\t\t\t\t\t\t      <mat-option value=\"{{ cardapio.opcao2 }}\">\n\t\t\t\t\t\t        {{ cardapio.opcao2 }}\n\t\t\t\t\t\t      </mat-option>\n\t\t\t\t\t\t    </mat-select>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</td></tr>\n\t\t\t\t\t<tr><th>Guarnição 1</th><td>{{ cardapio.guarnicao1 }}</td></tr>\n\t\t\t\t\t<tr><th>Guarnição 2</th><td>{{ cardapio.guarnicao2 }}</td></tr>\n\t\t\t\t\t<tr><th>Salada</th><td>{{ cardapio.salada }}</td></tr>\n\t\t\t\t\t<tr><th>Sobremesa</th><td>{{ cardapio.sobremesa }}</td></tr>\n\t\t\t\t\t<tr><th>Data</th><td>{{ cardapio.data }}</td></tr>\n\t\t\t\t</table>\n\t\t\t\t<section class=\"btn-wrap\">\n\t\t\t\t\t<mat-checkbox [(ngModel)]=\"cardapio.check\">Não vou almoçar aqui!</mat-checkbox>\n\t\t\t\t\t<button mat-flat-button color=\"accent\" (click)=\"confirma(cardapio)\"><strong>Confirmar</strong></button>\t\n\t\t\t\t</section>\n\t\t\t\t\n\t\t\t</mat-card>\n\t\t\t\n\t\t</mat-tab>\n\t\t\n\t</mat-tab-group>\n\t\n</div>\n"

/***/ }),

/***/ "./src/app/components/cardapio/cardapio.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/cardapio/cardapio.component.ts ***!
  \***********************************************************/
/*! exports provided: CardapioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardapioComponent", function() { return CardapioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cardapio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cardapio.service */ "./src/app/services/cardapio.service.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _services_troca_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/troca.service */ "./src/app/services/troca.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/progress.service */ "./src/app/services/progress.service.ts");







var CardapioComponent = /** @class */ (function () {
    function CardapioComponent(cardServ, authServ, trocaServ, snack, progress) {
        this.cardServ = cardServ;
        this.authServ = authServ;
        this.trocaServ = trocaServ;
        this.snack = snack;
        this.progress = progress;
        this.cardapios = {};
        this.dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
        this.usuario = this.authServ.getUser();
    }
    CardapioComponent.prototype.ngOnInit = function () {
        this.progress.onProgress();
        this.listar();
    };
    CardapioComponent.prototype.listar = function () {
        var _this = this;
        var retorno;
        retorno = this.cardServ.listar();
        retorno.subscribe(function (res) {
            _this.cardapios = res;
            console.log(_this.cardapios[0].data);
            _this.cardapios = _this.cardapios.map(function (cardapio) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, cardapio, { nome_dia_da_semana: _this.dias[new Date(cardapio.data).getDay()], dia_da_semana: new Date(cardapio.data).getDay(), data: new Date(cardapio.data).toLocaleDateString(), escolha: cardapio.pratoPrincipal, check: false })); }).sort(function (a, b) {
                if (a.dia_da_semana > b.dia_da_semana) {
                    return 1;
                }
                if (a.dia_da_semana < b.dia_da_semana) {
                    return -1;
                }
                return 0;
            });
            console.log(_this.cardapios[0].data);
            _this.progress.offProgress();
        }, function (erro) {
            _this.snack.open('Erro encontrado ' + erro, 'Fechar', { duration: 3000 });
            _this.progress.offProgress();
        });
    };
    CardapioComponent.prototype.confirma = function (cardapio) {
        var _this = this;
        this.progress.onProgress();
        var user = {
            user: this.usuario._id
        };
        var retorno;
        var retornoTrocas = this.trocaServ.listar(user);
        console.log('chamada da função');
        retornoTrocas.subscribe(function (res) {
            console.log('res ' + res);
            if (cardapio.check == true) {
                var troca = {
                    user: _this.usuario._id,
                    cardapio: cardapio._id,
                    pratoPrincipal: "desistiu"
                };
                retorno = _this.trocaServ.trocar(troca, res);
            }
            else if (cardapio.escolha != cardapio.pratoPrincipal) {
                var troca = {
                    user: _this.usuario._id,
                    cardapio: cardapio._id,
                    pratoPrincipal: cardapio.escolha
                };
                retorno = _this.trocaServ.trocar(troca, res);
            }
            else {
                var troca = {
                    user: _this.usuario._id,
                    cardapio: cardapio._id,
                    pratoPrincipal: cardapio.pratoPrincipal
                };
                retorno = _this.trocaServ.trocar(troca, res);
            }
            retorno.subscribe(function (res) {
                console.log(cardapio.nome_dia_da_semana + ' atualisado');
                _this.snack.open('Sucesso ao atualizar ' + cardapio.nome_dia_da_semana, 'Fechar', { duration: 3000 });
                _this.progress.offProgress();
            }, function (erro) {
                console.log(erro);
                if (erro.status == 201) {
                    _this.snack.open('Sucesso ao atualizar ' + cardapio.nome_dia_da_semana, 'Fechar', { duration: 3000 });
                    _this.progress.offProgress();
                }
                else {
                    _this.snack.open('Erro ao atualizar ' + cardapio.nome_dia_da_semana, 'Fechar', { duration: 3000 });
                    _this.progress.offProgress();
                }
            });
        }, function (erro) {
            console.log('erro no get trocas ' + erro);
            _this.progress.offProgress();
        });
        console.log(this.cardapios);
    };
    CardapioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cardapio',
            template: __webpack_require__(/*! ./cardapio.component.html */ "./src/app/components/cardapio/cardapio.component.html"),
            styles: [__webpack_require__(/*! ./cardapio.component.css */ "./src/app/components/cardapio/cardapio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cardapio_service__WEBPACK_IMPORTED_MODULE_2__["CardapioService"],
            _services_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthServiceService"],
            _services_troca_service__WEBPACK_IMPORTED_MODULE_4__["TrocaService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_progress_service__WEBPACK_IMPORTED_MODULE_6__["ProgressService"]])
    ], CardapioComponent);
    return CardapioComponent;
}());



/***/ }),

/***/ "./src/app/components/feedback/feedback.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/feedback/feedback.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-flat-button{ width: 200px; margin: 10px 0 0 auto; padding: 10px 0}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixZQUFZLEVBQUUscUJBQXFCLEVBQUUsZUFBZSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZmxhdC1idXR0b257IHdpZHRoOiAyMDBweDsgbWFyZ2luOiAxMHB4IDAgMCBhdXRvOyBwYWRkaW5nOiAxMHB4IDB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/feedback/feedback.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/feedback/feedback.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"feedback\">\n\t<h1 class=\"mat-display-3\"> Sugestões </h1>\n\t<mat-card>\n\t\t<mat-form-field color=\"accent\" required>\n\t\t  <mat-label>Tipo de sugestão</mat-label>\n\t\t  <mat-select [(ngModel)]=\"sugestao.tipo\">\n\t\t    <mat-option value=\"bug\">\n\t\t    \tBugs\n\t\t    </mat-option>\n\t\t    <mat-option value=\"sugestao\">\n\t\t    \tSugestão\n\t\t    </mat-option>\n\t\t  </mat-select>\n\t\t</mat-form-field>\n\t\t<mat-form-field color=\"accent\" required>\n\t\t    <textarea [(ngModel)]=\"sugestao.mensagem\" matInput placeholder=\"Nos diga como podemos melhorar\"></textarea>\n\t\t    <mat-hint align=\"end\">Esta gostando? Nos diga também.</mat-hint>\n\t\t</mat-form-field>\n\t</mat-card>\n\t<button mat-flat-button color=\"accent\" (click)=\"enviar()\"><strong>Enviar</strong></button>\n\n</div>"

/***/ }),

/***/ "./src/app/components/feedback/feedback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/feedback/feedback.component.ts ***!
  \***********************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_progress_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/progress.service */ "./src/app/services/progress.service.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/auth-service.service */ "./src/app/services/auth-service.service.ts");






var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(feedServ, snack, progress, auth) {
        this.feedServ = feedServ;
        this.snack = snack;
        this.progress = progress;
        this.auth = auth;
        this.sugestao = {};
        this.usuario = {};
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.usuario = this.auth.getUser();
    };
    FeedbackComponent.prototype.validar = function (campo) {
        if (campo == undefined || campo == "") {
            return false;
        }
        return true;
    };
    FeedbackComponent.prototype.enviar = function () {
        var _this = this;
        if (this.validar(this.sugestao.tipo)) {
            if (this.validar(this.sugestao.mensagem)) {
                this.progress.onProgress();
                this.sugestao.user = this.usuario._id;
                var retorno = this.feedServ.salvar(this.sugestao);
                retorno.subscribe(function (res) {
                    _this.snack.open('Agredecemos seu feedback ;) ' + _this.usuario.nome, 'Fechar', { duration: 3000 });
                    _this.progress.offProgress();
                }, function (erro) {
                    if (erro.status == 201) {
                        _this.snack.open('Agredecemos seu feedback ' + _this.usuario.nome, 'Fechar', { duration: 3000 });
                        _this.progress.offProgress();
                    }
                    else {
                        _this.snack.open('Aconteceu algum erro com a conexão :(', 'Fechar', { duration: 3000 });
                        _this.progress.offProgress();
                    }
                });
                this.sugestao = {};
            }
            else {
                this.snack.open('Por favor escreva algo para nós', 'Fechar', { duration: 3000 });
            }
        }
        else {
            this.snack.open('Por favor selecione o tipo', 'Fechar', { duration: 3000 });
        }
    };
    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/components/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/components/feedback/feedback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_progress_service__WEBPACK_IMPORTED_MODULE_4__["ProgressService"],
            _services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAutenticado()) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/imadmin.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/imadmin.guard.ts ***!
  \*****************************************/
/*! exports provided: ImadminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImadminGuard", function() { return ImadminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ImadminGuard = /** @class */ (function () {
    function ImadminGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    ImadminGuard.prototype.canActivate = function (route, state) {
        console.log(this.auth.getUser() + " " + this.auth.isAutenticado());
        if (this.auth.isAutenticado()) {
            var user = this.auth.getUser();
            console.log(user.admin);
            if (user.admin == true) {
                return true;
            }
            else {
                this.router.navigate(['cardapio']);
                return false;
            }
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    ImadminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]])
    ], ImadminGuard);
    return ImadminGuard;
}());



/***/ }),

/***/ "./src/app/services/auth-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(http) {
        this.http = http;
        this.mostrarMenuEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.usuario = {};
        this.autenticado = false;
    }
    AuthServiceService.prototype.logar = function (usuario) {
        return this.http.post('http://cardapio-smn.herokuapp.com/usuario/' + usuario.user, usuario);
    };
    AuthServiceService.prototype.cadastrar = function (usuario) {
        return this.http.post('http://cardapio-smn.herokuapp.com/usuario/', usuario);
    };
    AuthServiceService.prototype.validar = function (logado, usuario) {
        this.autenticado = logado;
        if (this.autenticado == true) {
            this.usuario = usuario;
            this.mostrarMenuEmitter.emit(true);
        }
        else {
            this.mostrarMenuEmitter.emit(false);
        }
    };
    AuthServiceService.prototype.isAutenticado = function () {
        return this.autenticado;
    };
    AuthServiceService.prototype.getUser = function () {
        return this.usuario;
    };
    AuthServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthServiceService);
    return AuthServiceService;
}());



/***/ }),

/***/ "./src/app/services/cardapio.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/cardapio.service.ts ***!
  \**********************************************/
/*! exports provided: CardapioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardapioService", function() { return CardapioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CardapioService = /** @class */ (function () {
    function CardapioService(http) {
        this.http = http;
    }
    CardapioService.prototype.listar = function () {
        return this.http.get('http://cardapio-smn.herokuapp.com/cardapio/');
    };
    CardapioService.prototype.alterar = function (cardapio) {
        console.log(cardapio);
        return this.http.put('http://cardapio-smn.herokuapp.com/cardapio/', cardapio);
    };
    CardapioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CardapioService);
    return CardapioService;
}());



/***/ }),

/***/ "./src/app/services/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FeedbackService = /** @class */ (function () {
    function FeedbackService(http) {
        this.http = http;
    }
    FeedbackService.prototype.salvar = function (sugestao) {
        return this.http.post('http://cardapio-smn.herokuapp.com/feedback', sugestao);
    };
    FeedbackService.prototype.listar = function () {
        return this.http.get('http://cardapio-smn.herokuapp.com/feedback');
    };
    FeedbackService.prototype.deletar = function (id) {
        return this.http.delete('http://cardapio-smn.herokuapp.com/feedback' + id);
    };
    FeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/services/progress.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/progress.service.ts ***!
  \**********************************************/
/*! exports provided: ProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressService", function() { return ProgressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressService = /** @class */ (function () {
    function ProgressService() {
        this.progressEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProgressService.prototype.offProgress = function () {
        this.progressEmitter.emit(false);
    };
    ProgressService.prototype.onProgress = function () {
        this.progressEmitter.emit(true);
    };
    ProgressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressService);
    return ProgressService;
}());



/***/ }),

/***/ "./src/app/services/troca.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/troca.service.ts ***!
  \*******************************************/
/*! exports provided: TrocaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrocaService", function() { return TrocaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TrocaService = /** @class */ (function () {
    function TrocaService(http) {
        this.http = http;
    }
    TrocaService.prototype.criar = function (troca) {
        console.log(troca);
        return this.http.post('http://cardapio-smn.herokuapp.com/troca/', troca);
    };
    TrocaService.prototype.atualizar = function (troca) {
        console.log('atualizar');
        return this.http.put('http://cardapio-smn.herokuapp.com/troca/', troca);
    };
    TrocaService.prototype.listar = function (user) {
        return this.http.post('http://cardapio-smn.herokuapp.com/troca/user', user);
        console.log('listar');
    };
    TrocaService.prototype.listarTodos = function () {
        return this.http.get('http://cardapio-smn.herokuapp.com/troca/');
    };
    TrocaService.prototype.trocar = function (troca, trocas) {
        var check = false;
        console.log('trocar ' + trocas);
        var pedidos = trocas;
        console.log(pedidos);
        pedidos.map(function (pedido) {
            if (pedido.cardapio == troca.cardapio) {
                console.log('Atualizar');
                check = true;
                troca = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, troca, { _id: pedido._id });
            }
        });
        if (check == false) {
            console.log('Criar');
            return this.criar(troca);
        }
        else {
            console.log(troca);
            return this.atualizar(troca);
        }
    };
    TrocaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TrocaService);
    return TrocaService;
}());



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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gabriel/NodeJs/front-smn/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map