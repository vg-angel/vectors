"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = require("../abstract/vector");
const globals_1 = require("../globals");
class Vector2D extends vector_1.default {
    constructor(x, y) {
        super(x, y);
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
        this.ang = this.ang + angle;
        return this;
    }
    log() {
        console.log(" x: ", this.x, "\n", "y: ", this.y, "\n", "len: ", this.len, "\n", "ang: ", (() => {
            let ang = this.ang;
            if (this.ang < 0) {
                ang = Math.PI * 2 + ang;
            }
            return globals_1.toDegrees(ang);
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
        let test = Math.abs(vec1.len - vec2.len) <= globals_1.EPSILON + b &&
            Math.abs(vec1.ang - vec2.ang) <= globals_1.EPSILON + b;
        return test;
    }
    static clone(vec) {
        return new Vector2D(vec.x, vec.y);
    }
    static dot(vec1, vec2) {
        return vec1.x * vec2.x + vec1.y * vec2.y;
    }
    static angleBeet(vec1, vec2) {
        let dot = Vector2D.dot(vec1, vec2), l1 = vec1.len, l2 = vec2.len;
        return Math.acos(dot / l1 * l2);
    }
}
exports.default = Vector2D;

console.log("finally");
let vec = new Vector2D(10, 10);
//# sourceMappingURL=vec2.js.map