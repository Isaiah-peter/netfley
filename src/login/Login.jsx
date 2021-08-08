
import NetflixIcon from "../Svg/netflix.svg"

const Login = () => {

  return (
    <div className='login'>

      <div className="login__top">
        <div className="login__wrap">
          <img src={NetflixIcon} alt="" className='login__logo' />
        </div>
      </div>
      <div className="login__container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder='email'/>
          <input  type="password" placeholder='password' />
          <button className="loginButton">Sign In</button>
          <span>New to netfley <b>Sign Up now</b></span>
        </form>
      </div>
    </div>
  )
}

export default Login
