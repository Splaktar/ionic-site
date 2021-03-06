"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key), void 0;
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NavPage = (function () {
    function NavPage(nav) {
        _classCallCheck(this, NavPage);

        this.nav = nav;
    }

    _createClass(NavPage, [{
        key: "push",
        value: function push() {
            this.nav.push(NavSecondPage);
        }
    }]);

    return NavPage;
})();
exports.NavPage = NavPage;
exports.NavPage = NavPage = __decorate([(0, _ionicIonic.IonicView)({
    template: "\n  <ion-navbar *navbar><ion-title>Navigation</ion-title></ion-navbar>\n\n  <ion-content padding>\n    <h2>Navigation</h2>\n    <p>\n      Navigation makes your app feel like, well, an app!\n    </p>\n    <p>\n      With the navigation features in Ionic, we can navigate to new pages,\n      go back in history (including swipe-to-go-back), and control the stack\n      of pages the user can navigate between.\n    </p>\n    <button (click)=\"push()\">Push</button>\n  </ion-content>\n  "
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _a || Object])], NavPage);
var NavSecondPage = function NavSecondPage(nav) {
    _classCallCheck(this, NavSecondPage);

    this.nav = nav;
};
exports.NavSecondPage = NavSecondPage;
exports.NavSecondPage = NavSecondPage = __decorate([(0, _ionicIonic.IonicView)({
    template: "\n    <ion-navbar *navbar><ion-title>Second Page</ion-title></ion-navbar>\n    <ion-content padding>\n      <button (click)=\"nav.pop()\">Pop</button>\n    </ion-content>\n  "
}), __metadata('design:paramtypes', [typeof (_b = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _b || Object])], NavSecondPage);
var _a, _b;