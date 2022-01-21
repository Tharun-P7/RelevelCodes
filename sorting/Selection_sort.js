/*
We feel left is sorted and right is unsorted


Applications:
If we need some operations which need less number of swaps then Selection sort is used
Selection sort is not stable

*/
function findMinIndex(arr,start){
    let min_idx = start;
    for(let i = start+1; i<arr.length ; i++){
        if(arr[i]<arr[min_idx]){
            min_idx = i;
        }
    }
    return min_idx
}


function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min_idx = findMinIndex(arr,i);
        if( i!= min_idx ) {
            let temp = arr[i];
            arr[i] = arr[min_idx];
            arr[min_idx] = temp;
        }
    }
}

let arr= [4,2,5,6,7,8,1,9];

selectionSort(arr)

console.log(arr);