console.log("EUREKA - BINGO");
import Lottery from './lottery.js';
const lottery = new Lottery({totalNumbers: 99}).shuffleNumbers();
console.log(lottery.getShuffledNumbers());
const luckyNumber = document.querySelector('#number');
const machineCage = document.querySelector('#machineCage');
const spin = document.querySelector('.spin');
const numbers = document.querySelector('.numbers');

const showNumber = e => {
  if(!spin.classList.contains('hidden')) {
    luckyNumber.innerHTML = lottery.getNumber();
    numbers.classList.remove('hidden');
    spin.classList.add('hidden');
  } else {
    numbers.classList.add('hidden');
    spin.classList.remove('hidden');
  }
}

machineCage.addEventListener('click', showNumber);



