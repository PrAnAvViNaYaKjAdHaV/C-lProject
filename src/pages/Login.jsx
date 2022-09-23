import React,{useState} from 'react'
import { auth } from '../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate,Link} from "react-router-dom"
const Login = () => {
  const [error, setError] = useState(false);
  const naviagate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
     await signInWithEmailAndPassword(auth, email, password)
     naviagate("/")
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
      <span className='logo'>Liebe Chat</span>
      <span className='title'>Register</span>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder ="email"/>
        <input type="password" placeholder="password"/>
        <button>Sign In</button>
        {error && <span>Something went wrong</span>}
      </form>
      <p>You dont have an account?<Link to="/register">Register</Link></p>
    </div>
   </div>
  )
}

export default Login