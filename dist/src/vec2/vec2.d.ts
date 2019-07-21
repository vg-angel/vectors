import Vector from "../abstract/vector";
declare class Vector2D extends Vector {
    constructor(x?: number, y?: number);
    /** Get the value of the coordinate x */
    /** Set a new value for coordinate x */
    x: number;
    /** Get the value of the coordinate y */
    /** Set a new value for coordinate y */
    y: number;
    /** Get the length from origin to head of the vector */
    /** Set a new value for length of the Vector keep same angle */
    len: number;
    /** Get angle of the Vector with respect x axis (horizontal) and keep same length */
    /** Set a new angle of the Vector for with respect x axis */
    ang: number;
    /** Get unit vector with length 1 angle same of source vector */
    norm(): Vector2D;
    /** Update both x and y coordinates of the vector source */
    update(x: number, y: number): this;
    /** Change the sign of the Vector's components */
    neg(): this;
    /** Set the values of the Vector's components to zero */
    zero(): this;
    /** Change the actual angle of the Vector2D */
    rotate(angle: number): this;
    /** Print info on the console regarding the source Vector(debugging purposes) */
    log(): string;
    /**return a Vector2D with random components */
    static random(limits?: [number, number]): Vector2D;
    /** Calculate the distance between two Vectors2D */
    static distance(vec1: Vector2D, vec2: Vector2D): number;
    /** Calculate the unit Vector2D between two vectors if no parameter return a vector with len =1 */
    static norm(vec1?: Vector2D): Vector2D;
    /** Check if two Vectors2D are totally equal */
    static totalEqual(vec1: Vector2D, vec2: Vector2D): boolean;
    /** Check if two Vectors2D are equal within a range */
    static areEquals(vec1: Vector2D, vec2: Vector2D, boundary?: number): boolean;
    /** Create a new Vector2D from parameter */
    static clone(vec: Vector2D): Vector2D;
    /** Calculate the dot product between two Vectors2D */
    static dot(vec1: Vector2D, vec2: Vector2D): number;
    /** Calculate the agnle between two Vectors2D */
    static angleBet(vec1: Vector2D, vec2: Vector2D): number;
    /** Return a new Vector from adding two Vectors2D */
    static add(a: Vector2D, b: Vector2D): Vector2D;
    /** Return a new vector from substracting two Vector2D (order matter) */
    static sub(a: Vector2D, b: Vector2D): Vector2D;
    /** Multiply the components of a Vector2D with a number */
    static mul(a: Vector2D, n: number): Vector2D;
    /** Divide the components of a Vector2D with a number */
    static div(a: Vector2D, n: number): Vector2D;
}
export default Vector2D;
