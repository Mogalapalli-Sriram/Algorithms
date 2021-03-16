# doubly-linked-list

## code statement
To create a doubly linked list of the strings and performing all the operations such as push,pop,unshift,shift,get,set,insert and delete.

<br>

## prerequisites
node js

<br>

## what is doubly linked list? 
It is a type of linear data structure and a linked list which is the combination of single linked lists.
The only difference compared to singly linked list is  here the node is having the reference to the previous node besides the storing of value and reference to next node.
<br>

![doublylinkedlist](images/doublylinkedlist.png)

<br>

## doubly linked list vs singly linked list


|doubly linked list  | singly linked list |
|:-------------------|:------|
|Insertion and removal at the beginning and end is at high speed  | Insertion of data at the beginning and end is at high speed but removal at the end is still low|
| Node is having a value, references to previous node and next node| Node is having a value , reference to the next node|

<br>

## application of singly linked list

If we want to deal with the complex datas for storing,inserting and deleting and if random access is not mandatory, this is the perfect application.

<br>

## Big O of doubly linked list
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(N)
 * Accessing - O(N)

 <br>

 ## Limitation of doubly linked list
  * To access the elements in an array,it takes a longer time and array is best in terms of accessing the data.
   
   <br>
   
## Algorithm for singly linked list
* Generate the class component for the creation of node
 ``` bash
  class Node {
     constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
     }
  }
 ```

  *  Generate the class component for the doubly linked list and perform all the operation on it by using different methods.No arguments are passes into the constructor 
  ```bash
  class doublyLinkedList {
     constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
     }
  }
  ```
1. ### push  
    #### usage:-
    To create a node at the end of the list.

    #### pseudocode:-
      * Create a function that accepts a value.
      * Create a new node using the value passed to function.
      * If no head pointer exist,then set the head and tail to the newly created node.
      * Else set the next property of tail to be the newly created node.
      * Set the previous property of newly created node to the tail property.
      * Set the tail to the newly created node.
      * Increment the length.
      * return the list

    <br> 
         
 2. ### pop 
    #### usage:-
    To remove a node from the end of the list.
    #### pseudocode:-
       * Create a function for pop.
       * If no head pointer exist,return undefined.
       * Store the tail property in a variable temp.
       * Store the previous property of the tail in a variable. 
       * set the tail to be the previous property of the tail.
       * set the next property of the tail to be null.
       * Decrement the length.
       * return the temp.

 <br>

  3. ### unshift
     #### usage:-
     To create a node at the beginning of the list.
     #### pseudocode
       * Create a function that accepts a value.
       * Create a new node using the value passed to function.
       * If no head pointer exist,the set the head and tail to the newly created node.
       * Else set the next property of the new node to the head.
       * Set the previous property of the head to be the new node
       * Set the head property to the newly created node.
       * Set the previous property of the newly created to null.
       * Increment the length.
       * Return the list.

<br>

 4.  ### shift
     #### usage:- 
     To remove a node from the beginning in the list.
     #### pseudocode
       * Create a function for shift.
       * Create a new variable temp to store the head property and return it at the end.
       * Create other variable to store the head property.
       * Set the head to the next property of the other variable used to store.
       * Set the previous property of the head to be null.
       * Decrement the length.
       * Return the variable temp.

<br>

 5. ### get
    #### usage:-  
    To retrieve a node by its position in the list.
    #### pseudocode
      * Create a function that accepts the index.
      * If the index is less than zero or index is greater than length of list,then return null.
      * If the index is less than or equal to half the length.
        * Loop through the list from the head and return the node at the specified position.
      * Otherwise loop throught the list from the tail and return the node at the specified position.
      * Return the node at the specified index.
  
  <br>

 6. ### set
    #### usage:-
    To change the value of node based on its position in the list. 
    #### pseudocode
      *  Create a function that accepts value and index.
      *  If the index is less than zero or index is greater than or equal to length of list, then return undefined.
      *  Use the get method to get the node at the specified location and store it in the variable.
      *  If the node is found, set it to a specified value and return true.
      *  If the node is not found, return false

<br>

 7. ### insert
    #### usage:-
    To create a node based on the position in the list  
    #### pseudocode
      * Create a new function that accepts the value and index.
      * Create a new node using the value passed to the function.
      * If the index is less than zero and index is greater than the length of list, then return  undefined.
      * If the index is equal to zero, then unshift the element at the beginning of the node.
      * If the index is equal to the length of list, then push the element at the end of the node.
      * Otherwise, use the get method to get the element at (index-1).
      * Set the next property of the node at (index-1) to be the new node.
      * Store the next property of the node at (index-1) in the variable temp.
      * set the next property of the new node to be the variable temp.
      * Set the previous property of the new node to be the node at (index-1). 
      * Increment the length .
      * Return the list. 

<br>

 8. ### remove
    #### Usage
    To remove a node based on its position in the list.
    #### pseudocode
      * Create a new function that accepts the index.
      * If the index is less than zero and index is greater or equal to the length of list, then return undefined.
      * If the index is equal to zero , shift the element for the beginning of the list.
      * If the index is equal to the (length of list -1), then pop the element from the end of the list.
      * Otherwise use the get method to get the element at (index-1).
      * Set the next property of the element at (index-1) and store it in temp.
      * Set the next property of the element at (index-1) to be the next property of the temp.
      * Set the previous property of the temp to be the node at (index-1).
      * Decrement the length.
      * Return the next property of the element at (index-1).




