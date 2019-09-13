import React, { useEffect } from 'react'
import {connect} from 'react-redux';
import { getInsult } from '../action/index.js';




const Insults = ({insult, getInsult, isFetching, error, clicked}) => {

useEffect(() => {
    getInsult();

},[getInsult]);

if (isFetching){
    return <h1 className="App-header" >get ready for your insult!... you might not like it...</h1>;
};
    return (

        <div className="insult-container App-header">
            <button className="insult-button" onClick={getInsult}>Insult Me Again</button>
            <br/>
            <h2 className="the-insult-itself">{insult}</h2>
        </div>
    );
};


const mapStateToProps = state => {
    console.log(state);
    return{
        insult: state.insult,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getInsult})(Insults);