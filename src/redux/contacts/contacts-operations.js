import axios from "axios";
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
} from "./contacts-actions";

const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactsError(error.message)));
};

const addContact = ({ name, number }) => (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactsRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error.message)));
};

const deleteFromContacts = (contactId) => (dispatch) => {
  dispatch(deleteFromContactsRequest());

  axios
    .delete(`contacts/${contactId}`)
    .then(() => dispatch(deleteFromContactsSuccess(contactId)))
    .catch((error) => dispatch(deleteFromContactsError(error.message)));
};

// ===========================================================
// async Redux / async/await

// const fetchContacts = () => async (dispatch) => {
//   dispatch(fetchContactsRequest());

//   try {
//     const { data } = await axios.get("/contacts");
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };

// const addContact = ({ name, number }) => async (dispatch) => {
//   const contact = {
//     name,
//     number,
//   };

//   dispatch(addContactsRequest());

//   try {
//     const { data } = await axios.post("/contacts", contact);
//     dispatch(addContactsSuccess(data));
//   } catch (error) {
//     dispatch(addContactsError(error));
//   }
// };

// const deleteFromContacts = (contactId) => async (dispatch) => {
//   dispatch(deleteFromContactsRequest());

//   try {
//     await axios.delete(`contacts/${contactId}`);
//     dispatch(deleteFromContactsSuccess(contactId));
//   } catch (error) {
//     dispatch(deleteFromContactsError(error));
//   }
// };
// ===========================================================

export default { fetchContacts, addContact, deleteFromContacts };
