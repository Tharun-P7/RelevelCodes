/*
For each iteration the biggest element in the unsorted array comes to its position
We assume Left part is unsorted and right is sorted

[14,33,27,35,10]
[14,27,33,35,10]
[14,27,33,10,35]
[14,27,33,10,35]
[14,10,27,33,35]

[10,14,27,33,35]


Applications:
If we have high probability of already sorted data 
If we need to detect sorted data then this is used in UDP
Bubble sort is stable
*/


function bubbleSort(arr){
    for(i=0 ; i<arr.length-1 ; i++){
        let is_swapped = false;
        for(let j=0 ; j< arr.length ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                is_swapped = true;
            }
        }
        if(is_swapped == false){}
    }
}

let arr=[2,1,3,4,9,8,7]
bubbleSort(arr);
console.log(arr);
