import Start from './start.js';

class Menu {

  constructor(){
   this.root = document.querySelector('#root');
   this.menuLinks = document.querySelector('#menuLinks');
   this.menuLinks.addEventListener('click', e =>{
    if(e.target.id === 'newGame') {
        this.newGame();
    }
   });
  }

  newGame() {
    new Start().render().startGame();
    return this;
  }
}

export default Menu;