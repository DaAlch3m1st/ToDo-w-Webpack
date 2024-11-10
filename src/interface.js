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
        <label for="start">Start date:</label>
        <input type="date" id="date" name="trip-start" value="2024-10-30"  min="2024-01-01" max="2100-12-31"/>

        <fieldset>
            <legend>Select the priority of the task:</legend>

            <div>
                <input type="radio" id="low" name="priority" value="low" checked />
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

export function dialogDetails() {
    let content = `
    <dialog class="dialog-modal">
        <div>this is a test of how your tasks will look like when you open the modal to see more detials</div>
        <button class="close-modal">close</button>
    </dialog>
    `;
    return content
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
}