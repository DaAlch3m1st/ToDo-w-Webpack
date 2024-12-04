import { curry, loadTask, deleteTasks } from "./localstorage";
import { isToday, isPast, isFuture, format } from "date-fns";

export let nameTask;
export let date;
export let prior;

export let updates = false;

export function openModal() {
    openModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add('modal--show');
    })
} 

export function closeModal() {
    closeModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal--show');
    })
}

export function appendTask() {
    const addTaskBtn = document.getElementById('addTaskBtn');

        addTaskBtn.addEventListener('click', () => {
            const taskNameInput = document.getElementById('taskName').value.trim();

            if (taskNameInput === '') {
                alert("Empty value");
                console.log("no input field on task name");
            } else {
                nameTask = curry(taskNameInput);
                modal.classList.remove('modal--show');
                window.location.reload();
            }
        })
}

export function dateTask() {
    addTaskBtn.addEventListener('click', () => {
        const dateInput = document.getElementById('date').value;
        if (dateInput === '') {
            alert("Empty value");
           console.log('no input field on date');
        } else {
            if (nameTask) {
                date = nameTask(dateInput);
            } else {
                console.log('arg no pass yet');
            }
        }
    })
}

export function priorityTask() {
    const addTaskBtn = document.getElementById('addTaskBtn');

    addTaskBtn.addEventListener('click', () => {
        const radioCheck = document.querySelector('input[name="priority"]:checked').value;

        if (radioCheck === '') {
            alert("Empty value");
            console.log('no input field on priority'); 
         } else {
            if (date) {
                prior = date(radioCheck);
            } else {
                console.log('arg no pass yet')
            }
         }
    })
}

export function checkMark() {
    const checkBoxes = document.querySelectorAll('.checkmark');
    checkBoxes.forEach(elements => {
        elements.addEventListener('change', () => {
            if (elements.checked) {
                elements.parentElement.parentElement.classList.add('task-marked');
            } else if (!elements.checked) {
                elements.parentElement.parentElement.classList.remove('task-marked');
            }
        })
    });
}

export function deleteTask() {
    const deleteIcon = document.querySelectorAll('.delete-task');
    deleteIcon.forEach(elements => {
        elements.addEventListener('click', (event) => {
            const parentOfIcon = elements.parentElement;     
            const parentId = parseInt(parentOfIcon.dataset.id);  
            parentOfIcon.remove();
            deleteTasks(parentId);
        })
    })
}

export function editTask() {
    const editIcon = document.querySelectorAll('.edit-task');
    const editTasksModal = document.getElementById('editModal');
    editIcon.forEach(elements => {
        elements.addEventListener('click', (event) => {
            event.preventDefault();
            // get the buttons to add or cancel edit
            const editBtn = document.getElementById('addEditedTaskBtn');
            const closeEditBtn = document.getElementById('closeEditedModalBtn');
            // open a new personalize modal to edit the tasks
            editTasksModal.classList.add('modal--show');
            // get the parent of the edit button that was clicked
            const todoChildrens = elements.parentElement.firstChild;
            // get all the elements from the parent to change them in a moment
            const todoNameParent =  todoChildrens.childNodes[1];
            const todoPriorityChild = todoNameParent.childNodes[0];
            const todoNameChild = todoNameParent.childNodes[1]
            const todoDate = todoChildrens.childNodes[2];

            // show the changes

            editBtn.addEventListener('click', () => {
                // get the new values from the inputs
                const editedName = document.getElementById('editedName');
                const editedDate = document.getElementById('editedDate');
                const edPriority = document.querySelector("input[name='edPriority']:checked");

                if (editedName.value !== '' && editedDate.value !== '' && edPriority.value !== '') {
                    todoNameChild.textContent = editedName.value; 
                    const dateValue = editedDate.value
                    const date = new Date(dateValue.replace(/-/g, '/'));
                    var dateFormated = format(date, 'MMM MM/dd');
                    todoDate.textContent = dateFormated;
                    todoPriorityChild.textContent = edPriority.value;
                        if (todoPriorityChild.textContent === 'low') {
                            todoPriorityChild.textContent = '! ';
                        } else if (todoPriorityChild.textContent === 'medium') {
                            todoPriorityChild.textContent = '!! ';
                        } else if (todoPriorityChild.textContent === 'high') {
                            todoPriorityChild.textContent = '!!! ';
                        }
                    editTasksModal.classList.remove('modal--show');
                } else {
                    alert('empty fields');
                }
            })
            closeEditBtn.addEventListener('click', () => {
                editTasksModal.classList.remove('modal--show');
            })
        })
    })
}

export function openDetailModal() {

}