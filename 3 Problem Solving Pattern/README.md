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