import React from 'react'
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'

class CommentsContainer extends React.Component {

    // componentDidMount(){
    //     this.props.fetchComments()
    // }
    
    render() {
        console.log(this.props)
        return (
            <div className="ui comments">
                <div className="ui dividing header">Comments</div>
                <Comments comments={this.props.event && this.props.event.attributes.comments}/>
                <CommentInput event={this.props.event}/>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         comments: state.comments
//     }
// }

export default CommentsContainer