// Selection sort to sort the array of elements
function selectionSort(arr) {
    for(var i = 0;i<arr.length;i++)
    {
        var minimum = i;
        for(var j = i+1;j<arr.length;j++)
        {
             if(arr[j] < arr[minimum])
             {
                 minimum = j;
             }
        }
        if(i !== minimum)
          {
           console.log(i,minimum);
           var temp = arr[i];
           arr[i] = arr[minimum];
           arr[minimum] = temp;
          }   
     }
return arr;
}