import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactsRequest = createAction("contacts/addContactsRequest");
export const addContactsSuccess = createAction("contacts/addContactsSuccess");
export const addContactsError = createAction("contacts/addContactsError");

export const deleteFromContactsRequest = createAction(
  "contacts/deleteFromContactsRequest"
);
export const deleteFromContactsSuccess = createAction(
  "contacts/deleteFromContactsSuccess"
);
export const deleteFromContactsError = createAction(
  "contacts/deleteFromContactsError"
);

export const changeFilter = createAction("contacts/changeFilter");

/*Redux Tookit*/

// export const addContact = createAction("contacts/add", ({ name, number }) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

// export const deleteFromContacts = createAction("contacts/delete");

// export const changeFilter = createAction("contacts/changeFilter");
