let str="sannas";
let i=0;
let j=str.length-1;
let result = true;
while(i<j){
    if(str[i] == str[j]){
        i = i+1;
        j = j-1;
    }
    else{
        result = false;
        break;
    }
}
if(result == false){
    console.log("Not a palindrome");
}
else{
    console.log("Palindrome");
}