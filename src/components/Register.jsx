import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'

const Register = () => {

    const [userName,setUserName]=useState('');
    const [phno,setPhno]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleRegister=(e)=>{
        e.preventDefault();
        if(userName&&phno&&email&&password){
            localStorage.setItem('user',JSON.stringify({userName,phno,email,password}));
            navigate('/login');
        }
        setUserName('')
        setPhno('')
        setEmail('')
        setPassword('')
    }


  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
          <form onSubmit={handleRegister}>
          <input
              type="text"
              placeholder="UserName"
              className="inputDesign"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Contact number"
              className="inputDesign"
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="inputDesign"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="inputDesign"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
