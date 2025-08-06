    import React from 'react'
    import Header from './Header'
    import { netflixBG } from '../utils/constants'
    import { useState } from 'react'


    const Login = () => {
   const[isSignInForm,setIsSignInForm]=useState(true)

   const toggleSignInForm = ()=>{
   setIsSignInForm(!isSignInForm)
   }

      return (
        <div >
            <Header/>
            <div className='absolute'>
                  <img src={netflixBG} alt='netfli-background '/>
                  <form onSubmit={(e)=>{e.preventDefault()}} className='z-50 absolute top-1/4 right-1/3 bg-black text-white p-12 w-3/12  mr-20 bg-opacity-80 rounded-md '>
                    <h1 className='text-3xl m-2'>{
                      isSignInForm ? "Sign In" : "Sign Up"
                      }</h1>
                      {
                        !isSignInForm &&
                       <input className='w-full m-2 p-3' type='text' placeholder='Name'/> 
                      }
                    <input className='w-full m-2 p-3' type='text' placeholder='Email Adress'/>
                    <input className='w-full m-2  p-3' type="password" placeholder='Password' />
                    <button  className='w-full m-2  p-3 bg-red-600 text-white'>{isSignInForm ? "Sign In": "Sign Up"}</button>
                    <p className='m-2 cursor-pointer' onClick={toggleSignInForm}>New to Netflix? Sign up now.</p>
                  </form>
            </div>
          
        </div>
      )
    }
    
    export default Login