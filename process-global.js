//process.stdout.write("hii");
//process.stdout.write("hello");

let readline=require('readline');
let reader=readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

let x=reader.question('',(ans) =>{
    console.log(ans);
    reader.close();
})
//console.log('Tharun');
