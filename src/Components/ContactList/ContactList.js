import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const onDeleteFromContacts = useCallback(
    id => {
      dispatch(contactsOperations.deleteFromContacts(id));
    },
    [dispatch],
  );

  // const onDeleteFromContacts = id => {
  //   dispatch(contactsOperations.deleteFromContacts(id));
  // };

  return (
    <div className={styles.container}>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.ContactListItem}>
            <p className={styles.ContactsListText}>
              {name} : {number}
            </p>
            <button
              className={styles.ContactsListButton}
              onClick={() => onDeleteFromContacts(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),

  onDeleteFromContacts: PropTypes.func,
};

export default ContactList;
// ===================================================================
// const ContactList = ({ contacts, onDeleteFromContacts }) => {
//   return (
//     <div className={styles.container}>
//       <ul>
//         {contacts.map(({ id, name, number }) => (
//           <li key={id} className={styles.ContactListItem}>
//             <p className={styles.ContactsListText}>
//               {name} : {number}
//             </p>
//             <button
//               className={styles.ContactsListButton}
//               onClick={() => onDeleteFromContacts(id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   contacts: contactsSelectors.getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteFromContacts: id =>
//     dispatch(contactsOperations.deleteFromContacts(id)),
// });

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ).isRequired,

//   onDeleteFromContacts: PropTypes.func,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
