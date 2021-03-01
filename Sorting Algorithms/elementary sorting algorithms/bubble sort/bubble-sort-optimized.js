// // optimised with a boolean to perform operations on unsorted arrays and avoid unnecessary operations on unsorted array
function bubbleSort(arr) {
    var noSwap
    for(var i =arr.length;i>0;i--)
    {
        noSwap = true;
        for(var j = 0;j < i-1;j++)
        {
            console.log(arr,arr[j],arr[j+1]);
            if(arr[j] > arr[j+1])
            {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    } 
    return arr;
    }