import Vector2D from "./vec2/vec2";

let EPSILON: number = 1e-10

function toDegrees(radian: number): number{
    return radian * 180/Math.PI
}

function toRadians(degree: number): number{
    return degree * Math.PI/180
}

function randomInt(limits?: number[]): number{
    let ran: number
    if(Array.isArray(limits) ){
        ran = ~~(Math.random()*(limits[1] - limits[0]) + limits[0])
    }else{
        ran = ~~(Math.random()*500)
    }
    return ran
}

export {
    EPSILON,
    toDegrees,
    toRadians,
    randomInt
}