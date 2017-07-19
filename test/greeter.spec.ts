/// <reference path="../src/interfaces/interfaces.d.ts" />

import { expect } from "chai";
import Greeter from "../src/entities/greeter";

describe("Greeter class", () => {
  it("Should set msg when an instance is created", () => {
    let expected = "world!";
    let greater = new Greeter(expected);
    expect(greater.greeting).eql(expected);
  });

  it("Should greet", () => {
    let greet = "world!";
    let greater = new Greeter(greet);
    let actual = greater.greet();
    let expected = `Hello, ${greet}`;
    expect(actual).eql(expected);
  });
});
