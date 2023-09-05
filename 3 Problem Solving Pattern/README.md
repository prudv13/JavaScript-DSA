# Problem Solving Patterns

### Frequency Counter Pattern

- uses objects or sets to collect values/frequencies of values
- this can often avoid the need for nested loops or 0(n^2) operations with arrays, strings.

## Example : Frequency Counter

Write a function called "same", which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

```js
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1.9]) // false
same([1,2,1], [4,4,1]) // false
```

### Solution: using nested loops

```js

```

### Solution : using frequency counter - O(N)

```js

```

## Example : Anagrams

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

```js
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
```

### Solution: using frequency counter - O(N)

```js
function validAnagram(first, second){
    let lookup = {};
    for(let i=0; i<first.length; i++){
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter]+= 1 : lookup[letter] = 1;
    }
    for(let i = 0; i<second.length; i++){
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram 
        if(!lookup[letter]){
            return false;
        }
        else {
            lookuo[letter] -= 1;
        }
    }
    return true;
}

validAnagram('texttwisttime', 'timetwisttext') // true
```

---

### Mutiple Pointers Pattern

- creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- very efficient for solving problems with minimal space complexity as well

### Example:

Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```js
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
```

### Solution : using nested loops

- Time Complexity - O(N^2)
- Space Complexity - O(1)

```js
function sumZero(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

sumZero([-3,-2,-1,0,1,2,3]); // [-3,3]
```

### Solution: using multiple pointers

- Time Complexity - O(N)
- Space Complexity - O(1)

```js
function sumZero(arr){
    let left = 0;
    let right arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }
        else if(sum > 0){
            right--;
        }
        else {
            left++;
        }
    }
}

sumZero([-3,-2,-1,0,1,2,3]); // [-3,3]
```

### Example: Count Unique Values

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```js
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
```

### Solution: using multiple pointers

- Time Complexity - O(N)
- Space Complexity - O(1)

```js
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
```

---

### Sliding Window Pattern

- This pattern involves creating a window which can either be an array or number from one position to another.
- Depending on a certain condition, the window either increases or closes (and a new window is created).
- Very useful for keeping track of a subset of data in an array/string etc.

### Example :

Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

```js
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
```
