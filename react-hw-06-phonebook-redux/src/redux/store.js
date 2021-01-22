// import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer.js';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        contacts:contactsReducer,
    },
    devTools:process.env.NODE_ENV==='development',
})

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());
export default store;