import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../config/constants'


function Signup() {
    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${BACKEND_URL}/register`, {name, email, password})
        .then(result => {console.log(result)
         navigate('/login')
        
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='w-screen h-screen bg-gradient-to-b from-pink-600 via-pink-300 to-white fixed'>
      
    <div className="d-flex justify-center align-items-center vh-100 ">
        <div className='p-3 rounded-3xl w-25 bg-gradient-to-b from-blue-950 to-gray-800 '>
           <h4 className="font-bold text-xl text-center text-gray-300"> Register </h4>

           <form onSubmit={handleSubmit}>
              <div className='mb-3 text-white'>
                <label htmlFor='email'>
                    <strong>Name</strong>
                </label>
                <input
                   type='text'
                   placeholder='Enter Name'
                   autoComplete='off'
                   name='email'
                   className='form-control rounded-0'
                   onChange={(e) => setName(e.target.value)}
                   />
              </div>

              <div className='mb-3 text-white'>
              <label htmlFor='email'>
                    <strong>Email</strong>
                </label>
                <input
                   type='email'
                   placeholder='Enter Email'
                   autoComplete='off'
                   name='email'
                   className='form-control rounded-0'
                   onChange={(e) => setEmail(e.target.value)}
                   />
              </div>

              <div className='mb-3 text-white'>
              <label htmlFor='email'>
                    <strong>Password</strong>
                </label>
                <input
                   type='password'
                   placeholder='Enter password'
                   autoComplete='off'
                   name='password'
                   className='form-control rounded-0'
                   onChange={(e) => setPassword(e.target.value)}
                   />
              </div>

              <button  type="submit" className='btn btn-warning w-100 text-white'> Register </button>
              
              </form>

               <p className='text-white'>Already have an Account</p>

               <div className='mt-2'>

               <Link to="/login" className='btn btn-default border w-100 bg-slate-500 text-white'> Login </Link>
               </div>

        </div>

    </div>
    
    </div>
  )
}

export default Signup