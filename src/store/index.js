import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import {AuthReducer} from '../modules';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
    blacklist: [],
    //stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
    auth: AuthReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(
        persistedReducer,
        {},
        compose(
            applyMiddleware(thunk)
        )
    );

    let persistor = persistStore(store);
    return {store, persistor};
};
