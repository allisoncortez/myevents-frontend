export function fetchEvents() {
    //the return is an action object
    //this gets passed to the reducer, which returns the new version of our state
    console.log('inside the fetch')

    return (dispatch) => {

        return fetch('http://localhost:3000/api/v1/events', {
            method: 'GET',
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
    }
}