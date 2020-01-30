import { renderEvents } from './render-events.js';
import { closePopup, deleteButton } from './create-popup.js';
import { deleteEventOnServer } from './gateways.js';



export { deleteEvent };


function deleteEvent(event) {

    const parentPopup = deleteButton.closest('.popup');
    const clickedEventId = new FormData(parentPopup).get('id');
    
    deleteEventOnServer(clickedEventId);

    // for (let i = 0; i < events.length; i++) {
        
    //     if (clickedEventId == events[i].id) {
    //         events.splice(i, 1);
    //         i--;
    //     }
    // };

    renderEvents();
    closePopup();
};

deleteButton.addEventListener('click', deleteEvent);