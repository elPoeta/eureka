import Play from './play.js';

class Start {
    constructor() {
        this.root = document.querySelector('#root');
    }
    
    render() {
        this.root.innerHTML =  
        `<section class="init">
           <div class="init-start">
             <input type="number" id="ballsQuantity" name="ballsQuantity" min="9" max="99" step="10" value="99">
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
        Play.render({ballsQuantity});
      }
}

export default Start;