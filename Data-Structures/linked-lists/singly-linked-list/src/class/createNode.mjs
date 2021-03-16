class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
 
 }

 class singleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.head)
         {
             this.head = newNode;
             this.tail = this.head;
         } else {
             this.tail.next = newNode;
             this.tail = this.tail.next;
         }
         this.length++;
         return this;
    }
    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next)
        {
            newTail = current;
            current = current.next;
           
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0)
        {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        var current = this.head;
        var temp = this.head;
        current = current.next;
        this.head = current;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(val) {
        var pre = new Node(val);
        if(!this.head)
        {
            this.head = pre;
            this.tail = pre;
        }
       pre.next = this.head;
       this.head = pre;
       this.length++;
       return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        var pointer = 0;
        var current = this.head;
        while (pointer !== index)
        {
            current = current.next;
            pointer++;
        }
        return current;
    }

   set(val,index) {
       var getNode = this.get(index);
       if(getNode){
           getNode.val = val;
           return true
       }
       return false;
   }

   insert(val, index) {
      if(index < 0 || index > this.length) return false;
      if(index === this.length)
      {
       this.push(val); 
       return true;  
      }   
      if(index === 0) {
       this.unshift(val); 
       return true; 
      }  
      var newNode = new Node(val);
      var prevNode = this.get(index-1);
      var temp = prevNode.next;
      prevNode.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
      }

    remove(index) {
        if(index < 0 || index >= length) return undefined;
        if(index === this.length-1) return this.pop();
        if(index === 0) return this.shift();
        var prevNode = this.get(index);
        var temp = prevNode.next;
        prevNode.next = temp.next;
        this.length--;
        return temp;
      }

    reverse() {
         var node = this.head;
         this.head = this.tail;
         this.tail = node;
         var next;
         var prev = 0;
         for(var i = 0; i< this.length; i++)
         {
             next = node.next;
             node.next = prev;
             prev = node;
             node = next;
         } 
         return this;
     }

    print() {

        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current);
            current = current.next;
        }
     console.log(arr);
    }


} 


export default singleLinkedList;
