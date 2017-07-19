"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var rectangle_1 = require("../src/entities/rectangle");
chai.should();
describe("Rectangle class", function () {
    var rectangle;
    beforeEach(function () {
        rectangle = new rectangle_1.default(10, 20);
    });
    describe("Height field", function () {
        it("Should set height when an instance is created", function () {
            rectangle.height.should.equal(10);
        });
        it("Should allow height to be changed", function () {
            rectangle.height = 30;
            rectangle.height.should.equal(30);
        });
    });
    describe("Width field", function () {
        it("Should set width when an instance is created", function () {
            rectangle.width.should.equal(20);
        });
        it("Should allow width to be changed", function () {
            rectangle.width = 30;
            rectangle.width.should.equal(30);
        });
    });
    describe("Area method", function () {
        it("Should return the area", function () {
            rectangle.area().should.equal(200);
        });
    });
    describe("Circumference method", function () {
        it("Should return the circumference", function () {
            rectangle.circumference().should.equal(60);
        });
    });
});
