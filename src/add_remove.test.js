import { add, remove } from './modules/functions.js';

// set up the initial container with zero tasks
document.body.innerHTML = '<div class="main"><header>Todays To Do</header><hr><div class="add-task-container"><input type="text" class="add-task" placeholder="Press enter key to Add to your list..."><div class="add-button">&#8617;</div></div><hr><div class="tasks-container"><!-- here all the content will be created dinamically  --></div><footer class="clear-all-completed">Clear all completed</footer></div>';
const container = document.querySelector('.tasks-container');

describe('add function', () => {
  test('should add one task to the container', () => {
    add('Test task 1');
    expect(container.children.length).toBe(1);
  });

  test('the container should contain a task called Test task 2', () => {
    add('Test task 2');
    expect(container.innerHTML).toContain('Test task 2');
  });

  test('should add a third task to the container', () => {
    add('Test task 3');
    const container = document.querySelector('.tasks-container');
    expect(container.children.length).toBe(3);
  });
});

describe('remove function', () => {
  test('should remove one task from the container', () => {
    remove(0);
    expect(container.children.length).toBe(2);
  });

  test('should remove another task from the container', () => {
    remove(1);
    expect(container.children.length).toBe(1);
  });
});


describe('editing function', () => {
});

describe('updating completed function', () => {
});

describe('clear all completed function', () => {
});