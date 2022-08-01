import {Shape} from "./Shape";

export class Circle extends Shape {


    constructor(x: number, y: number,
                private _r: number
    ) {
        super(x, y);
    }

    getinfo(): string {
        return super.getinfo() + ` r=${this._r}`;
    }

}