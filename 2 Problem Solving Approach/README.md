# Problem Solving Approach

### Algorithm
- process or set of steps to accomplish a certain task.
- almost everything that you do in programming involves some kind of algorithm.
- it's the foundation for being a successful problem solving developer.

### How do you improve ?
- Devise a plan for solving problems
- Master common problem solving patterns

### Problem Solving
- Understand the problem
- Explore concrete examples
- Break it down
- Solve, Simplify
- Look back and refactor

## Step - 1 : Understand the problem
- Can I restate the problem in my own words ?
- What are the inputs that go into the problem ?
- What are the outputs that should come from the solution to the problem ?
- Can the outputs be determined from the inputs. Do I have enough information to solve the problem?

### Example: write a function which takes two numbers and returns their sum.
```
1. implement addition
2. inputs - two numbers, ints? floats? strings for large numbers?
3. output - sum of two numbers, int? float? string?
```
```js
function sumOfTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

sumOfTwoNumbers(10, 20);
```
## Step - 2 : Explore concrete examples

Coming up with examples can help you understand the problem better. Examples also provide sanity checks that your eventual solution works how it should.
### example: User Stories, Unit tests

### Explore Examples
- Start with simple examples
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

### Example: write a function which takes in a string and returns counts of each character in the string.
```
1. number of each character in a string {a: 2, b: 3, c: 0}
2. complex -> should we consider spaces in the string
3. empty inputs -> ouput =  "" ? null ?
4. invalid inputs -> null ? "" ?
```
```js
function countCharacters(inputString) {
    const charCount = {};

    for(let char of inputString){
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

countCharacters("hello");
```

## Step - 3 : Break It Down

Explicitly write out the steps you need to take. This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details(language syntax) as well.

```js
function countCharacters(inputString) {
    // make object to return at the end
    const result = {};

    // loop over string
    for(let char of inputString){

        // if the char is a key in object, add one to count
        // if the char is not in object, add it and set value to 1
        // if char is non-alphanumeric, space, period, don't do anything
    }
    // return updated object at the end
    return result;
}

countCharacters("hello");
```

## Step - 4 : Solve or Simplify


```js
function countCharacters(inputString) {
    // make object to return at the end
    const result = {};

    // loop over string
    for(let i=0; i < inputString.length; i++){

        let char = inputString[i];

        // if the char is a key in object, add one to count
        if(result[char] > 0) {
            result[char]++;
        }
        // if the char is not in object, add it and set value to 1
        else {
            result[char] = 1;
        }
        // if char is non-alphanumeric, space, period, don't do anything
        
    }
    // return updated object at the end
    return result;
}

countCharacters("hello");
```

## Step - 5 : Look Back and Refactor

### REFACTORING QUESTIONS

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

```js
function countCharacters(inputString) {
    // make object to return at the end
    const result = {};

    // loop over string
    for(let char of inputString){

        // if chars are alphanumeric, using regular expressions
        // if char is non-alphanumeric, space, period, don't do anything
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            // if the char is a key in object, add one to count
            // if the char is not in object, add it and set value to 1
            result[char] = ++obj[char] || 1;
        }
    }
    // return updated object at the end
    return result;
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && // numeric (0-9)
       !(code > 64 && code < 91) && // upper alpha (A-Z)
       !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    else {
        return true;
    }
}
```