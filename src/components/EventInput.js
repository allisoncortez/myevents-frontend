import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addEvent} from '../actions/addEvent'
import Header from './Header'

const EventInput = (props) => {

    const initialState = {
        title:'',
        description:'',
        startTime:'',
        endTime:'',
        location:'',
        category:'art'
    }

    const [state, setState] = useState(initialState)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addEvent())
    }, [])

    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(addEvent(state))
        
        setState({
            title:'',
            description:'',
            startTime:'',
            endTime:'',
            location:'',
            category:'art'
        })
        props.history.push('/events')
    }

        return (
            <div>
                <Header />
            <div className="ui container">
                <form onSubmit={(e) => handleOnSubmit(e)} className="ui form">
                    <div className="three fields">
                        <div className="field">
                            <label>Event Name</label>
                            <input type='text' placeholder="What's it called?" name="title" value={state.title} onChange={handleOnChange} />
                        </div>
                        <div className="field">
                            <label>Starts</label>
                            <input type='datetime-local' name="startTime" value={state.startTime} onChange={handleOnChange} />
                        </div>
                        <div className="field">
                            <label>Ends</label>
                            <input type='datetime-local' name="endTime" value={state.endTime} onChange={handleOnChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea placeholder='Live DJ? Free food?? Tell us about it...' name="description" value={state.description} onChange={handleOnChange} />
                    </div>
                    <div className="field">
                        <label>Location</label>
                        <input type='text' placeholder='Location' name="location" value={state.location} onChange={handleOnChange} />
                    </div>
                    <div className="field">
                        <label>Art or Music?</label>
                        <select name="category" value={state.category} onChange={handleOnChange}>
                            <option>art</option>
                            <option>music</option>
                        </select>
                    </div>
                    
                    <button className="ui teal button">Submit</button>
                </form>
            </div>
            </div>
        )
}


export default EventInput