import { FETCHING_INSULT_START, FETCHING_INSULT_SUCCESS } from '../action/index.js';


const initialState = {
    insult: null,
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_INSULT_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCHING_INSULT_SUCCESS:
            return {
                ...state,
                insult: action.payload,
                isFetching: false
            };

        default:
            return state;
    }
};