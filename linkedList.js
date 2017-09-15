/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var zelda = null;
  var newNode = {};

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
      zelda = tail;

      head = zelda;
      tail = zelda;

    } else {
      newNode.next = tail;
      zelda.next = newNode;
    }
    return tail;
  }

  function get(num) {
    // newNodeO = zelda;

    // for (var i = 0; i < num; i++) {
    //   newNodeO = alpha.next;
    // }

    // return newNodeO;
  }

  function remove(num) {

  }

  function insert(val, num) {

  }
}