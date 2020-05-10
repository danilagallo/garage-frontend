(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-message-view-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-message/view-message.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-message/view-message.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-back-button [text]=\"getBackButtonText()\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" *ngIf=\"message\">\r\n  <ion-item>\r\n    <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\r\n    <ion-label class=\"ion-text-wrap\">\r\n      <h2>\r\n        {{ message.fromName }}\r\n        <span class=\"date\">\r\n          <ion-note>{{ message.date_message }}</ion-note>\r\n        </span>\r\n      </h2>\r\n      <h3>To: <ion-note>Me</ion-note></h3>\r\n    </ion-label>\r\n  </ion-item>\r\n  \r\n  <div class=\"ion-padding\">\r\n    <h1>{{ message.subject }}</h1>\r\n    <p>\r\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/view-message/view-message-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-message/view-message-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewMessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMessagePageRoutingModule", function() { return ViewMessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-message.page */ "./src/app/view-message/view-message.page.ts");




const routes = [
    {
        path: '',
        component: _view_message_page__WEBPACK_IMPORTED_MODULE_3__["ViewMessagePage"]
    }
];
let ViewMessagePageRoutingModule = class ViewMessagePageRoutingModule {
};
ViewMessagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewMessagePageRoutingModule);



/***/ }),

/***/ "./src/app/view-message/view-message.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/view-message/view-message.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewMessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMessagePageModule", function() { return ViewMessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _view_message_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-message.page */ "./src/app/view-message/view-message.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _view_message_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-message-routing.module */ "./src/app/view-message/view-message-routing.module.ts");







let ViewMessagePageModule = class ViewMessagePageModule {
};
ViewMessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _view_message_routing_module__WEBPACK_IMPORTED_MODULE_6__["ViewMessagePageRoutingModule"]
        ],
        declarations: [_view_message_page__WEBPACK_IMPORTED_MODULE_4__["ViewMessagePage"]]
    })
], ViewMessagePageModule);



/***/ }),

/***/ "./src/app/view-message/view-message.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/view-message/view-message.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --inner-padding-end: 0;\n  --background: transparent;\n}\n\nion-label {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\nion-item h2 {\n  font-weight: 600;\n}\n\nion-item .date {\n  float: right;\n  align-items: center;\n  display: flex;\n}\n\nion-item ion-icon {\n  font-size: 42px;\n  margin-right: 8px;\n}\n\nion-item ion-note {\n  font-size: 15px;\n  margin-right: 12px;\n  font-weight: normal;\n}\n\nh1 {\n  margin: 0;\n  font-weight: bold;\n  font-size: 22px;\n}\n\np {\n  line-height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1tZXNzYWdlL0M6XFxHQVJBR0VcXHBvY2dhcmFnZVxcVUlcXHBvYy11aS9zcmNcXGFwcFxcdmlldy1tZXNzYWdlXFx2aWV3LW1lc3NhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LW1lc3NhZ2Uvdmlldy1tZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlldy1tZXNzYWdlL3ZpZXctbWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuaW9uLWl0ZW0gaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtIC5kYXRlIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5pb24taXRlbSBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiA0MnB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG5pb24taXRlbSBpb24tbm90ZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxucCB7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn0iLCJpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbmlvbi1pdGVtIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWl0ZW0gLmRhdGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuaW9uLWl0ZW0gaW9uLW5vdGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbnAge1xuICBsaW5lLWhlaWdodDogMjJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/view-message/view-message.page.ts":
/*!***************************************************!*\
  !*** ./src/app/view-message/view-message.page.ts ***!
  \***************************************************/
/*! exports provided: ViewMessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMessagePage", function() { return ViewMessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




let ViewMessagePage = class ViewMessagePage {
    constructor(data, activatedRoute) {
        this.data = data;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.data.getMessageById(id).subscribe((mess) => this.message = mess);
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Inbox' : '';
    }
};
ViewMessagePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ViewMessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-message.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-message/view-message.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-message.page.scss */ "./src/app/view-message/view-message.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ViewMessagePage);



/***/ })

}]);
//# sourceMappingURL=view-message-view-message-module-es2015.js.map