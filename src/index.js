import _ from 'lodash';
import "./assets/style.css";

import { appendTask, dateTask, priorityTask, closeModal, openModal } from './events';
import { appendElements } from './interface';

appendElements();
closeModal();
openModal();
appendTask();
dateTask();

priorityTask();

import { loadLocalStorage, loadTask } from './localstorage';
loadLocalStorage();