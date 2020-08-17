
// export const listEvents = events => {
//     return {
//         type: "FETCH_EVENTS",
//         events
//     }
// }


export const fetchEvents = () => {
    return dispatch => {

        return fetch('http://localhost:3000/api/v1/events', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        // .then(events => console.log(events.data))
        .then(events => dispatch ({
            type: 'FETCH_EVENTS',
            payload: events.data
        }))
        // .then(eventData => dispatch(listEvents(eventData.data)))
        // .catch(console.log())
    }
}