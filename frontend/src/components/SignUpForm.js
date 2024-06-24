import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = ({ switchToLogin }) => {

  const navigate = useNavigate()

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('https://recipe-finder-yy9r.onrender.com/signup', {name,email,password})
    .then(res => {
      console.log('signup.js',res)
      if (res.data === 'Exists'){
        alert("User already exists with same email! Try to login or Create an account using another email")
      }
      else if(res.data === 'created'){
        alert("Account successfully created!!")
        navigate('/mainpg')
      }
      else {
        alert("Error")
      }
    })
    .catch(err =>{
      alert("Error")
     console.log('axios err ',err)
    })
  }


  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <input className='input-field' type="name" name="name" placeholder='Username' value={name} onChange={(e)=>setName(e.target.value)} required />
          </div>
          <div>
            <input className='input-field' type="email" name="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}  required />
          </div>
          <div>
            <input className='input-field field2' type="password" name="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
          </div>
          <button className='lbtn' type="submit">Sign Up</button>
        </form>
        <p className='check'>
          Already have an account? <span onClick={switchToLogin} style={{ color: 'blue', cursor: 'pointer' }}>Login</span>
        </p>
      </div>
    </div>
  );
};


export default SignUpForm;

