import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";



//The main difference between let and var is that scope of a
// variable defined with let is limited to the block in which
// it is declared while variable declared with var has the global scope.

const myCircle = new Circle(30, 15, 10);
const myRectangle = new Rectangle(2, 4, 7, 8);

let shapesArray : Shape[] = [];
shapesArray.push(myRectangle)
shapesArray.push(myCircle)


for (const shape of shapesArray) {
    console.log(shape.getinfo());
    console.log(shape.calculateArea());
}


