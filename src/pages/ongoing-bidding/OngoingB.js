import React from "react";
import ontusk from "../../assets/ontusk.png";
import onhorn from "../../assets/onhorn.png";
import onroar from "../../assets/onroar.png";
import Subfooter from "../../components/subfooter/index";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";








const OngoingB = () => {


    return (
        <main className="bg-[#1A1818] w-screen">
            <Navbar />
            <section class='mt-36 w-screen'>
                <div class='mt-16 mx-8 flex gap-8'>
                    <Link to='/market-place' style={{ textDecoration: 'none', color: 'white' }} ><button class="bg-[#DA8450] hover:bg-[#1A1818] text-white font-semibold py-2  border-white w-28 h-15 rounded-full">All NFTs</button></Link>
                    <Link to='/ongoing-bidding' style={{ textDecoration: 'none', color: 'white' }} ><button class="bg-[#DA8450] hover:bg-[#1A1818] text-white font-semibold py-2  border-white w-40 h-15 rounded-full">Ongoing Bidding</button></Link>
                    <Link to='/nft-available' style={{ textDecoration: 'none', color: 'white' }} ><button class="bg-[#DA8450] hover:bg-[#1A1818] text-white font-semibold py-2  border-white w-40 h-15 rounded-full">NFts available for sale</button></Link>
                    <Link to='/available-fractionalownership' style={{ textDecoration: 'none', color: 'white' }} ><button class="bg-[#DA8450] hover:bg-[#1A1818] text-white font-semibold py-2  border-white w-48 h-15 rounded-full">Available for Fractional ownership</button></Link>


                </div>
                <div className="grid-cols-4 gap-4 md:flex md:flex-row mt-20 mx-8">
                    <Link to='/horn-shield'><img src={onhorn} alt="onhorn" /></Link>
                    <img src={onroar} alt="onroar" />
                    <img src={ontusk} alt="ontusk" />
                </div>
            </section>

            <Subfooter />


        </main>







    )





}


export default OngoingB;