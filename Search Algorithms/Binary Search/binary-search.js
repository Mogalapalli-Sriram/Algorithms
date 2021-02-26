function binarySearch(arr,value) {
var left = 0;
var right = (arr.length-1);
var middle = Math.floor((left + right)/2);
console.log(left,middle,right);
while(arr[middle]!== value && (left <= right) )
{
   if(value > arr[middle])
          {
              left = middle+1;
          } else if (value < arr[middle]) {
              right = middle-1;
          }
       middle = Math.floor((left + right)/2);
}
if(arr[middle] === value)
       {
         return middle;  
       } 
     return -1;
}