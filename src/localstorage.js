import { bookmarks, processTask, updates } from "./dom";

export function local(val) {
    const x = JSON.stringify(val)
    localStorage.setItem('task', x);
}