import React from 'react'

const Comments = (props) => {

    const handleDelete = () => {
        // transaction id...sent to update action
    }

    return (
        <div>
            {props.comments && props.comments.map(comment =>
                <li key={comment.id}>{comment.description} <button onClick={handleDelete}>Delete</button> </li>
            )}
        </div>
    )
}

export default Comments