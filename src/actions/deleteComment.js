export const deleteComment = (commentId, eventId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/events/${eventId}/comments/${commentId}`, {
            method: 'DELETE'
        })
        // .then(response => response.json())
        .then(response => dispatch({ type:'DELETE_COMMENT', commentId: commentId}))
        // .then((response) => {
        //     console.log(response)
        // })
    }
}