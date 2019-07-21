declare abstract class Vector {
    protected data: Float32Array;
    protected constructor(...args: number[]);
    add(vec: Vector): this;
    sub(vec: Vector): this;
    mult(scalar: number): this;
    div(scalar: number): this;
    dot(vec: Vector): number;
}
export default Vector;
