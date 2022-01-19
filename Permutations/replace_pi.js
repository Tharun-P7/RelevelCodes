function f(arr,count){
    if(count==arr.length){
        return "";
    }
    
    return arr[count]+"3.14";
}
let string="abpiabpiabspisndasdpi";
let arr=string.split("pi");
ans="";
ans+=f(arr,-1);
console.log(ans);
