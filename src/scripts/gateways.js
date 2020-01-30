export {
    getEventsFromServer,
    createEventOnServer,
    updateEventOnServer,
    deleteEventOnServer,
};

const baseUrl = 'https://crudcrud.com/api/0045a9ed891f43cd90abedb11d7737d0/events';


const getEventsFromServer = () => fetch(baseUrl)
    .then(response => response.json())
    .then(eventsList => eventsList.map(event => ({ ...event, id: event._id })));

const createEventOnServer = eventData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(eventData),
    });
};

const updateEventOnServer = (eventId, eventData) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(eventData),
    });
};

const deleteEventOnServer = eventId => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'DELETE',
    });
};