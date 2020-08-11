import React from 'react'

class EventInput extends React.Component {

    state = {
        title:'',
        description:'',
        startDate:'',
        endDate:'',
        location:''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        debugger
        e.preventDefault()
        

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
                    <input type='datetime-local' name="startDate" value={this.state.startDate} onChange={this.handleOnChange} /> <br />
                    <label>Ends</label><br />
                    <input type='datetime-local' name="endDate" value={this.state.endDate} onChange={this.handleOnChange} /> <br />
                    <br/>

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default EventInput