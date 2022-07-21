function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = () => {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;

    startTime = new Date();
  };

  this.stop = () => {
    if (!running) throw new Error("Stopwatch is not started.");

    running = false;

    endTime = new Date();

    duration += (endTime.getTime() - startTime.getTime()) / 1000;
  };

  this.reset = () => {
    startTime, endTime, running, (duration = 0);
  };

  Object.defineProperty(this, "duration", {
    get: () => {
      return duration;
    },
  });
}
