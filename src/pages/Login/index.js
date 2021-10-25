import React from 'react'
import './style.css'
import {Link } from 'react-router-dom'
import TASKManeger from '../../components/TASKManager'
import LoginGoogle from '../../assets/images/Vector (1).png'
import LoginFacebook from '../../assets/images/Vector (2).png'
import CorretoLogo from '../../assets/images/Vector (9).png'
const Login = () => (
    <div className="ContainerLogin">
        <div className="TextContainer">
            <TASKManeger/>
                <div className="GlobalGoogle">
                    <div className="Google">
                        <img src={LoginGoogle} alt="Google"/>
                    </div>
                    <Link to="google.com" className="TextGoogle">
                        <p>Google</p>
                    </Link>
                </div>
                <div className="GlobalGoogle ">
                    <div className="Google">
                        <img src={LoginFacebook} alt="Facebook"/>
                    </div>
                    <Link to="facebook.com"className="TextGoogle">
                        <p>Facebook</p>
                    </Link>
                </div>
                <div className="input">
                    <label>Your email</label>
                    <input type="email" placeholder="Pleace insert your e-mail adress"/>
                </div>
                 <div className="input">
                    <label>Password</label>
                    <input type="password" placeholder="Pleace insert your password adress"/>
                </div>
                <button className="btn">Sign In</button>
        </div>
    </div>
)

export default Login;