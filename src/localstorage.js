export let bookmarks = [];

let id_counter = 1;

function generateUniqueId() {
    return id_counter++;
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
            bookmarks.push(x);
            return bookmarks;    
        }
    }
}

export function loadTask() {
    if (bookmarks.length > 0) {
        localStorage.setItem('task', JSON.stringify(bookmarks));
    }
}

export function loadLocalStorage() {
    const addTaskBtn = document.getElementById('addTaskBtn');
    addTaskBtn.addEventListener('click', () => {
        loadTask();
    })
}