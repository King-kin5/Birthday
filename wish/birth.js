const balloonsContainer = document.querySelector('.balloons');
const colors = ['#ff6347', '#ffde00', '#00b8d9', '#00b8d9', '#00b8d9'];

for (let i = 0; i < 20; i++) {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.animationDelay = `${Math.random() * 2}s`;
  balloon.style.backgroundColor = colors[i % colors.length];
  balloonsContainer.appendChild(balloon);
}

const balloons = document.querySelectorAll('.balloon');