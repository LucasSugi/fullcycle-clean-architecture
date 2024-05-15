"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.changeName = function (name) {
        this._name = name;
        this.validate();
    };
    Product.prototype.changePrice = function (price) {
        this._price = price;
        this.validate();
    };
    Product.prototype.validate = function () {
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
    return Product;
}());
exports.default = Product;
