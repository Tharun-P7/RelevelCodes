//------1
//----1-2-1
//--1-2-3-2-1
//1-2-3-4-3-2-1
let n=4;
for(let i=1;i<=n;i++){
    let result=""    
    for(let spaces=1;spaces<=2*(n-i);spaces++){
            result=result+" ";
        }
    for(let num=1;num<=i;num++){
        result=result+num+" ";
    }
        console.log(result);
    }