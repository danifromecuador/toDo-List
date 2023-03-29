// import './style.css';
import render from './modules/render.js';
import add from './modules/add.js';

const addButton = document.querySelector('.add-button');

addButton.addEventListener('click', () => {
  add();
  render();
});

render();
