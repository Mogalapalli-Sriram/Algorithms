
//Helper method has a main function(outer function)  and helper function(recursive) inside the main function
//function to find the odd numbers in an array
function collectOdd(arr)
{
var oddArr = [];
function helper(helperInput) {

    if(helperInput.length === 0)
    {
        return;
    } 
    if(helperInput[0] % 2 !== 0)
    {
        oddArr.push(helperInput[0]);
    } 
   helper(helperInput.slice(1));
}
helper(arr);
return oddArr;
}