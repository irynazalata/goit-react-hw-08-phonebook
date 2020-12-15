import React, { Component } from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

class Registration extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { email, password, name } = this.state;
    return (
      <>
        <NavBar />
        <div>
          <h1>Register page</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
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
                type="password"
                name="password"
                value={password}
                placeholder="minimum 7 symbols"
                onChange={this.handleChange}
              />
            </label>
            <button>Register</button>
          </form>
        </div>
      </>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  Registration,
);