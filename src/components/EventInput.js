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
        // this.setState({
        //     title:'',
        //     description:'',
        //     startTime:'',
        //     endTime:'',
        //     location:''
        // })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    {/* <label>Event Title</label> <br /> */}
                    <input type='text' placeholder='Title' name="title" value={this.state.title} onChange={this.handleOnChange} /> <br />
                    {/* <label>Description</label><br /> */}
                    <textarea rows="5" cols="33" placeholder='Enter your description here...' name="description" value={this.state.description} onChange={this.handleOnChange} /> <br />
                    {/* <label>Location</label><br /> */}
                    <input type='text' placeholder='Location' name="location" value={this.state.location} onChange={this.handleOnChange} /> <br />
                    <label>Starts</label><br />
                    <input type='datetime-local' name="startTime" value={this.state.startTime} onChange={this.handleOnChange} /> <br />
                    <label>Ends</label><br />
                    <input type='datetime-local' name="endTime" value={this.state.endTime} onChange={this.handleOnChange} /> <br />
                    <br/>

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {addEvent}) (EventInput)