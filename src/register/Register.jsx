import React, { useRef, useState } from 'react'
import NetflixIcon from "../Svg/netflix.svg"

const Register =() => {
    const [email ,setEmail] = useState('')
    const [password, setPassword] = useState('')
   

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = () => {
        setEmail(emailRef.current.value)
    }
    const handlePassword = () => {
        setPassword(passwordRef.current.value)
    }
   
    return (
        <div className ='register'>
           
           <div className="register__top">
           <div className="register__wrap">
                <img src={NetflixIcon} alt="" className='register__logo' />
                <button className='loginButton'>Sign In</button>
            </div>
           </div>
            <div className="register__container">
                <h1>Unlimited movies, Tv show and more</h1>
                <h2>Watch anywhere, cancel anytime.</h2>
                <p>
                    Ready to watch, Enter your email or create or renew you membership
                </p>
                {
                   !email  ? (
                    <div className="input">
                    <input type="email" ref={emailRef} placeholder='email' />
                    <button className="registerButton" onClick={handleSubmit} >Get Started</button>
                </div>
                   ) : (
                    <div className="input">
                    <input type="password"ref={passwordRef} placeholder='password'  />
                    <button className="registerButton" onClick={handlePassword} >Finish</button>
                </div>
                   )
                }
            </div>
        </div>
    )
}

export default Register
