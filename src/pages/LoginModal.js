import React from 'react'
import Close from '../assets/closeButton.png'
import './css/Home.css'


function LoginModal() {
    return (
        <div id='modal' className="modal">
            <img src={Close} alt="X" />
            <h1>Welcome Back </h1>
            <h4>Learn on your own, study coursework and handout at your convinient time </h4>
            <div>
                <label for="username">Username</label>
                <input type="text" name="uername" id="username"></input>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password"></input>
                <p style={{fontWeight:'lighter',color:'#b3b0b0'}} >Between 6 to 12 characters</p>
            </div>

            <button>Login</button>

        </div>
    )
}

export default LoginModal
