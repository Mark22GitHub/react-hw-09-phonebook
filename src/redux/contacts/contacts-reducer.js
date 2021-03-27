import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteFromContactsRequest,
  deleteFromContactsSuccess,
  deleteFromContactsError,
  changeFilter,
} from "./contacts-actions";

/*Redux Tookit*/
const items = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteFromContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteFromContactsRequest]: () => true,
  [deleteFromContactsSuccess]: () => false,
  [deleteFromContactsError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (state, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
