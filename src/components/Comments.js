import React from 'react'

const Comments = (props) => {

    return (
        <div>
            {props.comments && props.comments.map(comment =>
                <li key={comment.id}>{comment.description}</li>
            )}
        </div>
    )
}

export default Comments