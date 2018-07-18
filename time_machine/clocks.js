// var clock1 = new Date(2018, 7, 18, 20, 34, 0);
// var clock2 = new Date(2018, 7, 18, 20, 34, 0);

// console.log(clock1);

// var i = 0;
// while (i < 1440) {
//   clock1.setSeconds(60);
//   clock2.setSeconds(-60);
//   var clock1hours = clock1.getHours();
//   var clock1mins = clock1.getMinutes();
//   var clock2hours = clock2.getHours();
//   var clock2mins = clock2.getMinutes();
//   console.log(`${clock1hours}:${clock1mins}\t${clock2hours}:${clock2mins}`);
//   if(clock1hours == clock2hours && clock1mins == clock2mins){
//     console.log("\n\n\n\n\n\n\nequal time\n\n\n\n\n\n\n");
//   }
//   i++;
// }

class Clock {
  constructor(direction) {
    this.time = new Date(2018, 7, 18, 20, 34, 0);
    this.direction = direction === 'forwards' ? 60 : -60;
  }

  moveMinuteHand() {
    this.time.setSeconds(this.direction);
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
      this.normalClock.moveMinuteHand();
      this.brokenClock.moveMinuteHand();
      this.checkSync();
      i++;
    }
  }

  checkSync() {
    let aHours = this.normalClock.time.getHours();
    let bHours = this.brokenClock.time.getHours();
    let aMins = this.normalClock.time.getMinutes()
    let bMins = this.brokenClock.time.getMinutes()
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