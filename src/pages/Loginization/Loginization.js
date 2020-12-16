import React, { Component } from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './Loginization.module.css';

class Loginization extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };
  render() {
    const { email, password } = this.state;
    return (
      <>
        <NavBar />
        <div className={styles.container}>
          <h1 className={styles.title}>Login page</h1>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <label className={styles.label}>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className={styles.input}
              />
            </label>
            <label className={styles.label}>
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                className={styles.input}
              />
            </label>
            <button className={styles.button}>Log in</button>
          </form>
        </div>
      </>
    );
  }
}

export default connect(null, { onLogin: authOperations.login })(Loginization);
