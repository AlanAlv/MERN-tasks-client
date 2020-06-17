import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';

const NewAccount = () => {
    
    // Destructure context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const [ user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    // Destructure User
    const { name, email, password, confirm } = user;

    const onChangeLogin = e => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    // User clicks Login
    const onSubmitLogin = e => {
        e.prevent.default();

        // Validate is empty
        if (name.trim() === '' || email.trim() === '' || 
            password.trim() === '' || confirm.trim() === ''){
                showAlert('All fields are required', 'alert-error');
                return;
        }

        // Password validation
        if (password.length < 6){
            showAlert('Password must be at least 6 characters', 'alert-error')
            return;
        }

        if (password !== confirm){
            showAlert('Your password and confirmation password do not match', 'alert-error')
            return;
        }

        // 
    }

    return ( 
        <div className="form-user">
            { alert 
                ?  
                    <div className={`alert ${alert.category}`}> 
                        {alert.msg}
                    </div>
                : 
                    null}
            <div className="container-form shadow-dark">
                <h1>Create Account</h1>
                <form
                    onSubmit={onSubmitLogin}
                >
                    <div className="field-form">
                        <label htmlFor="email">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange={onChangeLogin}
                            />
                    </div>

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
                        <label htmlFor="password">Password</label>
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
                        <label htmlFor="confirm">Confirm Password</label>
                        <input 
                            type="password" 
                            name="confirm" 
                            id="confirm"
                            placeholder="Repeat your Password"
                            value={confirm}
                            onChange={onChangeLogin}
                            />
                    </div>

                    <div className="field-form">
                        <input 
                            type="submit" 
                            className="btn btn-primary btn-block"
                            value="Register"
                        />
                    </div>
                </form>
                <Link 
                    to={'/'} 
                    className="link-account"
                >
                    Return to Login    
                </Link>
            </div>
        </div>
     );
}
 
export default NewAccount;