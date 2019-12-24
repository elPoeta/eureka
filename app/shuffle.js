class Shuffle {
  constructor({totalNumbers}){
    this.lotery = this.generateNumbers(totalNumbers);
  }

  generateNumbers(totalNumbers) {
    let numbers = [];
    for(let i=0; i <= totalNumbers; i++){
      numbers[i] = i;
   }
   return numbers;
  }

  shuffleNumbers() {
    const length = this.lotery.length
    for (let i = 0; i < length; i++) {
        const x = this.lotery[i]
        const y = Math.floor(Math.random() * length)
        const z = this.lotery[y]
        this.lotery[i] = z
        this.lotery[y] = x
    }
    return this;
  }

  getShuffledNumbers() {
    return this.lotery;
  }
}

export default Shuffle;