import React,{useState} from 'react'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import p from '../assets/p.jpg';
import './Home.css'
const Home = () => {
  const [formType, setFormType] = useState('');

  const switchToSignUp = () => {
    setFormType('signup');
  };

  const switchToLogin = () => {
    setFormType('login');
  };

  return (
    <div className='home'>
      <div className='logo'>
        <img src={p} alt='logo'/>
        <p className='logotxt'>Feast</p>
      </div>
      <div className='intro'>
        <div className='introtext'>
          <p>Discover the best dishes and savour fresh, local flavours with our curated recipes..🤤🤤</p>
        </div>
        <div className='registerbtns'>
        <div className='signupbtn'>
            <button onClick={switchToSignUp}><span>Sign Up</span></button>
          </div>
          <div className='loginbtn'>
            <button onClick={switchToLogin}><span>Login</span></button>
          </div>
        </div>
      </div>
      {formType === 'signup' && <SignUpForm switchToLogin={switchToLogin}  />}
      {formType === 'login' && <LoginForm switchToSignUp={switchToSignUp}  />}
    </div>
  )
}

export default Home
