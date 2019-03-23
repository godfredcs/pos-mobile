import {
    ATTEMPT_GETTING_ITEMS, GET_ITEMS_FAIL, GET_ITEMS_SUCCESS,
    ITEM_SELECTED,
    ATTEMPT_ADDING_ITEM, ADD_ITEM_FAIL, ADD_ITEM_SUCCESS,
    ITEM_NAME_CHANGED, ITEM_QUANTITY_CHANGED, ITEM_UNIT_PRICE_CHANGED
} from './Types';

const INITIAL_STATE = {
    items: [],
    item_name: '',
    items_error: '',
    item_quantity: '',
    selected_item: null,
    item_unit_price: '',
    attempt_adding_item: false,
    attempt_getting_items: false
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ITEM_NAME_CHANGED:
            return { ...state, item_name: action.payload };

        case ITEM_QUANTITY_CHANGED:
            return { ...state, item_quantity: action.payload };

        case ITEM_UNIT_PRICE_CHANGED:
            return { ...state, item_unit_price: action.payload };

        case ATTEMPT_GETTING_ITEMS:
            return { ...state, items_error: '', attempt_getting_items: true };

        case GET_ITEMS_SUCCESS:
            return { ...state, attempt_getting_items: false, items: action.payload };

        case GET_ITEMS_FAIL:
            return { ...state, attempt_getting_items: false, items_error: action.payload };

        case ITEM_SELECTED:
            console.log('this is the selected item: ', action.payload)
            return { ...state, selected_item: action.payload };

        case ATTEMPT_ADDING_ITEM:
            return { ...state, attempt_adding_item: true };

        case ADD_ITEM_SUCCESS:
            return { ...state, attempt_adding_item: false };

        case ADD_ITEM_FAIL:
            return { ...state, attempt_adding_item: false };

        default:
            return state;
    }
}
