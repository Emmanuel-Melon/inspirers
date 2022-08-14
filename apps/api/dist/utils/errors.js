"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationError = exports.catchErrors = exports.handleError = exports.NotFoundError = exports.BaseError = void 0;
var BaseError = (function (_super) {
    __extends(BaseError, _super);
    function BaseError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return BaseError;
}(Error));
exports.BaseError = BaseError;
var NotFoundError = (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundError;
}(BaseError));
exports.NotFoundError = NotFoundError;
function handleError(res, statusCode, message) {
    return function (error) {
        return res.status(statusCode).json({ message: message || error.message });
    };
}
exports.handleError = handleError;
function catchErrors(error, _req, res, _next) {
    return res.status(500).json({ message: "Something went wrong" });
}
exports.catchErrors = catchErrors;
var AuthenticationError = (function (_super) {
    __extends(AuthenticationError, _super);
    function AuthenticationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthenticationError;
}(BaseError));
exports.AuthenticationError = AuthenticationError;
