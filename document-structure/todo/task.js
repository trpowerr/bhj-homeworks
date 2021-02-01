const form = document.querySelector('.tasks__control');
const tasksList = document.getElementById('tasks__list');
let keyTaskNumber = localStorage.getItem('keyTaskNumber');

const createElement = (value,numberID) =>{ 
    const task = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskRemove = document.createElement('a');
    task.className = 'task';
    taskTitle.className = 'task__title';
    taskRemove.className = 'task__remove';
    taskTitle.innerText = value;
    taskRemove.innerHTML = '&times;';
    task.id = numberID;
    task.insertAdjacentElement('afterBegin', taskTitle);
    task.insertAdjacentElement('beforeEnd', taskRemove);
    tasksList.insertAdjacentElement('afterBegin', task);
}

if(keyTaskNumber === null) {
    keyTaskNumber = 0;
}else{
    for (let i = 0; i < keyTaskNumber; i++) {
        const value = localStorage.getItem(i);
        if(value === null){
            continue
        }
        createElement(value,i);
    }
}
const sentThing = event => {
    event.preventDefault();
    const value = document.querySelector('.tasks__input').value;
    if (value === '') {
        return
    }
    createElement(value,keyTaskNumber);
    localStorage.setItem(keyTaskNumber, value);
    keyTaskNumber++;
    localStorage.setItem('keyTaskNumber', keyTaskNumber);
    document.querySelector('.tasks__input').value = '';
}

const deleteTask = (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.classList.contains('task__remove')) {
        const key = target.parentElement.id;
        localStorage.removeItem(key);
        target.parentElement.remove();
    }
}

form.addEventListener('submit', sentThing);
tasksList.addEventListener('click', deleteTask);