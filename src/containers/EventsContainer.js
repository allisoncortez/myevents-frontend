import React from 'react'
import EventList from '../components/EventList'
import EventInput from '../components/EventInput'
// import Event from '../components/Event'
import {connect} from 'react-redux'
import {fetchEvents} from '../actions/fetchEvents'
import {Route} from 'react-router-dom'

class EventsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchEvents()
        // console.log(this.props.fetchEvents())
    }
    render() {
        console.log(this.props.events)
        return (
            <div>
                <Route path='/events/new' component={EventInput} />
                <Route exact path='/events' render={(routerProps) => <EventList {...routerProps} events={this.props.events}/>} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchEvents: () => dispatch(fetchEvents())
    }
}

// const mapStateToProps = state => {
//     return {
//         events: state.events
//     }
// }

// const mapStateToProps = state => {
//     // debugger
//     return {events: state.events}
// }

const mapStateToProps = ({events}) => ({events})


export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)