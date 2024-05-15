"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../entity/product");
var uuid_1 = require("uuid");
var product_b_1 = require("../entity/product-b");
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.create = function (type, name, price) {
        switch (type) {
            case "a":
                return new product_1.default((0, uuid_1.v4)(), name, price);
            case "b":
                return new product_b_1.default((0, uuid_1.v4)(), name, price);
            default:
                throw new Error("Product type not supported");
        }
    };
    return ProductFactory;
}());
exports.default = ProductFactory;
