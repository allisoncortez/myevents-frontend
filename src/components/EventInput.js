import React from 'react'
import {connect} from 'react-redux'
import {addEvent} from '../actions/addEvent'
import Header from './Header'

const EventInput = () => {

    state = {
        title:'',
        description:'',
        startTime:'',
        endTime:'',
        location:'',
        category:'art'
    }

    const handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addEvent(this.state)
        this.props.history.push('/events')
    }

        return (
            <div>
                <Header />
            <div className="ui container">
                <form onSubmit={handleOnSubmit} className="ui form">
                    <div className="three fields">
                        <div className="field">
                            <label>Event Name</label>
                            <input type='text' placeholder="What's it called?" name="title" value={this.state.title} onChange={handleOnChange} />
                        </div>
                        <div className="field">
                            <label>Starts</label>
                            <input type='datetime-local' name="startTime" value={this.state.startTime} onChange={handleOnChange} />
                        </div>
                        <div className="field">
                            <label>Ends</label>
                            <input type='datetime-local' name="endTime" value={this.state.endTime} onChange={handleOnChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea placeholder='Live DJ? Free food?? Tell us about it...' name="description" value={this.state.description} onChange={handleOnChange} />
                    </div>
                    <div className="field">
                        <label>Location</label>
                        <input type='text' placeholder='Location' name="location" value={this.state.location} onChange={handleOnChange} />
                    </div>
                    <div className="field">
                        <label>Art or Music?</label>
                        <select name="category" value={this.state.category} onChange={handleOnChange}>
                            <option>art</option>
                            <option>music</option>
                        </select>
                    </div>
                    
                    <button className="ui teal button">Submit</button>
                </form>
            </div>
            </div>
        )
}

export default connect(null, {addEvent}) (EventInput)