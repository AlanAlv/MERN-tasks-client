import React from 'react'


const onChangeLogin = () => {

}
const Login = () => {
    return ( 
        <div className="form-user">
            <div className="container-form shadow-dark">
                <h1>Login</h1>
                <form>
                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="Email"
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
            </div>
        </div>
     );
}
 
export default Login;