import React, { Component } from 'react';

import AuthenticationForm from '../components/AuthenticationForm/AuthenticationForm';
import Auth from '../utils/auth';

class HomePage extends Component {
  state = {
    user: {},
    username: '',
    password: '',
    message: '',
    authenticated: false,
  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const { history } = this.props;

    const data = { username, password };

    Auth.authenticate(data)
      .then(res => {
        let data = res.data
        if (res.status === 200) {
          this.setState({
            user: data.token,
            authenticated: true
          });
          console.log(this.state.user)

          // Redirect user to a new page
          history.push("/explore")

          // Localstorage
          localStorage.setItem("token", JSON.stringify(data.token));
        } else {
          const error = new Error();
          throw error
        }
      })
      .catch(() => this.setState({ message: "*Incorrect Password or Email" }))
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <AuthenticationForm
        username={this.state.username}
        password={this.state.password}
        message={this.state.message}
        handleChange={this.changeHandler}
        formSubmit={(event) => this.formSubmitHandler(event)}
      />
    )
  }
}

export default HomePage;