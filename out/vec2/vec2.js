"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = require("../abstract/vector");
class Vector2D extends vector_1.default {
    constructor(x, y) {
        super(x, y); // this gives us 'this.data' property
        return this;
    }
    get x() {
        return this.data[0];
    }
    get y() {
        return this.data[1];
    }
    set x(val) {
        this.data[0] = val;
    }
    set y(val) {
        this.data[1] = val;
    }
    get len() {
        return Math.hypot(this.y, this.x);
    }
    get ang() {
        return Math.atan2(this.y, this.x);
    }
    set len(len) {
        let ang = this.ang;
        this.x = Math.cos(ang) * len;
        this.y = Math.sin(ang) * len;
    }
    set ang(ang) {
        let len = this.len;
        this.x = Math.cos(ang) * len;
        this.y = Math.sin(ang) * len;
    }
    unit() {
        return Vector2D.unit(new Vector2D(this.x, this.y));
    }
    update(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    neg() {
        this.x *= -1;
        this.y *= -1;
        return this;
    }
    zero() {
        this.x = 0;
        this.y = 0;
    }
    rotate(angle) {
        let actual = this.ang;
        this.ang = actual + angle;
        return this;
    }
    log() {
        console.log(" x: ", this.x, "\n", "y: ", this.y, "\n", "len: ", this.len, "\n", "ang: ", (() => {
            let ang = this.ang;
            if (this.ang < 0) {
                console.log(ang);
                ang = Math.PI * 2 + ang;
            }
            return ang * 180 / Math.PI;
        })());
        return "data";
    }
    static distance(vec1, vec2) {
        let dy = vec1.y - vec2.y, dx = vec1.x - vec2.x;
        return Math.hypot(dy, dx);
    }
    static unit(vec1) {
        let output;
        if (vec1) {
            let { len, x, y } = vec1;
            output = new Vector2D(x / len, y / len);
        }
        else {
            output = new Vector2D(0, 0);
            output.len = 1;
        }
        return output;
    }
    static areEquals(vec1, vec2, boundary) {
        let b = boundary || 1;
        let test = Math.abs(vec1.len - vec2.len) <= Number.EPSILON + b &&
            Math.abs(vec1.ang - vec2.ang) <= Number.EPSILON + b;
        return test;
    }
    static clone(vec) {
        return new Vector2D(vec.x, vec.y);
    }
}
exports.default = Vector2D;
let myvec = new Vector2D(100, 100);
myvec.len = 1;
myvec.ang = 0;
myvec.rotate(Math.PI);
console.log(myvec);
//# sourceMappingURL=vec2.js.map