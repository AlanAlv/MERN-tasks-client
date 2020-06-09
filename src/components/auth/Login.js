import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    
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
        e.prevent.default();
    }

    return ( 
        <div className="form-user">
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