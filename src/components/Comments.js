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
                    <div className="comment">
                            <div className="content" key={comment.id}>
                                {comment.description}
                                <div className="actions">
                                    <a className="reply" onClick={() => handleDelete(comment)}>Delete</a>
                                </div>
                            </div>
                    </div>
                    )}
                    <br></br>
            </div>
    )
}

export default connect(null, {deleteComment})(Comments)