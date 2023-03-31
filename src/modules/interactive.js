

const strikeThrough = (index) => {  
  const tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
  const checkBoxes = document.querySelectorAll('.checkbox-input');
  const textInput = document.querySelectorAll('.text-input');
  if (checkBoxes[index].checked) {
    tasksArray[index].completed = true;
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));

    textInput[index].classList.add('strike-through');
  }
  else {
    textInput[index].classList.remove('strike-through');
    tasksArray[index].completed = false;
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
  }
};

export {strikeThrough}