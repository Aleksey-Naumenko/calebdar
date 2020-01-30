import { renderEvents } from './render-events.js'

export { setItemToStorage, getItemFromStorage, onStorageChange };

const setItemToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const getItemFromStorage = key => JSON.parse(localStorage.getItem(key));


function onStorageChange(event) {
    if (event.key === 'events') {
        renderEvents();
    }
}
window.addEventListener('storage', onStorageChange);