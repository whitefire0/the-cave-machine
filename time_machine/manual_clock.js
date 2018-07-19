class TimePiece {
  constructor() {
    this.MAX_MINUTE_HAND = 9;
    this.MAX_DEC_MINUTE_HAND = 5;
    this.MAX_HOUR_HAND = 9;
    this.MAX_DEC_HOUR_HAND = 2;
    this.time_array = [];
  }

  setHours(hours) {
    // debugger;
    this.hours = this.ensureTwoDigits(hours.toString());
    this.setTimeArray(this.hours);
    return this;
  }

  setMinutes(minutes){
    this.minutes = this.ensureTwoDigits(minutes.toString());
    this.setTimeArray(this.minutes);
    return this;
  }

  setTimeArray(clockhand) {
    this.time_array.push(parseInt(clockhand[0]), parseInt(clockhand[1]));
  }

  moveMinuteHand() {
    if(this.time_array[0] == 2 && this.time_array[1] == 3 && this.time_array[2] == 5 && this.time_array[3] == 9) {
      debugger;
    }
    if(this.time_array[3] < this.MAX_MINUTE_HAND){
      this.time_array[3]++;
    } else {
      this.time_array[3] = 0;
      this.incrementDecMinutes();
    }
  }

  incrementDecMinutes() {
    if(this.time_array[2] < this.MAX_DEC_MINUTE_HAND){
      this.time_array[2]++;
    } else {
      this.time_array[2] = 0;
      this.incrementHours();
    }
  }

  incrementHours() {
    if(this.time_array[0] == 2) {
      this.MAX_HOUR_HAND = 6;
    }
    if(this.time_array[1] < this.MAX_HOUR_HAND){
      this.time_array[1]++;
    } else {
      if(this.time_array[0] == 2) {
        this.resetClock();
      } else {
        this.time_array[1] = 0;
        this.incrementDecHours();
      }
    }
  }

  incrementDecHours() {
    if(this.time_array[0] < this.MAX_DEC_HOUR_HAND){
      this.time_array[0]++;
    } else {
      this.time_array[0] = 0;
      this.resetClock();
    }
  }

  resetClock() {
    this.time_array.forEach(val => {
      val = 0;
    });
  }

  ensureTwoDigits(value) {
    if (value.length < 2) {
      return '0' + value;
    } else {
      return value;
    }
  }

  makeStringRepresentation() {
    this.representation = {
      hours: ensureTwoDigits(this.hours.toString()),
      minutes: ensureTwoDigits(this.minutes.toString()),
    
    };
  }
}

class AccurateTimeArray {
  constructor() {
    this.accurate_array = [];
    let time = new Date(2018, 7, 19, 20, 34, 0);
    let example = "Sun Aug 19 2018 20:34:00 GMT+0100 (British Summer Time)";
    
    let minutesInDay = 1440;
    let i = 0;
    let iTime = [];
    while (i < minutesInDay) {
      let timeString = time.toString();
      let time_array = [
        timeString[16],
        timeString[17],
        timeString[19],
        timeString[20]
      ]
      this.accurate_array.push(time_array);
      time.setSeconds(60);
      i++;
    } 
  }
}

let testPiece = new TimePiece().setHours(20).setMinutes(34);
console.log(testPiece.time_array);
let i = 0;
while(i < 500){
  testPiece.moveMinuteHand();
  console.log(testPiece.time_array);
  i++;
}



/*
class Clock {
  constructor(direction) {
    this.time = new TimePiece(20, 34);
    this.direction = direction === 'forwards' ? 60 : -60;
  }

  moveMinuteHand() {
    // this.time.setSeconds(this.direction);
  }
}

class TimeMachine {
  constructor(normalClock, brokenClock){
    this.normalClock = normalClock;
    this.brokenClock = brokenClock;
  }

  run() {
    let i = 0;
    while (i < 1440) {
      // this.normalClock.moveMinuteHand();
      // this.brokenClock.moveMinuteHand();
      this.checkSync();
      i++;
    }
  }

  checkSync() {
    // let aHours = this.normalClock.time.getHours();
    // let bHours = this.brokenClock.time.getHours();
    // let aMins = this.normalClock.time.getMinutes()
    // let bMins = this.brokenClock.time.getMinutes()
    if (aHours == bHours) {
      if ( aMins == bMins) {
        console.log('Time is equal!');
        console.log(`Normal Clock: ${aHours}:${aMins},\tBroken Clock: ${bHours}:${bMins}`);
      }
    }
  }
}

let normalClock = new Clock('forwards');
let brokenClock = new Clock('backwards');
let timeMachine = new TimeMachine(normalClock, brokenClock);
timeMachine.run();
*/