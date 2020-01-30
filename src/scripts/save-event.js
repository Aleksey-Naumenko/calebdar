import { renderEvents } from './render-events.js';
import { popupForm, closePopup } from './create-popup.js';
import { createEventOnServer, getEventsFromServer, updateEventOnServer } from './gateways.js';


export { editSaveHandler };

const editSaveHandler = async event => {

    event.preventDefault();

    const formData = [...new FormData(popupForm)];

    const newEvent = formData.reduce((acc, item) => {
        acc[item[0]] = item[1];
        return acc;
    }, {});

    const timeFrom = (newEvent.timeFrom).split(':');
    newEvent.dateFrom = new Date(new Date(newEvent.dateFrom).setHours(+timeFrom[0], +timeFrom[1]));
    const timeTo = (newEvent.timeTo).split(':');
    newEvent.dateTo = new Date(new Date(newEvent.dateTo).setHours(+timeTo[0], +timeTo[1]));

    if (newEvent.id === "0") {
        // newEvent.id = Math.floor(Math.random() * 1000);

        if (newEvent.title == '') {
            newEvent.title = 'No Title';
        }
        createEventOnServer(newEvent);
        
    } else {
        const events = await getEventsFromServer()
            .then(eventsList => {
                eventsList.map(event => {
                    if (newEvent.id == event.id) {
                        console.log(newEvent);
                        updateEventOnServer(newEvent.id, newEvent);
                    }
                })
            })
    }
    closePopup();
    renderEvents();
}

popupForm.addEventListener('submit', editSaveHandler);