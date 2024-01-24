import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";





const Navbar = () => {

    return (
        <nav class="bg-[#1A1818]">
         <div className='fixed top-0 right-0 left-0 bg-gradient z-50 bg-[#1A1818]'>
         <div className='flex gap-4 justify-center items-center mx-4 pt-2'>
                <Link to="/"><img src={logo} alt="logo" class='w-40'  /></Link>
                    
                <ul className='flex m-auto gap-20'>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }} >Home</Link>
                     <Link to='/market-place' style={{ textDecoration: 'none', color: 'white' }}>Marketplace</Link>
                    <Link to='/horn-shield' style={{ textDecoration: 'none', color: 'white' }}>NFTs Projects</Link>
                    <Link to='/about-us' style={{ textDecoration: 'none', color: 'white' }}>About us </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }}>FAQs</Link>
                    </ul>
               <div class='mx-4 '> 
                  <button class="bg-[#DA8450] hover:bg-[#1A1818] text-white font-semibold py-2  border-white w-32 h-10 rounded-full">
              Connect Wallet
            </button>
            </div>
                <div class="p-16 space-y-2 rounded shadow">
                  <Link to='/sign-in'> <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span> </Link>
                     <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span> 
                   <Link to='/sign-up' style={{marginTop:'1rem'}}><span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span></Link> 
                </div>
                </div>
                </div>
        </nav>
    )



}

export default Navbar;