import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import classes from './LogoutBtn.module.css';

class Button extends Component {
  state = {
    navigate: false,
  }

  logoutHandler = () => {
    localStorage.removeItem("token");
    this.setState({ navigate: true });
  }
  render() {
    const { navigate } = this.state;

    if (navigate) {
      return <Redirect to="/" push={true} />
    }

    return (
      <i className={"fas fa-sign-out-alt"}><button className={classes.LogoutBtn} icon={this.props.icon} onClick={this.logoutHandler} >
        Sign Out
      </button> </i>
    )
  }
}

export default Button;