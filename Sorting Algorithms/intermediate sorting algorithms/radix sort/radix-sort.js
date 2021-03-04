/****************Radix sort to sort the array of numbers*****************/

// function definition to get a digit based on inputs(number and position of digit in a number) given to it
function getDigit(number,position) {
    return Math.floor(Math.abs(number)/Math.pow(10,position))%10;
    }
 // function definition to count the number of digits in a number of an array   
    function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
    }
 // function definition to return the number of digits of a large number of an array
    function mostDigits(arr) {
    let maxDigit = 0;
    for(let i = 0;i< arr.length;i++)
    {
        maxDigit = Math.floor(Math.max(maxDigit,digitCount(arr[i])));
    }
    return maxDigit;
    }
    
// radix sort to sort the array of numbers
    function radixSort(numbers) {
    let maxDigitCount = mostDigits(numbers);
    for(let k =0;k<maxDigitCount;k++)
    {
        let digitBuckets = Array.from({length:10},function() {
            return [];
        });
    
        for(let i = 0; i<numbers.length;i++)
        {
            digitBuckets[getDigit(numbers[i],k)].push(numbers[i]);
        }
        newArray = [].concat(...digitBuckets);
    }
    return newArray;
    }

    console.log(radixSort([4,2,7,3,9,5,6]));
