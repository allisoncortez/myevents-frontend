import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'


class EventList extends Component {
    renderEvents() {
        return this.props.events.map((event) => {
            return (
                <div className="ui celled list">
                    <div className="item" key={event.id}>
                            <div className="content">
                                <Link to={`/events/${event.id}`}> <h1 className="ui black header huge">{event.attributes.title} @ 7 p.m. </h1></Link>
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
                <Header />
                <div ui container>
                <div className="ui basic center aligned segment">
                    {this.renderEvents()}
                </div>
            </div>
            </div>
        )
    }
}

export default EventList