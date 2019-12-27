import Lottery from './lottery.js';

class Play {
    constructor() {
        console.log("PLAY - EUREKA - BINGO");
    }

    render({ballsQuantity}) {
       console.log("Qty ",ballsQuantity);
    }
}

export default new Play();

/*
  <section id="ball-numbers" class="cage"> 
  <div id="machineCage" class="machine-cage">
    <div class="numbers hidden">
      <span id="number" class="number"></span>
    </div>
    <div class="spin">
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    </div>
   </div> 
   </section>
   */