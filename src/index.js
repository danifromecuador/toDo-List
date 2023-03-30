// import './style.css';
import {add, render} from './functions.js';

// ADD A NEW TASK
const addButton = document.querySelector('.add-button'); // click for add the new task
addButton.addEventListener('click', () => {
  add();
  render();
  
});

const addTask = document.querySelector('.add-task'); // the user types a new task
addTask.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    add();
    render();
  }
});

// FIRST RENDER WHEN THE PAGE LOADS
window.onload = render;
