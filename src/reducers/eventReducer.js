//updating the parts of our store that deal with events
export default function eventReducer(state = {events: {}}, action) {
// debugger
    switch (action.type) {
        case 'FETCH_EVENTS':
            return { events: action.payload }
        default:
            return state
    }
}