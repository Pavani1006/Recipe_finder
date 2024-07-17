import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './LoginForm.css'; 

const LoginForm = ({ switchToSignUp }) => {

  const navigate = useNavigate()

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('https://recipe-finder-b5cz.onrender.com/login',{email,password})
    .then(res=> {
      console.log('login.js',res)
      if (res.data === 'Success')
      {
        alert("Login successful!!");
        navigate('/mainpg')
      }
      else if (res.data === 'Password is incorrect')
      {
        alert('Check your password!!');
      }
      else if (res.data === 'No such record exist')
      {
        alert('No such user found!!');
      }
    })
    .catch(err=> console.log(err))
  }

  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <h2 className='lhead'>Login</h2>
        <form className='inputs' onSubmit={handleSubmit}>
          <div>
            <input className='input-field' type="email" name="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required  />
          </div>
          <div>
            <input className='input-field field2' type="password" name="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
          </div>
          <button className='lbtn' type="submit">Login</button>
        </form>
        <p className='check'>
          Don't have an account? <span onClick={switchToSignUp} className='sign-up-link'>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

