import Lottery from './lottery.js';

class Play {
    constructor({ballsQuantity}) {
        this.root = document.querySelector('#root');
        this.lottery = new Lottery({ballsQuantity});
        this.ballsQuantity = ballsQuantity;
    }

    render() {
       this.root.innerHTML =
       `  <section id="ball-numbers" class="cage"> 
       <div id="machineCage" class="machine-cage">
         <div class="numbers hidden">
           <span id="number" class="number"></span>
         </div>
         <div class="spin">
         ${Array.from(Array(18)).map(e =>(
             `<div class="ball"></div>`
         )).join('')}       
         </div>
        </div> 
        </section>
        <section id="board"></section>`;
        return this; 
    }

    initElements() {
        this.lottery.shuffleNumbers();
        this.luckyNumber = document.querySelector('#number');
        this.machineCage = document.querySelector('#machineCage');
        this.spin = document.querySelector('.spin');
        this.numbers = document.querySelector('.numbers');
        this.board = document.querySelector('#board');
        this.tableOfNumbers = [];
        this.numberShift;
        this.machineCage = this.machineCage.addEventListener('click', this.handlerBalls.bind(this));
        return this;
    }

    handlerBalls(e) {
        if(!this.spin.classList.contains('hidden')) {
            this.numberShift = this.lottery.getNumber();
           if(typeof(this.numberShift) == 'number') {
            this.tableOfNumbers.push(this.numberShift);
            this.luckyNumber.innerHTML = this.numberShift
            this.numbers.classList.remove('hidden');
            this.spin.classList.add('hidden');
            this.drawBoard();
           }
       } else if(this.tableOfNumbers.length < this.ballsQuantity){
           this.numbers.classList.add('hidden');
           this.spin.classList.remove('hidden');
       }
     }

    drawBoard() {
      this.board.innerHTML = 
      `${this.tableOfNumbers.map(ball =>(
        `<span>${ball} &nbsp;&nbsp;</span>`  
      )).join('')}`
    } 
}

export default Play;