import { remove } from "lodash";
import { highPrior, lowPrior, mediumPrior, home } from "./tasksDom";

export function removeHash () { 
// Step 1: Access the current URL
    var currentURL = window.location.href;

    // Step 2: Check if there is a hash
    if (window.location.hash) {
        // Step 3: Remove the hash
        window.history.pushState("", document.title, currentURL.split('#')[0]);
    }
}

export function pathHash(val1, val2, val3) { 
    window.addEventListener('hashchange', () => {
        const taskContainer = document.querySelector('.task-container')
        const currentPath = window.location.hash;
        const bm = JSON.parse(localStorage.getItem('task')) || [];

            switch(currentPath) {
                case '#home':
                    removeHash();
                    console.log("Estás en la página de inicio");
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        return home(elements.name, elements.date, elements.prior);
                    });
                    break;
                    
                case '#high':
                    removeHash();
                    console.log("Estás en la página de 'High'");
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        if (elements.prior === 'high') {
                            return highPrior(elements.name, elements.date, elements.prior);
                        }
                    });
                    break;

                case '#medium':
                    removeHash();
                    console.log("Estas en la pagina medium");
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        if (elements.prior === 'medium') {
                            return mediumPrior(elements.name, elements.date, elements.prior);
                        }
                    });                 
                    break;
                
                case '#low':
                    removeHash();
                    console.log("Estas en la pagina low");
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        if (elements.prior === 'low') {
                            return lowPrior(elements.name, elements.date, elements.prior);
                        }
                    });  
                    break;

                default:
                    console.log("Página no reconocida");
            }
    })
}