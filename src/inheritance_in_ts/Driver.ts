import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "../tsc_init_inheritance/Rectangle";


//The main difference between let and var is that scope of a
// variable defined with let is limited to the block in which
// it is declared while variable declared with var has the global scope.
let myShape = new Shape(10, 29);
let myCircle = new Circle(30, 15, 10);
let myRectangle = new Rectangle(2, 4, 7, 8);

let rectangleInfo = myRectangle.getinfo();
let circleInfo = myCircle.getinfo();
let shapeInfo = myShape.getinfo();

console.log(circleInfo);
console.log(shapeInfo);
console.log(rectangleInfo);