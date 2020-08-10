export function fetchEvents() {
    //the return is an action object
    //this gets passed to the reducer, which returns the new version of our state
    console.log('inside the fetch')

    fetch('http://localhost:3000/api/v1/events')
    .then(response => response.json())
    .then(events => console.log(events.data))
}