class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(shape) {
    switch (shape) {
      case square:
        return square.side * square.side;
        break;

      case rectangle:
        return rectangle.width * rectangle.height;
        break;

      case circle: 
        return (circle.radius * circle.radius) * 3.14;
        break;
      }
    }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));