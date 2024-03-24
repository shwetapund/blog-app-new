
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"; 

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage(null);
      if (!username || !email || !password) {
        throw new Error('Please fill out all fields.');
      }

      const response = await axios.post("/api/v1/signup", {
        username: username,
        email: email,
        password: password,
      });
      
      const data = response.data; // assuming the response is JSON
      
  

      if (!data.success) {
        throw new Error(data.message);
      }

      setLoading(false);
      
      if(response?.data.data){
        window.location.href = '/signin'
      }
    } catch (error) {
      setErrorMessage('enter a duplicate data');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Shweta's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
          This is demo project. You can sign up with your email and password
           or with Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={(e) => setUsername(e.target.value.trim())}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={(e) => setEmail(e.target.value.trim())}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setPassword(e.target.value.trim())}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
            >
             {
              loading ? (
                <>
                <Spinner size='sm' />
                <span className="pl-3">Loading...</span>
                </>
              ) : 'Sign Up'
             }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
