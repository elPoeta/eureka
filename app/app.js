console.log("EUREKA - BINGO");
import Shuffle from './shuffle.js';
const shuffle = new Shuffle({totalNumbers: 99}).shuffleNumbers();
console.log(shuffle.getShuffledNumbers());