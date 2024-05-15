"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductB = /** @class */ (function () {
    function ProductB(id, name, price) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }
    Object.defineProperty(ProductB.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductB.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductB.prototype, "price", {
        get: function () {
            return this._price * 2;
        },
        enumerable: false,
        configurable: true
    });
    ProductB.prototype.changeName = function (name) {
        this._name = name;
        this.validate();
    };
    ProductB.prototype.changePrice = function (price) {
        this._price = price;
        this.validate();
    };
    ProductB.prototype.validate = function () {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
        if (this._price < 0) {
            throw new Error("Price must be greater than zero");
        }
        return true;
    };
    return ProductB;
}());
exports.default = ProductB;
