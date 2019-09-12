import React, { useEffect } from 'react'
import {connect} from 'react-redux';
import { getInsult } from '../action/index.js';




const Insults = (props) => {

useEffect(() => {
    props.getInsult();

},[props.getInsult]);

// if (props.isFetching){
//     return <h1>get ready for your insult!... you might not like it...</h1>;
// }
console.log(props);
    return (
        <div>
            say hello from Insults.js
            <h2>{props.insult}</h2>
            <button onClick={props.getInsult}>Insult Me</button>
        </div>
    );
};


const mapStateToProps = state => {
    return{
        insult: state.insult,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getInsult})(Insults);