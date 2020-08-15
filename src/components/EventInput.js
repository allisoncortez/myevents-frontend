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
            location:'',
            category:'art'
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit} className="ui form">
                    <div className="three fields">
                        <div className="field">
                            <label>Event Name</label>
                            <input type='text' placeholder="What's it called?" name="title" value={this.state.title} onChange={this.handleOnChange} />
                        </div>
                        <div className="field">
                            <label>Starts</label>
                            <input type='datetime-local' name="startTime" value={this.state.startTime} onChange={this.handleOnChange} />
                        </div>
                        <div className="field">
                            <label>Ends</label>
                            <input type='datetime-local' name="endTime" value={this.state.endTime} onChange={this.handleOnChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea placeholder='Live DJ? Free food?? Tell us about it...' name="description" value={this.state.description} onChange={this.handleOnChange} />
                    </div>
                    <div className="field">
                        <label>Location</label>
                        <input type='text' placeholder='Location' name="location" value={this.state.location} onChange={this.handleOnChange} />
                    </div>
                    <div className="field">
                        <label>Art or Music?</label>
                        <select name="category" value={this.state.category} onChange={this.handleOnChange}>
                            <option>art</option>
                            <option>music</option>
                        </select>
                    </div>
                    
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {addEvent}) (EventInput)