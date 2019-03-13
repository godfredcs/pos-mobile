import {
    ATTEMPT_GETTING_ITEMS, GET_ITEMS_FAIL, GET_ITEMS_SUCCESS
} from './Types';

const INITIAL_STATE = {
    items: [],
    attempt_getting_items: false,
    items_error: ''
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ATTEMPT_GETTING_ITEMS:
            return { ...state, items_error: '', attempt_getting_items: true };

        case GET_ITEMS_SUCCESS:
            return { ...state, attempt_getting_items: false, items: action.payload };

        case GET_ITEMS_FAIL:
            return { ...state, attempt_getting_items: false, items_error: action.payload };

        default:
            return state;
    }
}
