document.querySelector('[data-create]').addEventListener('click', function() {
  const amount = document.querySelector('input').value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    document.querySelector('input').value = '';
  }
});

document.querySelector('[data-destroy]').addEventListener('click', function() {
  destroyBoxes();
});

function createBoxes(amount) {
  const boxes = document.getElementById('boxes');
  boxes.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = (i * 10 + 30) + 'px';
    box.style.height = (i * 10 + 30) + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  const boxes = document.getElementById('boxes');
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}