// Create and Populate a Map:

// let newMap = new Map();
// newMap.set("KeyString", "ValueString");
// newMap.set({ objKey: "key" }, { objValue: "Value" });
// newMap.set(2, 16);

// let obj1 = { key: "key" };
// let strVal = "Value"
// newMap.set(obj1,strVal)
// console.log(newMap.keys())
// obj1.key = 'modKey'
// console.log(newMap.keys());

// console.log(newMap.size);
// console.log(newMap.get(2));

// let  none = "none"
// if (newMap.has(none)) {
//     console.log(newMap.get(none));
// }else{
//     console.log(newMap.values());
// }

// for (const i of newMap.keys()) {
//     console.log("keys",i);
// }
// for (const i of newMap.values()) {
//     console.log("values",i);
// }

// let Delete = "KeyString"
// if (newMap.has(Delete)) {
//     newMap.delete(Delete)
//     console.log(newMap);
// }

// newMap.clear();
// console.log(newMap);
// console.log(newMap.size === 0)

// Create and Populate a Map:

// Combining Maps

// let newMa = new Map();
// newMa.set("KeyString", "ValueString");
// newMa.set({objKey:"key"}, {objValue:"Value"} );
// newMa.set(3, 61);

// function genNewMap(map1,map2){
//     let nor = new Map();

//     for (const [key, value] of map1) {
//         nor.set(key,value )
//     }
//     for (const [key,value] of map2) {
//         nor.set(key,value )
//     }

//     return nor

// }

// console.log(genNewMap(newMap,newMa)) //for newMap go to line 3

// Combining Maps

// Map to Array Transformation

// function Array2D(inputMap) {
//     let result = [];

//     for (let [key, value] of inputMap) {
//         result.push([key, value]);
//     }

//     return result;
// }

// let Mraz = new Map([
//     ['name', 'Narek'],
//     ['age', 16],
//     ['Rank', 'Qerop']
// ]);

// console.log(Array2D(Mraz));

// Map to Array Transformation

// Garbage Collection Behavior with WeakMap
// Create a WeakMap

// const myWeakMap = new WeakMap();

// let obj1 = { key: "value1" };
// let obj2 = { key: "value2" };
// let obj3 = { key: "value3" };

// myWeakMap.set(obj1, "obj1");
// myWeakMap.set(obj2, "obj2");
// myWeakMap.set(obj3, "obj3");

// console.log("obj1:", myWeakMap.get(obj1));
// console.log("obj2:", myWeakMap.get(obj2));
// console.log("obj3:", myWeakMap.get(obj3));

// obj1 = null;
// obj2 = null;
// obj3 = null;

// setTimeout(() => {
//   console.log("\nobj1:", myWeakMap.get(obj1));
//   console.log("obj2:", myWeakMap.get(obj2));
//   console.log("obj3:", myWeakMap.get(obj3));
// }, 1000);

// Creating and Populating a Set

// let mySet = new Set()

// mySet.add("Arsen");
// mySet.add("Vzgo")
// mySet.add("Vrdo")
// mySet.add("Vzgo")

// console.log(mySet);
// mySet.delete("Arsen")
// console.log(mySet);
// console.log(mySet.size);

// if (mySet.has("Vrdo")) {
//  mySet.delete("Vzgo")
// }
// console.log(mySet);
// console.log(mySet.size);

// for (const val of mySet) {
//     console.log([val]);
// }

// Conversion between Set and Array

// let arr = ["barev", "aper", "lavtxa69"];

// let karSet = new Set(arr);
// console.log(karSet);

// let newArr = [...karSet];
// console.log(newArr);


// Finding the Union, Intersection, and Difference -



