/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var current = null;
  var temp = {};
  var anotherTemp = {};

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
    tail = {
      value : val,
      next : null
    };

    if (current === null) {      
      current = tail;
      head = current;

    } else {
      current.next = tail;
      current = current.next;
    }
    return tail;
  }

  function get(num) {
    temp = head;

    for (var i = 0; i < num; i++) {
      if (temp.next === null) {
        return false;
      }
      temp = temp.next;
    }

    return temp;
  }

  function remove(num) {
    temp = head;

    for (var i = 0; i < num-1; i++) {
      temp = temp.next;
    }

    temp = anotherTemp.next;
    anotherTemp = anotherTemp.next;
  }

  function insert(val, num) {

  }
}