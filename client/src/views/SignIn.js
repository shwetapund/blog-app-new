
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"; 

// export default function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       setErrorMessage(null);
//       if (!email || !password) {
//         console.log('Please fill out all fields.');
//       }

//       const response = await axios.post("/api/v1/signin", {
//         email: email,
//         password: password,
//       });
      
//       const data = response.data; // assuming the response is JSON
      
//       if (!data.success) {
//         console.log(data.message);
//       }

//       setLoading(false);
      
//       if (response.data.data) {
//         navigate('/'); // Navigate to home page
//       }
//     } catch (error) {
//       setErrorMessage(error.message);
//       setLoading(false);
//     }
//   };

 
  

//   return (
//     <div className="min-h-screen mt-20">
//       <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
//         {/* left */}
//         <div className="flex-1">
//           <Link to="/" className="font-bold dark:text-white text-4xl">
//             <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
//               Shweta's
//             </span>
//             Blog
//           </Link>
//           <p className="text-sm mt-5">
//           This is demo project. You can sign in with your email and password
//            or with Google.
//           </p>
//         </div>
//         {/* right */}
//         <div className="flex-1">
//           <form className="flex flex-col gap-4">
            
//             <div>
//               <Label value="Your email" />
//               <TextInput
//                 type="email"
//                 placeholder="name@company.com"
//                 id="email"
//                 onChange={(e) => setEmail(e.target.value.trim())}
//               />
//             </div>
//             <div>
//               <Label value="Your password" />
//               <TextInput
//                 type="password"
//                 placeholder="Password"
//                 id="password"
//                 onChange={(e) => setPassword(e.target.value.trim())}
//               />
//             </div>
//             <Button
//               gradientDuoTone="purpleToPink"
//               type="submit"
//               onClick={handleSubmit}
//               disabled={loading}
//             >
//              {
//               loading ? (
//                 <>
//                 <Spinner size='sm' />
//                 <span className="pl-3">Loading...</span>
//                 </>
//               ) : 'Sign In'
//              }
//             </Button>
//           </form>
//           <div className="flex gap-2 text-sm mt-5">
//             <span>Don't Have an account?</span>
//             <Link to="/signup" className="text-blue-500">
//               Sign Up
//             </Link>
//           </div>
//           {errorMessage && (
//             <Alert className="mt-5" color='failure'>
//               {errorMessage}
//             </Alert>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/v1/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Sahand's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign in with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
            {/* <OAuth /> */}
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/signup' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}