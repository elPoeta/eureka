console.log("EUREKA - BINGO");
import Lottery from './lottery.js';
const lottery = new Lottery({totalNumbers: 99}).shuffleNumbers();
console.log(lottery.getShuffledNumbers());