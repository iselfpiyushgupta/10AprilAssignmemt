let reverse = function(inp){
    const isNeg=inp<0;
    inp=Math.abs(inp);
    let rev=0;
    while(inp!==0){
        const digit=inp%10;
        rev=rev*10+digit;
        inp=Math.floor(inp/10);

    }

    if(rev >2**31-1){
        return 0;
    }
    return isNeg?-rev: rev;


}
//Inputs
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
