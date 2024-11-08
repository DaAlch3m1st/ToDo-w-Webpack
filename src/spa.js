import { remove } from "lodash";
import { highPrior, lowPrior, mediumPrior, home } from "./tasksDom";

function removeHash () { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

export function pathHash(val1, val2, val3) { 
    removeHash();

    window.addEventListener('hashchange', () => {
        const taskContainer = document.querySelector('.task-container')
        const currentPath = window.location.hash;
        const bm = JSON.parse(localStorage.getItem('task')) || [];

            switch(currentPath) {
                case '/':
                    console.log('esto deberia ser lo default')
                    break;
                case '#home':
                    console.log("Estás en la página de inicio");
                    bm.forEach(elements => {
                            return home(elements.name, elements.date, elements.prior);
                    });
                    break;
                    
                case '#high':
                    console.log("Estás en la página de 'High'");
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        if (elements.prior === 'high') {
                            return highPrior(elements.name, elements.date, elements.prior);
                        }
                    });
                    break;

                case '#medium':
                    console.log("Estas en la pagina medium");
                    taskContainer.innerHTML = '';
                    bm.forEach(elements => {
                        if (elements.prior === 'medium') {
                            return mediumPrior(elements.name, elements.date, elements.prior);
                        }
                    });                 
                    break;
                
                case '#low':
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