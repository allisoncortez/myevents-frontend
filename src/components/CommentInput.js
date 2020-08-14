import React from 'react'
import {connect} from 'react-redux'
import { addComment } from '../actions/addComment'

class CommentInput extends React.Component {
    state = {
        description:''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addComment(this.state, this.props.event.id)
        this.setState({
            description:''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <textarea rows="5" cols="33"
                    placeholder="what did you think?"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleOnChange}/>
                    <br></br>
                    <input type="submit" />
                </form>
                <br></br>
            </div>
        )
    }
}

export default connect(null, {addComment})(CommentInput)