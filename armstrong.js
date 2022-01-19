let n=10000;
//let a=0;
for (let i=0;i<=n;i=i+1){
    let str=""+n;
    let no_of_digits= str.length;
    let temp = n;
    let sum=0;
    while(temp>0){
        let last_digit = n%10;
        sum = sum + Math.pow(last_digit,no_of_digits);
        temp=Math.floor(temp/10);
    }
    if(sum==n){
        console.log(n);
    }
}