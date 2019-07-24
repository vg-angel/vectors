abstract class Vector{
    protected data: Float32Array
    protected constructor(...args: number[]){
        let data: Float32Array
        if(args.length < 2) throw "incorrect number of parameters"
        else{
            data = new Float32Array(args.length)
            for(let i=0 ; i<args.length ; i++){
                data[i] = args[i]
            }
        }
        this.data = data 
        return this  
    }
    add(vec: Vector){
        for(let i=0 ; i<vec.data.length; i++){
            this.data[i] += vec.data[i]
        }
        return this
    }
    sub(vec: Vector){
        for (let i = 0; i < vec.data.length; i++) {
            this.data[i] -= vec.data[i]
        }
        return this
    }
    mult(scalar: number){
        for (let i = 0; i < this.data.length; i++) {
            this.data[i] *= scalar
        }
        return this
    }
    div(scalar: number){
        for (let i = 0; i < this.data.length; i++) {
            this.data[i] /= scalar
        }
        return this
    }
    dot(vec: Vector){
        if(vec.data.length !== this.data.length){
            throw new Error("Vector must have same dimension")
        }
        let sum = 0
        for (let i = 0; i < this.data.length; i++) {
            sum += this.data[i] * vec.data[i] 
        }
        return sum
    }
    /** Calculate the dot product between two Vectors2D */
    static dot(vec1: Vector, vec2: Vector){
        if(vec1.data.length !== vec2.data.length){
            throw new Error("Vectors must have same dimension")
        }
        let sum = 0
        for(let i=0 ; i<vec1.data.length ; i++){
            sum += vec1[i]*vec2[i]
        }
        return sum
    }
}
export default Vector
