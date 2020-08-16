import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'

const Event = (props) => {
        let event = props.events[props.match.params.id - 1]
        return (
            <div className="ui segment">
                
                    <h1 className="ui center aligned header"> {event ? event.attributes.title : null}</h1>
                    <h5 className="description">{event ? event.attributes.description : null}</h5>
                    <CommentsContainer event={event}/>
                
            </div>
        )
}

export default Event