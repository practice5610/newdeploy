"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_error_1 = tslib_1.__importDefault(require("./app-error"));
class PurchaseError extends app_error_1.default {
    constructor(message, publicMessage, diagnosticsData) {
        super(message, publicMessage, diagnosticsData);
        this.name = 'PurchaseError';
        this.message = message;
        this.data = diagnosticsData;
    }
}
exports.default = PurchaseError;
//# sourceMappingURL=purchase-error.js.map