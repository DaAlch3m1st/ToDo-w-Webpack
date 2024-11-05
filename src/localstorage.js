import { createTaskItems } from "./tasksDom";

export let bookmarks = [];

function generateUniqueId() {
    let id_counter = Date.now();
    return id_counter;
}

export function loadTask(key, item) {
    bookmarks = JSON.parse(localStorage.getItem(key)) || [];
    bookmarks.push(item);
    localStorage.setItem(key, JSON.stringify(bookmarks));
}

export function loadTaskToDom() {
    const bm = JSON.parse(localStorage.getItem('task')) || [];
    bm.forEach(element => {
        createTaskItems(element.name, element.date, element.prior);
    });
}

export function curry(val1) {
    return (val2) => {
        return (val3) => {
            const x = {
                id: generateUniqueId(),
                name: val1,
                date: val2,
                prior: val3
            }
            loadTask('task', x);
            console.log(bookmarks);
        }
    }
}