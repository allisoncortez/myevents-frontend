import React from 'react'
import {connect} from 'react-redux'
import {deleteComment} from '../actions/deleteComment'

const Comments = (props) => {
    // console.log(props.comments)

    const comments = props.comments

    const handleDelete = (comment) => {
        props.deleteComment(comment.id, comment.event_id)
    }
    
    return (
            <div>
                {comments && comments.map(comment =>
                    <div className="comment" key={comment.id}>
                            <div className="content">
                                {comment.description}
                                <div className="actions">
                                    <button className="ui button" onClick={() => handleDelete(comment)}>Delete</button>
                                </div>
                            </div>
                    </div>
                    )}
                    <br></br>
                    
            </div>
    )

}

export default connect(null, {deleteComment})(Comments)