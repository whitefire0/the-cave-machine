/**
 * Author: whitefire0
 * Distributed under the MIT license
 */

/**
 * Project intentions
 * Develop a basic calculator application
 * Commit in micro-steps for the purpose of teaching iterative application development
 */

/**
 * Projec spec:
 * TODO => it should have a place to store numbers
 * TODO => it should have a place to store operators
 * TODO => it should have an API that transfers user input to these stores
 * TODO => it should be able to apply an operator to two numbers
 * TODO => it should be able to apply an operator to three or more numbers
 * TODO => it should be able to apply operators in order of presedence
 * TODO => it should have a memory function
 * TODO => it should have a clear memory function
 * TODO => it should keep a history of calculations
 * TODO => it should have an ES5 and ES6 version
 * TODO => it should have a full tinytest.js test suite
 * TODO => it should be able to recall this history of calculations
 * TODO => it could calculate statistics of overall calculator use
 * 
 */

 /**
  * Understanding required to read this code:
  * variable assignment
  * function/method fundamentals
  * data structures: arrays, objects
  * IIFEs
  * 
  */

  /**
   * How to use this app:
   * api.num(1)     adds 1 to memory. At least 2 values need to be in memory to run api.equals()
   * api.add()      stores the '+' operator to add the values in memory
   * api.equals()   takes the 2 numbers in memory and applies the operator (currently only addition)
   * api.clear()    clears the calculator memory
   * 
   * This app is currently in absolute minimal working state. It would be very easy to make it dysfunctional.
   */

  var memory = {
    operators: [],
    numbers: [],
  }

  var previousMemoryState = {
    operators: [],
    numbers: []
  }

  var consoleAPI = {
    num: function(num) {
      memory.numbers.push(num);
      if(memory.numbers.length > previousMemoryState.numbers.length) {
        console.log(`${num} was added to memory position ${memory.numbers.length - 1}`);
      }
    },
    add: function() {
      memory.operators.push('+');
    },
    equals: function() {
      var firstNum = memory.numbers[0];
      var secondNum = memory.numbers[1];
      var operator = memory.operators[0];
      var result;
      if (operator == '+') {
        result = firstNum + secondNum;
      }
      console.log(`${firstNum} + ${secondNum} = ${result}`)
    },
    clear: function() {
      memory.numbers = [];
      memory.operators = [];
      previousMemoryState.numbers = [],
      previousMemoryState.operators = []

      if(memory.numbers.length == 0) {
        console.log(`Memory cleared successfully`);
      } else {
        console.log(`There was an error clearing the memory, please debug your code.`)
      }

    }
  }

var api = consoleAPI;

var dev = {
  addTwo: function() {
    consoleAPI.num(1);
    consoleAPI.num(1);
    consoleAPI.add();
    consoleAPI.equals();
    // consoleAPI.clear();
  },
  printMemory: function() {
    console.log("Memory: ", memory);
    console.log("Previous Memory State: ", previousMemoryState);
  }
}
