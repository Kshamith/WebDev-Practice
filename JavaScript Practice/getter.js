// Rectangle class with area with Constructor taking width and height.
// Method area() returns the area.
// Add a getter called isSquare that returns true if width and height are equal, otherwise false.

// Task:
/// Create at least 3 rectangles with different sizes.
/// Log their area and whether they are squares.

class Rectangle {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.width * this.height;
  }

  get isSquare() {
    return this.height === this.width;
  }
}

const r1 = new Rectangle(10, 20);
const r2 = new Rectangle(5, 5);
const r3 = new Rectangle(3, 7);

console.log("r1 area:", r1.area(), "isSquare:", r1.isSquare);
console.log("r2 area:", r2.area(), "isSquare:", r2.isSquare);
console.log("r3 area:", r3.area(), "isSquare:", r3.isSquare);
