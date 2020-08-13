
export default function eventReducer(state = {events: []}, action) {
// export default function eventReducer(state = [{events: {}}], action) {
debugger
    switch (action.type) {
        case 'FETCH_EVENTS':
            // return {...state, events: action.payload}
            return { events: action.events}
            // return action.events
        case 'ADD_EVENTS':
            return {...state, events: [...state.events, action.payload] }
            // return [...state, action.event]
        default:
            return state
    }
}