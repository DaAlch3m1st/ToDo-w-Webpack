import { deleteTask } from './events'

let taskItems;
let container;

export function containerTasks() {
    container = document.querySelector('.task-container');    
    return container;
}

export function NameTask(val, prior) {
    // this function works to display the name and the level of priority in the page
    // this function doesn't work with edited tasks
    const h3 = document.createElement('h3');
    const strong = document.createElement('strong');
    strong.textContent = prior;

    if (prior === 'low') {
        strong.textContent = '! ';
    } else if (prior === 'medium') {
        strong.textContent = '!! ';
    } else if (prior === 'high') {
        strong.textContent = '!!! '
    }
    
    h3.appendChild(strong);
    const textNode = document.createTextNode(val);
    h3.appendChild(textNode);
    h3.classList.add('name-task');
    
    return h3;
}

export function dueDate(val) {
    const para = document.createElement('p');
    para.textContent = val;
    para.classList.add('due-date');
    return para;
}

function deleteButton() {
    const i = document.createElement('i');
    i.classList.add('delete-task', 'fa-duotone', 'fa-solid', 'fa-xmark');  
    return i;
}

function doneCheckMark() {
    const input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('checkmark');
    return input;
}

function editButton() {
    const i = document.createElement('i');
    i.classList.add('edit-task', 'fa-solid', 'fa-pen-to-square');
    return i;
}

function detailBtn() {
    const button = document.createElement('button');
    button.textContent = 'More Details';
    button.classList.add('detail-btn');
    return button;
}

export function appendItems(val1, val2, val3, id) {
    containerTasks();
    const checkMark = doneCheckMark();
    const nameDateContainer = document.createElement('div');
    const name = NameTask(val1, val3);
    const date = dueDate(val2);
    nameDateContainer.append(checkMark, name, date);
    const deleteBtn = deleteButton();
    const editBtn = editButton();
    const detailsBtn = detailBtn();

    taskItems = document.createElement('div');
    taskItems.dataset.id = id;
    taskItems.classList.add('task-item', `prior-${val3}`);
    nameDateContainer.classList.add('task-check-name-date');
    taskItems.append(nameDateContainer, deleteBtn, editBtn, detailsBtn);
    container.append(taskItems);

    return taskItems;
}