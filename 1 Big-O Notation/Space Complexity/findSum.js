function findSum(arr) {
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total += arr[i];
    }
    return total;
}

console.log(findSum([3, 6, 7, 2, 9]));

// 2 variables
// O(1) space