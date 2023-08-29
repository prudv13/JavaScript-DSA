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
            result[char] = ++result[char] || 1;
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

console.log(countCharacters("hello i am prudhvi"));