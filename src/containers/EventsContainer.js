import React from 'react'
import EventList from '../components/EventList'
import EventInput from '../components/EventInput'
import {connect} from 'react-redux'
import {fetchEvents} from '../actions/fetchEvents'

class EventsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchEvents()
        // console.log(this.props.fetchEvents())
    }
    render() {
        console.log(this.props.events)
        return (
            <div>
                <EventInput />
                <EventList events={this.props.events} />
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