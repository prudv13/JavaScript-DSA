/*
Write a function called sameFrequency. 
Given two positive integers, 
find out if the two numbers have the same frequency of digits.

solution must have Time: O(N)
*/

function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    let lookup = {};
    for(let i=0; i<strNum1.length; i++){
        let digit = strNum1[i];
        lookup[digit] ? lookup[digit]+=1 : lookup[digit] = 1; 
        console.log(lookup);
    }
    for(let i = 0; i<strNum2.length;i++){
        let digit = strNum2[i];
        if(!lookup[digit]){
            return false;
        }
        else {
            lookup[digit] -= 1;
        }
    }
    return true;
}

console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22,222));