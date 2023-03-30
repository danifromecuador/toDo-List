const completed = () => {
  const checkboxInput = document.querySelectorAll('.checkbox-input');
  const textInput = document.querySelectorAll('.text-input');

  for (let i = 0; i < checkboxInput.length; i += 1) {
    checkboxInput[i].addEventListener('change', () => {
      if (checkboxInput[i].checked) {
        textInput[i].style.textDecoration = 'line-through';
      } else textInput[i].style.textDecoration = 'none';
    });
  }
};

export default completed;