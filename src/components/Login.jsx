import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault();

        const storedData=JSON.parse(localStorage.getItem('user'));

        if(storedData&&storedData.email===email&&storedData.password===password){
            navigate('/dashboard')
        }
        else{
            alert("Invalid Username or Password")
        }
        setEmail('')
        setPassword('')
    }

  return (
    <>
        <div className='flex justify-center items-center h-screen bg-gray-300'>
            <div className='w-full max-w-md p-8 bg-white shadow-md'>
                <h1 className='text-2xl font-bold text-center mb-6'>LOGIN</h1>
                <form onSubmit={handleLogin}>
                    <input 
                    type="email"
                    placeholder='Enter your Email'
                    className='inputDesign'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                    type="password"
                    placeholder='Enter your Password'
                    className='inputDesign'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button type='submit' className='w-full py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold'>Login</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login