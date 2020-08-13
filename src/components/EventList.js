import React, {Component} from 'react'
// import Event from './Event'
import {Link} from 'react-router-dom'

class EventList extends Component {
    
    render(){
        // console.log(this.props.events)
        return (
            
            <div>
                {/* {this.props.events.map((event) => { return <Event event={event} key={event.id}/>} )} */}

                {this.props.events.map((event) =>
                    <li key={event.id}>
                        <Link to={`/events/${event.id}`}> {event.attributes.title}</Link>
                    </li>
                )}
            </div>
        )
    }
}

// import React from 'react'
// import Event from './Event'

// const EventList = props => {
//     // debugger
//     // console.log(props)
//     return (
//         <div>
//             eventlist
//             {props.events.map((event, idx) => <div key={idx}> < Event event={event.name}/></div> )}
//         </div>
//     )
// }

export default EventList