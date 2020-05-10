(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Inbox\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  \r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">\r\n        Inbox\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-list>\r\n    <app-message *ngFor=\"let message of messages\" [message]=\"message\"></app-message>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item *ngIf=\"message\" [routerLink]=\"'/message/' + message._id\" [detail]=\"false\">\r\n  <div slot=\"start\" [class]=\"!message.read ? 'dot dot-unread' : 'dot'\"></div>\r\n  <ion-label class=\"ion-text-wrap\">\r\n    <h2>\r\n      {{ message.fromName }}\r\n      <span class=\"date\">\r\n        <ion-note>{{ message.date_message }}</ion-note>\r\n        <ion-icon name=\"chevron-forward\" size=\"small\" *ngIf=\"isIos()\"></ion-icon>\r\n      </span>\r\n    </h2>\r\n    <h3>{{ message.subject }}</h3>\r\n    <p>\r\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </p>\r\n  </ion-label>\r\n  </ion-item>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _message_message_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message/message.module */ "./src/app/message/message.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _message_message_module__WEBPACK_IMPORTED_MODULE_7__["MessageComponentModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



let HomePage = class HomePage {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.getMessages();
    }
    refresh(ev) {
        this.getMessages();
    }
    getMessages() {
        this.data.getMessages().subscribe((res) => this.messages = res);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], HomePage);



/***/ }),

/***/ "./src/app/message/message.component.scss":
/*!************************************************!*\
  !*** ./src/app/message/message.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\nion-label {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\nion-item h2 {\n  font-weight: 600;\n  margin: 0;\n}\n\nion-item p {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 95%;\n}\n\nion-item .date {\n  float: right;\n  align-items: center;\n  display: flex;\n}\n\nion-item ion-icon {\n  color: #c9c9ca;\n}\n\nion-item ion-note {\n  font-size: 15px;\n  margin-right: 8px;\n  font-weight: normal;\n}\n\nion-item ion-note.md {\n  margin-right: 14px;\n}\n\n.dot {\n  display: block;\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  align-self: start;\n  margin: 16px 10px 16px 16px;\n}\n\n.dot-unread {\n  background: var(--ion-color-primary);\n}\n\nion-footer ion-title {\n  font-size: 11px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9DOlxcR0FSQUdFXFxwb2NnYXJhZ2VcXFVJXFxwb2MtdWkvc3JjXFxhcHBcXG1lc3NhZ2VcXG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIGgyIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW9uLWl0ZW0gcCB7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIC5kYXRlIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5pb24taXRlbSBpb24taWNvbiB7XHJcbiAgY29sb3I6ICNjOWM5Y2E7XHJcbn1cclxuXHJcbmlvbi1pdGVtIGlvbi1ub3RlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLW5vdGUubWQge1xyXG4gIG1hcmdpbi1yaWdodDogMTRweDtcclxufVxyXG5cclxuLmRvdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbGlnbi1zZWxmOiBzdGFydDtcclxuICBtYXJnaW46IDE2cHggMTBweCAxNnB4IDE2cHg7XHJcbn1cclxuXHJcbi5kb3QtdW5yZWFkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIgaW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufSIsImlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5pb24taXRlbSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWl0ZW0gcCB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogOTUlO1xufVxuXG5pb24taXRlbSAuZGF0ZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogI2M5YzljYTtcbn1cblxuaW9uLWl0ZW0gaW9uLW5vdGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5pb24taXRlbSBpb24tbm90ZS5tZCB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbn1cblxuLmRvdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBtYXJnaW46IDE2cHggMTBweCAxNnB4IDE2cHg7XG59XG5cbi5kb3QtdW5yZWFkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tZm9vdGVyIGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageComponent = class MessageComponent {
    constructor() { }
    ngOnInit() { }
    isIos() {
        const win = window;
        return win && win.Ionic && win.Ionic.mode === 'ios';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MessageComponent.prototype, "message", void 0);
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.component.scss */ "./src/app/message/message.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MessageComponent);



/***/ }),

/***/ "./src/app/message/message.module.ts":
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/*! exports provided: MessageComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponentModule", function() { return MessageComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.component */ "./src/app/message/message.component.ts");







let MessageComponentModule = class MessageComponentModule {
};
MessageComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        declarations: [_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"]],
        exports: [_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"]]
    })
], MessageComponentModule);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map