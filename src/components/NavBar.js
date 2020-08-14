import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div class="ui borderless huge menu">
            <a class="item">
            <Link to="/">AAMO</Link>
            </a>
            <a class="item">
                <Link to="/events">Browse</Link>
            </a>
            <div class="right menu">
                <a class="item">
                <Link to="/events/new">add an EVENT</Link>
                </a>
            </div>
        </div>
    )
}

export default NavBar