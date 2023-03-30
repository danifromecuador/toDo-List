const array = JSON.parse(localStorage.getItem('array')) || [];
const addTask = document.querySelector('.add-task');
let indexCounter = JSON.parse(localStorage.getItem('indexCounter')) || 0;
if (array.length === 0) indexCounter = 0;

const add = () => {
  if (addTask.value) {
    array.push({
      description: addTask.value,
      completed: false,
      index: indexCounter,
    });
    indexCounter += 1;
    localStorage.setItem('indexCounter', JSON.stringify(indexCounter));

    localStorage.setItem('array', JSON.stringify(array));
    addTask.value = '';
  }
};

export default add;