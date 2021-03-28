import React, { Component, useEffect } from 'react';
// import { connect } from 'react-redux';
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

// =============================ContactsPage=============================================
// class ContactsPage extends Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   render() {
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm />
//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//         {this.props.isLoadingContacts && <h1>Loading...</h1>}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   isLoadingContacts: contactsSelectors.getLoadingContacts(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
