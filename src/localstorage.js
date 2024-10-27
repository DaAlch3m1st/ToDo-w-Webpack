import { processTask, updates } from "./events";
import { createTaskItems, dueDateDom, NameTaskDom, priorityDom } from "./tasksDom";
import { bookmarks } from "./logic";


export function loadTask() {
        const taskCont = JSON.stringify(bookmarks);
        localStorage.setItem('task', taskCont);
            
        const tasks = JSON.parse(localStorage.getItem('task')) || [];
        tasks.forEach(element => {
            createTaskItems(element.name, element.date, element.prior);
        });
}

export function loadLocalStorage() {
    const addTaskBtn = document.getElementById('addTaskBtn');

    addTaskBtn.addEventListener('click', () => {
        loadTask();
    })
}