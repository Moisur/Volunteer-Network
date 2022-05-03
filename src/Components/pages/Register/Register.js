import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { async } from '@firebase/util';
import { sendEmailVerification } from 'firebase/auth';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [color,setColor]=useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const Register =async (event)=>{
        event.preventDefault()
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const birthday = event.target.birthday.value;
        const photoURL = event.target.images.value;
        const password = event.target.password.value;
        if(displayName&&email&&birthday&&photoURL&&password){
           await createUserWithEmailAndPassword(email,password)
           await updateProfile({ displayName, photoURL })
        }
        else{
            console.log("Not Account")
        }

    }

    return (
        <div className={`w-full h-[100vh]  py-10 ${color?'bg-slate-400':'bg-slate-300'}`}>
            <Link to='/login' className='w-full py-1 px-3 ml-4 rounded-xl bg-[#3F90FC] font-mono font-bold text-white'>Login</Link>
            <div>
                <img className='w-36 mx-auto mb-10' src={require('../../logos/Group 1329.png')} alt="" />
                <form onSubmit={Register} className='w-[300px] md:w-[400px] mx-auto mt-28 p-5 bg-white rounded-xl'>
                    <h1 className='text-2xl font-mono font-bold py-4'>Register ae a Volunteer</h1>
                    <div>
                        <input className='w-full p-1 my-3 rounded-sm outline-none border-b-2' type="text" placeholder='Full Name' name='name' required />
                    </div>
                    <div>
                        <input className='w-full p-1 my-3 rounded-sm  outline-none border-b-2' type="email" placeholder='Username or Email' name='email' required />
                    </div>
                    <div>
                        <input className='w-full p-1 my-3 rounded-sm  outline-none border-b-2' type="date" name="birthday" required />
                    </div>
                    <div>
                        <input className='w-full p-1 my-3 rounded-sm  outline-none border-b-2' type="text" placeholder='you images' name='images' required />
                    </div>
                    <div>
                        <input className='w-full p-1 my-3 rounded-sm  outline-none border-b-2' type="password" placeholder='Enter Password ' name='password' required />
                    </div>
                    <input className='w-full p-1 my-3 rounded-sm bg-[#3F90FC] font-mono font-bold text-white' type="submit" value='Registration' />
                </form>
                <div onClick={()=>setColor(!color)}>
                    <p className='text-4xl w-10 mx-auto text-center  mt-5  rounded-full bg-red-700 text-white'>
                        <FontAwesomeIcon icon={faCaretLeft}></FontAwesomeIcon>
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Register;