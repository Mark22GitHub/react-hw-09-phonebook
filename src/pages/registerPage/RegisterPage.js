import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import styles from '../registerPage/RegisterPage.module.css';
import { authOperations } from '../../redux/auth';

// const RegisterPage = ({ onRegister }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     switch (name) {
//       case "name":
//         setName(value);
//         break;

//       case "email":
//         setEmail(value);
//         break;

//       case "password":
//         setPassword(value);
//         break;

//       default:
//         throw new Error();
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onRegister(name, email, password);
//     setName("");
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Registration Form</h1>

//       <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           Name:
//           <input
//             className={styles.input}
//             type="text"
//             name="name"
//             placeholder="enter name"
//             value={name}
//             onChange={handleChange}
//           />
//         </label>

//         <label className={styles.label}>
//           E-mail:
//           <input
//             className={styles.input}
//             type="email"
//             name="email"
//             placeholder="enter e-mail"
//             value={email}
//             onChange={handleChange}
//           />
//         </label>

//         <label className={styles.label}>
//           Password:
//           <input
//             className={styles.input}
//             type="password"
//             name="password"
//             placeholder="enter password"
//             value={password}
//             onChange={handleChange}
//           />
//         </label>

//         <button className={styles.button} type="submit">
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.container}>
        <h1>Registration Form</h1>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            Name:
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="enter name"
              value={name}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.button} type="submit">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}
// abbreviated notation mapDispatchToProps
const mapDispatchToProps = {
  onRegister: authOperations.register,
};

// const mapDispatchToProps = (dispatch) => ({
//   onRegister: (data) => dispatch(authOperations.register(data)),
// });

export default connect(null, mapDispatchToProps)(RegisterPage);
