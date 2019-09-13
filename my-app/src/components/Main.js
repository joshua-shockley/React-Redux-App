import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import logo from '../images/angryowl.jpg'

function Main (){

    return(
        <div className="App-header">
            <Image className="image" src={logo}/>

            <h1 >Hey, Dummie....Be Ready To Get Inuslted!!!</h1>
            <div className="main-link-container">
                <NavLink className="main-link" to="/Insults">Click <strong>here</strong> to be insulted, <strong>You Idiot!!!</strong></NavLink>
            </div>
        </div>
    );
}
export default Main;