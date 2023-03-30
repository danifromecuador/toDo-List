import './style.css';
import render from './modules/render.js';
import add from './modules/add.js';
import completed from './modules/completed.js';

// RENDER WHEN THE PAGE LOADS
render();

// ADD A NEW TASK WHEN CLICK ON ENTER BUTTON
const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => {
  add();
  render();
});

// ADD A NEW TASK WHEN TYPE ENTER KEY
const addTask = document.querySelector('.add-task');
addTask.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    add();
    render();
  }
});

// STRIKETHROUGH A COMPLETED TASK IF CHECKBOX IS CHECKED
const tasksContainer = document.querySelector('.tasks-container');
tasksContainer.addEventListener('click', () => {
  completed();
});

// CLEAR ALL COMPLETED TASKS WHEN CLICK ON CLEAR ALL COMPLETED DIV
const clearAllCompleted = document.querySelector('.clear-all-completed');
clearAllCompleted.addEventListener('click', () => {
  clearAllCompleted.innerHTML = 'This function will be developed comming soon';
  setTimeout(() => {
    clearAllCompleted.innerHTML = 'Clear all completed';
  }, 2000);
});
