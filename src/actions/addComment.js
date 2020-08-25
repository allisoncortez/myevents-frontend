// export const addComment = (comment, eventId) => {
//     return (dispatch) => {
//         fetch(`http://localhost:3000/api/v1/events/${eventId}/comments`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(comment)
//         })
//         .then(resp => resp.json())
//         // .then(event => console.log(event))
//         .then(comment => dispatch({ type: 'ADD_COMMENT', payload: comment }))
//     }
// }

export const addComment = (comment, eventId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/events/${eventId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment)
        })
        .then(resp => resp.json())
        .then(event => dispatch({ type: 'ADD_COMMENT', payload: event.data}))
    }
}