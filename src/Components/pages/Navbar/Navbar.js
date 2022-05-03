import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [Menu, setMenu] = useState(false)
    const Menubar = () => {
        setMenu(!Menu)
    }
    return (
        <div className='px-5 lg:px-32 py-7 flex items-center  justify-between font-mono text-lg text-[#434141]'>
           <Link to='/'> <img className='w-40 z-30' src={require('../../logos/Group 1329.png')} alt="" /></Link>
            <nav className='hidden md:block'>
                <ul>
                    <Link className='px-4 hover:bg-zinc-300 py-1 rounded' to='/home'>Home</Link>
                    <Link className='px-4 hover:bg-zinc-300 py-1 rounded' to='/donation'>Donation</Link>
                    <Link className='px-4 hover:bg-zinc-300 py-1 rounded' to='/events'>Events</Link>
                    <Link className='px-4 hover:bg-zinc-300 py-1 rounded' to='/blog'>Blog</Link>
                    <Link className='px-5 bg-[#3F90FC] m-3 text-white py-2 rounded-md' to='/register'>
                        <button>Register</button>
                    </Link>
                    <Link className='px-5 bg-[#434141] text-white py-2 rounded-md' to='/admin'>
                        <button>Admin</button>
                    </Link>

                </ul>
            </nav>
            {
                Menu ? <nav>
                    <ul className='md:hidden absolute md:p-0 left-[-2px] top-0 py-20    text-center  bg-slate-400 md:w-0 w-full text-white h-[100vh] z-10'>
                        <div className='my-10'>
                            <Link className='hover:bg-zinc-300 py-1 rounded px-5'  to='/'>Home</Link>
                        </div>
                        <div className='my-10'>  
                            <Link className='hover:bg-zinc-300 py-1 rounded px-5' to='/'>Donation</Link>
                        </div>
                        <div className='my-10'> 
                            <Link className='hover:bg-zinc-300 py-1 rounded px-5' to='/'>Events</Link>
                        </div >
                        <div className='my-10'> 
                            <Link className='hover:bg-zinc-300 py-1 rounded px-5' to='/'>Blog</Link>
                        </div>
                        <div className='my-10'> 
                            <Link className='px-5 py-2 bg-[#3F90FC] m-3 text-white  rounded-md' to='/'>
                            <button>Register</button>
                            </Link>
                        </div>
                        <div className='my-10'>
                            <Link className='px-5 py-2 bg-[#434141] text-white  rounded-md' to='/'>
                                <button>Admin</button>
                            </Link>
                        </div>
                    </ul>
                </nav> :
                    ''
            }
            <div onClick={Menubar} className='md:hidden block text-3xl z-30'>
                {
                    Menu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />
                }

            </div>
        </div>
    );
};

export default Navbar;