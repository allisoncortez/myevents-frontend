import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="ui secondary huge pointing menu">
            <Link to="/" className="item">AAMO</Link>
                <Link to="/events" className="item">Explore</Link>
            <div className="right menu">
                <Link to="/events/new" className="item">add an EVENT</Link>
            </div>
        </div>
    )
}

export default NavBar