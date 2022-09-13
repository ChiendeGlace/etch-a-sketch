const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const submit = document.querySelector('#submit');
submit.addEventListener('click', makeGrid); 
function makeGrid(e) {
  let n = e.target.value;
  console.log('Hello world');
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
};




