
/* Using frequency counter pattern ,function to accept two arrays and return true if values 
of first array has a corresponding square values in other array  in any order,returns false 
if array lengths are different or even if array lengths are same and frequencies are different */

function same(arr1,arr2)
{
var frequencyCounter1 = {};
var frequencyCounter2 = {};
for(var value of arr1)
{
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) +1;
}

for(var value of arr2)
{
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) +1;
}

for(var key in frequencyCounter1)
{
    if(!(key**2 in frequencyCounter2) )
    {
        return false;
    }
    if(frequencyCounter2[key**2] !== frequencyCounter1[key])
    {
        return false
    }
}
return true
}

