import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'

const Event = (props) => {

        console.log(props)
        // const {title, description, startTime, endTime, location, id} = this.props.event.attributes
        let event = props.events[props.match.params.id - 1]
        // console.log(event)
        return (
            <div>
                <h1> {event ? event.attributes.title : null} - {event ? event.attributes.startTime : null} </h1>
                <CommentsContainer event={event}/>
            </div>
        )
}

export default Event