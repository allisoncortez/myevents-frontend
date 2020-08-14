import React from 'react'
import {connect} from 'react-redux'
import {deleteComment} from '../actions/deleteComment'

const Comments = (props) => {

    const handleDelete = (comment) => {
        props.deleteComment(comment.id, comment.event_id)
    }

    return (
        <div>
            {props.comments && props.comments.map(comment =>
                <li key={comment.id}>{comment.description} <button onClick={() => handleDelete(comment)}>Delete</button> </li>
            )}
        </div>
    )
}

export default connect(null, {deleteComment})(Comments)