class Node {

    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
  
  }
  
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val) {
        var newNode = new Node(val);
        if(!this.head || !this.tail){
         this.head = newNode;
         this.tail = this.head;
        } else
        {
         this.tail.next = newNode;
         newNode.prev = this.tail;
         this.tail = newNode;
        }
        this.length++;
        return this;
    }
  
    pop(){
        if(!this.head || !this.tail) return undefined;
        if(this.length ===1){
            this.head = null;
            this.tail = null;
        } else {
        var popped = this.tail;
        var temp = this.tail.prev;
        this.tail = temp;
        temp.next = null;
        popped.prev = null;
        }
        this.length--;
        return popped;
    }
  
    shift(){
        if(!this.head || !this.tail) return undefined;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
        var current = this.head;
        var shifted = this.head;
        current = current.next;
        this.head = current;
        current.prev = null;
        shifted.next = null; 
        }
        this.length--;
        return shifted;
     }
  
     unshift(val) {
        var addNode = new Node(val);
        if(!this.head || !this.tail)
        {
        this.head = addNode;
        this.tail = this.head;
        } else{
        addNode.next = this.head;
        this.head.prev = addNode;
        this.head = addNode;
        addNode.prev = null; 
      
       }
         this.length++;
         return this;
     }
  
     get(index) {
        if(index < 0 || index >= this.length) return null;
        var middle = Math.floor(this.length/2);
        if(index <= middle) {
        var left = 0;
        var current = this.head;
        while(left !== index ){
        current = current.next;
        left++;
         }
        }else {
        var right = this.length-1;
        var current = this.tail;
        while(right !== index){
        current = current.prev;
        count--;
         }
        }
        return current;
     }
  
     set(val,index) {
       if(index < 0 || index >= this.length) return undefined;
       const getNode = this.get(index);
       if(getNode) {
         getNode.val = val;
         return true;
       }
       return false;
     }
  
     insert(val,index) {
       var newNode = new Node(val);
       if(index <0 || index > this.length) return undefined;
       if(index === 0) return !!this.unshift(val);
       if(index === this.length) return !!this.push(val);
       var prevNode = this.get(index-1);
       var temp = prevNode.next;
       prevNode.next = newNode;
       newNode.next = temp;
       newNode.prev = prevNode;
       this.length++;
       return true;
     }
     
     remove(index) {
      if(index < 0 || index >= this.length) return null;
      if(index === 0) return this.shift();
      if(index === this.length-1) return this.pop();
      var prevNode = this.get(index);
      var temp = prevNode.next;
      prevNode.next = temp.next;
      temp.prev = prevNode;
      this.length--;
      return temp;
  
     }
  }

  export default DoublyLinkedList;
