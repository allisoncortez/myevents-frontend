import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'

class EventList extends Component {
    renderEvents() {
        return this.props.events.map((event) => {
            return (
                <div key={event.id}>
                    <h5 className="ui header centered">HOSTNAME</h5>
                    <Link to={`/events/${event.id}`}><h1 className="ui header centered huge">{event.attributes.title}</h1></Link>
                    <h5 className="ui header centered">{event.attributes.location} @ 7 p.m.</h5>
                    <div className="ui clearing divider"></div>
                </div>
            )
        })
    } 
    
    render(){
        return (   
            <div>
                <Header />
                <br></br>
                <div className="ui container">
                    {this.renderEvents()}
                </div>
            </div>
        )
    }
}

export default EventList