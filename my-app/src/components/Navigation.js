import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation(){

    return(
        <>
            <div className="nav-link">
                <NavLink className="link" to="/" >Home</NavLink>
            
            
            </div>
        </>
    );
}
export default Navigation;