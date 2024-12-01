import { appendItems } from './tasksDom';
import { format } from 'date-fns';

let taskObj = [
    {
        id: generateId(),
        name: "Take off the garbage",
        date: "2024-10-30",
        prior: "low"
    },
    {
        id: generateId(),
        name: "Complete project report",
        date: "2024-11-05",
        prior: "high"
    },
    {
        id: generateId(),
        name: "Schedule doctor's appointment",
        date: "2024-11-15",
        prior: "medium"
    }
]

export function generateId() {
    return Date.now();
}

export function loadTask(item) {
    let bookmarks = JSON.parse(localStorage.getItem('task')) || [];
    bookmarks.push(item);
    localStorage.setItem('task', JSON.stringify(bookmarks));
}

export function deleteTasks(taskId) {
    // we get the localstorage items
    let bookmarks = JSON.parse(localStorage.getItem('task'));
    // using "findIndex" to go through the elements of the localstorage to get their Ids and check if their Id is equal to the element in DOM that was deleted previously and get what index that elements belong
    const taskIndex = bookmarks.findIndex(element => element.id === taskId);
    // using "splice" we delete just one element according their Index and id 
    bookmarks.splice(taskIndex, 1);
    // convert the elements of the localstorage again to Json
    let taskIndexToJson = JSON.stringify(bookmarks);
    // Upload the changes
    localStorage.setItem('task', taskIndexToJson);
}

export function loadDefaultTask() {
    let bm = JSON.parse(localStorage.getItem('task')) || [];
    bm.forEach(elements => {
        if (elements != null && elements != undefined)  {
            const dateString = elements.date;
            const date = new Date(dateString.replace(/-/g, '/'));
            const dateFormated = format(date, 'MMM MM/dd');
            appendItems(elements.name, dateFormated, elements.prior, elements.id);
        }
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
            loadTask(x);
        }
    }
}
