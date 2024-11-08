import { isToday, isPast, isFuture, format } from "date-fns";
import { home } from "./tasksDom";

export function removeHash () { 
// Step 1: Access the current URL
    var currentURL = window.location.href;
    // Step 2: Check if there is a hash
    if (window.location.hash) {
        // Step 3: Remove the hash
        window.history.pushState("", document.title, currentURL.split('#')[0]);
    }
}

// dueDate side

export function navigateDueDate() {
    window.addEventListener('hashchange', () => {
        const taskContainer = document.querySelector('.task-container');
        const bm = JSON.parse(localStorage.getItem('task')) || [];
        const currentPath = window.location.hash;

            switch(currentPath) {
                case '#today':
                    removeHash();
                    console.log('you are on your tasks for today');
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        const dateString = elements.date;
                        const date = new Date(dateString.replace(/-/g, '/'));
                        const dateFormated = format(date, 'MMM MM/dd');

                        if (isToday(date)) {
                            return home(elements.name, dateFormated, elements.prior);
                        }
                    })
                    break;
                case '#upcoming':
                    removeHash();
                    console.log('you are on your upcoming tasks!');
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        const dateString = elements.date;
                        const date = new Date(dateString.replace(/-/g, '/'));
                        const dateFormated = format(date, 'MMM MM/dd');

                        if (isFuture(date)) {
                            return home(elements.name, dateFormated, elements.prior);
                        }
                    })
                    break;
                case '#expire':
                    removeHash();
                    console.log('you are on your expire tasks :(');
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        const dateString = elements.date;
                        const date = new Date(dateString.replace(/-/g, '/'));
                        const dateFormated = format(date, 'MMM MM/dd');

                        if (isPast(date) && !isToday(date)) {
                            console.log(date);
                            return home(elements.name, dateFormated, elements.prior);
                        }
                    })
                    break;
                default: 
                    console.log('page not found')
            }
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
                    console.log("You are in the homepage")
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        return home(elements.name, elements.date, elements.prior);
                    });
                    break;
                    
                case '#high':
                    removeHash();
                    console.log("You are in the 'High' side");
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        if (elements.prior === 'high') {
                            return home(elements.name, elements.date, elements.prior);
                        }
                    });
                    break;

                case '#medium':
                    removeHash();
                    console.log("You are in the 'Medium' side");
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        if (elements.prior === 'medium') {
                            return home(elements.name, elements.date, elements.prior);
                        }
                    });                 
                    break;
                
                case '#low':
                    removeHash();
                    console.log("You are in the 'Low' side");
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        if (elements.prior === 'low') {
                            return home(elements.name, elements.date, elements.prior);
                        }
                    });  
                    break;

                default:
                    console.log("Page not found");
            }
    })
}