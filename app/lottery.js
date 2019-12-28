class Lottery {

  constructor({ballsQuantity}){
    this.lotteryNumbers = this.generateNumbers(ballsQuantity);
  }

  generateNumbers(ballsQuantity) {
    let numbers = [];
    for(let i=0; i < ballsQuantity; i++){
      numbers[i] = i+1;
   }
   return numbers;
  }

  shuffleNumbers() {
    const length = this.lotteryNumbers.length;
    for (let i = 0; i < length; i++) {
        const x = this.lotteryNumbers[i];
        const y = Math.floor(Math.random() * length);
        const z = this.lotteryNumbers[y];
        this.lotteryNumbers[i] = z;
        this.lotteryNumbers[y] = x;
    }
    return this;
  }

  getShuffledNumbers() {
    return this.lotteryNumbers;
  }

  getNumber() {
    return this.lotteryNumbers.shift();
  }
}

export default Lottery;