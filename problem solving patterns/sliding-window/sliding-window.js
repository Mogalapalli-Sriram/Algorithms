/*Using sliding window pattern,whichaccept an array and number(n) as inputs 
and return the maximum sum of the consecutive n values of an array */
function maxSubarraySum(arr,n) {
    var maxSum = 0;
    var tempSum = 0;
    for(var i = 0;i<n;i++)
    {
       maxSum += arr[i];
    }
    tempSum = maxSum;
    
    for(i = n; i<arr.length;i++)
    {
        tempSum = tempSum - arr[i-n] + arr[n];
        maxSum = Math.max(maxSum,tempSum);
    }
    return maxSum;
    
    }

 // normal method
 function maxSubarraySum(arr,n) {
    var sum = 0;
    var maxSumArray = [];
    for(var i = 0; i<arr.length-(n-1);i++)
    {
        for(var j = i; j<n+i;j++)
        {
           sum += arr[j];
        }
         maxSumArray.push(sum);
        sum = 0
    }
  console.log(maxSumArray);
  var max = maxSumArray.reduce(function(a,b) {
       return Math.max(a,b);
   });
return max;
}
