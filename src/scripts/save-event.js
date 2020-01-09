import { events } from './storage.js';
import { displayEvents, renderNewEvents } from './displaying-events.js';
import { popupForm, closePopup } from './create-popup.js';
import { switcher } from './edit-event.js';

export { saveNewEvent };

const saveNewEvent = event => {
    event.preventDefault();
    const formData = [...new FormData(popupForm)];
    console.log(formData);
    const newEvent = formData.reduce((acc, item) => {
        acc[item[0]] = item[1];
        return acc;
    }, {});

    const timeFrom = (newEvent.timeFrom).split(':');
    newEvent.dateFrom = new Date(new Date(newEvent.dateFrom).setHours(+timeFrom[0], +timeFrom[1]));
    const timeTo = (newEvent.timeTo).split(':');
    newEvent.dateTo = new Date(new Date(newEvent.dateTo).setHours(+timeTo[0], +timeTo[1]));

    newEvent.id = Math.floor(Math.random() * 1000);
    
    if (newEvent.title == '') {
        newEvent.title = 'No Title';
    }

    events.push(newEvent);
    renderNewEvents(events);
    displayEvents(events);
    closePopup();
    return;
}

popupForm.addEventListener('submit', saveNewEvent);
// popupForm.removeEventListener('submit', saveNewEvent);
