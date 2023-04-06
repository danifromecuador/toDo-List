const task1 = {
  completed: false,
  description: 'task 1',
  index: 1,
};

const task2 = {
  completed: false,
  description: 'task 2',
  index: 2,
};

const getFilledStorage = () => {
  const localStorage = [];
  localStorage.push(task1);
  localStorage.push(task2);
  return localStorage;
};

module.exports = getFilledStorage;