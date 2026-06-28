import React from 'react'
import "../auth.form.scss"

const Login = () => {
  return (
    <main>
        <div className='form-container'>
            <h1>Login</h1>
            <form>
                <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email' placeholder="Enter your Email"/>
                </div>
                <div className='input-group'>
                    <lable htmlFor="password">Password</lable>
                    <input type="password" id="password" name="password" placeholder="Password"></input>

                </div>
                <button className='button primary-button'>Login</button>


            </form>
        </div>
    </main>
  )
}

export default Login;
