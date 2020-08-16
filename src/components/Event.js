import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'

const Event = (props) => {
        let event = props.events[props.match.params.id - 1]
        return (
            <div className="ui container">
                
                    <h1 className="ui center aligned header"> {event ? event.attributes.title : null}</h1>
                    <h5 className="description">{event ? event.attributes.description : null}</h5>
                    <div className="ui segment">
                        <CommentsContainer event={event}/>
                    </div>
                
            </div>
        )
}

export default Event