import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { useDispatch } from 'react-redux'
import {deleteComment} from '../actions/deleteComment'

const Comments = (props) => {
    const comments = props.comments

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(deleteComment())
    }, [])

    const handleDelete = (comment) => {
        dispatch(deleteComment(comment.id, comment.event_id))
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

// export default connect(null, {deleteComment})(Comments)
export default Comments