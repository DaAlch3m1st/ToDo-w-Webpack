import { format, compareAsc } from "date-fns";

export function openModal() {
    openModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add('modal--show');
    })
} 

export function closeModal() {
    closeModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal--show');
    })
}

let taskItems;

export function createTaskItems() {
    taskItems = document.createElement('div');
    taskItems.classList.add('task-item');
}

export function appendTask() {
    const addTaskBtn = document.getElementById('addTaskBtn');

    addTaskBtn.addEventListener('click', () => {
        createTaskItems();
        const taskNameInput = document.getElementById('taskName').value.trim();
        const h3 = document.createElement('h3')

        if (taskNameInput === '') {
            console.log("no input field on task name");
        } else {
            localStorage.setItem('name', taskNameInput);
            console.log('Name -> ', taskNameInput);

            const taskContainer = document.querySelector('.task-container');
            h3.innerHTML = taskNameInput;
            taskContainer.append(taskItems);
            taskItems.append(h3);
            return taskContainer;
        }
    })
}

export function dateTask() {
    const addTaskBtn = document.getElementById('addTaskBtn');

    addTaskBtn.addEventListener('click', () => {
        const dateInput = document.getElementById('date').value;
        const para = document.createElement('p');

        if (dateInput === '') {
           console.log('no input field on date'); 
        } else {
            console.log('Due date -> ', dateInput);

            const taskContainer = document.querySelector('.task-container');
            para.innerHTML = dateInput;
            taskContainer.append(taskItems);
            taskItems.append(para);
            return taskContainer;
        }
    })
}

export function priorityTask() {
    const addTaskBtn = document.getElementById('addTaskBtn');

    addTaskBtn.addEventListener('click', () => {
        const radioCheck = document.querySelector('input[name="priority"]:checked').value;
        const para = document.createElement('p');

        if (radioCheck === '') {
            console.log('no input field on priority'); 
         } else {
            console.log('Priority -> ', radioCheck);
 
            const taskContainer = document.querySelector('.task-container');
            para.innerHTML = radioCheck;
            taskContainer.append(taskItems);
            taskItems.append(para);
            return taskContainer;
         }
    })
}

