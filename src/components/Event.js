import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'

const Event = (props) => {
        // console.log(props)
        let event = props.events[props.match.params.id - 1]
        
        return (
            <div className="ui container">
                <img className="ui fluid image" src="/monet-waterlilies.jpeg" alt="event placeholder" />
                <h1>{event ? event.attributes.title : null}</h1>
                {event ? event.attributes.location : null}, 77068 / 7 p.m. - Midnight <br></br><br></br>
                {event ? event.attributes.description : null}
                <CommentsContainer event={event}/>
                
                
            </div>
        )
}

export default Event