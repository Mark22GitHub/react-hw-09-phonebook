import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../UserMenu/UserMenu.module.css';

import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = () => {
  const dispatch = useDispatch();

  const email = useSelector(authSelectors.getUserEmail);

  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <span className={styles.email}>Welcome: {email}</span>
      <button className={styles.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
