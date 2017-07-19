import * as $ from "jquery";
import Greeter from "./entities/greeter";
import Rectangle from "./entities/rectangle";

let greeter = new Greeter("world!");
let rectangle = new Rectangle(25, 10);
$("body").html(`
  <h1>${greeter.greet()}</h1><dl>
  <dt>Height:</dt><dd>${rectangle.height}</dd>
  <dt>Width:</dt><dd>${rectangle.width}</dd>
  <dt>Area:</dt><dd>${rectangle.area()}</dd>
  <dt>Circumference:</dt><dd>${rectangle.circumference()}</dd>
  `);
