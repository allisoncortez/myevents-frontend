import React from 'react'
import {connect} from 'react-redux'

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

    }
    render() {
        return (
            <div>
                <form>
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

export default connect(null)(CommentInput)