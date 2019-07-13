import Vector from "../abstract/vector";

class Vector2D extends Vector{
    constructor(x: number, y: number){
        super(x, y)    // this gives us 'this.data' property
        this.len = Math.hypot(x, y)
        this.ang = Math.atan2(x, y)
        let l = 12
        return this
    }
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
    get ang(){
        return Math.atan2(this.y, this.x)
    }
    set len(len: number){
        this.x = Math.cos(this.ang)*len
        this.y = Math.sin(this.ang)*len
        this.data[2] = Math.hypot(this.y, this.x)
    }
    set ang(ang: number){
        this.x = Math.cos(ang)*this.len
        this.y = Math.sin(ang)*this.len
        this.data[3] = Math.atan2(this.y, this.x)
    }

    unit(){
      return Vector2D.unit(new Vector2D(this.x, this.y))  
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
    log(){
        console.log(
            " x: ",   this.x,  "\n",
             "y: ",   this.y,  "\n",
             "len: ", this.len,  "\n",
             "ang: ", this.ang*180/Math.PI), "degrees" , "\n"
        return this
    }
    static distance(vec1: Vector2D, vec2: Vector2D){
        let dy = vec1.y - vec2.y,
            dx = vec1.x - vec2.x;
        return Math.hypot(dy, dx)
    }
    static unit(vec1?: Vector2D){
        let output
        if(vec1){
            let {len, x, y} = vec1
            output = new Vector2D(x/len, y/len)
        }else{
            output = new Vector2D(0,0)
            output.len = 1 
        }
        return output 
    }
    static areEquals(vec1: Vector2D, vec2: Vector2D, boundary?: number){
        let b = boundary || 1
        let test =
        Math.abs( vec1.len - vec2.len ) <= Number.EPSILON+b &&
        Math.abs( vec1.ang - vec2.ang ) <= Number.EPSILON+b
        return test
    }
    static clone(vec: Vector2D){
        return new Vector2D(vec.x, vec.y)
    }
}

export default Vector2D


let myvec = new Vector2D(100, 100)

console.log(myvec)