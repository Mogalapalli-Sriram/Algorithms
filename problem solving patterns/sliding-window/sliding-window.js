
function maxSubarraySum(arr,n) {
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0;i<n;i++)
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
    let sum = 0;
    let maxSumArray = [];
    for(var i = 0; i<arr.length-(n-1);i++)
    {
        for(let j = i; j<n+i;j++)
        {
           sum += arr[j];
        }
         maxSumArray.push(sum);
        sum = 0
    }
  let max = maxSumArray.reduce(function(a,b) {
       return Math.max(a,b);
   });
return max;
}
