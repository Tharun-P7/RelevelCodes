/*
Similar to playing cards

Every element goes to its original position
*/

function Insertion_sort(arr){
    for(let i=1;i<arr.length;i++){
        let current_element = arr[i];
        
        let j = i-1;
        while(j>=0 && arr[j] >current_element){
            arr[j+1] = arr[j];
            j=j-1;
        }
        arr[j+1] = current_element;
    }
}

arr=[5,3,2,1,4];

Insertion_sort(arr);

console.log(arr);