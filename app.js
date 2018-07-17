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

  var dev = {
    skipPrinting: false
  }

  var consoleAPI = {
    checkChange: function(val) {
      if(memory.queue.length > previousMemoryState.queue.length && !dev.skipPrinting) {
        console.log(`${val} was added to memory position ${memory.queue.length - 1}`);
        return true;
      }
    },
    printMemory: function(){
      console.log(memory.queue);
      console.log(`Pending calculation: ${memory.queue.join(' ').toString()}`)

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
      return core.calculate();
    },
    clear: function() {
      memory.queue = [];
      previousMemoryState.queue = [];
      if(!dev.skipPrinting)
        console.log('Memory cleared');
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
  calculate: function() {
    // BUG: 
    console.log(`Calculation: ${memory.queue.join(' ').toString()}`);
    var operatorPrecedence = ['*', '/', '+', '-'];
    // for each operator precendece
    operatorPrecedence.forEach(function(operator, i, operatorsArray){

      if(memory.queue.includes(operator)){

        (function whilstOperatorsExist(operator){

          memory.queue.forEach(function(val, j, memoryArray){
            var operatorIndex = memoryArray.indexOf(operator);

            if (operatorIndex > 0) {
              var indexLeftHandValue = operatorIndex - 1;
              var indexRightHandValue = operatorIndex + 1;
              var leftHandValueAsString = memoryArray[indexLeftHandValue].toString();
              var rightHandValueAsString = memoryArray[indexRightHandValue].toString();
              var stringForEval = leftHandValueAsString.concat(operator, rightHandValueAsString);
              var sumOfSet = eval(stringForEval);
              memoryArray.splice(indexLeftHandValue, 3, sumOfSet);

              if(memoryArray.includes(operator)) {
                whilstOperatorsExist(operator);
              }
            }
          
          });
        })(operator)
      }
      
    });
    if(!dev.skipPrinting)    
      console.log(`Result: ${memory.queue[0]}`);
    // debugger;
    return memory.queue[0];
  },
}

var api = consoleAPI;

var test = {
  addTwo: function() {
    api.num(1);
    api.add();
    api.num(2);
    var result = api.calculate();
    var expected = 3;
    return {
      status: Boolean(result == expected),
      result: result,
      expected: expected
    };
  },
  addThree: function() {
    api.num(1);
    api.add();
    api.num(1);
    api.add();
    api.num(1);
    var result = api.calculate();
    var expected = 3;
    return {
      status: Boolean(result == expected),
      result: result,
      expected: expected
    };
  },
  addThreeMinusOne: function() {
    api.num(1);
    api.add();
    api.num(1);
    api.add();
    api.num(1);
    api.minus();
    api.num(1);
    var result = api.calculate();
    var expected = 2;
    return {
      status: Boolean(result == expected),
      result: result,
      expected: expected
    };
  },
  multiplyTwoAddOne: function() {
    api.num(1);
    api.add();
    api.num(2);
    api.multiply();
    api.num(3);
    var result = api.calculate();
    var expected = 7;
    return {
      status: Boolean(result == expected),
      result: result,
      expected: expected
    };
  },
  multiplyThreeAddOne: function() {
    api.num(1);
    api.add();
    api.num(2);
    api.multiply();
    api.num(3);
    api.multiply();
    api.num(3);
    var result = api.calculate();
    var expected = 19;
    return {
      status: Boolean(result == expected),
      result: result,
      expected: expected
    };
  },
  multiplyFourDivideByTwo: function() {
    api.multiply();
    api.num(2);
    api.multiply();
    api.num(2);
    api.multiply();
    api.num(2);
    api.multiply();
    api.num(2);
    api.divide(2);
    api.num(2);
    var result = api.calculate();
    var expected = 8;
    return {
      status: Boolean(result == expected),
      result: result,
      expected: expected
    };
  },
  allFourOperatorsWithFiveNumbers: function() {
    api.num(2);
    api.multiply();
    api.num(2);
    api.divide();
    api.num(2);
    api.minus();
    api.num(2);
    api.add();
    api.num(2);
    var result = api.calculate();
    var expected = -2;
    return {
      status: Boolean(result == expected),
      result: result,
      expected: expected
    };
  },
  allFourOperatorsWithFiveNumbers2: function() {
    api.num(2);
    api.minus();
    api.num(1);
    api.multiply();
    api.num(3);
    api.add();
    api.num(2);
    api.divide();
    api.num(2);
    var result = api.calculate();
    var expected = 0;
    return {
      status: Boolean(result == expected),
      result: result,
      expected: expected
    };
  },
  runTests: function() {
    dev.skipPrinting = true;
    for (var testname in test) {
      if(testname !== 'runTests'){
        var testResult = test[testname]();
        console.log(`Expected: ${testResult.expected}, Actual: ${testResult.result}`);
        if(testResult.status == true) {
          console.log(`%c${testname}: TEST PASSED\n\n`, 'color: green; font: bold;');
        } else {
          console.log(`%c${testname}: TEST FAILED\n\n`, 'color: red; font: bold;');
        }
        api.clear();
      }
        
    }
    dev.skipPrinting = false;
  }
}


