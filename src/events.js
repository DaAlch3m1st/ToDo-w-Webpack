import { format, compareAsc } from "date-fns";
import { saveTask, curry, loadTaskToDom } from "./localstorage";

export let nameTask;
export let date;
export let prior;

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

export function appendTask() {
    const addTaskBtn = document.getElementById('addTaskBtn');

        addTaskBtn.addEventListener('click', () => {
            const taskNameInput = document.getElementById('taskName').value.trim();

            if (taskNameInput === '') {
                console.log("no input field on task name");
            } else {
                nameTask = curry(taskNameInput);
                modal.classList.remove('modal--show');
                // window.location.reload();
                // document.getElementById('taskName').value = '';
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
                console.log('arg no pass yet');
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