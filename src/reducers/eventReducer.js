
export default function eventReducer(state = {events: [], comments: []}, action) {
    // debugger
    switch (action.type) {
        case 'FETCH_EVENTS':
            return {...state, events: action.payload}
        case 'ADD_EVENT':
            return {...state, events: [...state.events, action.payload] }
        case 'ADD_COMMENT':
            return {...state, comments: [...state.comments, action.payload] }
        case 'DELETE_COMMENT':
            let comments = state.comments.filter(comment => comment.id !== action.commentId)
            return { ...state, comments: comments }
        default:
            return state
    }
}