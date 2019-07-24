import Vector from "../abstract/vector";
import {EPSILON, toDegrees, randomInt} from "../globals";

class Vector2D extends Vector{
    constructor(x?: number, y?: number){
        super(x || 0, y || 0)
        return this
    }

    // <--- ALIASES --->

        /** The magnitude (length) of a vector */
        get mag(){
            return this.len
        }
        set mag(val: number){
            this.len = val 
        }
        /** The direction (angle) of a */
        get dir(){
            return this.ang
        }
        set dir(val: number){
            this.ang = val
        }

    
    //<--- GETTERS AND SETTERS --->

    /** Get the value of the coordinate x */
    get x(){
        return this.data[0]
    }
    /** Get the value of the coordinate y */
    get y(){
        return this.data[1]
    }
    /** Set a new value for coordinate x */
    set x(val: number){
        this.data[0] = val
    }
    /** Set a new value for coordinate y */
    set y(val: number){
        this.data[1] = val
    }
    /** Get the length from origin to head of the vector */
    get len(){
        return Math.hypot(this.y, this.x)
    }
    /** Set a new value for length of the Vector keep same angle */
    set len(len: number){
        let ang = this.ang
        this.x  = Math.cos(ang)*len
        this.y  = Math.sin(ang)*len
    }
    /** Get angle of the Vector with respect x axis (horizontal) and keep same length */
    get ang(){
        return Math.atan2(this.y, this.x)
    }
    /** Set a new angle of the Vector for with respect x axis */
    set ang(ang: number){
        let len = this.len
        this.x  = Math.cos(ang)*len
        this.y  = Math.sin(ang)*len
    }

    //  <---PUBLIC METHODS--->

    /** Get unit vector with length 1 angle same of source vector */
    norm(){
      return Vector2D.norm(new Vector2D(this.x, this.y))
    }
    /** Update both x and y coordinates of the vector source */
    update(x: number, y: number){
        this.x = x
        this.y = y
        return this
    }
    /** Change the sign of the Vector's components */
    neg(){
        this.x *= -1
        this.y *= -1
        return this
    }
    /** Set the values of the Vector's components to zero */
    zero(){
        this.x = 0
        this.y = 0
        return this
    }
    /** Change the actual angle of the Vector2D */
    rotate(angle: number){
        this.ang = this.ang + angle
        return this
    }
    /** Clone the actual vector (the vector tou are using to call the this function)*/
    clone(){
        let out = Vector2D.clone(this)
        return out
    }
    /** Print info on the console regarding the source Vector(debugging purposes) */
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


    // <---STATIC METHODS--->


    /**return a Vector2D with random components */
    static random(limits?: [number, number]){
        
        if(!limits) {limits = [0, 1000]}

        let x = randomInt(limits)
        let y = randomInt(limits)

        return new Vector2D(x, y)

    }
    /** Calculate the distance between two Vectors2D */
    static distance(vec1: Vector2D, vec2: Vector2D){
        let dy = vec1.y - vec2.y,
            dx = vec1.x - vec2.x;
        return Math.hypot(dy, dx)
    }
    /** Calculate the unit Vector2D between two vectors if no parameter return a vector with len =1 */
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
    /** Check if two Vectors2D are totally equal */
    static totalEqual(vec1: Vector2D, vec2: Vector2D){
        return vec1.x - vec2.x === 0 &&
               vec1.y - vec2.y === 0
    }
    /** Check if two Vectors2D are equal within a range */
    static areEquals(vec1: Vector2D, vec2: Vector2D, boundary?: number){
        let b = boundary || 0

        return Math.abs(vec1.len - vec2.len) <= EPSILON + b &&
               Math.abs(vec1.ang - vec2.ang) <= EPSILON + b
    }
    /** Create a new Vector2D from parameter */
    static clone(vec: Vector2D){
        return new Vector2D(vec.x, vec.y)
    }
    /** Calculate the agnle between two Vectors2D */
    static angleBet(vec1: Vector2D, vec2: Vector2D){
        let dot = Vector2D.dot(vec1, vec2),
            l1 = vec1.len,
            l2 = vec2.len;
        return Math.acos(dot/l1*l2)
    }
    /** Return a new Vector from adding two Vectors2D */
    static add(a: Vector2D, b: Vector2D){
        let out = new Vector2D()
        out.x = a.x + b.x
        out.y = a.y + b.y
        return out
    }
    /** Return a new vector from substracting two Vector2D (order matter) */
    static sub(a: Vector2D, b:Vector2D){
        let out = new Vector2D()
        out.x = a.x - b.x
        out.y = a.y - b.y
        return out
    }
    /** Multiply the components of a Vector2D with a number */
    static mul(a: Vector2D, n: number){
        let out = new Vector2D()
        out.x = a.x * n
        out.y = a.y * n
        return out
    }
    /** Divide the components of a Vector2D with a number */
    static div(a: Vector2D, n: number){
        let out = new Vector2D()
        out.x = a.x / n
        out.y = a.y / n
        return out
    }
    /** The projection of the vector 'a' on 'b' is a new vector with same angle as 'b' */
    static projection(a: Vector2D, b: Vector2D){
        let dot = Vector2D.dot(a, b)
        let square = b.len**2
        return b.clone().mult(dot/square)
    }
}
export default Vector2D
