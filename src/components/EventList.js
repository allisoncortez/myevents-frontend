import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class EventList extends Component {
    renderEvents() {
        return this.props.events.map((event) => {
            return (
                <div className="ui basic center aligned segment">
                    <div className="item" key={event.id}>
                            <div className="content">
                                <h1><Link to={`/events/${event.id}`}> {event.attributes.title} @ 7 p.m.</Link></h1>
                                {/* <div className="description"> <h3>{event.attributes.description}</h3></div> */}
                            </div>
                    </div>
                </div>
            )
        })

    } 
    
    render(){
        return (   
            <div>
                <div className="ui celled list">{this.renderEvents()}</div>
            </div>
        )
    }
}

export default EventList