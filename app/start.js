import Play from './play.js';

class Start {
    constructor() {
        this.root = document.querySelector('#root');
    }
    
    render() {
        this.root.innerHTML =  
        `<section class="init">
           <div class="init-start">
             <input type="number" id="ballsQuantity" name="ballsQuantity" min="10" max="90" step="10" value="90">
             <button id="startButton">Start!</button>
            </div>
        </section>`;
        return this;
    }

    startGame() {
        this.startButton = document.querySelector('#startButton'); 
        this.startButton = this.startButton.addEventListener('click', this.handlerStartGame.bind(this));
        return this;
    }

    handlerStartGame(e) {
        const ballsQuantity = document.querySelector('#ballsQuantity').value;  
        new Play({ballsQuantity}).render().initElements();
      }
}

export default Start;