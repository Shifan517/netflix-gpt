    import React from 'react'
    import Header from './Header'
    import { netflixBG } from '../utils/constants'
    import { useState } from 'react'
    import { Validate } from '../utils/Validate'
    import { useRef } from 'react'
    import {  createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
   import { auth } from '../utils/fireBase'
   import { useEffect } from 'react'



    const Login = () => {
   const[isSignInForm,setIsSignInForm]=useState(true)
const[errorMessage,setErrorMessage]=useState(null)

   const email = useRef(null)
   const password = useRef(null)

   useEffect(() => {
  setErrorMessage(null); // Clear error when switching form
}, [isSignInForm])

  const handleClick =()=>{
    console.log(email.current.value)
    console.log(password.current.value)
    const message = Validate(email.current.value,password.current.value)
    console.log(message)
    setErrorMessage(message)
  
    if(message) return

    if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+ errorMessage )
  });
    }

    else{

      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     console.log(user)
  })
  .catch((error) => {
      console.log("SignUp Error", error); 
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+ errorMessage )
  });
    }
  
  }




  

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
                       <input className='w-full m-2 p-3  text-black' type='text' placeholder='Name'/> 
                      }
                    <input  ref={email} className='w-full m-2 p-3 text-black' type='text' placeholder='Email Address'  onChange={() => setErrorMessage(null)}/>
                    <input ref={password} className='w-full m-2  p-3  text-black' type="password" placeholder='Password'  onChange={() => setErrorMessage(null)}/>
                    <p className='m-2 text-red-600'>{errorMessage}</p>
                    <button onClick={handleClick} className='w-full m-2  p-3 bg-red-600 text-white'>{isSignInForm ? "Sign In": "Sign Up"}</button>
                    
                    
                    <p className='m-2 cursor-pointer' onClick={toggleSignInForm}>
                      {isSignInForm ? "  New to Netflix? Sign up Now." : "Already registered? Sign In Now"}

                    </p>
                  </form>
            </div>
          
        </div>
      )
    }
    
    export default Login