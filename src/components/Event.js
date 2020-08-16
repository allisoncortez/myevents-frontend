import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'

const Event = (props) => {
        let event = props.events[props.match.params.id - 1]
        return (
            <div className="ui container">
                <h1> {event ? event.attributes.title : null} - {event ? event.attributes.category : null} </h1>
                <p>{event ? event.attributes.description : null}</p>
                <CommentsContainer event={event}/>
            </div>
        )
}

export default Event