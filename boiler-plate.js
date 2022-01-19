process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputstring = "";
let cl=0;
process.stdin.on('data',function(userinput){
    inputstring=inputstring + userinput;
    console.log(inputstring);
});

process.stdin.on('end',function(x){
    inputstring.trim();
    inputstring=inputstring.split("\n");
    main();
})

function readline(inputarray){
    let result=inputarray[cl];
    cl+=1;
    return result;
}
function main(){

    
}