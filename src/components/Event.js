import React from 'react'

const Event = (props) => {

        console.log(props)
        // const {title, description, startTime, endTime, location, id} = this.props.event.attributes
        let event = props.events[props.match.params.id - 1]
        console.log(event)
        return (
            <li>
                {event ? event.attributes.title : null} - {event ? event.attributes.startTime : null}
                {/* {event.attributes.description} */}
            </li>
        )
}

export default Event