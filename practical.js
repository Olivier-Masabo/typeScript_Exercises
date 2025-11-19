// function getFirstElement<T>(arr: T[]):T{
//  return arr[0];
// }
// console.log(getFirstElement(["a", "b", "c"]))
// console.log(getFirstElement([1, 2, 3]))
// console.log(getFirstElement([{ id: 1 },{ id: 2 }]))
// console.log(getFirstElement([]))
function applyOperation(a, b, operation) {
    return operation(a, b);
}
var add = function (x, y) { return x + y; };
var multiply = function (x, y) { return x * y; };
console.log(applyOperation(10, 5, multiply));
