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
    queue: [],
  }

  var previousMemoryState = {
    queue: []
  }

  var consoleAPI = {
    checkChange: function(val) {
      if(memory.queue.length > previousMemoryState.queue.length) {
        console.log(`${val} was added to memory position ${memory.queue.length - 1}`);
        return true;
      }
    },
    printMemory: function(){
      console.log(memory.queue)
    },
    store: function(val) {
      if(core.checkInput(val)) {
        memory.queue.push(val);
        if(this.checkChange(val)){
          previousMemoryState.queue.push(val);
        }
      } else {
        if (memory.queue.length == 0) {
          console.log('On a new calulation, the first memory value must be a number');
        } else {
          console.log(`Error adding ${val} to memory. Operators and numbers must alternate`);
        }
      }
    },
    num: function(val) {
      this.store(val);
    },
    add: function() {
      this.store('+');
    },
    minus: function() {
      this.store('-');
    },
    multiply: function() {
      this.store('*');
    },
    divide: function() {
      this.store('/');
    },
    calculate: function() {
      /**
       * 
       */
      if(core.checkCalculate()) {
        // debugger;
        var operatorIndex = 0;
        var result = memory.numbers.reduce(function(accumulator, value, index){
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
            return accumulator + value;
          }
        }, 0);
        console.log(`Calculation result: ${result}`);
        return result;
      } 
    },
    clear: function() {

    }
  }

var core = {
  checkInput: function(input) {
    if (memory.queue.length == 0 && typeof(input) == 'number') {
      return true;
    } else {
      if(typeof(input) == 'string' && typeof(memory.queue[memory.queue.length - 1]) == 'number') {
        return true;
      } else if (typeof(input) == 'number' && typeof(memory.queue[memory.queue.length - 1]) == 'string') {
        return true;
      } else {
        return false;
      }
    }
  },
  determinePrecedence: function() {
    // have a variable to store the accumulated sum of operations
    var result = 0;
      // for each operator in array
      for (var i = 0; i < memory.operators.length; i++) {
        memory.operators.forEach(function(val, index, array){
          if(val == '*') {
            //TODO: for this to work more efficiently, the memory should store both operators and values in one array
          }
        });
      }
        
        // search array for operators in order of precendece
        // on finding an operator, find the adjacent values, calculate and add to sum
        // remove these values and the operator from their respective arrays

    // can this be incorporated into reduce as a callback?
  

  }
}

var api = consoleAPI;

var dev = {
  addTwo: function() {
    api.num(1);
    api.add();
    api.num(2);
    var result = api.calculate();
    return result;
  },
  runTests: function() {
    for (var testname in test) {
      test[testname]();
    }
  }
}

var test = {
  addTwo: function() {
    console.assert(dev.addTwo() == 3);
    api.clear();
  },
  addThree: function() {
    api.num(1);
    api.add();
    api.num(1);
    api.add();
    api.num(1);
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


