/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;

  return {
    getHead : getHead,
    getTail: getTail,
    add : add,
    get : get,
    remove : remove,
    insert : insert
  };

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(val) {
    var newNode = {
      value : val,
      next : null
    };

    if (head === null) {      
      head = newNode;
      tail = newNode;

    } else {
      tail.next = newNode;
      tail = newNode;
    }
    return tail;
  }

  function get(num) {
    if (num < 0) {
      return false;

    } else if (num === 0) {
      return head;
    
    } else { 
      var currentNode = head;

      for (var i = 0; i < num; i++) {
        if (currentNode.next === null) {
          return false;
        }

        currentNode = currentNode.next;
      }

      return currentNode;
    }
  }

  function remove(num) {
    var previousNode = get(num - 1);
    var targetNode = get(num);
    var nextNode = get(num+1);

    if (targetNode === false) {
      return false;
    
    } else if (previousNode === false) {
      head = nextNode;
    
    } else if (nextNode === false) {
      tail = previousNode;
      tail.next = null;
    
    } else {
      previousNode.next = nextNode;
    }
  }

  function insert(val, num) {
    var previousNode = get(num-1);
    var targetNode = get(num);
    var newNode = {
      value : val,
      next : null
    };

    if (num < 0 || targetNode === false) {
      return false;

    } else if (previousNode === false) {
      newNode.next = head;
      head = newNode;
    
    } else {
      newNode.next = targetNode;
      previousNode.next = newNode;
    }
  }
}
