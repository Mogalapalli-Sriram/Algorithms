//linear or normal search method to search elements in an array
function linearSearch(arr,value) {
    var correctIndex = arr.indexOf(value);
    if(correctIndex === -1)
    {
        return -1;
    } else {
        return correctIndex;
    }
}