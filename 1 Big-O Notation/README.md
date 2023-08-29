# Big - O Notation
- way to formalize fuzzy counting
- allows us to talk formally about how the runtime of an algorithm grows as the input grow
- we only talk about broad trends

### Big - O notations : constant(1), linear(n), quadratic(n^2)
 



## Calculate the sum of all numbers from 1 upto and including some number n.

- using for loop, timers
```js
function addUpTo(n) {
    let total = 0;
    for(let i = 1; i<=n; i++){
        total += i;
        console.log(total);
    }
    return total;
}

let t1 = performance.now();
console.log(addUpTo(1000000000));
let t2 = performance.now();
console.log(`Time Elapsed: ${ (t2-t1)/ 1000} seconds`)
```
- using formula, timers
- faster
```js
function addUpTo(n) {
    return n*(n+1)/2;
}

let t1 = performance.now();
console.log(addUpTo(1000000000));
let t2 = performance.now();
console.log(`Time Elapsed: ${ (t2-t1)/ 1000} seconds`)
```
### Problem with time -
- different machines record different times
- same machine record different times
---
### Solution -
- count the number of simple operations the computer has to perform
---
## Counting Operations


```js
function addUpTo(n) {
    return n*(n+1)/2;
}
```
- 1 multiplication, 1 addition, 1 division = 3 operations
---
```js
function addUpTo(n) {
    let total = 0;
    for(let i = 1; i<=n; i++){
        total += i;
        console.log(total);
    }
    return total;
}
```
- n additions, n assignments, 2 assignments, n comparisons = n operation -> 5n+2
- regardless of the exact number, the number of operations grows roughly proportionally with n

---
---

# Performance Tracker - Visualizing Time Complexities
```url
https://rithmschool.github.io/function-timer-demo/
```
## Count Up and Down
```js
function countUpAndDown(n) {
    console.log("Going up!");
    for(let i=0; i<n; i++){
        console.log(i);
    }
    console.log("At the top!\n Going down...");
    for(let j=n-1; j>=0; j--){
        console.log(j);
    }
    console.log("Back down. Bye!");
}

countUpAndDown(10);
```
- Big - O Notation: O(n)

## Print All Pairs
```js
function printAllPairs(n) {
    for(var i = 0; i<n; i++){
        for(var j=0; j<n; j++){
            console.log(i, j);
        }
    }
}

printAllPairs(5);
```
- Big - O Notation: O(n^2)

## Big - O Notation Rules

### Constants don't matter
```
O(2n) -> O(n)

O(500) -> O(1)

O(13n^2) -> O(n^2)
```
### Smaller terms don't matter
```
O(n + 10) -> O(n)

O(1000n + 500) -> O(n)

O(n^2 + 5n + 8) -> O(n^2)
```
# Big - O Notation Shorthands

- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array(by index) or object(by key) is constant
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop


## Log AtLeast 5
```js
function logAtleast5(n){
    for(let i=1; i<=Math.max(5,n); i++){
        console.log(i);
    }
}

logAtleast5(10);
```
- Big - O Notation: O(n)

## Log Atmost 5
```js
function logAtmost5(n){
    for(let i=1; i<=Math.min(5,n); i++){
        console.log(i);
    }
}

logAtmost5(10);
logAtmost5(2);
```
- Big - O Notation: O(1)

## Big - O Notation Graph
![big-o-graph](https://res.cloudinary.com/dqab7rimk/image/upload/v1693208787/DSA/big-o-graph_ghtomw.png)

---
## Space Complexity
- Most primites(booleans, numbers, undefined, null) are constant space
- Strings require O(n) space where n is the string length
- Reference types are generally O(n), where n is the length(for arrays) or the number of keys(for objects)

### Auxiliary Space Complexity
- refers to space required by the algorithm, not including space taken up by the inputs.

## Find Sum
```js
function findSum(arr) {
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total += arr[i];
    }
    return total;
}

console.log(findSum([3, 6, 7, 2, 9]));
```
- 2 variables (total, i)
- Big - O Notation: O(1) space

## Double the input
```js
function double(arr){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(2*arr[i]);
    }
    return newArr;
}

console.log(double([3, 6, 7, 2, 9]));
```
- Big - O Notation: O(n) space
---

## Logarithms

![big-o-log](https://res.cloudinary.com/dqab7rimk/image/upload/v1693208883/DSA/big-o-log1_dpyn9w.png)

![big-o-log](https://res.cloudinary.com/dqab7rimk/image/upload/v1693208975/DSA/big-o-log2_j371vr.png)

![big-o-log](https://res.cloudinary.com/dqab7rimk/image/upload/v1693209134/DSA/big-o-log3_bctiqk.png)

## Objects
- unordered, key value pairs
```js
let instructor = {
    firstName: "Colt",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}
```
### When to use objects
- when you don't need order
- when you need fast access / insertion and removal

### Big - O of Objects
- Insertion - O(1)
- Updation - O(1)
- Removal - O(1)
- Access - O(1)
- Searching - O(n)

### Big - O of Object Methods
- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(n)
- hasOwnProperty - O(1)


## Arrays
- ordered lists
```js
let names = ["Colt", "Angela", "Stephen"];
let values = [true, {}, [], 2, "awesome"];
```

### When to use arrays
- when you need order
- when you need fast access / insertion and removal

### Big - O of Arrays
- Insertion - depends...
- Removal - depends...
- Searching - O(n)
- Access - O(1)

### Insertion, Removal at the end of an array : O(1)
### Insertion, Removal at the start of an array : O(n)

### Big - O of Array Methods
- push, pop - O(1)
- shift, unshift - O(n)
- slice, splice - O(n)
- sort - O(n*logN)
- forEach, map, filter, reduce - O(n)