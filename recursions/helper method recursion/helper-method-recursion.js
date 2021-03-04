function collectOdd(arr)
{
let oddArr = [];
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