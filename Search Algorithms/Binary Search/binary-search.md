# Binary-Search


## Program Statement
Write a function  named binary search which accepts an array and specified number(to be searched) as inputs and returns the index(position) of an element in that array.If no specified number in array,returns the value -1 ?

<br>

## Prerequisites
* Browser developer tools

<br>

## Run the code
* Open browser developer tools.
* Head over to source and create a new snippet.
* Copy and Paste the code [BinarySearch](./binary-search.js) js file. 
* Execute with different inputs in the console. 

<br>

## Algorithm
1.) create a function binarySearch  which accepts a sorted array and value(to be searched in array) as inputs.

2.) Create a left pointer at the start of an array,right pointer at the end of  an array.

3.) create a middle pointer  which uses  the average of values (indexes)of left and right pointer for its position(index).

4.) while the left pointer is always  before or equal to the right pointer and while middle pointer is not at the specified value.

* If the position of middle pointer is at a value less than specified value,move right pointer down(i.e towards left)keeping left pointer fixed.

* If the position of middle pointer is at a value greater than specified value, move left pointer up(i.e towards right) keeping right pointer fixed.

* Change the middle pointer to a new position which is the new average value of left and right pointer.

* Continue with a number of iterations until specified value is approached.

5.) If the specified value is found,return the index of the specified element.

6.) If the specified value is not found,return the value  -1 .

<br>

## Code execution with different Inputs
``` bash
1.) binarySearch ( [1,2,3,4,5],2 )    
    output :  1

2.) binarySearch ( [1,2,3,4,5],5 )    
    output :  4

3.) binarySearch ( [1,2,3,4,5],6 )     
    output : -1

4.) binarySearch ([                    
    53,54,64,73,79,85,110,129,
    157,173,185], 129)
    output :  7
```

<br>

## Binary Search
* Binary Search is the faster searching algorithm compared to linear search.

* Search of an element can be at any position (eg. middle) of an array ignoring half of  array elements in which specified element is not found.

<br>

## Time Complexity of Binary Search and Why binary search
Assume if we have an array of 50 values, if we need to search the end values  of array,we can use Linear Search as well as Binary search. It s not a problem.

Now Assume if we have 10,000 values,now if we need to search the end values using Linear search,it takes a lot of time compared to Binary Search.

 |Search algorithms   |                Time Complexity       |  |
 |------------------- |:------------------ |:---------------    |
 |                    |  Worst Case        |          Best Case |
 |Linear search       |  O(N)              |          O(1)      |
 |Binary search       |  O(NlogN)          |          O(1)      |


Even in Worst Case Binary search is better than Linear search since
O(NlogN) < O(N)

<br>

## Limitations
* Binary search is limited to only sorted arrays.

## Code implementation link:
[Binary-Search](./binary-search.js)

