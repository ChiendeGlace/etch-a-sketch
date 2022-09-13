const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('input');
const squares = document.querySelectorAll('.square');
const rangeValue = document.querySelector('#range-value');
const black = document.querySelector('#black');
const rainbow = document.querySelector('#rainbow');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');

input.addEventListener('change', makeGrid);

function makeGrid(e) {
  const squares = document.querySelectorAll('.square');
  for (let i = 0; i < squares.length; i++) {
    wrapper.removeChild(squares[i]);
  }
  let n = input.value;
  for (let i = 0; i < n * n; i++) {
    let square = document.createElement('div');
    wrapper.appendChild(square);
    square.classList.add('square');
    square.addEventListener('mouseover', giveColor);
    function giveColor(e) {
      square.style.backgroundColor = 'black';
    };
  }
  wrapper.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  wrapper.style.gridTemplateRows = `repeat(${n}, 1fr)`;
  if (input.value !== 0) {
    rangeValue.textContent = `Grid size: ${input.value} X ${input.value}`;
  };
};








