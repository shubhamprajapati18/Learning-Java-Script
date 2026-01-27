// Original array
let arr = [10, 20, 30, 40, 50];
console.log("Original Array:", arr);

// push() → Add element to the end
arr.push(60);
console.log("After push(60):", arr);

// pop() → Remove element from the end
arr.pop();
console.log("After pop():", arr);

// unshift() → Add element to the start
arr.unshift(0);
console.log("After unshift(0):", arr);

// shift() → Remove element from the start
arr.shift();
console.log("After shift():", arr);

// splice() → Remove elements from middle
arr.splice(1, 2); // remove 2 elements starting from index 1
console.log("After splice(1,2):", arr);

// splice() → Add elements in middle
arr.splice(1, 0, 25, 35); // add without removing
console.log("After splice(1,0,25,35):", arr);

// reverse() → Reverse the array
arr.reverse();
console.log("After reverse():", arr);

// slice() → Copy a portion of the array
let newArr = arr.slice(1, 3); // Copy from index 1 to 2
console.log("After slice(1,2):", newArr);

// sort() → Sort the array(lexicak sort by default)
arr.sort();
console.log("After sort():", arr);

// indexOf() → Find index of an element
let index = arr.indexOf(50);
console.log("Index of 30:", index);