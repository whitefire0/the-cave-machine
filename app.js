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
    sum: 0
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
    minus: function() {
      memory.operators.push('-');
    },
    calculate: function() {
      /**
       * 
       */
      if(core.checkCalculate()) {
        // debugger;
        var operatorIndex = 0;
    /* A variable for storing the results of a reduce function (The reduce() method 
     applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.)*/
        var result = memory.numbers.reduce(function(accumulator, value, index){
    // If the index parameter is greater than 0, run the contained code. 
          if(index > 0) {
            switch (memory.operators[operatorIndex]) {
              case '+':
                operatorIndex++;
                return accumulator + value;
              case '-':
                operatorIndex++;
                return accumulator - value;
              default:
                break;
            }
          } else {
    // If the conditional evaluates to false, return accumulator plus value.
            return accumulator + value;
          }
    // Starting value of 0
        }, 0);
    // Logs a string with result variable.
        console.log(`Calculation result: ${result}`);
        return result;
      } 
      
      
      

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

var core = {
  checkCalculate: function() {
    /* A function for checking cases to determine if input is valid. The if statement checks if the numbers.length 
    and operators are both greater than 0. If they are greater than 0, both are checked against cases. (essentially conditional statements?)
       */
    if (memory.numbers.length > 0 && memory.operators.length > 0) {
      switch (memory.numbers.length - memory.operators.length) {
    // The break statement ends the current loop
        case 1:
    // If this case, return true in the console.
          console.log("Memory is valid, calculating...");
          return true;
          break;
    // Case zero or -1 (if there are to many operators) this case.
        case 0 || -1:
          console.log("Too many operators in memory. Add a number");
          break;
        case 2:
          console.log("Too many numbers in memory. Add an operator.")
          break;
        default:
          console.log("Check memory: where n = number of operators, the number of numbers should be n + 1");
          break;
      }
    } else {
    /* If all cases fail this message will be logged to the console along with false.
    */
      console.log("Ensure operators > 0 and numbers > 1");
    }
    return false;
  }
}

var api = consoleAPI;

var dev = {
  addTwo: function() {
// A function for adding 2 numbers and one operator.
    api.num(1);
    api.add();
    api.num(2);
// The results of api.calculate are stored in a variable for ease of access.
    var result = api.calculate();
    return result;
  },
  printMemory: function() {
    console.log("Memory: ", memory);
    console.log("Previous Memory State: ", previousMemoryState);
  },
  runTests: function() {
    for (var testname in test) {
      test[testname]();
    }
  }
}

var test = {
// This is a full testing suite.
  addTwo: function() {
// Writes an error message to the console if the assertion is false
    console.assert(dev.addTwo() == 3);
// Runs the api.clear method.
    api.clear();
  },
  addThree: function() {
    api.num(1);
    api.add();
    api.num(1);
    api.add();
    api.num(1);
// If the assertion is true, runs a calculation.
    console.assert(api.calculate() == 3);
    api.clear();
  },
  addThreeMinusOne: function() {
    api.num(1);
    api.add();
    api.num(1);
    api.add();
    api.num(1);
    api.minus();
    api.num(1);
    console.assert(api.calculate() == 2);
    api.clear();
  }
}


