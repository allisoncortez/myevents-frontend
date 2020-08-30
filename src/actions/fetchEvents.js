export const fetchEvents = () => {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/events', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(events => dispatch ({
            type: 'FETCH_EVENTS',
            payload: events.data
        }))
    }
}