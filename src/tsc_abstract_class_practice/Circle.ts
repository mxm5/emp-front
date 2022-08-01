import {Shape} from "./Shape";

export class Circle extends Shape {
    calculateArea(): number {
        return Math.PI * Math.pow(this._r, 2);
    }


    constructor(x: number, y: number,
                private _r: number
    ) {
        super(x, y);
    }

    getinfo(): string {
        return super.getinfo() + ` r=${this._r}`;
    }

}