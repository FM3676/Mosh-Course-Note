// !!! Premature optimization is the root of all evils. !!!

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, "duration", {
    get: () => duration,
    //!! set: (value) => { duration = value;} !!
  });
  Object.defineProperty(this, "startTime", {
    get: () => startTime,
  });
  Object.defineProperty(this, "endTime", {
    get: () => endTime,
  });
  Object.defineProperty(this, "running", {
    get: () => running,
  });
}

Stopwatch.prototype.start = () => {
  if (this.running) throw new Error("Stopwatch has already started.");

  this.running = true;

  this.startTime = new Date();
};

Stopwatch.prototype.stop = () => {
  if (!this.running) throw new Error("Stopwatch is not started.");

  this.running = false;

  this.endTime = new Date();

  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
  duration += seconds;
  // We can't write this.durations += seconds. We didn't write the setter.
};

Stopwatch.prototype.reset = () => {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  duration = 0;
};

// We could add a setter  for duration, so we can write this.duration = 0.
// But it's a bad idea.

const sw = new Stopwatch();
sw.duration = 10;
// See, we could change the value of duration at the beginning. It's bad.
// That's why we use ABSTRACTION!!!!
// We can hide the unnecessary porperties and methods.
// Expose very few methods, without missing the state.

// We won't create thousands of StopWatch instance in memories, it's bad idea to
// put these all in prototype.

// So now actually, this StopWatch is now useless

// !!! Premature optimization is the root of all evils. !!!
