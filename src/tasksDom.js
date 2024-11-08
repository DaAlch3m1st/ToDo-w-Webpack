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

// soon this function name will be 'home'
export function home(val1, val2, val3) { 
    containerTasks();

    const para1 = document.createElement('p');
    para1.textContent = val1;
    para1.classList.add('name-task');

    const para2 = document.createElement('p');
    para2.textContent = val2;
    para2.classList.add('due-date');

    const para3 = document.createElement('p');
    para3.textContent = val3;
    para3.classList.add('priority');

    taskItems = document.createElement('div');
    taskItems.classList.add('task-item');
    taskItems.append(para1, para2, para3);
    container.append(taskItems);
    
    if (para3.textContent === 'high') {
        taskItems.classList.add('prior-high');
    } else if (para3.textContent === 'medium') {
        taskItems.classList.add('prior-medium');
    } else if (para3.textContent === 'low') {
        taskItems.classList.add('prior-low');
    }
    return taskItems;
}