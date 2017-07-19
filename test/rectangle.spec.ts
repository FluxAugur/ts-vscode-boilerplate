/// <reference types="@types/chai" />
/// <reference path="../src/interfaces/interfaces.d.ts" />

import * as chai from "chai";
import Rectangle from "../src/entities/rectangle";

chai.should();

describe("Rectangle class", () => {
  let rectangle: Rectangle;

  beforeEach(() => {
    rectangle = new Rectangle(10, 20);
  });

  describe("Height field", () => {
    it("Should set height when an instance is created", () => {
      rectangle.height.should.equal(10);
    });

    it("Should allow height to be changed", () => {
      rectangle.height = 30;
      rectangle.height.should.equal(30);
    });
  });

  describe("Width field", () => {
    it("Should set width when an instance is created", () => {
      rectangle.width.should.equal(20);
    });

    it("Should allow width to be changed", () => {
      rectangle.width = 30;
      rectangle.width.should.equal(30);
    });
  });

  describe("Area method", () => {
    it("Should return the area", () => {
      rectangle.area().should.equal(200);
    });
  });

  describe("Circumference method", () => {
    it("Should return the circumference", () => {
      rectangle.circumference().should.equal(60);
    });
  });
});
