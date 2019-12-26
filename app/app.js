console.log("EUREKA - BINGO");
import Lottery from './lottery.js';
const totalNumbers = 3;
const lottery = new Lottery({totalNumbers}).shuffleNumbers();
console.log(lottery.getShuffledNumbers());
const luckyNumber = document.querySelector('#number');
const machineCage = document.querySelector('#machineCage');
const spin = document.querySelector('.spin');
const numbers = document.querySelector('.numbers');
let tableOfNumbers = [];
let numberShift
const showNumber = e => {
  
  if(!spin.classList.contains('hidden')) {
       numberShift = lottery.getNumber();
      if(typeof(numberShift) == 'number') {
        tableOfNumbers.push(numberShift);
        luckyNumber.innerHTML = numberShift
        numbers.classList.remove('hidden');
        spin.classList.add('hidden');
      }
  } else if(tableOfNumbers.length-1 < totalNumbers){
      numbers.classList.add('hidden');
      spin.classList.remove('hidden');
  }
}

machineCage.addEventListener('click', showNumber);



