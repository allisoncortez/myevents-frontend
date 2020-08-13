import React from 'react'
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'

class CommentsContainer extends React.Component {
    render() {
        console.log (this.props)
        return (
            <div>
                <CommentInput />
                <Comments comments={this.props.event && this.props.event.attributes.comments}/>
            </div>
        )
    }
}

export default CommentsContainer