export default class Rectangle implements RectangleInterface {
  public height: number;
  public width: number;
  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }
  public area() {
    return this.height * this.width;
  }
  public circumference() {
    return 2 * this.height + 2 * this.width;
  }
}
