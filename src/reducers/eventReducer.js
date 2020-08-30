
export default function eventReducer(state = {events: [], comments: []}, action) {
    switch (action.type) {
        case 'FETCH_EVENTS':
            return {...state, events: action.payload}
        case 'ADD_EVENT':
            return {...state, events: [...state.events, action.payload] }
        case 'ADD_COMMENT':
            let events = state.events.map(event => {
                if (event.id === action.payload.id) {
                    return action.payload
                } else {
                    return event
                }
            })
            return {...state, events: events}
        case 'DELETE_COMMENT':
            let eventList = state.events.map(event => {
                if (event.id === action.payload.id) {
                    return action.payload
                } else {
                    return event
                }
            })
            return {...state, events: eventList}
        default:
            return state
    }
}