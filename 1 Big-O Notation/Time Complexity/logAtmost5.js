function logAtmost5(n){
    for(let i=1; i<=Math.min(5,n); i++){
        console.log(i);
    }
}

logAtmost5(10);
logAtmost5(2);

// O(1)