import { combineReducers } from "redux";
import actions from "./contacts-actions.js";
// import types from './contacts-types.js';
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer(
  ( JSON.parse(localStorage.getItem("contacts")) ?? []),
  {
    [actions.addContact]: (state, action) => [...state, action.payload],
    [actions.removeContact]: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  }
);
const filter = createReducer("", {
  [actions.filterChange]: (_, action) => action.payload,
});
export default combineReducers({
  items,
  filter,
});

// const items = (state = JSON.parse(localStorage.getItem('contacts')) ?? [], { type, payload }) => {
//     // console.log(payload);
//     switch (type) {
//         case types.ADDCONTACT:
//             return [...state, payload];
//         case types.REMOVECONTACT:
//             return state.filter(({ id }) => id !== payload);
//         default:
//             return state;
//     }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

