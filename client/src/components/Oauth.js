import React from 'react'
import { Button } from 'flowbite-react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import firebaseApp  from './../firebase.js';

function Oauth() {
    const auth = getAuth(firebaseApp)
    const handleGoogleClick = async()=>{
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })
        try{
            const resultFromGoogle = await signInWithPopup(auth ,provider)
            console.log(resultFromGoogle)
        } catch (error){
            console.log(error);
        }
    }
  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Continue with Google</Button>
  )
}

export default Oauth