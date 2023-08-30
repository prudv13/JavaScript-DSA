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

### Solution : using nested loops
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
### Solution : using frequency counter - O(N)
```js

```
---

### Mutiple Pointers Pattern
- creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- very efficient for solving problems with minimal space complexity as well

### Example :
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

```

### Solution : using multiple pointers
- Time Complexity - O(N)
- Space Complexity - O(1)
```js

```

### Example : Count Unique Values
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
```js
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
```

### Solution : using multiple pointers
- Time Complexity - O(N)
- Space Complexity - O(1)
```js

```