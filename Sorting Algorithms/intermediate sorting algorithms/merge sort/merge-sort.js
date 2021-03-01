/**************merge sort to sort the array of numbers*********************/

// function definition which will be called recursively to merge the two array and store them in a new merged array
function  merge(arr1,arr2) {
    var merged = [];
    var i = 0;
    var j = 0;
    while(i<arr1.length && j<arr2.length)
    {
        if(arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    // for remaining elements
    while(i<arr1.length)
    {
        merged.push(arr1[i]);
        i++;
    }
    
    while(j<arr2.length)
    {
        merged.push(arr2[j]);
        j++;
    }
    return merged;
    }
    
    // merge sort function to sort the elements in an array
    function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid) ); // merge sort is called recursively
    const right = mergeSort (arr.slice(mid) ); // merge sort is called recursively
    return merge(left,right); // function call to merge the arrays
    }