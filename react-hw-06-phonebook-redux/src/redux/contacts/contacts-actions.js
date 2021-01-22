// import types from './contacts-types';
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("ADDCONTACT");
const removeContact = createAction("REMOVECONTACT");
const filterChange = createAction("CHANGE_FILTER");

const actions = { addContact, removeContact, filterChange };
export default actions;

//  const addContact = newContact => ({
//     type: types.ADDCONTACT,
//     payload: newContact,
// });
// const removeContact = id => ({
//     type: types.REMOVECONTACT,
//     payload: id,
// });
// const filterChange = filter => ({
//     type: types.CHANGE_FILTER,
//     payload: filter,
// });
// export default { addContact, removeContact, filterChange };
