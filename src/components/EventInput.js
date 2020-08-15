import React from 'react'
import {connect} from 'react-redux'
import {addEvent} from '../actions/addEvent'

class EventInput extends React.Component {

    state = {
        title:'',
        description:'',
        startTime:'',
        endTime:'',
        location:''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addEvent(this.state)
        this.setState({
            title:'',
            description:'',
            startTime:'',
            endTime:'',
            location:''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit} className="ui form">
                    <div className="field">
                        <label>Event Title</label>
                        <input type='text' placeholder='Title' name="title" value={this.state.title} onChange={this.handleOnChange} />
                    </div>
                    <div className="field">
                    <label>Description</label>
                    <textarea rows="5" cols="33" placeholder='Enter your description here...' name="description" value={this.state.description} onChange={this.handleOnChange} />
                    </div>
                    <div className="field">
                    <label>Location</label>
                    <input type='text' placeholder='Location' name="location" value={this.state.location} onChange={this.handleOnChange} />
                    </div>
                    <div className="field">
                    <label>Starts</label>
                    <input type='datetime-local' name="startTime" value={this.state.startTime} onChange={this.handleOnChange} />
                    </div>
                    <div className="field">
                    <label>Ends</label>
                    <input type='datetime-local' name="endTime" value={this.state.endTime} onChange={this.handleOnChange} />
                    </div>

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {addEvent}) (EventInput)