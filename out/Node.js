"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
        return this;
    }
    *[Symbol.iterator]() {
        let node = this;
        while (node) {
            yield node.value;
            node = node.next;
        }
    }
}
exports.default = Node;
//# sourceMappingURL=Node.js.map