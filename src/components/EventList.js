import React from 'react'
// with functional components, you have to pass in the props

const EventList = (props) => {
// const events = props.events.map(event => { return <li key={event.id}> {event.title}</li> } )
    return (
        <div>
            {/* {events} */}
        event list
        {/* {props.events.map(event => <li key={event.id}> {event.title}</li> )} */}
        
        </div>
    )
}

export default EventList