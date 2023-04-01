// import './style.css';
import {
  add, render, remove, edit,
} from './modules/functions.js';

import { strikeThrough, clearAll } from './modules/interactive.js';

// ADD A NEW TASK
const addButton = document.querySelector('.add-button'); // clicking add button
addButton.addEventListener('click', () => {
  add();
  render();
});

const addTask = document.querySelector('.add-task'); // typing enter key
addTask.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    add();
    render();
  }
});

// DELETE A TASK
const tasksContainer = document.querySelector('.tasks-container');

tasksContainer.addEventListener('click', (event) => {
  const deleteTaskIcon = event.target.closest('.delete-task-icon');
  if (deleteTaskIcon) {
    const deleteTaskIcons = tasksContainer.querySelectorAll('.delete-task-icon');
    const index = Array.from(deleteTaskIcons).indexOf(deleteTaskIcon);
    remove(index);
    render();
  }
});

// EDIT A TASK
tasksContainer.addEventListener('click', (event) => {
  const textInput = event.target.closest('.text-input');
  if (textInput) {
    const textInputs = tasksContainer.querySelectorAll('.text-input');
    const index = Array.from(textInputs).indexOf(textInput);
    edit(index);
  }
});

// STRIKETHROUGH A COMPLETED TASK
tasksContainer.addEventListener('click', (event) => {
  const checkBox = event.target.closest('.checkbox-input');
  if (checkBox) {
    const checkBoxes = tasksContainer.querySelectorAll('.checkbox-input');
    const index = Array.from(checkBoxes).indexOf(checkBox);
    strikeThrough(index);
    render();
  }
});

// CLEAR ALL COMPLETED TASKS
const clearAllButton = document.querySelector('.clear-all-completed');
clearAllButton.addEventListener('click', () => {
  clearAll();
  render();
});




// FIRST RENDER WHEN THE PAGE LOADS
window.onload = render;
