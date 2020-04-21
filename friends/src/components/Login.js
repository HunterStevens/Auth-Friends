import React, {useState} from 'react';
import axios from 'axios';
import {authorize} from '../utils';
import {connect} from '';

export const Login = (props) =>{

    const [stateLogin, setStateLogin] = useState({
        credentials:{
            username:'',
            password:''
        }
    });

    const handleChange = event =>{
        setStateLogin({
            credentials:{
                ...stateLogin.credentials,
                [event.target.name]: event.target.value
            }
        });
    }

    const loginSubmit = event =>{
        event.preventDefault();
        
    }

    return(
        <div className="Login-Form">
             <form onSubmit={loginSubmit}>
          <input
            type="text"
            name="username"
            value={stateLogin.credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={stateLogin.credentials.password}
            onChange={handleChange}
          />
            <button>Log in</button>
          </form>
        </div>
    )
}

