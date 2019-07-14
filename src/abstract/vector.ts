/**
 * @params ..args the arguments to use as coordinates; x, y, z, ...
 * @var data - a Float32 array to store the coordinjates
 */
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
        let sum = 0
        for (let i = 0; i < this.data.length; i++) {
            sum += this.data[i] * vec.data[i] 
        }
        return sum
    }
}
export default Vector
