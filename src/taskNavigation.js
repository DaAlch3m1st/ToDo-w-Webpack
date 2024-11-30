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

            bm.forEach(elements => {
                switch(currentPath) {
                    case '#today':
                        removeHash();
                        taskContainer.innerHTML = '';
                        bm.forEach(elements => {
                            const dateString = elements.date;
                            const date = new Date(dateString.replace(/-/g, '/'));
                            var dateFormated = format(date, 'MMM MM/dd');

                            if (isToday(date)) {
                                return appendItems(elements.name, dateFormated, elements.prior, elements.id);
                            }
                        });
                        break;
                    case '#upcoming':
                        removeHash();
                        taskContainer.innerHTML = '';
                        bm.forEach(elements => {
                            const dateString = elements.date;
                            const date = new Date(dateString.replace(/-/g, '/'));
                            const dateFormated = format(date, 'MMM MM/dd');

                            if (isFuture(date)) {
                                return appendItems(elements.name, dateFormated, elements.prior, elements.id);
                            }
                        })
                        break;
                    case '#expire':
                        removeHash();
                        taskContainer.innerHTML = '';
                        bm.forEach(elements => {
                            const dateString = elements.date;
                            const date = new Date(dateString.replace(/-/g, '/'));
                            const dateFormated = format(date, 'MMM MM/dd');
                            if (isPast(date) && !isToday(date)) {
                                return appendItems(elements.name, dateFormated, elements.prior, elements.id);
                            }
                        })
                        break;
                    default: 
                        console.log('page not found')
                }
            })
    })
}


// priority side
export function navigatePriority() { 
    window.addEventListener('hashchange', () => {
        const taskContainer = document.querySelector('.task-container');
        const currentPath = window.location.hash;
        const bm = JSON.parse(localStorage.getItem('task')) || [];
        
            switch(currentPath) {
                
                case '#home':
                    removeHash();
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        deleteTask();
                        const dateString = elements.date;
                        const date = new Date(dateString.replace(/-/g, '/'));
                        var dateFormated = format(date, 'MMM MM/dd');
                        return appendItems(elements.name, dateFormated, elements.prior, elements.id);
                    });
                    break;
                    
                case '#high':
                    removeHash();
                    console.log("You are in the 'High' side");
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        const dateString = elements.date;
                        const date = new Date(dateString.replace(/-/g, '/'));
                        var dateFormated = format(date, 'MMM MM/dd');
                        if (elements.prior === 'high') {
                            return appendItems(elements.name, dateFormated, elements.prior, elements.id);
                        }
                    });
                    break;

                case '#medium':
                    removeHash();
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        const dateString = elements.date;
                        const date = new Date(dateString.replace(/-/g, '/'));
                        var dateFormated = format(date, 'MMM MM/dd');
                        if (elements.prior === 'medium') {
                            return appendItems(elements.name, dateFormated, elements.prior, elements.id);
                        }
                    });                 
                    break;
                
                case '#low':
                    removeHash();
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        deleteTask();
                        const dateString = elements.date;
                        const date = new Date(dateString.replace(/-/g, '/'));
                        var dateFormated = format(date, 'MMM MM/dd');
                        if (elements.prior === 'low') {
                            return appendItems(elements.name, dateFormated, elements.prior, elements.id);
                        }
                    });  
                    break;

                default:
                    console.log("Page not found");
            }
    })
}