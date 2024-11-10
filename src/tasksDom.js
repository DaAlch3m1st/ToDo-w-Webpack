let taskItems;
let container;

export function containerTasks() {
    container = document.querySelector('.task-container');    
    return container;
}

export function NameTask(val, prior) {
    // this function works to display the name and the level of priority in the page
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
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = "checkbox";
    label.appendChild(input);

    label.classList.add('checkMarkCont');
    input.classList.add('checkmark');
    return label
}

export function appendItems(val1, val2, val3) {
    containerTasks();
    const nameDateContainer = document.createElement('div');
    const name = NameTask(val1, val3);
    const date = dueDate(val2);
    nameDateContainer.append(name, date);
    const deleteBtn = deleteButton();
    const checkMark = doneCheckMark();

    taskItems = document.createElement('div');
    taskItems.classList.add('task-item', `prior-${val3}`);
    taskItems.append(checkMark, nameDateContainer, deleteBtn);
    container.append(taskItems);

    return taskItems;
}