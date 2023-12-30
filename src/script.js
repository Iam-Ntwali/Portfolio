//  < !--Javascript -->

const countdownEl = document.getElementById("countdown");

const updateCountdown = () => {
  const countdownMessage = countdownUntilOnline();
  countdownEl.textContent = countdownMessage;
};

updateCountdown();
setInterval(updateCountdown, 1000);

function countdownUntilOnline() {
  // Get today's date
  const today = new Date();

  // Set the target date as December 29th of the current year
  const countDown = new Date(today.getFullYear(), 11, 31);

  // Calculate the time difference between today and CountDown Time
  const timeToLaunch = countDown.getTime() - today.getTime();

  // Convert the time difference to days, hours, minutes, and seconds
  const daysLeft = Math.floor(timeToLaunch / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeToLaunch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor(
    (timeToLaunch % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsLeft = Math.floor((timeToLaunch % (1000 * 60)) / 1000);

  // Format the countdown message
  const countdownMessage = `${daysLeft}Days |${hoursLeft}Hours: ${minutesLeft}Min: ${secondsLeft}Sec!|`;

  // Return the countdown message
  return countdownMessage;
}

const countdownMessage = countdownUntilOnline();
// console.log(countdownMessage);
