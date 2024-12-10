export function sideMenu() {
    let content = `
    <div class="side-menu">
    <a href="#home">Homepage</a>
        <ul class="date">
        <h1>Tasks!</h1>
        <a href="#today" class="prior">Today</a>
        <a href="#upcoming" class="prior">Upcoming</a>
        <a href="#expire" class="prior">Expire tasks</a>
        </ul>

        <ul class="category">
            <h1>Priority</h1>
            <a href="#high">High</a>
            <a href="#medium">Medium</a>
            <a href="#low">Low</a>
        </ul>

        <ul id="addTask">
            <li id="openModalBtn">➕ Add your task</li>
        </ul>
    </div>
    `;
    return content;
}

export function taskContainer() {
    let content = `
    <div class="task-container">
    </div>
    `;
    
    return content;
}

export function modalContainer() {
    let content = `
    <div class="modal-container" href="">
        <h1 class="modal-header">ADD YOUR TASK</h1>
        <label for="taskName">Task Name</label>
        <input type="text" id="taskName">

        <label for="description">Add Description</label>
        <textarea id="description" rows="4" cols="50" placeholder="you're description">
        </textarea>
        <label for="date">Start date:</label>
        <input type="date" id="date" name="trip-start" value="2024-10-30"  min="2024-01-01" max="2100-12-31"/>

        <fieldset>
            <legend>Select the priority of the task:</legend>

            <div>
                <input type="radio" id="low" name="priority" value="low" checked/>
                <label for="low">Low</label>
            </div>

            <div>
                <input type="radio" id="medium" name="priority" value="medium" />
                <label for="medium">Medium</label>
            </div>

            <div>
                <input type="radio" id="high" name="priority" value="high" />
                <label for="high">High</label>
            </div>
        </fieldset>

        <button id="addTaskBtn" class="add-task-btn">ADD</button>
        <button id="closeModalBtn" class="modal__close">cancel</button>
    </div>
    `;
    return content;
}

export function editTaskModal() {
    let content = `
    <div class="modal-edit" id="editModal">
        <div class="edit-modal-container" href="">
            <h1 class="edit-modal-header">EDIT TASK</h1>
            <label for="editedName">Edit Task Name</label>
            <input type="text" id="editedName">

            <label for="editedDescription">Edit Description</label>
            <textarea id="editedDescription" rows="4" cols="50" placeholder="you're description">
            </textarea>

            <label for="editedDate">Edit date:</label>
            <input type="date" id="editedDate" name="trip-start" value="2024-10-30"  min="2024-01-01" max="2100-12-31"/>

            <fieldset>
                <legend>Edit the priority:</legend>

                <div>
                    <input type="radio" id="edLow" name="edPriority" value="low" checked/>
                    <label for="edLow">Low</label>
                </div>

                <div>
                    <input type="radio" id="edMedium" name="edPriority" value="medium"/>
                    <label for="edMedium">Medium</label>
                </div>

                <div>
                    <input type="radio" id="edHigh" name="edPriority" value="high"/>
                    <label for="edHigh">High</label>
                </div>
            </fieldset>

            <button id="addEditedTaskBtn" class="add-task-btn">Edit</button>
            <button id="closeEditedModalBtn" class="modal__close">Cancel</button>
        </div>
    </div>
    `;
    return content;
}

export function dialogDetails() {
    let content = `
    <dialog class="dialog-modal">
        <div>this is a test of how your tasks will look like when you open the modal to see more detials</div>
        <h1 class="dialog-title"></h1>
        <p class="dialog-priority"></p>
        <p class="dialog-desc"></p>
        <p class="dialog-date"></p>
        <button class="close-dialog">close</button>
    </dialog>
    `;
    return content;
}

export function sectionContainer(items) {
    let content = `
    <section id="low-prior-section">
        <div>${items}</div>
    </section>
    `;
}

export function appendElements() {
    const modal = document.getElementById('modal');
    const page = document.querySelector('.page');

    const modalContent = modalContainer();
    modal.innerHTML += modalContent;
    
    const sideMenuContent = sideMenu();
    page.innerHTML += sideMenuContent;

    const taskContainerContent = taskContainer();
    page.innerHTML += taskContainerContent;

    const dialogDetailsContainer = dialogDetails();
    page.innerHTML += dialogDetailsContainer;

    const editModalContainer = editTaskModal();
    page.innerHTML += editModalContainer;
}