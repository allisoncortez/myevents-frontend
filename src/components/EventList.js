import React from 'react'
// with functional components, you have to pass in the props

const EventList = (props) => {
    console.log(props.events)
// const events = props.events.map(event => { return <Event key={event.id}> {event.title}</li> } )
    return (
        <div>
            {/* {events} */}
        event list
        {/* {this.props.events.map(event => <li key={event.id}> {event.title}</li> )} */}
        
        </div>
    )
}

export default EventList