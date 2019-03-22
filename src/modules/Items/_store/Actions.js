import Item from './service';
import {
    ATTEMPT_GETTING_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL,
    ATTEMPT_GETTING_ITEM, GET_ITEM_SUCCESS, GET_ITEM_FAIL,
    ITEM_SELECTED,
    ITEM_NAME_CHANGED, ITEM_QUANTITY_CHANGED, ITEM_UNIT_PRICE_CHANGED, ITEM_WHOLE_PRICE_CHANGED
} from './Types';

/**
 * Action Creator - For taking item name
 *
 * @param {String} payload
 */
export const itemNameChanged = payload => ({ type: ITEM_NAME_CHANGED, payload });

/**
 * Action Creator - For taking item quantity
 *
 * @param {Number} payload
 */
export const itemQuantityChanged = payload => ({ type: ITEM_QUANTITY_CHANGED, payload });

/**
 * Action Creator - For taking item unit price
 *
 * @param {Number} payload
 */
export const itemUnitPriceChanged = payload => ({ type: ITEM_UNIT_PRICE_CHANGED, payload });

/**
 * Action Creator - For taking item whole price
 *
 * @param {Number} payload
 */
export const itemWholePriceChanged = payload => ({ type: ITEM_WHOLE_PRICE_CHANGED, payload });

/**
 * Item Action - Get all items
 */
export const getAllItems = () => async dispatch => {
    try {
        dispatch({ type: ATTEMPT_GETTING_ITEMS });

        const items = await Item.all();

        if (items) {
            console.log('these are all items: ', items);
            dispatch({ type: GET_ITEMS_SUCCESS, payload: items });
        }
    } catch (error) {
        dispatch({ type: GET_ITEMS_FAIL, payload: error });
        console.log('this is the error from getting all items: ', error);
    }
}

/**
 * Item Action - Get an item by id
 *
 * @param {Number} id
 */
export const getItem = id => async dispatch => {
    try {
        dispatch({ type: ATTEMPT_GETTING_ITEM });

        const item = await Item.show(id);

        if (item) {
            console.log('this is the specified item: ', item);
            dispatch({ type: GET_ITEM_SUCCESS, payload: item });
        }
    } catch (error) {
        dispatch({ type: GET_ITEM_FAIL, payload: error });
        console.log('this is the error from getting specified item: ', error);
    }
}

/**
 * Item Action - Select an item
 *
 * @param {Object} item
 */
export const selectItem = item => ({ type: ITEM_SELECTED, payload: item });
