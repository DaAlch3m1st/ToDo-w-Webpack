import { format, compareAsc } from "date-fns";
import { local } from "./localstorage";

export let bookmarks = [];
export let updates = false;

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

function id(number) {
    console.log("number => ",number);
    bookmarks.push({id: number});
    console.log(bookmarks);
}

export function idSum() {
    let numberId = 0;
    const x = ++numberId;
}

function processTask(value) {
    console.log('Name -> ', value);
    bookmarks.push({name: value});
    console.log(bookmarks);
    console.log(JSON.stringify(bookmarks));
    
    local(bookmarks);
    return
}


export function appendTask() {
    const addTaskBtn = document.getElementById('addTaskBtn');
    let numberId = 0;

        addTaskBtn.addEventListener('click', () => {
            const taskNameInput = document.getElementById('taskName').value.trim();
            // createTaskItems();
            // const h3 = document.createElement('h3')
            if (taskNameInput === '') {
                console.log("no input field on task name");
            } else {
                processTask(taskNameInput);
                const x = numberId++;
                id(x);
                // const uniqueId = ++numberId;
                // bookmarks.push({id: uniqueId});
                // console.log(bookmarks)
                // const taskContainer = document.querySelector('.task-container');
                // // h3.innerHTML = taskNameInput;
                // // taskContainer.append(taskItems);
                // taskItems.append(h3);
            }
        })
}

export function dateTask() {

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
         }
         return taskContainer;
    })
}

let lst;

function fetchUrl(){
    const div = document.createElement('div');
    document.body.append(div);
    div.innerHTML = '<pre>' + localStorage.getItem('list') + '</pre>';
}

export function testing() {
    
}