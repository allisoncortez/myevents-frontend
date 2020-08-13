import React, {Component} from 'react'

class Account extends Component {
    // console.log(props)
    render(){
        const {title, description, startTime, endTime, location, id} = this.props.event.attributes
        return (
            <li>
                {title} {startTime}
            </li>
        )
    }
}

export default Account