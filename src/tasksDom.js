let taskItems;
let container;

export function containerTasks() {
    container = document.querySelector('.task-container');    
    return container;
}

export function NameTaskDom(val) {
    containerTasks();

    container.append(taskItems);

    const h3 = document.createElement('h3');
    h3.textContent = val;
    h3.classList.add('name-task');

    return h3;
}

export function dueDateDom(val) {
    createTaskItems();
    containerTasks();

    container.append(taskItems);

    const para = document.createElement('p');
    para.textContent = val;
    para.classList.add('due-date');

    return taskItems;
}

export function priorityDom(val) {
    createTaskItems();
    containerTasks();
    
    container.append(taskItems);

    const para = document.createElement('p');
    para.textContent = val;
    para.classList.add('priority-lv');

    return taskItems;
}

export function createTaskItems(val1, val2, val3) {
    containerTasks();

    const h3 = document.createElement('h3');
    h3.textContent = val1;
    h3.classList.add('name-task');

    const para1 = document.createElement('p');
    para1.textContent = val2;
    para1.classList.add('due-date');

    const para2 = document.createElement('p');
    para2.textContent = val3;
    para2.classList.add('due-date');

    taskItems = document.createElement('div');
    taskItems.classList.add('task-item');
    taskItems.append(h3, para1, para2);
    container.append(taskItems);
    return taskItems;
}