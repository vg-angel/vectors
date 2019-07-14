import Vector from "../abstract/vector";
import {EPSILON, toDegrees, randomInt} from "../globals";

class Vector2D extends Vector{
    constructor(x: number, y: number){
        super(x, y)
        return this
    }

    //getters and setters

    get x(){
        return this.data[0]
    }

    get y(){
        return this.data[1]
    }

    set x(val: number){
        this.data[0] = val
    }

    set y(val: number){
        this.data[1] = val
    }

    get len(){
        return Math.hypot(this.y, this.x)
    }

    set len(len: number){
        let ang = this.ang
        this.x = Math.cos(ang)*len
        this.y = Math.sin(ang)*len
    }

    get ang(){
        return Math.atan2(this.y, this.x)
    }

    set ang(ang: number){
        let len = this.len
        this.x = Math.cos(ang)*len
        this.y = Math.sin(ang)*len
    }

    //public methods

    norm(){
      return Vector2D.norm(new Vector2D(this.x, this.y))
    }

    update(x: number, y: number){
        this.x = x
        this.y = y
        return this
    }

    neg(){
        this.x *= -1
        this.y *= -1
        return this
    }

    zero(){
        this.x = 0
        this.y = 0
    }

    rotate(angle: number){
        this.ang = this.ang + angle
        return this
    }

    log(){
        console.log(
            " x: ",   this.x,  "\n",
             "y: ",   this.y,  "\n",
             "len: ", this.len,  "\n",
             "ang: ", (()=>{
                 let ang = this.ang
                 if(this.ang < 0){
                     ang = Math.PI*2 + ang
                 }
                 return toDegrees(ang)
             })())
            return "data"
    }


    //static methods

    static random(limits?: [number, number]){
        
        if(!limits) {limits = [0, 300]}

        let x = randomInt(limits)
        let y = randomInt(limits)

        return new Vector2D(x, y)

    }

    static distance(vec1: Vector2D, vec2: Vector2D){
        let dy = vec1.y - vec2.y,
            dx = vec1.x - vec2.x;
        return Math.hypot(dy, dx)
    }

    static norm(vec1?: Vector2D){
        let output: Vector2D
        if(vec1){
            let {len, x, y} = vec1
            output = new Vector2D(x/len, y/len)
        }else{
            output = new Vector2D(0,0)
            output.len = 1 
        }
        return output 
    }

    static totalEqual(vec1: Vector2D, vec2: Vector2D){
        return vec1.len - vec2.len === 0 &&
               vec1.ang - vec2.ang === 0
    }

    static areEquals(vec1: Vector2D, vec2: Vector2D, boundary?: number){
        let b = boundary || 1

        return Math.abs(vec1.len - vec2.len) <= EPSILON + b &&
               Math.abs(vec1.ang - vec2.ang) <= EPSILON + b
    }

    static clone(vec: Vector2D){
        return new Vector2D(vec.x, vec.y)
    }

    static dot(vec1: Vector2D, vec2: Vector2D){
        return vec1.x*vec2.x + vec1.y*vec2.y
    }

    static angleBeet(vec1: Vector2D, vec2: Vector2D){
        let dot = Vector2D.dot(vec1, vec2),
            l1 = vec1.len,
            l2 = vec2.len;
        return Math.acos(dot/l1*l2)
    }

}
export default Vector2D