//linear or normal search method to search elements in an array
function linearSearch(arr,value) {
    let correctIndex = arr.indexOf(value);
    if(correctIndex === -1)
    {
        return -1;
    } else {
        return correctIndex;
    }
}

console.log(linearSearch([1,2,3,4,5,6,7,8],7));
