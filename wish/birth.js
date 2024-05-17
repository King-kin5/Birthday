const balloonsContainer = document.querySelector(".balloons");
const colors = ["#ff6347", "#ffde00", "#00b8d9", "#00b8d9", "#00b8d9"];

for (let i = 0; i < 20; i++) {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.animationDelay = `${Math.random() * 2}s`;
  balloon.style.backgroundColor = colors[i % colors.length];
  balloonsContainer.appendChild(balloon);
}

const balloons = document.querySelectorAll(".balloon");

const throwConfetti = () => {
  confetti({
    particleCount: 500, // Increase the number of particles
    spread: 150, // Increase the spread
    startVelocity: 30, // Increase the start velocity
    origin: { y: 0.6 },
  });
};

throwConfetti();

setInterval(() => {
  throwConfetti();
}, 7000); // Trigger the confetti effect every 1 second
