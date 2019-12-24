class Shuffle {

  constructor({totalNumbers}){
    this.lotteryNumbers = this.generateNumbers(totalNumbers);
  }

  generateNumbers(totalNumbers) {
    let numbers = [];
    for(let i=0; i <= totalNumbers; i++){
      numbers[i] = i;
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
}

export default Shuffle;