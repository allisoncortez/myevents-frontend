import React from 'react'
import EventList from '../components/EventList'
import EventInput from '../components/EventInput'
import {connect} from 'react-redux'

class EventsContainer extends React.Component {
    render() {
        return (
            <div>
                <EventInput />
                <EventList />
            </div>
        )
    }

}

export default connect()(EventsContainer)