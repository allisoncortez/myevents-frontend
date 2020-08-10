import React from 'react'
import EventList from '../components/EventList'
import EventInput from '../components/EventInput'
import {connect} from 'react-redux'
import {fetchEvents} from '../actions/fetchEvents'

class EventsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchEvents()
        // console.log(this.props)
    }
    render() {
        return (
            <div>
                <EventInput />
                <EventList events={this.props.events} />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        events: state.events
    }
}


export default connect(mapStateToProps, {fetchEvents})(EventsContainer)