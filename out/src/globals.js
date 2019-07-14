"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let EPSILON = 1e-10;
exports.EPSILON = EPSILON;
function toDegrees(radian) {
    return radian * 180 / Math.PI;
}
exports.toDegrees = toDegrees;
function toRadians(degree) {
    return degree * Math.PI / 180;
}
exports.toRadians = toRadians;
function randomInt(limits) {
    let ran;
    if (Array.isArray(limits)) {
        ran = ~~(Math.random() * (limits[1] - limits[0]) + limits[0]);
    }
    else {
        ran = ~~(Math.random() * 500);
    }
    return ran;
}
exports.randomInt = randomInt;
//# sourceMappingURL=globals.js.map