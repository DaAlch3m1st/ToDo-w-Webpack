import _ from 'lodash';
import "./assets/style.css";


// side menu
// import { taskSection } from './interface';
// taskSection();

// modal
import { appendElements } from './interface';
import { closeModal } from './dom';
import { openModal } from './dom';

appendElements();
closeModal();
openModal();

// DOM LOGIC

import { appendTask } from './dom';
appendTask();

// import { dateTask } from './dom';
// dateTask();

// import { priorityTask } from './dom';
// priorityTask();

// test();
import { testing } from './dom';
testing();

// import { idSum } from './dom';
// idSum();

// local
// import { local } from './localstorage';
// local();
