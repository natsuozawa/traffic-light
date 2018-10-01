import './index.scss';

const start = document.getElementById('start');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

const brighten = (elem) => {
  elem.style.filter = 'brightness(1)';
}

const darken = (elem) => {
  elem.style.filter = 'brightness(0.5)';
}

const eventListener = () => {
  start.removeEventListener('click', eventListener); //remove this event listener until all jobs are done here

  brighten(red);
  new Promise(resolve => setTimeout(() => resolve(darken(red)), 1500)
  ).then(() => {
    brighten(yellow);
    return new Promise(resolve => setTimeout(() => resolve(darken(yellow)), 1500));
  }).then(() => {
    brighten(green);
    return new Promise(resolve => setTimeout(() => resolve(darken(green)), 1500));
  }).then(() => {
    start.addEventListener('click', eventListener); //readd this event listener since all jobs are done
  });
};

start.addEventListener('click', eventListener); //add event listener by default