
// factorial using recursion
function factorial(n) {
if(n === 1)
{
    return 1;
} else if (n === 0)
{
    return 0;
} else {
return n*factorial(n-1);    
}



// factorial using iteration
function factorial(num)
{
var count = 1;
for(var i = num;i>=1;i--)
{
    count *=i;
}
return count;

}
