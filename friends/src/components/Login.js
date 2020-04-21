import React from 'react';
import axios from 'axios';
import {authorize} from '../utils';
import {connect} from '';

export const Login = () =>{


    return(
        <div className="Login-Form">
             <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
        </div>
    )
}

