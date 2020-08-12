import React, {Component} from 'react'

class Account extends Component {
    // console.log(props)
    render(){
        const {title, description, startTime, endTime, lcoation, id} = this.props.event.attributes
        return (
            <li>
                {description}
            </li>
        )
    }
}

export default Account