import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class EventList extends Component {
    
    render(){
        return (   
            <div>
                {this.props.events.map((event) =>
                    <li key={event.id}>
                        <Link to={`/events/${event.id}`}> {event.attributes.title}</Link>
                    </li>
                )}
            </div>
        )
    }
}

export default EventList