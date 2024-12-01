import { isToday, isPast, isFuture, format } from "date-fns";
import { appendItems } from "./tasksDom";
import { deleteTask } from "./events";

export function removeHash () { 
// Step 1: Access the current URL
    var currentURL = window.location.href;
    // Step 2: Check if there is a hash
    if (window.location.hash) {
        // Step 3: Remove the hash
        window.history.pushState("", document.title, currentURL.split('#')[0]);
    }
}

export function navigateDueDate() {
    window.addEventListener('hashchange', () => {
        const taskContainer = document.querySelector('.task-container');
        const bm = JSON.parse(localStorage.getItem('task')) || [];
        const currentPath = window.location.hash;

                switch(currentPath) {
                    case '#today':
                        removeHash();
                        taskContainer.innerHTML = '';
                        if (emptyMessage) {
                            emptyMessage();
                        }
                        bm.forEach(elements => {
                            const dateString = elements.date;
                            const date = new Date(dateString.replace(/-/g, '/'));
                            var dateFormated = format(date, 'MMM MM/dd');
                            if (isToday(date)) {
                                appendItems(elements.name, dateFormated, elements.prior, elements.id);
                                removeMessage();
                            }
                            deleteTask();
                        });
                        break;
                    case '#upcoming':
                        removeHash();
                        taskContainer.innerHTML = '';
                        if (emptyMessage) {
                            emptyMessage();
                        }
                        bm.forEach(elements => {
                            deleteTask();
                            const dateString = elements.date;
                            const date = new Date(dateString.replace(/-/g, '/'));
                            const dateFormated = format(date, 'MMM MM/dd');
                            if (isFuture(date)) {
                                appendItems(elements.name, dateFormated, elements.prior, elements.id);
                                removeMessage();
                            } 
                            deleteTask();
                        })
                        break;
                    case '#expire':
                        removeHash();
                        taskContainer.innerHTML = '';
                        if (emptyMessage) {
                            emptyMessage();
                        }
                        bm.forEach(elements => {
                            deleteTask();
                            const dateString = elements.date;
                            const date = new Date(dateString.replace(/-/g, '/'));
                            const dateFormated = format(date, 'MMM MM/dd');
                            if (isPast(date) && !isToday(date)) {
                                appendItems(elements.name, dateFormated, elements.prior, elements.id);
                                removeMessage();
                            }
                            deleteTask();
                        })
                        break;
                    default: 
                        console.log('page not found')
                }
    })
}


// priority side
export function navigatePriority() { 
        const taskContainer = document.querySelector('.task-container');
        const h1 = document.getElementById('emptyPage')
        const currentPath = window.location.hash;
        const bm = JSON.parse(localStorage.getItem('task')) || [];
        let checkEmpty = false;

        if (!currentPath) {
            console.log(taskContainer.textContent.trim() ==='');
            const checkEmptyInDefaultPath = taskContainer.textContent.trim() ==='';
            if (checkEmptyInDefaultPath) {
                console.log('es true');
                emptyMessage();
            } else {
                removeMessage();
            }
        }
        window.addEventListener('hashchange', () => {
            const currentPath = window.location.hash;
                switch(currentPath) {
                    case '#home':
                        removeHash();
                        taskContainer.innerHTML = '';
                        // all of this statements that you see aren't necessary lol
                        if (!checkEmpty) {
                            emptyMessage();
                        }
                        bm.forEach(elements => {
                            const dateString = elements.date;
                            const date = new Date(dateString.replace(/-/g, '/'));
                            var dateFormated = format(date, 'MMM MM/dd');
                            appendItems(elements.name, dateFormated, elements.prior, elements.id);
                            removeMessage();
                            deleteTask();
                        });
                        break;
                    case '#high':
                        removeHash();
                        console.log("You are in the 'High' side");
                        taskContainer.innerHTML = '';
                        if (emptyMessage) {
                            emptyMessage();
                        }
                        bm.forEach(elements => {
                            const dateString = elements.date;
                            const date = new Date(dateString.replace(/-/g, '/'));
                            var dateFormated = format(date, 'MMM MM/dd');
                            if (elements.prior === 'high') {
                                appendItems(elements.name, dateFormated, elements.prior, elements.id);
                                removeMessage();
                            }
                            deleteTask();
                        });
                        break;

                    case '#medium':
                        removeHash();
                        taskContainer.innerHTML = '';
                        if (emptyMessage) {
                            emptyMessage();
                        }
                        bm.forEach(elements => {
                            const dateString = elements.date;
                            const date = new Date(dateString.replace(/-/g, '/'));
                            var dateFormated = format(date, 'MMM MM/dd');
                            if (elements.prior === 'medium') {
                                appendItems(elements.name, dateFormated, elements.prior, elements.id);
                                removeMessage();
                            }
                            deleteTask();
                        });                 
                        break;
                    
                    case '#low':
                        removeHash();
                        taskContainer.innerHTML = '';
                        if (emptyMessage) {
                            emptyMessage();
                        }
                        bm.forEach(elements => {
                            const dateString = elements.date;
                            const date = new Date(dateString.replace(/-/g, '/'));
                            var dateFormated = format(date, 'MMM MM/dd');
                            if (elements.prior === 'low') {
                                appendItems(elements.name, dateFormated, elements.prior, elements.id);
                                removeMessage();
                            }
                            deleteTask();
                        });  
                        break;
                    default:
                        console.log("Page not found");
                }
        })
}

export function emptyMessage() {
    const taskContainer = document.querySelector('.task-container');
        const h1 = document.createElement('h1');
        h1.id = 'emptyPage';
        h1.textContent = 'No Tasks';
        taskContainer.append(h1);
}

export function removeMessage() {
    const element = document.getElementById('emptyPage');
    if (element) {
        element.remove();
    }
}