class TODO {
  strikeThrough(index) {
    this.tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
    const checkBoxes = document.querySelectorAll('.checkbox-input');
    if (checkBoxes[index].checked) {
      this.tasksArray[index].completed = true;
      localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
    } else {
      this.tasksArray[index].completed = false;
      localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
    }
  }
}

const clearAll = () => {
  const tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
  for (let i = 0; i < tasksArray.length; i += 1) {
    if (tasksArray[i].completed) {
      tasksArray.splice(i, 1);
      i -= 1;
    }
  }
  for (let i = 1; i <= tasksArray.length; i += 1) {
    tasksArray[i - 1].index = i;
  }
  localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
};

export { TODO, clearAll };