"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle = (function () {
    function Rectangle(height, width) {
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.area = function () {
        return this.height * this.width;
    };
    Rectangle.prototype.circumference = function () {
        return 2 * this.height + 2 * this.width;
    };
    return Rectangle;
}());
exports.default = Rectangle;
