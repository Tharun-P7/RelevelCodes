// Approach
// Reverse the Array of n elements (Reversing is swap first element,last element and so on)
// and if we want k rotations lets say 3
// so after reversing arr we take k elements and reverse them and next reverse the n-k elements individually

function rotate(arr,start,end){
    let i=start,j=end;
    while(i<=j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i=i+1;
        j=j-1;
    }
}
let arr=[1,2,3,4,5];
let k=3;

rotate(arr,0,arr.length-1);  //reverse whole array
rotate(arr,0,k-1);          // reverse first k elements
rotate(arr,k,arr.length-1); //reverse remaining n-k elements
console.log(arr);