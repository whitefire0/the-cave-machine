class TimePiece {
  constructor() {
    
  }

  setHours(hours) {
    // debugger;
    this.hours = hours;
    return this;
  }

  setMinutes(minutes){
    this.minutes = minutes;
    return this;
  }

  makeArrayRepresentation() {

  }

  moveMinuteHand() {

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