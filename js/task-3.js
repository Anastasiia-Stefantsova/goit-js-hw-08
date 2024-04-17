const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
input.addEventListener('input', function() {
const value = input.value.trim();
  if (value === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = value;
  }
});