import React, {Component} from 'react'
import Event from './Event'

class EventList extends Component {
    // renderEvents = () => {
    //     // debugger
    //     return this.props.events.map( (event) => {
    //         return <Event key={event.id} event={event} />
    //     })
    // }
    
    render(){
        // debugger
        console.log(this.props.events)
        return (
            
            <ul> 
                {this.props.events.map((event) => { return <Event event={event} key={event.id}/>} )}
            </ul>
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