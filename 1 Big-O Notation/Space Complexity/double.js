function double(arr){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(2*arr[i]);
    }
    return newArr;
}

console.log(double([3, 6, 7, 2, 9]));