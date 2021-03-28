import React, { Component, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import styles from '../loginPage/LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleEmailChange = (evt) => {
  //   setEmail(evt.target.value);
  // };
  // const handlePasswordChange = (evt) => {
  //   setPassword(evt.target.value);
  // };

  const handleChange = useCallback(e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.logIn({ email, password }));
      setEmail('');
      setPassword('');
    },
    [dispatch, email, password],
  );

  return (
    <div className={styles.container}>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          E-mail:
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="enter e-mail"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Password:
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="enter password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={styles.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
