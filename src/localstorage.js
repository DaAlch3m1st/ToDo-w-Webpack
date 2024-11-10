import { appendItems } from './tasksDom'
import { format } from 'date-fns';

export function generateId() {
    return Date.now();
}

export function loadTask(key, item) {
    let bookmarks = JSON.parse(localStorage.getItem(key)) || [];
    bookmarks.push(item);
    localStorage.setItem(key, JSON.stringify(bookmarks));
}

export function loadDefaultTask() {
    let bm = JSON.parse(localStorage.getItem('task')) || [];
    bm.forEach(elements => {
        const dateString = elements.date;
        const date = new Date(dateString.replace(/-/g, '/'));
        const dateFormated = format(date, 'MMM MM/dd');
        return appendItems(elements.name, dateFormated, elements.prior);    
    });
}

export function curry(val1) {
    return (val2) => {
        return (val3) => {
            const x = {
                id: generateId(),
                name: val1,
                date: val2,
                prior: val3
            }
            loadTask('task', x);
            console.log(x);
        }
    }
}
