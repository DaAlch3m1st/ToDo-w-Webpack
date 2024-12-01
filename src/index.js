import _ from 'lodash';
import "./assets/style.css";
import { isToday, isPast, isFuture, format } from "date-fns";
import { appendTask, dateTask, priorityTask, closeModal, openModal, dialog, checkMark, deleteTask } from './events';
import { deleteTasks, loadDefaultTask, storedTasks } from './localstorage';
import { appendElements } from './interface';
import { navigateDueDate, navigatePriority, emptyMessage } from './taskNavigation';

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
// dialog()
checkMark();
deleteTask();  