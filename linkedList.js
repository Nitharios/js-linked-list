/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var zelda;

  var head = null;
  var tail = null;
  var temp;
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
    
    if (zelda === undefined) {
      zelda = {
        value : val,
        next : null
      };

      head = zelda;
      tail = zelda;

    } else {
      getTail().next = {
        value : val,
        next : null
      };
      tail = {
        value : val,
        next : null
      };
    }

    return tail;
  }

  function get(num) {

  }

  function remove(num) {

  }

  function insert(val, num) {

  }
}