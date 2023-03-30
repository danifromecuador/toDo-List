const tasksContainer = document.querySelector('.tasks-container');

const render = () => {
  const array = JSON.parse(localStorage.getItem('array')) || [];
  tasksContainer.innerHTML = '';
  for (let i = 0; i < array.length; i += 1) {
    const html = `
      <div class="task">
        <input type="checkbox" class="checkbox-input">
        <input type="text" class="text-input" value="${array[i].description}">
        <div class="drag-to-order">&#x22EE;</div>
      </div>
      <hr>
    `;
    tasksContainer.innerHTML += html;
  }
};

export default render;