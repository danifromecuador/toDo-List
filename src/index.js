import './style.css';

const tasksArray = [
  {
    description: 'task 1',
    completed: false,
    index: 1,
  },
  {
    description: 'task 2',
    completed: false,
    index: 3,
  },
  {
    description: 'task 3',
    completed: false,
    index: 2,
  },
];

const tasksContainer = document.querySelector('.tasks-container');
const render = () => {
  tasksArray.sort((a, b) => a.index - b.index);
  tasksContainer.innerHTML = '';
  for (let i = 0; i < tasksArray.length; i += 1) {
    const html = `
      <div class="task">
        <input type="checkbox" class="checkbox-input">
        <input type="text" class="text-input" value="${tasksArray[i].description}">
        <div class="drag-to-order">&#x22EE;</div>
      </div>
      <hr>
    `;
    tasksContainer.innerHTML += html;
  }
};

window.onload = render;
