import { bookmarks, processTask, updates } from "./dom";

export function x () {
    return "ola"
}

export function local(val) {
    // if (appendTask() === undefined) {
    //     console.log('error');
    // } else {
    //     window.localStorage.setItem("tasks", appendTask());
    //     console.log(appendTask());
    // }
    // if (updates === false) {
    //     console.log("the flag variable is false")
    // } else if (updates === true) {
    //     console.log("the flag variable is true now")
    // }
    localStorage.setItem('task', val);
    console.log()
    console.log("this is the local storage ==>",localStorage.getItem('task'))
}