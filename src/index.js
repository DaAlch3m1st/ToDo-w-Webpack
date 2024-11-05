import _ from 'lodash';
import "./assets/style.css";

import { appendTask, dateTask, priorityTask, closeModal, openModal } from './events';
import { loadLocalStorage, loadTask, loadTaskToDom } from './localstorage';
import { appendElements } from './interface';

appendElements();

closeModal();
openModal();
appendTask();
dateTask();

priorityTask();

// loadTask();
// loadLocalStorage();
loadTaskToDom();