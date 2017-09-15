/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;
  var temp = {};
  var current;

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
    temp.next = {
      value: val
    };
    return temp;
  }

  function get(num) {

  }

  function remove(num) {

  }

  function insert(val, num) {

  }
}