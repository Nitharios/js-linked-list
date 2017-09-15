/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var zelda = null;
  var temp = {};

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

    if (zelda === null) {
      head = tail;      
      zelda = tail;

    } else {
      zelda.next = tail;
      zelda = zelda.next;
    }
    return tail;
  }

  function get(num) {
    temp = head;

    for (var i = 0; i < num; i++) {
      temp = temp.next;
    }

    return temp;
  }

  function remove(num) {

  }

  function insert(val, num) {

  }
}