//-------------DO NOT MODIFY THIS SECTION------------------------
let input = "100 100 100 200 300 400 500 600 100 100 50 0"
process.stdin.on('data', data => input += data)
process.stdin.on('end', () => main(input))
 
function main(input) {
    let lines = input.trim().split('\n');
    let n = +lines[0];
    for(let i = 1; i <= n; i++) {
        let arr = lines[i].split(' ').map(v => +v);
    	solve(arr);
    }
}
//--------------------------------------------------------------- 
 
function solve(units) {
	console.log(units)
}