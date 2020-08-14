
export default function eventReducer(state = {events: [], comments: []}, action) {
    debugger
    switch (action.type) {
        case 'FETCH_EVENTS':
            return {...state, events: action.events}
        case 'ADD_EVENTS':
            return {...state, events: [...state.events, action.payload] }
        case 'ADD_COMMENT':
            return {...state, comments: [...state.comments, action.payload] }
        
        default:
            return state
    }
}