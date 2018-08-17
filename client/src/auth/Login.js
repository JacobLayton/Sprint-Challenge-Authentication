import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <div className="Login">
        <h1>Please Login</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <input 
              name="username"
              value={this.state.username}
              onChange={this.inputChangeHandler}
              type="text"
            />
          </div>
          <div>
            <input 
              name="password"
              value={this.state.password} 
              onChange={this.inputChangeHandler}
              type="password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }

  inputChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  submitHandler = e => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/login', this.state)
      .then(res => {
        console.log('data', res.data);
      })
      .catch(err => { 
        console.log('Axios failed');
      });

    console.log('state', this.state);
  }
}

export default Login;
