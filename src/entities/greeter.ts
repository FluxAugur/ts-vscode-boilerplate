export default class Greeter implements GreeterInterface {
  public greeting: string;
  constructor(greeting: string) {
    this.greeting = greeting;
  }
  public greet() {
    return `Hello, ${this.greeting}`;
  }
}
