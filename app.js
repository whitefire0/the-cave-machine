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
  * functions, function returns
  * data structures: arrays, objects
  * IIFEs
  * 
  */

  /**
   * How to use this app:
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
      var check1, check2;

      memory.numbers = [];
      memory.operators = [];
      check1 = helpers.memoryChangeChecksum(memory);
      previousMemoryState.numbers = [],
      previousMemoryState.operators = []
      check2 = helpers.memoryChangeChecksum(previousMemoryState);
        
      console.log(`There was an error clearing the memory, please debug your code. Error: ${error}`)
      
      console.log(`Memory cleared successfully`);
    }
  }

var helpers = {
  memoryChangeChecksum: function(storage) {
    var storageTotal = {
      numbers: 0,
      operators: 0
    }

    storage.numbers.forEach(function(i, val){
      storageTotal.numbers += val;
    });
    storage.operators.forEach(function(i, val){
      storageTotal.operators += i;
    });

    if(storageTotal.numbers == 0) {
      if(memoryOperatorTotal - previousMemoryStateOperatorTotal == 0) {
        console.log("Memory cleared successfully");
        return true;
      }
    } else {
      console.log("There was an error clearing memory. Please debug your code.")
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
    consoleAPI.clear();
  }
}
