function countCharacters(inputString) {
    const charCount = {};

    for(let char of inputString){
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

countCharacters("hello");