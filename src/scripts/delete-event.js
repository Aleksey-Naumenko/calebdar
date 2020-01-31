import { renderEvents } from './render-events.js';
import { closePopup, deleteButton } from './create-popup.js';
import { deleteEventOnServer } from './gateways.js';



export { deleteEvent };


function deleteEvent(e) {

    const parentPopup = deleteButton.closest('.popup');
    const clickedEventId = new FormData(parentPopup).get('id');
    
    deleteEventOnServer(clickedEventId);

    renderEvents();
    closePopup();
};

deleteButton.addEventListener('click', deleteEvent);