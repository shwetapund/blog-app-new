import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit =async ()=>{
    
  const response = await axios.post('/api/v1/signup', {
    username:username,
    email: email,
    password: password,

})
alert('signup successfully');
// if (response?.data?.success) {
//   window.location.href = '/signup'
// }
  }

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link
            to="/"
            className=" font-bold dark:text-white text-4xl"
          >
            <spam className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Shweta's
            </spam>
            Blog
          </Link>
          <p className="text-sm mt-5">
            5etdffff fffffff ffffff fffffffff ffffff ffffffff ffffff ffffffff fffffff ffffff fffff fffff ffffff ffffff
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" >
            <div className="">
               <Label value="your username" />
               <TextInput 
               type='text'
               placeholder='Username' id='username'
                // onChange={handleonChange}
                onChange={(e) => {
                  setUsername(e.target.value)
              }}
                />
            </div>
            <div className="">
               <Label value="your email" />
               <TextInput 
               type='email'
               placeholder='name@company.com' id='email' 
               onChange={(e) => {
                setEmail(e.target.value)
            }}
               />
            </div>
            <div className="">
               <Label value="your password" />
               <TextInput 
               type='password'
               placeholder='Password' id='password'
               onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' 
            onClick={handleSubmit}>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/signin' className="text-blue-500">
            Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
  }