import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css'
const Home = () => {
    const [products, setProduct] = useState([])
    const Search = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        if (name) {
            fetch(`http://localhost:5000/products?name=${name}`)
                .then(res => res.json())
                .then(data => {
                    setProduct(data)
                    event.target.reset()
                })
        }
        
    }
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])
    return (
        <div>
            <div className='containers'>
                <Navbar></Navbar>
                <div className='text-center mt-10 py-20 md:py-0 '>
                    <h1 className='text-center text-4xl font-mono py-5 font-bold'>I GROW BY HELPING PEOPLE IN NEED</h1>
                    <form onSubmit={Search}>
                        <input className='md:w-80 py-2 px-2 border-2 rounded-tl-lg rounded-br-lg outline-none' name='name' type="text" placeholder='Search..' required />
                        <input type="submit" className={`px-5 py-2 bg-[#3F90FC]  text-white  rounded-md`} />
                    </form>
                </div>
            </div>
            <div className='px-5 lg:px-32 text-center mt-[-20px]  font-mono  text-white  text-xl'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        products?.map(product =>
                           
                            <div key={product._id} className='w-48 mx-auto relative '>
                                <img className='w-full' src={product.images} alt="" />
                                <p className={`absolute ${product?.name?.length % 2===0?'bg-[#fdc201]':product?.name?.length===5?'bg-[#3F90FC]':'bg-[#ff7316]'}  w-full  bottom-0 py-2 rounded-md`}>{product.name}</p>
                            </div>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Home;