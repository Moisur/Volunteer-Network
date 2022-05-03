import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {
    const Navigate=useNavigate()
    const [color, setColor] = useState(false)
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth,{sendEmailVerification:true});
    if(user){
        Navigate('/')
        console.log(user)
    }
    return (
        <div className={`w-full h-[100vh]  py-10 ${color ? 'bg-slate-400' : 'bg-slate-300'}`}>
            <div>
                <img className='w-36 mx-auto mb-10' src={require('../../logos/Group 1329.png')} alt="" />
                <div className='w-[300px] md:w-[400px] mx-auto mt-28 p-5 bg-white rounded-xl'>
                    <h1 className='text-2xl text-center font-mono font-bold py-4'>Login With</h1>
                    <div onClick={()=>signInWithGoogle()} className='flex items-center justify-evenly border-2 rounded-2xl  my-16  p-1'>
                        <img className='w-10' src={require('../../logos/google-logo-9808.png')} alt='' />
                        <p>Continue With Google</p>
                    </div>
                    <h1 className='text-center font-mono '>Don't have an account? <Link to='/register' className='text-green-600'>Create an account </Link></h1>
                </div>
                <div onClick={() => setColor(!color)}>
                    <p className='text-4xl w-10 mx-auto text-center  mt-5  rounded-full bg-red-700 text-white'>
                        <FontAwesomeIcon icon={faCaretLeft}></FontAwesomeIcon>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;