import React from 'react'
import EventList from '../components/EventList'
import EventInput from '../components/EventInput'
import Event from '../components/Event'
import {connect} from 'react-redux'
import {fetchEvents} from '../actions/fetchEvents'
import {Route, Switch} from 'react-router-dom'

class EventsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchEvents()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/events/new' component={EventInput} />
                    <Route path='/events/:id' render={(routerProps) => <Event {...routerProps} events={this.props.events} />}/>
                    <Route exact path='/' render={(routerProps) => <EventList {...routerProps} events={this.props.events}/>} />
                </Switch>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
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

const mapStateToProps = ({events}) => ({events})


export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)