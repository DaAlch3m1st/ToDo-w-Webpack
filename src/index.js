import _ from 'lodash';
import "./assets/style.css";

import { appendTask, dateTask, priorityTask, closeModal, openModal, spa } from './events';
import { loadDefaultTask, loadLocalStorage, loadTask } from './localstorage';
import { appendElements } from './interface';
import { pathHash, removeHash } from './spa';

appendElements();

closeModal();
openModal();
appendTask();
dateTask();

priorityTask();

// loadTask();
// loadLocalStorage();
loadDefaultTask();
pathHash();
