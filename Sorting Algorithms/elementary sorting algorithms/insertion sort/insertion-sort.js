// Insertion sort to sort the array of numbers

function insertionSort(arr) {
 
    for(var i = 1; i<arr.length ;i++)
    {
      var currentValue  = arr[i];
      for(var j = i-1; (j>=0) && (arr[j] > currentValue);j--)
    {
         arr[j+1] =arr[j];
     
    }
     arr[j+1] = currentValue;
    }
    return arr;
    
    }