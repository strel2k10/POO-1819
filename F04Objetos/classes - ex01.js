/**
 * This is a class to model a rectangle
 */

class Rectangle {
    constructor(width = 2, height = 1) {
        this.width = width
        this.height = height
        this._color = "#FFFFFF"
    }
    // Property width
    get width() {
        return this._width
    }
    set width(value) {
        this._width = value
    }

      // Property height
      get height() {
        return this._height
    }
    set height(value) {
        this._height = value
    }
    // Property color
    get color() {
        return this._color
    }
    /**
     * @returns Will return the area of the rectangle
     */
    getArea() {
        return this._width * this._height
    }

     /**
     * @returns Will return the perimeter of the rectangle
     */
    getPerimeter() {
        return this._width * 2 + this._height * 2
    }
    
}

const myRectangle = new Rectangle(10, 5)
console.log(myRectangle.height)
console.log(myRectangle.width)
console.log(myRectangle.color)
console.log(myRectangle.getArea())
console.log(myRectangle.getPerimeter())

const myRectangle2 = new Rectangle()
console.log(myRectangle2.height)
console.log(myRectangle2.width)
console.log(myRectangle2.color)
console.log(myRectangle2.getArea())
console.log(myRectangle2.getPerimeter())

const rectangles = []
rectangles.push(myRectangle)
rectangles.push(myRectangle2)
console.table(rectangles)
