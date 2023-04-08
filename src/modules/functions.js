// RENDER
export const render = () => {
  const tasksContainer = document.querySelector('.tasks-container');
  const tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
  tasksArray.sort((a, b) => a.index - b.index);
  tasksContainer.innerHTML = '';
  for (let i = 0; i < tasksArray.length; i += 1) {
    const html = `
      <div class="task">
        <input type="checkbox" class="checkbox-input" ${checked}>
        <input type="text" class="text-input ${strike}" value="${tasksArray[i].description}">        
        <!-- <div class="drag-to-order">&#x1F4BE;&#xFE0E;</div>  -->
        <input type="checkbox" class="checkbox-input">
        <input type="text" class="text-input" value="${tasksArray[i].description}">
        <div class="delete-task-icon">&#x1F5D1;</div>
      </div>
      
    `;
    tasksContainer.innerHTML += html;
  }
};

// ADD A NEW TASK
export const add = (addTask) => {
  const addTaskInput = document.querySelector('.add-task');
  if (addTask !== '') {
    const tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
    tasksArray.push({ completed: false, description: addTask });
    for (let i = 1; i <= tasksArray.length; i += 1) {
      tasksArray[i - 1].index = i;
    }
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
  }
  addTaskInput.value = '';
  render();
};

// DELETE A TASK
export const remove = (index) => {
  const tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
  tasksArray.splice(index, 1);
  for (let i = 1; i <= tasksArray.length; i += 1) {
    tasksArray[i - 1].index = i;
  }
  localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
  render();
};

// EDIT A TASK
export const edit = (index, userInput) => {
  const tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
  const textInputs = document.querySelectorAll('.text-input');
  textInputs[index].addEventListener('change', () => {
    tasksArray[index].description = textInputs[index].value || userInput;
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
  });
};
