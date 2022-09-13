const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('input');
const rangeValue = document.querySelector('#range-value');
const black = document.querySelector('#black');
const rainbow = document.querySelector('#rainbow');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
input.addEventListener('change', makeGrid);
black.addEventListener('click', changeColorBlack);
eraser.addEventListener('click', changeColorWhite);
rainbow.addEventListener('click', changeColor);
clear.addEventListener('click', clearGrid);

function changeColor(e) {
  wrapper.childNodes.forEach(div => div.addEventListener('mouseover', randomColor));
  function randomColor(e) {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
};

function changeColorBlack(e) {
  wrapper.childNodes.forEach(div => div.addEventListener('mouseover', randomColor));
  function randomColor(e) {
    this.style.backgroundColor = `black`;
  }
};

function changeColorWhite(e) {
  wrapper.childNodes.forEach(div => div.addEventListener('mouseover', randomColor));
  function randomColor(e) {
    this.style.backgroundColor = 'white';
  }
};

function clearGrid(e) {
  wrapper.childNodes.forEach(div => div.style.backgroundColor = 'white');
};

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
  };
  wrapper.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  wrapper.style.gridTemplateRows = `repeat(${n}, 1fr)`;
  if (input.value !== 0) {
    rangeValue.textContent = `Grid size: ${input.value} X ${input.value}`;
  };
};







