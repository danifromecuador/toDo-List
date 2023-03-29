const array = JSON.parse(localStorage.getItem('array')) || [];
const addTask = document.querySelector('.add-task');
let indexCounter = JSON.parse(localStorage.getItem('indexCounter')) || 0;

const add = () => {
  if (addTask.value) {
    array.push({
      completed: false,
      description: addTask.value,
      index: indexCounter,
    });
    indexCounter++;
    localStorage.setItem('indexCounter', JSON.stringify(indexCounter));

    localStorage.setItem('array', JSON.stringify(array));
    console.log(array);
    addTask.value = '';
  }
};

export default add;