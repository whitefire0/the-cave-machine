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
    this.time_array[3]++;
  }

  incrementDecMinutes() {

  }

  incrementHours() {

  }

  incrementDecHours() {

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

let t = new TimePiece().setHours(20).setMinutes(34);
console.log(t);
t.moveMinuteHand();
console.log(t);
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