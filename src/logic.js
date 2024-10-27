export let bookmarks = [];

let id_counter = 1;

function generateUniqueId() {
    return id_counter++;
}

export function curry(val1) {
    return (val2) => {
        return (val3) => {
            const x = {
                id: generateUniqueId(),
                name: val1,
                date: val2,
                prior: val3
            }
            bookmarks.push(x);
    
            console.log(bookmarks);
        }
    }
}