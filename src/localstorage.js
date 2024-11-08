export function loadTask(key, item) {
    let bookmarks = JSON.parse(localStorage.getItem(key)) || [];
    bookmarks.push(item);
    localStorage.setItem(key, JSON.stringify(bookmarks));
}

export function curry(val1) {
    return (val2) => {
        return (val3) => {
            const x = {
                name: val1,
                date: val2,
                prior: val3
            }
            loadTask('task', x);
            console.log(x);
        }
    }
}