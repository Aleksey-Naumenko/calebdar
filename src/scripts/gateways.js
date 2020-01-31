export {
    getEventsFromServer,
    getOneEventFromServer,
    createEventOnServer,
    updateEventOnServer,
    deleteEventOnServer,
    
};

const baseUrl = 'https://crudcrud.com/api/682c6138ee224f97b73fd3b4eebc032f/events';



const getEventsFromServer = () => fetch(baseUrl)
    .then(response => response.json())
    .then(eventsList => eventsList.map(({ _id, ...event }) => ({ ...event, id: _id })));

const getOneEventFromServer = eventId => fetch(`${baseUrl}/${eventId}`)
    .then(response => response.json())
    .then( ({_id, ...event}) => ({...event, id: _id}) );

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

const deleteEventOnServer = eventId => fetch(`${baseUrl}/${eventId}`, {
        method: 'DELETE',
    });