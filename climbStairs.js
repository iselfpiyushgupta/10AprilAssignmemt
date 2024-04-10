let climbStairs = function(n){
    if(n<=2){
        return n;
    }

    let previousStep1=1, previousStep2=2;
    for(let i=3;i<=n;i++){
        const current=previousStep1+previousStep2;
        previousStep1=previousStep2;
        previousStep2=current;

    }
    return previousStep2;

};


//Inputs
console.log(climbStairs(2));
console.log(climbStairs(3));
