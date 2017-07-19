"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var greeter_1 = require("./entities/greeter");
var rectangle_1 = require("./entities/rectangle");
var greeter = new greeter_1.default("world!");
var rectangle = new rectangle_1.default(25, 10);
$("body").html("\n  <h1>" + greeter.greet() + "</h1><dl>\n  <dt>Height:</dt><dd>" + rectangle.height + "</dd>\n  <dt>Width:</dt><dd>" + rectangle.width + "</dd>\n  <dt>Area:</dt><dd>" + rectangle.area() + "</dd>\n  <dt>Circumference:</dt><dd>" + rectangle.circumference() + "</dd>\n  ");
