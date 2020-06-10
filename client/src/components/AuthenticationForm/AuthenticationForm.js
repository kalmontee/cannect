import React from 'react';

import Input from '../UI/Input/Input';
import classes from './AuthenticationForm.module.css';

const AuthenticationForm = (props) => {
  return (
    <div id={classes.LoginBox}>
      <div className={classes.TopBox}>
        <div className={classes.SignInBackground}>
          <h2>Sign In/Sign Up</h2>
        </div>
      </div>

      <div className={classes.BottomBox}>

        <form onSubmit={props.formSubmit}>
          <Input
            value={props.username}
            changed={props.handleChange}
            type={props.type}
            name="username"
            placeholder="Username"
            class={classes.UsernameInput} />

          <Input
            value={props.password}
            changed={props.handleChange}
            type="password"
            name="password"
            placeholder="Password"
            class={classes.PasswordInput} />

          <button
            // onClick={props.loginBtn}
            type="submit"
            className={classes.signInBtn}>
            Login
          </button>

          <br></br>

          {/* <button
            // onClick={props.createAccountBtn}
            type="submit"
            className={classes.RedirectBtn}>
            Create An Account
          </button> */}
        </form>

        <p style={{ color: "red" }}>{props.message}</p>
      </div>
    </div>
  )
}

export default AuthenticationForm;