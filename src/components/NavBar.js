import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="ui huge secondary menu">
            <Link to="/events" className="item">AAMO</Link>
                
            <div className="right menu">
                    <div className="item">
                        <div className="ui transparent icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search link icon"></i>
                        </div>
                    </div>
    
                    <Link to="/events/new" className="item">add an EVENT</Link>
            </div>
        </div>
    )
}

export default NavBar