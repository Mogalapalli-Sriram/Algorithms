/*************Qucik sort to sort the array of numbers********************/

/* function definition to accept array of numbers as input with start and end indexes and return the 
  index of pivot(element which have lesser values on left and greater values on its rigth)*/

function quickHelper(arr,start = 0, end = arr.length-1) {
    var pivot = arr[start];
    var pvtIdx = start;
    function swap(array,a,b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    }
    for(var i = start+1; i<arr.length;i++)
    {
        if(pivot > arr[i])
        {
            pvtIdx++;
            swap(arr,pvtIdx,i);
        }
    }
    swap(arr,start,pvtIdx);
    return pvtIdx;
    }
    
  // qucik sort on array of numbers  
function quickSort(arr,left = 0, right = arr.length-1) {
       if(left < right)
       {
       var pivotIndex = quickHelper(arr,left,right);  //function call to get the index of pivot
       quickSort(arr,left,pivotIndex-1);  //function called recursively for left elements of pivot
       quickSort(arr,pivotIndex+1,right);  // function called recursively for right elements of pivot
       }
     return arr;
    }