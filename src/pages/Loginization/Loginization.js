import React, { Component } from 'react';
import NavBar from '../../shared/NavBar/NavBar';

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
        <div>
          <h1>Login page</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="email"
                name="email"
                value={password}
                onChange={this.handleChange}
              />
            </label>
            <button>Log in</button>
          </form>
        </div>
      </>
    );
  }
}

export default Loginization;
