import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {

    // Destructure context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, logIn } = authContext;
    
    // User or password does not existexist
    useEffect(() => {
         if (authenticated) {
            props.history.push('/projects');
        } 

        if (message) {
            showAlert(message.msg, message.category);
        }
    }, [message, authenticated, props.history])

    const [ user, saveUser] = useState({
        email: '',
        password: ''
    });

    // Destructure User
    const { email, password } = user;

    const onChangeLogin = e => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    // User cliks Login
    const onSubmitLogin = e => {
        e.preventDefault();

        // Validation
        if (email.trim() === '' || password.trim() === '') {
            showAlert('All fields are required', 'alert-error');
        }

        // Send
        logIn({ email, password });
    }

    return ( 
        <div className="form-user">
            { alert 
                ?  
                    <div className={`alert ${alert.category}`}> 
                        {alert.msg}
                    </div>
                : 
                    null
            }
            <div className="container-form shadow-dark">
                <h1>Login</h1>
                <form
                    onSubmit={onSubmitLogin}
                >
                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={onChangeLogin}
                            />
                    </div>
                    <div className="field-form">
                        <label htmlFor="email">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChangeLogin}
                            />
                    </div>

                    <div className="field-form">
                        <input 
                            type="submit" 
                            className="btn btn-primary btn-block"
                            value="Login"
                        />
                    </div>
                </form>
                <Link 
                    to={'new-account'} 
                    className="link-account"
                >
                    Sign Up    
                </Link>
            </div>
        </div>
     );
}
 
export default Login;