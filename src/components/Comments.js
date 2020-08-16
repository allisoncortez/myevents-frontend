import React from 'react'
import {connect} from 'react-redux'
import {deleteComment} from '../actions/deleteComment'

const Comments = (props) => {

    const handleDelete = (comment) => {
        props.deleteComment(comment.id, comment.event_id)
    }
    
    return (
            <div className="ui celled list">
                <h3 class="ui header">Comments</h3>
                    {props.comments && props.comments.map(comment =>
                            <div className="item">
                                <div className="content" key={comment.id}> {comment.description} </div>
                                <div className="right floated content">
                                    <button className="ui button" onClick={() => handleDelete(comment)}>Delete</button>
                                </div>
                            </div>
                    )}
            </div>
    )
}

export default connect(null, {deleteComment})(Comments)