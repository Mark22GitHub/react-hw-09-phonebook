import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { contactsSelectors } from '../../redux/contacts';

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(contactsSelectors.getFilter);

  const onChange = useCallback(
    e => {
      dispatch(changeFilter(e.target.value));
    },
    [dispatch],
  );

  // const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <>
      <label className={styles.filter}>
        Find contact by name
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
