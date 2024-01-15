Object.prototype[Symbol.iterator] = function(){
    let obj = this;
    let keys = Object.keys(obj).reverse();
    let len = keys.length;
    let i = 0;

    return {
        next: function(){
            return {
                value: obj[keys[i++]],
                done: i > len
            }
        }
    }
}

let obj = {a: 1, b: 2, c: 3}[Symbol.iterator]();

console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());