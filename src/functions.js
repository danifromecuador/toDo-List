// ADD A NEW TASK
const tasksArray = [];
let indexNumber = 0;
const addTask = document.querySelector('.add-task'); // the user types a new task

const add = () => {
  if (addTask.value != '') {
    tasksArray.push({ completed: true, description: addTask.value, index: indexNumber });
    indexNumber++;
    console.log(tasksArray, indexNumber);
  }
  addTask.value = '';
}

// RENDER
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

// EXPORT FUNCTIONS
export { add, render };