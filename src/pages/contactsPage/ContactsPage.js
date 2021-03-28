import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../Components/ContactForm/';
import ContactList from '../../Components/ContactList/';
import Filter from '../../Components/Filter/';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const isLoadingContacts = useSelector(contactsSelectors.getLoadingContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoadingContacts && <h1>Loading...</h1>}
    </div>
  );
};

export default ContactsPage;
