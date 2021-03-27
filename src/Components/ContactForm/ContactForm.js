import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelectors.getAllContacts);
  const dispatch = useDispatch();

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error();
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (contacts.find(contact => contact.name === name)) {
        alert(`${name} is already in contacts`);
        reset();
        return;
      } else {
        dispatch(contactsOperations.addContact({ name, number }));
        reset();
      }
    },
    [contacts, dispatch, name, number],
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  // const handleChange = e => {
  //   const { name, value } = e.currentTarget;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       throw new Error();
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   if (contacts.find(contact => contact.name === name)) {
  //     alert(`${name} is already in contacts`);
  //     reset();
  //     return;
  //   } else {
  //     dispatch(contactsOperations.addContact({ name, number }));
  //     reset();
  //   }
  // };

  return (
    <div className={styles.container}>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor={nameInputId}>
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            id={nameInputId}
            placeholder="enter name"
          />
        </label>

        <label className={styles.label} htmlFor={numberInputId}>
          Number:
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            id={numberInputId}
            placeholder="enter number"
          />
        </label>

        <button className={styles.addContact} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
