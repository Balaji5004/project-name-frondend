import React from 'react'
import { Link } from 'react-router-dom'



export default function NavBar() {


  return (
   <div className='h-screen w-screen bg-gradient-to-b from-pink-600 via-pink-300 to-white fixed'>

    <div className='max-w-screen-xxl pt-40'>
   
  <div className=" w-96 h-96 mx-auto flex bg-gradient-to-b from-blue-950 to-gray-800 rounded-3xl">
     <div>
        <h1 className='font-signature font-bold text-gray-400 ml-16 text-3xl mt-2'> Video uploader & Streaming App </h1>   
       
       
   <div className='ml-20 mt-20 space-x-20'>
   <Link to="/login" className='btn btn-warning rounded-full '> Login </Link>
   

   
   <Link to="/register" className='btn btn-warning rounded-full '> SignUp </Link>
   </div>

   </div>
</div>
</div>
</div>

  )
}
