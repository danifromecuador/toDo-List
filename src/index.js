// import './style.css';
import {
  add, render, remove, edit,
} from './modules/functions.js';

// ADD A NEW TASK
const addButton = document.querySelector('.add-button'); // clicking add button
addButton.addEventListener('click', () => {
  const addTask = document.querySelector('.add-task');
  add(addTask);
});

const addTask = document.querySelector('.add-task'); // typing enter key
addTask.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    const addTask = document.querySelector('.add-task').value;
    add(addTask);
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

// FIRST RENDER WHEN THE PAGE LOADS
window.onload = render;
