const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// Set target date (15 days from now)
let targetDate = localStorage.getItem("countdownTarget");

if (!targetDate) {
  targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 15);
  localStorage.setItem("countdownTarget", targetDate);
} else {
  targetDate = new Date(targetDate);
}

function updateCountdown() {
  let now = new Date();
  let timeDiff = targetDate - now;

  if (timeDiff <= 0) {
    clearInterval(countdownInterval);
    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    return;
  }

  let d = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let h = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((timeDiff % (1000 * 60)) / 1000);

  days.textContent = d < 10 ? `0${d}` : d;
  hours.textContent = h < 10 ? `0${h}` : h;
  minutes.textContent = m < 10 ? `0${m}` : m;
  seconds.textContent = s < 10 ? `0${s}` : s;
}

updateCountdown(); // Run initially to avoid 1-sec delay
const countdownInterval = setInterval(updateCountdown, 1000);
