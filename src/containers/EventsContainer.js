import React, { useEffect } from 'react'
import EventList from '../components/EventList'
import EventInput from '../components/EventInput'
import Event from '../components/Event'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEvents } from '../actions/fetchEvents'
import {Route, Switch} from 'react-router-dom'

const EventsContainer = () => {

    //componentdidmount => useEffect
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchEvents())
    }, [] ) 

    const events = useSelector(state => state.events)
    
        return (
            <div>
                <Switch>
                    <Route path='/events/new' component={EventInput} />                         
                    <Route path='/events/:id' render={(routerProps) => <Event {...routerProps} events={events} />}/>
                    <Route path='/events' render={(routerProps) => <EventList {...routerProps} events={events}/>} />
                </Switch>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
}

//mapDispatchToProps=>useDispatch
// const mapDispatchToProps = dispatch => {
//     return {
//       fetchEvents: () => dispatch(fetchEvents())
//     }
// }

//mapStateToProps=>useSelector
// const mapStateToProps = ({events}) => ({events})


// export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
export default EventsContainer