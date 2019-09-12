import axios from 'axios';

export const FETCHING_INSULT_START = 'FETCHING_INSULT_START';
export const FETCHING_INSULT_SUCCESS = 'FETCHING_INSULT_SUCCESS';
export const FETCHING_INSULT_FAILURE = 'FETCHING_INSULT_FAILURE';

export const getInsult = () => dispatch =>{
    dispatch({type: FETCHING_INSULT_START});
    axios
    .get('https://evilinsult.com/generate_insult.php?lang=en&text')
    .then(res => {
        dispatch({ type: FETCHING_INSULT_SUCCESS, payload: res});
    })
    .catch(err=> {
        dispatch({
            type: FETCHING_INSULT_FAILURE,
            payload: 'woops'
        });
    });
};