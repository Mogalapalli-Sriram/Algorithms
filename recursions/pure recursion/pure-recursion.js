function collectOdd(arr) {
    let oddArr = [];
    if(arr.length === 0)
    {
        return oddArr;
    }
    if(arr[0]%2 !== 0)
    {
        oddArr.push(arr[0]);
    }
    oddArr = oddArr.concat(collectOdd(arr.slice(1)));
    return oddArr;
    }