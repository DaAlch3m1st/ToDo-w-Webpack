import _ from 'lodash';
import "./assets/style.css";
import { appendTask, dateTask, priorityTask, closeModal, openModal, dialog, checkMark, deleteTask, editTask } from './events';
import { deleteTasks, loadDefaultTask, defaultTasks } from './localstorage';
import { appendElements } from './interface';
import { navigateDueDate, navigatePriority, emptyMessage } from './taskNavigation';

appendElements();

closeModal();
openModal();
appendTask();
dateTask();

priorityTask();

loadDefaultTask();
navigatePriority();
navigateDueDate();
checkMark();
deleteTask();  
editTask()