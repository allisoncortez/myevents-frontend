export const addEvent = (eventFormData) => {
    
    // const newDate = Date.parse...
    
    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/events', {
        method: "POST",
            headers: {
              "Content-Type": "application/json"
            },body: JSON.stringify(eventFormData)
          })
        .then(response => response.json())
        .then(newEvent => dispatch({
              type:'ADD_EVENT',
              payload: newEvent
            }))
        .catch(console.log())
    }
}