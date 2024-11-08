import _ from 'lodash';
import "./assets/style.css";

import { appendTask, dateTask, priorityTask, closeModal, openModal, spa } from './events';
import { loadDefaultTask, loadLocalStorage, loadTask } from './localstorage';
import { appendElements } from './interface';
import { navigateDueDate, navigatePriority } from './taskNavigation';

appendElements();

closeModal();
openModal();
appendTask();
dateTask();

priorityTask();

// loadTask();
// loadLocalStorage();
loadDefaultTask();
navigatePriority();
navigateDueDate();