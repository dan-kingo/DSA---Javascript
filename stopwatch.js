// create a stopwatch object

function Stopwatch() {
  let startTime,
    endTime,
    duration = 0,
    running;

  this.reset = function () {
    startTime = 0;
    endTime = 0;
    duration = 0;
    running = false;
  };

  this.start = function () {
    if (running) {
      console.error("Stopwatch already started!");
    }
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) {
      console.error("Stopwatch is not started!");
    }
    running = false;
    endTime = new Date();
    let seconds = (endTime.getTime() - startTime.getTime()) / 1000;

    duration += seconds;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
