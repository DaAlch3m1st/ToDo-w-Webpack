import { format, compareAsc } from "date-fns";
import { local } from "./localstorage";
import { curry } from "./logic";

let nameTask;
let date;
let prior;

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
}

export function appendTask() {
    const addTaskBtn = document.getElementById('addTaskBtn');

        addTaskBtn.addEventListener('click', () => {
            const taskNameInput = document.getElementById('taskName').value.trim();

            if (taskNameInput === '') {
                console.log("no input field on task name");
            } else {
                nameTask = curry(taskNameInput);
            }
        })
}

export function dateTask() {

    addTaskBtn.addEventListener('click', () => {
        const dateInput = document.getElementById('date').value;

        if (dateInput === '') {
           console.log('no input field on date');
        } else {
            if (nameTask) {
                date = nameTask(dateInput);
            } else {
                console.log('arg no pass yet')
            }
        }
    })
}

export function priorityTask() {
    const addTaskBtn = document.getElementById('addTaskBtn');

    addTaskBtn.addEventListener('click', () => {
        const radioCheck = document.querySelector('input[name="priority"]:checked').value;

        if (radioCheck === '') {
            console.log('no input field on priority'); 
         } else {
            if (date) {
                prior = date(radioCheck);
            } else {
                console.log('arg no pass yet')
            }
         }
    })
}

function fetchUrl(){
    const div = document.createElement('div');
    document.body.append(div);
    div.innerHTML = '<pre>' + localStorage.getItem('list') + '</pre>';
}

export function testing() {
    
}