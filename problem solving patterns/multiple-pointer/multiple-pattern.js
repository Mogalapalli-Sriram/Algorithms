/* Using multiple pointer pattern , a function which accepts sorted array as an input and returns an array 
containing a pair of numbers whose sum is zero*/
function sumZero(arr)
{
    let left = 0;
    let right = arr.length-1;
    let sum = arr[left] + arr[right];
    while(left < right)
    {
        
        if(sum === 0)
        {
            return [arr[left] , arr[right]];
        }
        else if(sum > 0)
        {
            right--;
        }
        else
        {
            left++;
        }
    }
}


// normal solution without multiple pointers
function sumZero(arr) {
for(let i = 0; i<arr.length;i++)
 {
    for(let j = 0; j<arr.length;j++)
    {
        if(arr[i] + arr[j] === 0)
        {
            return [arr[i],arr[j]];
        }
    }
 }
}

console.log(sumZero([-5,-4,-3,-2,-1,0,1,2,3,4]));