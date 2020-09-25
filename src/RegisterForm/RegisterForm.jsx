import React, { useState } from "react";
import Joi from "joi-browser";
import Form from "../_components/common/form";
import * as userRegisterService from '../_services/userRegisterService';
import { Router, Route, Link } from 'react-router-dom';
import {LoginPage} from '../LoginPage/LoginPage';
//import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      // .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    // name: Joi.string()
    //   .required()
    //   .label("Name")
  };

  doSubmit = async () => {
    try {
      const response = await userRegisterService.register(this.state.data);
      //auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/login";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {/* {this.renderInput("name", "Name")} */}
          {this.renderButton("Register")}
        </form>
        <Link to="/login" component={LoginPage}>Already registered?</Link>
      </div>
    );
  }
}

export { RegisterForm };
