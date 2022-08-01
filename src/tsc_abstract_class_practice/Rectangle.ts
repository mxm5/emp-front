import {Shape} from "./Shape";

export class Rectangle extends Shape {
    calculateArea(): number {
       return this._h * this._w
    }

    constructor(x: number, y: number, private _h: number, private _w: number) {
        super(x, y);
    }

    getinfo(): string {
        return super.getinfo()+` h=${this._h} , w=${this._w}`;
    }

    get h(): number {
        return this._h;
    }

    set h(value: number) {
        this._h = value;
    }

    get w(): number {
        return this._w;
    }

    set w(value: number) {
        this._w = value;
    }
}