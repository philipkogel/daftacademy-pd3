const input = prompt("Enter time", "20:30:15");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

if (input === null) {
  alert("Try again ;)");
  window.location.reload();
} else {
  let values = input.split(":");
  let h = values[0];
  let m = values[1];
  let s = values[2];

  function checkTime(n) {
    return n > 9 ? "" + n : "0" + n;
  }

  function* hour() {
    let hr = h;
    while (true) {
      if (hr == 24) {
        hr = 0;
        hours.innerHTML = checkTime(hr);
      }
      yield hr++;
      hours.innerHTML = checkTime(hr);
    }
  }

  function* minute() {
    let min = m;
    while (true) {
      if (min == 60) {
        min = 0;
        minutes.innerHTML = checkTime(min);
        hrFunction.next();
      }
      yield min++;
      minutes.innerHTML = checkTime(min);
    }
  }

  function* second() {
    let sec = s;
    while (true) {
      if (sec == 60) {
        sec = 0;
        seconds.innerHTML = checkTime(sec);
        minFunction.next();
      }
      yield sec++;
      seconds.innerHTML = checkTime(sec);
    }
  }

  const secFunction = second();
  const minFunction = minute();
  const hrFunction = hour();

  let start = function() {
    seconds.innerHTML = s;
    minutes.innerHTML = m;
    hours.innerHTML = h;
    console.log(minFunction.next()); //to set function
    console.log(hrFunction.next()); //to set function
    console.log(secFunction.next()); //to set function
    setInterval(function() {
      console.log(secFunction.next());
    }, 1000);
  };
  start();
}
