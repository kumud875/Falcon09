// JS code for countdown timer for upcoming Falcon 9 launch.

const countdownElement = document.getElementById('launch-countdown');
const launchDate = new Date('2024-10-07T20:22:00').getTime();  // October 7, 2024, 8:22 PM (local time)

const updateCountdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
    <h3>Countdown</h3>
    <div>${days}d ${hours}h ${minutes}m ${seconds}s</div>
  `;

  if (timeLeft < 0) {
    clearInterval(updateCountdown);
    countdownElement.innerHTML = "<h3>Launched!</h3>";
  }
}, 1000);


//JS for smooth scrolling between sections

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  