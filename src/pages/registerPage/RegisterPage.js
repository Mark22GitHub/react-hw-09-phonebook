import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../registerPage/RegisterPage.module.css';
import { authOperations } from '../../redux/auth';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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

      dispatch(authOperations.register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    },
    [dispatch, name, email, password],
  );

  return (
    <div className={styles.container}>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="enter name"
            value={name}
            onChange={handleChange}
          />
        </label>

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
          Sign In
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
