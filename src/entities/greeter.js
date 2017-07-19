"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
exports.default = Greeter;
