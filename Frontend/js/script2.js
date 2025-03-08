const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// Set target date (15 days from now)
const targetDate = new Date("2025-03-22T00:00:00Z"); // YYYY-MM-DDTHH:MM:SSZ (UTC Time)

function updateCountdown() {
  let now = new Date(); // Get current time
  let timeDiff = targetDate - now; // Difference in milliseconds

  if (timeDiff <= 0) {
    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    clearInterval(countdownInterval);
    return;
    // Redirect or show a launch button
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

updateCountdown(); // Run immediately to avoid delay
const countdownInterval = setInterval(updateCountdown, 1000);
