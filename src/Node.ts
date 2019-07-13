export default class Node{
    value: number
    next: Node
    constructor(value: number, next?: Node){
        this.value = value
        this.next = next
        return this
    }
    *[Symbol.iterator](){
        let node: Node = this
        while(node){
            yield node.value
            node = node.next
        }
    }
}