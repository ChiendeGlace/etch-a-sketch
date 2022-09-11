const body = document.querySelector('body');
const container = document.createElement('div');
const input = document.createElement('input');
input.type = 'number';
input.min = '1';
input.max = '64';
container.classList.add('container');
body.appendChild(input);
body.appendChild(container);
input.addEventListener('input', makeGrid); 
function makeGrid(e) {
  let n = e.target.value;
  console.log(n);
  for (let i = 0; i < n * n; i++) {
    let square = document.createElement('div');
    container.appendChild(square);
    square.classList.add('square');
    square.addEventListener('mouseover', giveColor);
    function giveColor(e) {
      square.style.backgroundColor = 'black';
    };
  }
  container.style.gridTemplateColumns = 'auto';
  container.style.gridTemplateRows = 'auto';
};




